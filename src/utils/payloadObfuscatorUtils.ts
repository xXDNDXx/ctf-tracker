/**
 * payloadObfuscatorUtils.ts
 * Real-time client-side tactical encoding and obfuscation engine for offensive security operations.
 * Zero external npm dependencies (pure browser/JS native).
 */

export interface ObfuscatedItem {
  id: string;
  name: string;
  category: 'powershell' | 'url' | 'linux' | 'web' | 'ip' | 'encoding';
  description: string;
  output: string;
  commandSnippet?: string;
}

/**
 * Base64 encoding with UTF-8 support
 */
export function toBase64(input: string): string {
  try {
    const bytes = new TextEncoder().encode(input);
    const binString = Array.from(bytes, (byte) => String.fromCharCode(byte)).join('');
    return btoa(binString);
  } catch {
    return '';
  }
}

/**
 * Base64 decoding with UTF-8 support
 */
export function fromBase64(input: string): string {
  try {
    const binString = atob(input.trim());
    const bytes = Uint8Array.from(binString, (m) => m.charCodeAt(0));
    return new TextDecoder().decode(bytes);
  } catch {
    return 'Invalid Base64 string';
  }
}

/**
 * Convert string to PowerShell UTF-16LE Base64 encoding
 */
export function toPowerShellUtf16LeBase64(input: string): string {
  try {
    const codeUnits = new Uint16Array(input.length);
    for (let i = 0; i < input.length; i++) {
      codeUnits[i] = input.charCodeAt(i);
    }
    const bytes = new Uint8Array(codeUnits.buffer);
    let binary = '';
    for (let i = 0; i < bytes.byteLength; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  } catch {
    return '';
  }
}

/**
 * Full URL encode: every single byte converted to %XX
 */
export function toFullUrlEncode(input: string): string {
  const bytes = new TextEncoder().encode(input);
  return Array.from(bytes)
    .map((b) => '%' + b.toString(16).padStart(2, '0').toUpperCase())
    .join('');
}

/**
 * Double URL encode: standard encode then encode the % signs
 */
export function toDoubleUrlEncode(input: string): string {
  const firstPass = encodeURIComponent(input);
  return firstPass.replace(/%/g, '%25');
}

/**
 * Unicode URL hex representation (%u00XX)
 */
export function toUnicodeUrlEncode(input: string): string {
  return Array.from(input)
    .map((ch) => {
      const hex = ch.charCodeAt(0).toString(16).padStart(4, '0').toUpperCase();
      return `%u${hex}`;
    })
    .join('');
}

/**
 * Linux $IFS space substitution
 */
export function toIfsSpaceBypass(input: string, useBraces: boolean = false): string {
  const token = useBraces ? '${IFS}' : '$IFS';
  return input.replace(/ +/g, token);
}

/**
 * Linux brace expansion: command arg1 arg2 -> {command,arg1,arg2}
 */
export function toBraceExpansion(input: string): string {
  const parts = input.trim().split(/\s+/);
  if (parts.length <= 1) return input;
  return `{${parts.join(',')}}`;
}

/**
 * Linux bash hex execution: $'\\x63\\x61\\x74'
 */
export function toBashHexExecution(input: string): string {
  const parts = input.split(/(\s+)/);
  return parts
    .map((p) => {
      if (/^\s+$/.test(p)) return p;
      const bytes = new TextEncoder().encode(p);
      const hexBytes = Array.from(bytes)
        .map((b) => '\\x' + b.toString(16).padStart(2, '0'))
        .join('');
      return `$'${hexBytes}'`;
    })
    .join('');
}

/**
 * HTML Entity encodings
 */
export function toHtmlDecimalEntities(input: string): string {
  return Array.from(input)
    .map((ch) => `&#${ch.charCodeAt(0)};`)
    .join('');
}

export function toHtmlHexEntities(input: string): string {
  return Array.from(input)
    .map((ch) => `&#x${ch.charCodeAt(0).toString(16).toUpperCase()};`)
    .join('');
}

/**
 * SQL Injection comment space bypass
 */
export function toSqlCommentBypass(input: string): string {
  return input.replace(/ +/g, '/**/');
}

/**
 * SQL Char concatenation for strings (MySQL & MSSQL: CHAR(), PostgreSQL/Oracle: CHR() || CHR())
 */
export function toSqlCharConcat(input: string): { mysql: string; oracle: string } {
  const codes = Array.from(input).map((c) => c.charCodeAt(0));
  const mysql = `CHAR(${codes.join(',')})`;
  const oracle = codes.map((c) => `CHR(${c})`).join('||');
  return { mysql, oracle };
}

/**
 * IPv4 Address Obfuscations (SSRF / Ping / WAF bypasses)
 */
export interface IpObfuscations {
  dottedDecimal: string;
  decimalInteger: string;
  hexadecimal: string;
  octal: string;
  mixedHex: string;
}

export function obfuscateIp(ipStr: string): IpObfuscations | null {
  const trimmed = ipStr.trim();
  const match = trimmed.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/);
  if (!match) return null;

  const octets = [
    parseInt(match[1], 10),
    parseInt(match[2], 10),
    parseInt(match[3], 10),
    parseInt(match[4], 10),
  ];

  if (octets.some((o) => o > 255)) return null;

  // 32-bit unsigned decimal integer
  const decimalInteger = (
    (octets[0] << 24) >>> 0 |
    (octets[1] << 16) |
    (octets[2] << 8) |
    octets[3]
  ) >>> 0;

  // Hexadecimal
  const hexadecimal = '0x' + octets.map((o) => o.toString(16).padStart(2, '0')).join('');

  // Octal (each octet prefixed with 0)
  const octal = octets.map((o) => '0' + o.toString(8).padStart(3, '0')).join('.');

  // Mixed hex
  const mixedHex = `0x${octets[0].toString(16)}.${octets[1]}.${octets[2]}.${octets[3]}`;

  return {
    dottedDecimal: trimmed,
    decimalInteger: decimalInteger.toString(),
    hexadecimal,
    octal,
    mixedHex,
  };
}

/**
 * Generate complete suite of obfuscations for a given raw payload string
 */
export function generateAllObfuscations(input: string): ObfuscatedItem[] {
  if (!input) return [];

  const b64 = toBase64(input);
  const psUtf16 = toPowerShellUtf16LeBase64(input);
  const urlStd = encodeURIComponent(input);
  const urlFull = toFullUrlEncode(input);
  const urlDouble = toDoubleUrlEncode(input);
  const urlUnicode = toUnicodeUrlEncode(input);
  const ifsSimple = toIfsSpaceBypass(input, false);
  const ifsBraces = toIfsSpaceBypass(input, true);
  const braceExp = toBraceExpansion(input);
  const bashHex = toBashHexExecution(input);
  const htmlDec = toHtmlDecimalEntities(input);
  const htmlHex = toHtmlHexEntities(input);
  const sqlBypass = toSqlCommentBypass(input);
  const { mysql: sqlMysql, oracle: sqlOracle } = toSqlCharConcat(input);

  const results: ObfuscatedItem[] = [
    // PowerShell & Windows
    {
      id: 'ps-encoded-cmd',
      name: 'PowerShell -EncodedCommand (UTF-16LE)',
      category: 'powershell',
      description: 'Standard Windows PowerShell base64 encoded command string',
      output: `powershell.exe -EncodedCommand ${psUtf16}`,
      commandSnippet: `powershell.exe -EncodedCommand ${psUtf16}`,
    },
    {
      id: 'ps-short-e',
      name: 'PowerShell Shortened (-e)',
      category: 'powershell',
      description: 'Compact invocation bypassing simple argument inspection',
      output: `powershell -e ${psUtf16}`,
      commandSnippet: `powershell -e ${psUtf16}`,
    },
    {
      id: 'ps-stealth',
      name: 'PowerShell Stealth Wrapper',
      category: 'powershell',
      description: 'Hidden window, non-interactive, no profile, bypass execution',
      output: `powershell -w hidden -noni -nop -e ${psUtf16}`,
      commandSnippet: `powershell -w hidden -noni -nop -e ${psUtf16}`,
    },
    {
      id: 'ps-raw-b64',
      name: 'PowerShell UTF-16LE Raw Base64',
      category: 'powershell',
      description: 'Raw UTF-16LE Base64 string for custom loaders or stagers',
      output: psUtf16,
    },

    // Linux & Bash Command Line
    {
      id: 'linux-ifs',
      name: 'Linux $IFS Space Substitution',
      category: 'linux',
      description: 'Bypasses space character filters in command injection vulnerabilities',
      output: ifsSimple,
    },
    {
      id: 'linux-ifs-braces',
      name: 'Linux ${IFS} Space Substitution',
      category: 'linux',
      description: 'Explicit bracketed IFS parameter expansion',
      output: ifsBraces,
    },
    {
      id: 'linux-brace-expansion',
      name: 'Linux Shell Brace Expansion',
      category: 'linux',
      description: 'Replaces whitespace separation with shell comma-expansion {cmd,arg}',
      output: braceExp,
    },
    {
      id: 'linux-b64-pipe',
      name: 'Linux Base64 Pipe Execution',
      category: 'linux',
      description: 'Executes decoded payload directly through sh / bash',
      output: `echo -n '${b64}' | base64 -d | sh`,
      commandSnippet: `echo -n '${b64}' | base64 -d | sh`,
    },
    {
      id: 'linux-bash-hex',
      name: 'Bash ANSI-C Quoted Hex Strings',
      category: 'linux',
      description: "Uses $'\\x..' byte escaping to evade character blacklists",
      output: bashHex,
    },
    {
      id: 'linux-rev-pipe',
      name: 'Linux Reversed String Pipe',
      category: 'linux',
      description: 'Pipes reversed payload through rev and sh',
      output: `echo '${Array.from(input).reverse().join('').replace(/'/g, "'\\''")}' | rev | sh`,
    },

    // Web & URL Encodings
    {
      id: 'url-standard',
      name: 'Standard URL-Encoding',
      category: 'url',
      description: 'Standard percent-encoding for URI query parameters',
      output: urlStd,
    },
    {
      id: 'url-full',
      name: 'Full Character URL-Encoding',
      category: 'url',
      description: 'Converts 100% of characters to %XX hex bytes to bypass keyword WAFs',
      output: urlFull,
    },
    {
      id: 'url-double',
      name: 'Double URL-Encoding (%25XX)',
      category: 'url',
      description: 'Evades reverse proxies, WAFs, and multi-tier decoder architectures',
      output: urlDouble,
    },
    {
      id: 'url-unicode',
      name: 'Unicode URL Encoding (%u00XX)',
      category: 'url',
      description: 'IIS and older web application firewall bypass encoding',
      output: urlUnicode,
    },

    // Web & SQL Bypasses
    {
      id: 'html-dec',
      name: 'HTML Entity (Decimal)',
      category: 'web',
      description: 'Decimal numerical entity references (&#XX;) for XSS vectors',
      output: htmlDec,
    },
    {
      id: 'html-hex',
      name: 'HTML Entity (Hexadecimal)',
      category: 'web',
      description: 'Hexadecimal numerical entity references (&#xXX;) for XSS vectors',
      output: htmlHex,
    },
    {
      id: 'sql-comment',
      name: 'SQL Injection Space Bypass (/**/)',
      category: 'web',
      description: 'Substitutes whitespace with inline C-style comment blocks',
      output: sqlBypass,
    },
    {
      id: 'sql-char-mysql',
      name: 'SQL CHAR() Concatenation (MySQL/MSSQL)',
      category: 'web',
      description: 'Constructs strings without quotes using CHAR() byte codes',
      output: sqlMysql,
    },
    {
      id: 'sql-char-oracle',
      name: 'SQL CHR() Pipe Concatenation (Postgres/Oracle)',
      category: 'web',
      description: 'Constructs strings using CHR() concatenated with ||',
      output: sqlOracle,
    },

    // Generic Encodings
    {
      id: 'raw-base64',
      name: 'Standard UTF-8 Base64',
      category: 'encoding',
      description: 'Standard base64 encoded string',
      output: b64,
    },
    {
      id: 'raw-hex',
      name: 'Hexadecimal Stream (\\xXX)',
      category: 'encoding',
      description: 'Consecutive escaped hex byte string',
      output: Array.from(new TextEncoder().encode(input)).map((b) => '\\x' + b.toString(16).padStart(2, '0')).join(''),
    },
    {
      id: 'raw-octal',
      name: 'Octal Stream (\\OOO)',
      category: 'encoding',
      description: 'Consecutive escaped octal byte string',
      output: Array.from(new TextEncoder().encode(input)).map((b) => '\\' + b.toString(8).padStart(3, '0')).join(''),
    },
  ];

  // If input looks like an IPv4 address, append IP obfuscation items
  const ipVariants = obfuscateIp(input);
  if (ipVariants) {
    results.unshift(
      {
        id: 'ip-decimal',
        name: 'IP Address as 32-bit Integer',
        category: 'ip',
        description: 'Bypasses dotted IPv4 filters in SSRF, LFI, and curl/wget commands',
        output: ipVariants.decimalInteger,
        commandSnippet: `curl http://${ipVariants.decimalInteger}/`,
      },
      {
        id: 'ip-hex',
        name: 'IP Address as Hexadecimal',
        category: 'ip',
        description: 'Single continuous 32-bit hex number',
        output: ipVariants.hexadecimal,
        commandSnippet: `curl http://${ipVariants.hexadecimal}/`,
      },
      {
        id: 'ip-octal',
        name: 'IP Address as Octal',
        category: 'ip',
        description: 'Octal format with leading zeros',
        output: ipVariants.octal,
        commandSnippet: `curl http://${ipVariants.octal}/`,
      },
      {
        id: 'ip-mixed-hex',
        name: 'IP Address Mixed Hex',
        category: 'ip',
        description: 'First octet in hex, remainder in decimal',
        output: ipVariants.mixedHex,
        commandSnippet: `curl http://${ipVariants.mixedHex}/`,
      }
    );
  }

  return results;
}
