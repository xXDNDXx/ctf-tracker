/**
 * trafficTracker.ts
 * Privacy-first visitor and platform referral tracking utility.
 * Classifies visitor traffic across platforms (LinkedIn, GitHub, Twitter/X, Discord, Reddit, etc.)
 * and generates clean campaign tracking links.
 */

export type TrafficPlatform =
  | 'linkedin'
  | 'github'
  | 'twitter'
  | 'discord'
  | 'reddit'
  | 'youtube'
  | 'google'
  | 'direct'
  | 'other';

export interface PlatformTrafficInfo {
  id: TrafficPlatform;
  label: string;
  iconName: string;
  color: string;
  badgeBg: string;
}

export const SUPPORTED_PLATFORMS: Record<TrafficPlatform, PlatformTrafficInfo> = {
  linkedin: {
    id: 'linkedin',
    label: 'LinkedIn',
    iconName: 'Linkedin',
    color: '#0A66C2',
    badgeBg: 'bg-blue-900/40 text-blue-300 border-blue-500/40',
  },
  github: {
    id: 'github',
    label: 'GitHub',
    iconName: 'Github',
    color: '#2EA44F',
    badgeBg: 'bg-emerald-900/40 text-emerald-300 border-emerald-500/40',
  },
  twitter: {
    id: 'twitter',
    label: 'Twitter / X',
    iconName: 'Twitter',
    color: '#1DA1F2',
    badgeBg: 'bg-sky-900/40 text-sky-300 border-sky-500/40',
  },
  discord: {
    id: 'discord',
    label: 'Discord',
    iconName: 'MessageSquare',
    color: '#5865F2',
    badgeBg: 'bg-indigo-900/40 text-indigo-300 border-indigo-500/40',
  },
  reddit: {
    id: 'reddit',
    label: 'Reddit',
    iconName: 'Share2',
    color: '#FF4500',
    badgeBg: 'bg-orange-900/40 text-orange-300 border-orange-500/40',
  },
  youtube: {
    id: 'youtube',
    label: 'YouTube',
    iconName: 'PlaySquare',
    color: '#FF0000',
    badgeBg: 'bg-red-900/40 text-red-300 border-red-500/40',
  },
  google: {
    id: 'google',
    label: 'Google / Search',
    iconName: 'Search',
    color: '#4285F4',
    badgeBg: 'bg-cyan-900/40 text-cyan-300 border-cyan-500/40',
  },
  direct: {
    id: 'direct',
    label: 'Direct / Bookmarks',
    iconName: 'Globe',
    color: '#10B981',
    badgeBg: 'bg-slate-800/60 text-slate-300 border-slate-700',
  },
  other: {
    id: 'other',
    label: 'Other Referrals',
    iconName: 'ExternalLink',
    color: '#8B5CF6',
    badgeBg: 'bg-purple-900/40 text-purple-300 border-purple-500/40',
  },
};

const TRAFFIC_STORAGE_KEY = 'zerobox_platform_traffic_v1';
const SESSION_FLAG_KEY = 'zerobox_traffic_session_logged';

export interface TrafficStats {
  totalVisits: number;
  platforms: Record<TrafficPlatform, number>;
  lastRecordedAt?: string;
  detectedThisSession?: TrafficPlatform;
}

/**
 * Detects the referring platform from URL parameters or document.referrer
 */
export function detectReferralPlatform(): TrafficPlatform {
  if (typeof window === 'undefined') return 'direct';

  try {
    const urlParams = new URLSearchParams(window.location.search);
    let refParam = (urlParams.get('ref') || urlParams.get('utm_source') || urlParams.get('source') || '').toLowerCase().trim();

    // In HashRouter, check if parameters were appended to the hash route (e.g. #/tracker?ref=linkedin)
    if (!refParam && window.location.hash && window.location.hash.includes('?')) {
      const hashQuery = window.location.hash.substring(window.location.hash.indexOf('?'));
      const hashParams = new URLSearchParams(hashQuery);
      refParam = (hashParams.get('ref') || hashParams.get('utm_source') || hashParams.get('source') || '').toLowerCase().trim();
    }

    if (refParam.includes('linkedin') || refParam === 'li') return 'linkedin';
    if (refParam.includes('github') || refParam === 'gh') return 'github';
    if (refParam.includes('twitter') || refParam === 'x' || refParam.includes('t.co')) return 'twitter';
    if (refParam.includes('discord')) return 'discord';
    if (refParam.includes('reddit')) return 'reddit';
    if (refParam.includes('youtube') || refParam === 'yt') return 'youtube';
    if (refParam.includes('google')) return 'google';

    const referrer = (document.referrer || '').toLowerCase();
    if (!referrer) return 'direct';

    // Parse referrer host
    const refHost = new URL(referrer).hostname;

    if (refHost.includes('linkedin.com') || refHost.includes('lnkd.in')) return 'linkedin';
    if (refHost.includes('github.com') || refHost.includes('github.io')) return 'github';
    if (refHost.includes('t.co') || refHost.includes('twitter.com') || refHost.includes('x.com')) return 'twitter';
    if (refHost.includes('discord.com') || refHost.includes('discord.gg') || refHost.includes('discordapp.com')) return 'discord';
    if (refHost.includes('reddit.com')) return 'reddit';
    if (refHost.includes('youtube.com') || refHost.includes('youtu.be')) return 'youtube';
    if (refHost.includes('google.') || refHost.includes('bing.') || refHost.includes('duckduckgo.')) return 'google';

    if (refHost === window.location.hostname) return 'direct';

    return 'other';
  } catch {
    return 'direct';
  }
}

/**
 * Retrieves stored traffic stats from localStorage
 */
export function getTrafficStats(): TrafficStats {
  const initialPlatforms: Record<TrafficPlatform, number> = {
    linkedin: 0,
    github: 0,
    twitter: 0,
    discord: 0,
    reddit: 0,
    youtube: 0,
    google: 0,
    direct: 0,
    other: 0,
  };

  if (typeof window === 'undefined') {
    return { totalVisits: 0, platforms: initialPlatforms };
  }

  try {
    const raw = localStorage.getItem(TRAFFIC_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      return {
        totalVisits: Number(parsed.totalVisits) || 0,
        platforms: { ...initialPlatforms, ...(parsed.platforms || {}) },
        lastRecordedAt: parsed.lastRecordedAt,
      };
    }
  } catch {}

  return { totalVisits: 0, platforms: initialPlatforms };
}

/**
 * Tracks and logs the current visit once per browser session.
 */
export function recordCurrentVisit(): { platform: TrafficPlatform; stats: TrafficStats; isNewSession: boolean } {
  const stats = getTrafficStats();
  const platform = detectReferralPlatform();

  if (typeof window === 'undefined') {
    return { platform, stats, isNewSession: false };
  }

  // Deduplicate within the same browser session
  const alreadyLogged = sessionStorage.getItem(SESSION_FLAG_KEY);
  if (alreadyLogged) {
    return {
      platform: (alreadyLogged as TrafficPlatform) || platform,
      stats: { ...stats, detectedThisSession: (alreadyLogged as TrafficPlatform) },
      isNewSession: false,
    };
  }

  // Record visit
  stats.totalVisits += 1;
  stats.platforms[platform] = (stats.platforms[platform] || 0) + 1;
  stats.lastRecordedAt = new Date().toISOString();
  stats.detectedThisSession = platform;

  try {
    localStorage.setItem(TRAFFIC_STORAGE_KEY, JSON.stringify(stats));
    sessionStorage.setItem(SESSION_FLAG_KEY, platform);
  } catch {}

  return { platform, stats, isNewSession: true };
}

/**
 * Generates a clean campaign link for sharing on a specific platform
 */
export function generateCampaignLink(platform: TrafficPlatform): string {
  if (typeof window === 'undefined') return `https://xxdndxx.github.io/ctf-tracker/?ref=${platform}`;

  const baseOrigin = window.location.origin;
  const basePath = window.location.pathname.replace(/\/+$/, '');
  return `${baseOrigin}${basePath}/?ref=${platform}`;
}

/**
 * Official GoatCounter dashboard URL
 */
export const GOATCOUNTER_SITE_CODE = 'xxdndxx';
export const GOATCOUNTER_DASHBOARD_URL = `https://${GOATCOUNTER_SITE_CODE}.goatcounter.com`;
