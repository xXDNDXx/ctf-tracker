import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  Flame, 
  Award, 
  Clock, 
  Target, 
  ShieldCheck, 
  Radar, 
  Zap,
  Calendar
} from 'lucide-react';
import { useCtfStore } from '../../store/useCtfStore';
import { formatSeconds, formatDurationHuman } from '../../utils/helpers';
import { Difficulty, Platform, Machine } from '../../types';
import { classifyMachine } from '../../utils/categoryUtils';

export const AnalyticsView: React.FC = () => {
  const { machines, activitySessions } = useCtfStore();

  // Single-pass catalog analytics aggregator (eliminates 20+ redundant array loops)
  const {
    rootedMachines,
    footholdsCount,
    totalSecondsTracked,
    totalRooted,
    totalMachines,
    overallPercentage,
    avgTimeToUser,
    avgTimeToRoot,
    difficultyMatrix,
    platformStats,
  } = useMemo(() => {
    const rooted: Machine[] = [];
    let footholds = 0;
    let totalSeconds = 0;
    let timeToUserSum = 0;
    let timeToUserCount = 0;
    let timeToRootSum = 0;
    let timeToRootCount = 0;

    const diffCounts: Record<Difficulty, { total: number; rooted: number }> = {
      'Very Easy': { total: 0, rooted: 0 },
      'Easy': { total: 0, rooted: 0 },
      'Medium': { total: 0, rooted: 0 },
      'Hard': { total: 0, rooted: 0 },
      'Insane': { total: 0, rooted: 0 },
    };

    const platCounts: Record<Platform, { total: number; rooted: number }> = {
      HTB: { total: 0, rooted: 0 },
      THM: { total: 0, rooted: 0 },
      Custom: { total: 0, rooted: 0 },
    };

    for (let i = 0; i < machines.length; i++) {
      const m = machines[i];
      const isRooted = m.status === 'root' || m.status === 'completed';
      if (isRooted) {
        rooted.push(m);
        if (m.timeToRootSeconds && m.timeToRootSeconds > 0) {
          timeToRootSum += m.timeToRootSeconds;
          timeToRootCount++;
        }
      } else if (m.status === 'foothold') {
        footholds++;
      }

      if (m.timeSpentSeconds) {
        totalSeconds += m.timeSpentSeconds;
      }

      if (m.timeToUserSeconds && m.timeToUserSeconds > 0) {
        timeToUserSum += m.timeToUserSeconds;
        timeToUserCount++;
      }

      if (m.difficulty && diffCounts[m.difficulty]) {
        diffCounts[m.difficulty].total++;
        if (isRooted) {
          diffCounts[m.difficulty].rooted++;
        }
      }

      if (m.platform && platCounts[m.platform]) {
        platCounts[m.platform].total++;
        if (isRooted) {
          platCounts[m.platform].rooted++;
        }
      }
    }

    const tiers: Difficulty[] = ['Very Easy', 'Easy', 'Medium', 'Hard', 'Insane'];
    const diffMatrix = tiers.map((tier) => {
      const c = diffCounts[tier];
      return {
        tier,
        total: c.total,
        rooted: c.rooted,
        percentage: c.total > 0 ? Math.round((c.rooted / c.total) * 100) : 0,
      };
    });

    const platforms: Platform[] = ['HTB', 'THM', 'Custom'];
    const platStats = platforms.map((platform) => {
      const c = platCounts[platform];
      return {
        platform,
        total: c.total,
        rooted: c.rooted,
      };
    });

    const totMachines = machines.length;
    const totRooted = rooted.length;

    return {
      rootedMachines: rooted,
      footholdsCount: footholds,
      totalSecondsTracked: totalSeconds,
      totalRooted: totRooted,
      totalMachines: totMachines,
      overallPercentage: totMachines > 0 ? Math.round((totRooted / totMachines) * 100) : 0,
      avgTimeToUser: timeToUserCount > 0 ? Math.round(timeToUserSum / timeToUserCount) : 0,
      avgTimeToRoot: timeToRootCount > 0 ? Math.round(timeToRootSum / timeToRootCount) : 0,
      difficultyMatrix: diffMatrix,
      platformStats: platStats,
    };
  }, [machines]);

  // Skill Radar Dimensions Calculation based on tags, skillsLearned, and machine classification
  const skillDimensions = useMemo(() => {
    const categories = [
      { 
        key: 'Web Security', 
        primaryCategory: 'Web',
        keywords: ['web', 'sqli', 'ssrf', 'lfi', 'ssti', 'xss', 'rce', 'upload', 'joomla', 'wordpress', 'php', 'api', 'jwt', 'graphql', 'deserialization', 'nosql', 'cors', 'csrf', 'idor'] 
      },
      { 
        key: 'Active Directory', 
        primaryCategory: 'Active Directory',
        keywords: ['active directory', 'ad', 'kerberoast', 'as-rep', 'dcsync', 'bloodhound', 'sharphound', 'ldap', 'smb', 'domain controller', 'gpo', 'zerologon', 'pass-the-hash', 'silver ticket', 'golden ticket', 'rbcd', 'delegation', 'ntlm'] 
      },
      { 
        key: 'Linux PrivEsc', 
        primaryCategory: 'Linux PrivEsc',
        keywords: ['suid', 'sudo', 'gtfobins', 'cron', 'kernel', 'capabilities', 'linpeas', 'cve-2021', 'overlayfs', 'polkit', 'dirty pipe', 'pwnkit', 'nfs', 'path hijacking', 'systemd'] 
      },
      { 
        key: 'Windows PrivEsc', 
        primaryCategory: 'Windows PrivEsc',
        keywords: ['winpeas', 'seimpersonate', 'juicypotato', 'token', 'service', 'registry', 'unquoted', 'spoolfool', 'printnightmare', 'alwaysinstallelevated', 'uac bypass', 'scheduled tasks', 'dll hijacking', 'autorun'] 
      },
      { 
        key: 'Network & Pivoting', 
        primaryCategory: 'Network / SMB',
        keywords: ['nmap', 'chisel', 'pivot', 'tunnel', 'ssh', 'proxychains', 'ligolo', 'socat', 'port forwarding', 'snmp', 'routing', 'lateral movement', 'smbclient', 'responder', 'netexec', 'crackmapexec'] 
      },
      { 
        key: 'Binary / BOF', 
        primaryCategory: 'Binary / Pwn',
        keywords: ['buffer overflow', 'bof', 'rop', 'pwn', 'binary', 'ghidra', 'gdb', 'ret2libc', 'shellcode', 'canary', 'aslr', 'nx', 'format string', 'heap', 'stack'] 
      },
    ];

    return categories.map((cat) => {
      let score = 0;
      rootedMachines.forEach((m) => {
        // 1. Check classification from categoryUtils
        const classification = classifyMachine(m);
        const matchesClassification = 
          classification.primary === cat.primaryCategory ||
          classification.categories.includes(cat.primaryCategory) ||
          (cat.key === 'Active Directory' && classification.isAD);

        if (matchesClassification) {
          score += 1;
          return;
        }

        // 2. Check tags and skillsLearned
        const tagList = (m.tags || []).map((t) => t.toLowerCase());
        const skillList = (m.skillsLearned || []).map((s) => s.toLowerCase());
        const allItems = [...tagList, ...skillList];

        const matchesKeyword = allItems.some((item) => {
          return cat.keywords.some((kw) => item.includes(kw));
        });

        if (matchesKeyword) {
          score += 1;
        }
      });

      // Smooth logarithmic scaling: 0 on empty, scalable up to 100 with higher difficulty/volume
      const normalized = score === 0 ? 0 : Math.min(100, Math.round(15 + Math.log2(score + 1) * 18));

      return {
        name: cat.key,
        score: normalized,
        rawCount: score,
      };
    });
  }, [rootedMachines]);

  // SVG Radar Chart Math Generator
  const renderRadarChart = () => {
    const size = 320;
    const center = size / 2;
    const radius = 110;
    const angleStep = (Math.PI * 2) / skillDimensions.length;
    const levels = [0.25, 0.5, 0.75, 1.0];

    const points = skillDimensions.map((dim, i) => {
      const r = (dim.score / 100) * radius;
      const angle = i * angleStep - Math.PI / 2;
      const x = center + r * Math.cos(angle);
      const y = center + r * Math.sin(angle);
      return `${x},${y}`;
    }).join(' ');

    return (
      <svg width={size} height={size} className="mx-auto overflow-visible">
        {levels.map((lvl) => {
          const webPoints = skillDimensions.map((_, i) => {
            const r = radius * lvl;
            const angle = i * angleStep - Math.PI / 2;
            const x = center + r * Math.cos(angle);
            const y = center + r * Math.sin(angle);
            return `${x},${y}`;
          }).join(' ');
          return (
            <polygon
              key={lvl}
              points={webPoints}
              fill="none"
              stroke="#1F2937"
              strokeWidth="1"
            />
          );
        })}

        {skillDimensions.map((_, i) => {
          const angle = i * angleStep - Math.PI / 2;
          const x = center + radius * Math.cos(angle);
          const y = center + radius * Math.sin(angle);
          return (
            <line
              key={i}
              x1={center}
              y1={center}
              x2={x}
              y2={y}
              stroke="#1F2937"
              strokeWidth="1"
            />
          );
        })}

        {/* Animated Radar Polygon */}
        <motion.polygon
          initial={{ opacity: 0, scale: 0.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          points={points}
          fill="rgba(16, 185, 129, 0.28)"
          stroke="#10B981"
          strokeWidth="2.5"
          className="drop-shadow-[0_0_15px_rgba(16,185,129,0.6)]"
        />

        {skillDimensions.map((dim, i) => {
          const r = (dim.score / 100) * radius;
          const angle = i * angleStep - Math.PI / 2;
          const x = center + r * Math.cos(angle);
          const y = center + r * Math.sin(angle);

          const labelRadius = radius + 24;
          const lx = center + labelRadius * Math.cos(angle);
          const ly = center + labelRadius * Math.sin(angle);

          return (
            <g key={i}>
              <motion.circle 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                cx={x} 
                cy={y} 
                r="4.5" 
                fill="#10B981" 
                className="animate-pulse shadow-glow-emerald" 
              />
              <text
                x={lx}
                y={ly}
                textAnchor="middle"
                dominantBaseline="central"
                fill="#94A3B8"
                fontSize="9"
                fontFamily="monospace"
                fontWeight="bold"
              >
                {dim.name} ({dim.score}%)
              </text>
            </g>
          );
        })}
      </svg>
    );
  };

  // Activity Heatmap Calendar (Past 90 Days)
  const heatmapData = useMemo(() => {
    const days: { date: string; count: number }[] = [];
    const today = new Date();
    for (let i = 89; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(d.getDate() - i);
      const dStr = d.toISOString().slice(0, 10);
      const matches = activitySessions.filter((s) => s.date === dStr).length;
      days.push({ date: dStr, count: matches });
    }
    return days;
  }, [activitySessions]);

  return (
    <div className="space-y-6 w-full font-mono pb-12">
      
      {/* Analytics Header Station */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-4 rounded-xl border border-cyber-border bg-cyber-card shadow-md flex flex-wrap items-center justify-between gap-4"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-cyber-bg border border-cyber-emerald/40 flex items-center justify-center">
            <BarChart3 className="w-5 h-5 text-cyber-emerald" />
          </div>
          <div>
            <h1 className="text-base font-bold text-white tracking-wider flex items-center gap-2">
              OPERATIONAL ANALYTICS & SKILL RADAR
            </h1>
            <p className="text-xs text-cyber-muted mt-0.5">
              Comprehensive telemetry, difficulty matrix benchmarks, and offensive skill vector breakdown.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs">
          <span className="px-3 py-1 rounded-lg bg-cyber-bg border border-cyber-border text-cyber-emerald font-bold">
            {rootedMachines.length} Targets Rooted
          </span>
          <span className="px-3 py-1 rounded-lg bg-cyber-bg border border-cyber-border text-cyber-cyan font-bold">
            {footholdsCount} Footholds
          </span>
        </div>
      </motion.div>

      {/* Top 4 KPI Metrics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'TOTAL PWNED', val: `${rootedMachines.length} / ${machines.length}`, icon: Award, color: 'text-cyber-emerald', sub: `${machines.length > 0 ? Math.round((rootedMachines.length / machines.length) * 100) : 0}% catalog completed` },
          { label: 'ENGAGEMENT TIME', val: formatDurationHuman(totalSecondsTracked), icon: Clock, color: 'text-cyber-cyan', sub: `${formatSeconds(totalSecondsTracked)} exact timer` },
          { label: 'AVG TIME TO USER', val: avgTimeToUser > 0 ? formatDurationHuman(avgTimeToUser) : 'N/A', icon: Target, color: 'text-cyber-amber', sub: 'Initial foothold benchmark' },
          { label: 'AVG TIME TO ROOT', val: avgTimeToRoot > 0 ? formatDurationHuman(avgTimeToRoot) : 'N/A', icon: Zap, color: 'text-cyber-crimson', sub: 'Privesc benchmark' },
        ].map((kpi, idx) => {
          const Icon = kpi.icon;
          return (
            <motion.div
              key={kpi.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.08 }}
              whileHover={{ y: -4, scale: 1.015 }}
              className="p-4 rounded-xl border border-cyber-border bg-cyber-card shadow-md transition-colors hover:border-cyber-borderGlow"
            >
              <div className="flex items-center justify-between text-cyber-muted text-xs mb-1">
                <span className="uppercase font-semibold tracking-wider">{kpi.label}</span>
                <Icon className={`w-4 h-4 ${kpi.color}`} />
              </div>
              <div className="text-2xl font-bold text-white">{kpi.val}</div>
              <div className="text-[10px] text-cyber-muted mt-1">{kpi.sub}</div>
            </motion.div>
          );
        })}
      </div>

      {/* Main Grid: Skill Radar Chart + Difficulty Progress Matrix */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        
        {/* Left: Skill Radar Chart */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="p-5 rounded-xl border border-cyber-border bg-cyber-card shadow-lg flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between border-b border-cyber-border pb-3 mb-4">
              <div className="flex items-center gap-2">
                <Radar className="w-4 h-4 text-cyber-emerald" />
                <h3 className="font-bold text-white text-sm">OFFENSIVE SKILL VECTOR RADAR</h3>
              </div>
              <span className="text-[10px] text-cyber-muted">PWNED TAG SYNTHESIS</span>
            </div>
            
            <p className="text-xs text-cyber-muted mb-4">
              Multidimensional rating synthesized automatically from completed machine attack vectors and exploit categories.
            </p>

            <div className="py-4">{renderRadarChart()}</div>
          </div>

          <div className="grid grid-cols-3 gap-2 pt-4 border-t border-cyber-border/70 text-[10px]">
            {skillDimensions.map((d) => (
              <motion.div 
                whileHover={{ scale: 1.04 }}
                key={d.name} 
                className="bg-cyber-bg p-2 rounded border border-cyber-border cursor-pointer transition-colors hover:border-cyber-emerald/50"
              >
                <div className="text-cyber-muted truncate">{d.name}</div>
                <div className="text-white font-bold text-xs mt-0.5">{d.score}% ({d.rawCount} pwns)</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right: Difficulty Tier Progress Matrix & Platform Breakdown */}
        <div className="space-y-4">
          
          {/* Difficulty Tier Progress Matrix */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="p-5 rounded-xl border border-cyber-border bg-cyber-card shadow-lg space-y-4"
          >
            <div className="flex items-center justify-between border-b border-cyber-border pb-3">
              <div className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-cyber-amber" />
                <h3 className="font-bold text-white text-sm">PWN PROGRESS MATRIX</h3>
              </div>
              <span className="text-[10px] text-cyber-muted">BY DIFFICULTY TIER</span>
            </div>

            <div className="space-y-3">
              {difficultyMatrix.map((item) => (
                <div key={item.tier} className="space-y-1 text-xs">
                  <div className="flex items-center justify-between font-semibold">
                    <span className="text-white flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${
                        item.tier === 'Easy' ? 'bg-cyber-emerald' :
                        item.tier === 'Medium' ? 'bg-cyber-amber' :
                        item.tier === 'Hard' ? 'bg-cyber-crimson' :
                        'bg-purple-500'
                      }`} />
                      {item.tier}
                    </span>
                    <span className="text-cyber-muted font-mono">
                      {item.rooted} / {item.total} ({item.percentage}%)
                    </span>
                  </div>

                  <div className="w-full bg-cyber-bg h-2 rounded-full border border-cyber-border overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      className={`h-full ${
                        item.tier === 'Easy' ? 'bg-cyber-emerald' :
                        item.tier === 'Medium' ? 'bg-cyber-amber' :
                        item.tier === 'Hard' ? 'bg-cyber-crimson' :
                        'bg-purple-500'
                      }`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Platform Distribution Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="p-5 rounded-xl border border-cyber-border bg-cyber-card shadow-lg space-y-3"
          >
            <div className="flex items-center justify-between border-b border-cyber-border pb-2.5">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-cyber-cyan" />
                <h3 className="font-bold text-white text-sm">LAB PLATFORM ROSTER</h3>
              </div>
              <span className="text-[10px] text-cyber-muted">CROSS-PLATFORM</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
              {platformStats.map((p) => (
                <motion.div 
                  whileHover={{ scale: 1.04 }}
                  key={p.platform} 
                  className="p-2.5 rounded-lg bg-cyber-bg border border-cyber-border cursor-pointer transition-colors hover:border-cyber-cyan/50"
                >
                  <div className="text-cyber-muted text-[10px] uppercase font-semibold">{p.platform}</div>
                  <div className="text-sm font-bold text-white mt-0.5">
                    {p.rooted} <span className="text-xs text-cyber-muted font-normal">/ {p.total}</span>
                  </div>
                  <div className="text-[10px] text-cyber-cyan mt-1">
                    {p.total > 0 ? Math.round((p.rooted / p.total) * 100) : 0}% completed
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>

      {/* HTB / GitHub Style Activity Heatmap */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="p-5 rounded-xl border border-cyber-border bg-cyber-card shadow-lg space-y-3"
      >
        <div className="flex items-center justify-between border-b border-cyber-border pb-3">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-cyber-emerald" />
            <h3 className="font-bold text-white text-sm">ENGAGEMENT ACTIVITY HEATMAP</h3>
          </div>
          <span className="text-[10px] text-cyber-muted">PAST 90 DAYS OPERATIONS</span>
        </div>

        <p className="text-xs text-cyber-muted">
          Visualized daily operational study sessions and machine root events.
        </p>

        {/* Heatmap Grid */}
        <div className="overflow-x-auto py-2">
          <div className="flex gap-1.5 min-w-[700px]">
            {heatmapData.map((d) => {
              const count = d.count;
              let bg = 'bg-cyber-bg border-cyber-border/70';
              if (count === 1) bg = 'bg-cyber-emerald/30 border-cyber-emerald/50';
              if (count === 2) bg = 'bg-cyber-emerald/60 border-cyber-emerald';
              if (count >= 3) bg = 'bg-cyber-emerald border-white shadow-glow-emerald';

              return (
                <motion.div
                  whileHover={{ scale: 1.4, y: -2 }}
                  key={d.date}
                  className={`w-3.5 h-3.5 rounded-sm border ${bg} cursor-pointer transition-shadow`}
                  title={`${d.date}: ${count} actions recorded`}
                />
              );
            })}
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] text-cyber-muted pt-1">
          <span>90 Days Ago</span>
          <div className="flex items-center gap-1.5">
            <span>Less</span>
            <div className="w-2.5 h-2.5 rounded-sm bg-cyber-bg border border-cyber-border" />
            <div className="w-2.5 h-2.5 rounded-sm bg-cyber-emerald/30" />
            <div className="w-2.5 h-2.5 rounded-sm bg-cyber-emerald/60" />
            <div className="w-2.5 h-2.5 rounded-sm bg-cyber-emerald" />
            <span>More</span>
          </div>
          <span>Today</span>
        </div>
      </motion.div>

    </div>
  );
};
