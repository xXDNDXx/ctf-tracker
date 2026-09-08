/**
 * ZeroBox Security Utilities
 * Zero-dependency client-side defense against DOM XSS, SVG injection, and path traversal.
 */

/**
 * Escapes HTML characters to prevent XSS during dynamic string interpolation.
 */
export function escapeHtml(str: string): string {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Sanitizes an SVG string to prevent Cross-Site Scripting (XSS).
 * Strips <script>, <foreignObject>, inline on* event handlers, and javascript: URIs.
 */
export function sanitizeSvg(rawSvg: string): string {
  if (!rawSvg || typeof rawSvg !== 'string') return '';
  if (typeof window === 'undefined' || typeof DOMParser === 'undefined') return rawSvg;

  try {
    const parser = new DOMParser();
    const doc = parser.parseFromString(rawSvg, 'image/svg+xml');

    // If XML parsing failed, return empty or safe fallback
    const parserError = doc.querySelector('parsererror');
    if (parserError) {
      console.warn('[Security] Malformed SVG rejected by sanitizer');
      return '';
    }

    // 1. Remove dangerous executable, embedding, and SMIL script-capable tags
    const dangerousTags = [
      'script',
      'foreignObject',
      'iframe',
      'object',
      'embed',
      'applet',
      'meta',
      'link',
      'base',
      'handler',
      'listener',
      'discard',
      'set',
      'animate',
      'animatetransform',
      'animatemotion'
    ];
    dangerousTags.forEach((tagName) => {
      const elements = Array.from(doc.querySelectorAll(tagName));
      elements.forEach((el) => el.remove());
    });

    // Remove <use> elements pointing to external resources or non-fragment URLs
    const useElements = Array.from(doc.querySelectorAll('use'));
    useElements.forEach((useEl) => {
      const href = useEl.getAttribute('href') || useEl.getAttribute('xlink:href') || '';
      const trimmed = href.trim();
      // Only permit safe local SVG fragments like #icon-id
      if (!trimmed || !trimmed.startsWith('#') || trimmed.includes(':') || trimmed.includes('/')) {
        useEl.remove();
      }
    });

    // Remove style elements containing @import, expressions, bindings, or script/data URIs
    // Also decode CSS hex escapes (e.g. \6a\61vascript) to defeat obfuscation
    const styleElements = Array.from(doc.querySelectorAll('style'));
    styleElements.forEach((styleEl) => {
      const content = styleEl.textContent || '';
      const unescapedContent = content.replace(/\\([0-9a-fA-F]{1,6})\s?/g, (_, hex) => {
        try {
          return String.fromCharCode(parseInt(hex, 16));
        } catch {
          return '';
        }
      });
      if (
        /@import/i.test(unescapedContent) ||
        /expression\s*\(/i.test(unescapedContent) ||
        /binding\s*:/i.test(unescapedContent) ||
        /behavior\s*:/i.test(unescapedContent) ||
        /url\s*\(\s*['"]?\s*(?:javascript:|vbscript:|data:)/i.test(unescapedContent)
      ) {
        styleEl.remove();
      }
    });

    // 2. Walk all elements and strip inline event handlers and malicious URI schemes
    const allElements = Array.from(doc.querySelectorAll('*'));
    allElements.forEach((el) => {
      const attrsToRemove: string[] = [];
      for (let i = 0; i < el.attributes.length; i++) {
        const attr = el.attributes[i];
        const name = attr.name.toLowerCase();
        // Remove spaces, control characters, and null bytes to defeat evasion
        const cleanValue = attr.value.replace(/[\x00-\x20\s]+/g, '').toLowerCase();

        // Strip any attribute starting with 'on' (onclick, onload, onerror, onmouseover, etc.)
        if (name.startsWith('on')) {
          attrsToRemove.push(attr.name);
          continue;
        }

        // Strip dangerous URI schemes in link, source, or styling attributes
        if (
          name === 'href' || 
          name === 'xlink:href' || 
          name === 'src' || 
          name === 'action' ||
          name === 'formaction' ||
          name.includes('href')
        ) {
          const isSafeRasterImage =
            cleanValue.startsWith('data:image/png') ||
            cleanValue.startsWith('data:image/jpeg') ||
            cleanValue.startsWith('data:image/jpg') ||
            cleanValue.startsWith('data:image/gif') ||
            cleanValue.startsWith('data:image/webp');

          if (
            cleanValue.startsWith('javascript:') || 
            cleanValue.startsWith('vbscript:') || 
            cleanValue.startsWith('file:') ||
            (cleanValue.startsWith('data:') && !isSafeRasterImage)
          ) {
            attrsToRemove.push(attr.name);
          }
        }
      }

      attrsToRemove.forEach((name) => el.removeAttribute(name));
    });

    const serializer = new XMLSerializer();
    return serializer.serializeToString(doc);
  } catch (err) {
    console.error('[Security] Error during SVG sanitization:', err);
    return '';
  }
}

/**
 * Validates that an archive path does not perform directory traversal (e.g. ../ or absolute path).
 * Robustly detects multi-layer URL encoding (%252e%252e), UNC shares, drive letters, and null bytes.
 */
export function isSafeRelativePath(path: string): boolean {
  if (!path || typeof path !== 'string') return false;
  if (path.includes('\0')) return false;

  let normalized = path.replace(/\\/g, '/');

  // Iteratively decode up to 3 layers of URL encoding to catch %252e%252e
  for (let i = 0; i < 3; i++) {
    try {
      const decoded = decodeURIComponent(normalized).replace(/\\/g, '/');
      if (decoded === normalized) break;
      normalized = decoded;
    } catch {
      break;
    }
  }

  // Reject null bytes, drive letters (C:), UNC network roots (//), or absolute paths (/)
  if (
    normalized.includes('\0') ||
    normalized.startsWith('/') ||
    /^\/\//.test(normalized) ||
    /^[a-zA-Z]:/.test(normalized)
  ) {
    return false;
  }

  // Segment-based traversal inspection
  const segments = normalized.split('/');
  for (const seg of segments) {
    const trimmed = seg.trim().toLowerCase();
    if (trimmed === '..' || trimmed === '%2e%2e' || trimmed === '.') {
      if (trimmed === '..' || trimmed === '%2e%2e') {
        return false;
      }
    }
  }

  if (
    normalized.includes('../') ||
    normalized.includes('/..') ||
    normalized === '..' ||
    normalized.includes('..\\')
  ) {
    return false;
  }

  return true;
}

/**
 * Regex permitting standard IPv4, IPv6, FQDNs, or lab wildcard ranges (10.10.x.x)
 */
export const IP_OR_HOSTNAME_REGEX = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$|^[a-fA-F0-9:]+$|^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$|^[0-9]{1,3}\.[0-9]{1,3}\.[0-9xX.-]+$/;

/**
 * Sanitizes an IP or hostname string, stripping protocols, paths, and shell metacharacters.
 */
export function sanitizeIpOrHostname(raw?: string): string {
  if (!raw || typeof raw !== 'string') return '';
  return raw
    .trim()
    .replace(/^https?:\/\//i, '')
    .replace(/\/.*$/, '')
    .replace(/[^a-zA-Z0-9.:_xX-]/g, '')
    .trim();
}

/**
 * Verifies if an IP or target hostname string conforms to safe network identity conventions.
 */
export function isValidIpOrHostname(raw?: string): boolean {
  const clean = sanitizeIpOrHostname(raw);
  return clean.length > 0 && IP_OR_HOSTNAME_REGEX.test(clean);
}

