import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  GraduationCap, 
  Play, 
  Pause, 
  RotateCcw, 
  Shuffle, 
  ShieldCheck, 
  AlertTriangle, 
  Flag, 
  Clock, 
  FileDown, 
  CheckCircle2, 
  Copy, 
  ExternalLink,
  ChevronRight,
  Server,
  Layers,
  Terminal,
  Trophy,
  Zap
} from 'lucide-react';
import { useCtfStore } from '../store/useCtfStore';
import { Machine, OperatingSystem, Difficulty } from '../types';
import { OsBadge } from '../components/common/OsBadge';
import { PlatformBadge, PlatformIcon } from '../components/common/PlatformBadge';
import { playCyberSound, triggerRootCelebration } from '../utils/helpers';

interface ExamBox {
  id: string;
  name: string;
  ip: string;
  os: OperatingSystem;
  difficulty: Difficulty;
  type: 'ad-foothold' | 'ad-lateral' | 'ad-dc' | 'standalone-1' | 'standalone-2' | 'standalone-3';
  label: string;
  userPoints: number;
  rootPoints: number;
  userPwned: boolean;
  rootPwned: boolean;
  userFlagText?: string;
  rootFlagText?: string;
  notes?: string;
}

export const ExamSimulatorPage: React.FC = () => {
  const { machines, soundEnabled } = useCtfStore();

  // Exam Presets: OSCP (100 pts, pass: 70) vs CPTS (100 pts, pass: 80)
  const [examType, setExamType] = useState<'OSCP' | 'CPTS'>('OSCP');

  // 24 Hour Countdown Timer (in seconds = 86400)
  const [timerSeconds, setTimerSeconds] = useState(24 * 3600);
  const [timerRunning, setTimerRunning] = useState(false);

  // Scratchpad
  const [scratchNotes, setScratchNotes] = useState(
    '# EXAM OPERATION LOG\n\n## Credentials Captured\n- administrator : Password123!\n\n## Pivoting Notes\n- Chisel tunnel on port 1080 -> 172.16.1.0/24'
  );

  // Helper to generate a realistic mock exam set
  const generateExamBoxes = (): ExamBox[] => {
    // 1. Pick AD boxes for the AD chain
    const adMachines = machines.filter(m => m.os === 'Active Directory' || m.tags.includes('active directory') || m.tags.includes('kerberos'));
    const linuxMachines = machines.filter(m => m.os === 'Linux');
    const winMachines = machines.filter(m => m.os === 'Windows');

    const shuffledAd = [...adMachines].sort(() => 0.5 - Math.random());
    const shuffledLinux = [...linuxMachines].sort(() => 0.5 - Math.random());
    const shuffledWin = [...winMachines].sort(() => 0.5 - Math.random());

    const adDc = shuffledAd[0] || { name: 'CORP-DC01', ip: '192.168.1.10', os: 'Active Directory', difficulty: 'Hard' };
    const adLat = shuffledAd[1] || { name: 'CORP-SRV01', ip: '192.168.1.20', os: 'Windows', difficulty: 'Medium' };
    const adFoot = shuffledAd[2] || { name: 'CORP-WEB01', ip: '192.168.1.30', os: 'Linux', difficulty: 'Easy' };

    const stand1 = shuffledLinux[0] || { name: 'ALPHA', ip: '192.168.1.101', os: 'Linux', difficulty: 'Easy' };
    const stand2 = shuffledWin[0] || { name: 'BRAVO', ip: '192.168.1.102', os: 'Windows', difficulty: 'Medium' };
    const stand3 = shuffledLinux[1] || { name: 'CHARLIE', ip: '192.168.1.103', os: 'Linux', difficulty: 'Hard' };

    return [
      {
        id: 'ad-1',
        name: adFoot.name,
        ip: '192.168.1.30',
        os: adFoot.os,
        difficulty: 'Easy',
        type: 'ad-foothold',
        label: 'AD Set: Initial Access & Foothold',
        userPoints: 10,
        rootPoints: 0,
        userPwned: false,
        rootPwned: false,
      },
      {
        id: 'ad-2',
        name: adLat.name,
        ip: '192.168.1.20',
        os: adLat.os,
        difficulty: 'Medium',
        type: 'ad-lateral',
        label: 'AD Set: Lateral Movement & Pivot',
        userPoints: 10,
        rootPoints: 0,
        userPwned: false,
        rootPwned: false,
      },
      {
        id: 'ad-3',
        name: adDc.name,
        ip: '192.168.1.10',
        os: 'Active Directory',
        difficulty: 'Hard',
        type: 'ad-dc',
        label: 'AD Set: Domain Controller Compromise',
        userPoints: 0,
        rootPoints: 20,
        userPwned: false,
        rootPwned: false,
      },
      {
        id: 'st-1',
        name: stand1.name,
        ip: '192.168.1.101',
        os: stand1.os,
        difficulty: 'Easy',
        type: 'standalone-1',
        label: 'Standalone Target 01 (Easy)',
        userPoints: 10,
        rootPoints: 10,
        userPwned: false,
        rootPwned: false,
      },
      {
        id: 'st-2',
        name: stand2.name,
        ip: '192.168.1.102',
        os: stand2.os,
        difficulty: 'Medium',
        type: 'standalone-2',
        label: 'Standalone Target 02 (Medium)',
        userPoints: 10,
        rootPoints: 10,
        userPwned: false,
        rootPwned: false,
      },
      {
        id: 'st-3',
        name: stand3.name,
        ip: '192.168.1.103',
        os: stand3.os,
        difficulty: 'Hard',
        type: 'standalone-3',
        label: 'Standalone Target 03 (Hard)',
        userPoints: 10,
        rootPoints: 10,
        userPwned: false,
        rootPwned: false,
      },
    ];
  };

  const [examBoxes, setExamBoxes] = useState<ExamBox[]>(() => generateExamBoxes());

  // Timer Tick
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (timerRunning && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => Math.max(0, prev - 1));
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timerRunning, timerSeconds]);

  // Score Calculations
  const scoreData = useMemo(() => {
    let totalScore = 0;
    const maxScore = 100;
    const passThreshold = examType === 'OSCP' ? 70 : 80;

    examBoxes.forEach((b) => {
      if (b.userPwned) totalScore += b.userPoints;
      if (b.rootPwned) totalScore += b.rootPoints;
    });

    const isPassing = totalScore >= passThreshold;
    const pointsNeeded = Math.max(0, passThreshold - totalScore);

    return { totalScore, maxScore, passThreshold, isPassing, pointsNeeded };
  }, [examBoxes, examType]);

  // Timer Formatting
  const formatExamTime = (secs: number) => {
    const h = Math.floor(secs / 3600);
    const m = Math.floor((secs % 3600) / 60);
    const s = secs % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // Toggle Pwn Flag
  const toggleFlag = (boxId: string, flagType: 'user' | 'root') => {
    setExamBoxes((prev) =>
      prev.map((b) => {
        if (b.id !== boxId) return b;
        const willBePwned = flagType === 'user' ? !b.userPwned : !b.rootPwned;

        if (willBePwned) {
          if (flagType === 'root') {
            triggerRootCelebration();
            if (soundEnabled) playCyberSound('root');
          } else {
            if (soundEnabled) playCyberSound('flag');
          }
        } else {
          if (soundEnabled) playCyberSound('toggle');
        }

        return {
          ...b,
          [flagType === 'user' ? 'userPwned' : 'rootPwned']: willBePwned,
        };
      })
    );
  };

  // Export Exam Report
  const handleExportReport = () => {
    const markdown = `# OFFSEC CERTIFIED PROFESSIONAL (OSCP) // OFFICIAL EXAM REPORT
**Assessor:** CANDIDATE-OPERATOR
**Exam Date:** ${new Date().toLocaleDateString()}
**Status:** ${scoreData.isPassing ? 'PASSED (PASS CONFIRMED)' : 'IN PROGRESS'}
**Final Score:** ${scoreData.totalScore} / 100 Points (Passing Threshold: 70 Points)
**Time Remaining:** ${formatExamTime(timerSeconds)}

---

## 1. Executive Point Breakdown
${examBoxes
  .map(
    (b) =>
      `- **${b.label} (${b.name} - ${b.ip})**:
  - User Foothold: ${b.userPwned ? `PWNED (+${b.userPoints} pts)` : 'UNPWNED (0 pts)'}
  - Root / System: ${b.rootPwned ? `PWNED (+${b.rootPoints} pts)` : 'UNPWNED (0 pts)'}`
  )
  .join('\n')}

---

## 2. Technical Evidence & Notes
${scratchNotes}
`;

    const blob = new Blob([markdown], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `OSCP_EXAM_REPORT_${new Date().toISOString().slice(0, 10)}.md`;
    a.click();
    URL.revokeObjectURL(url);
    if (soundEnabled) playCyberSound('export');
  };

  return (
    <div className="max-w-[1920px] mx-auto space-y-5 font-mono">
      {/* 1. Exam Header & Live Scoring Gauge */}
      <div className="p-4 rounded-xl border border-cyber-border bg-cyber-card/90 shadow-xl space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          
          {/* Title & Mode Switcher */}
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyber-bg border border-cyber-emerald/40 shadow-glow-emerald/20 text-cyber-emerald">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-bold text-white tracking-wider">
                  24-HOUR EXAM SIMULATOR & SCORE ENGINE
                </h1>
                <span className="text-[10px] px-2 py-0.5 rounded font-bold bg-cyber-emerald/10 border border-cyber-emerald/30 text-cyber-emerald">
                  OFFSEC // PROVING LAB
                </span>
              </div>
              <p className="text-xs text-cyber-muted">
                Official scoring matrix, simulated multi-host AD chain, and standalone target proving ground.
              </p>
            </div>
          </div>

          {/* Exam Type Selector */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setExamType('OSCP')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all ${
                examType === 'OSCP'
                  ? 'bg-cyber-emerald/20 border-cyber-emerald text-cyber-emerald shadow-glow-emerald/30'
                  : 'bg-cyber-bg border-cyber-border text-cyber-muted hover:text-white'
              }`}
            >
              OSCP 2024 (70 Pts to Pass)
            </button>
            <button
              onClick={() => setExamType('CPTS')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all ${
                examType === 'CPTS'
                  ? 'bg-cyber-cyan/20 border-cyber-cyan text-cyber-cyan shadow-glow-cyan/30'
                  : 'bg-cyber-bg border-cyber-border text-cyber-muted hover:text-white'
              }`}
            >
              HTB CPTS (80 Pts to Pass)
            </button>
          </div>

        </div>

        {/* 2. Tactical Telemetry Bar: Live Score + 24h Countdown */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-3 border-t border-cyber-border/80">
          
          {/* Live Score Counter */}
          <div className="p-3.5 rounded-lg bg-cyber-bg border border-cyber-border flex items-center justify-between">
            <div>
              <span className="text-[10px] text-cyber-muted uppercase font-bold tracking-wider">EXAM SCORE</span>
              <div className="flex items-baseline gap-1 mt-0.5">
                <span className={`text-2xl font-black ${scoreData.isPassing ? 'text-cyber-emerald' : 'text-cyber-amber'}`}>
                  {scoreData.totalScore}
                </span>
                <span className="text-cyber-muted text-xs">/ 100 PTS</span>
              </div>
            </div>

            <div className="text-right">
              {scoreData.isPassing ? (
                <div className="flex items-center gap-1.5 text-cyber-emerald font-bold text-xs bg-cyber-emerald/10 border border-cyber-emerald/30 px-2.5 py-1 rounded">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>PASS CONFIRMED</span>
                </div>
              ) : (
                <div className="flex items-center gap-1.5 text-cyber-amber font-bold text-xs bg-cyber-amber/10 border border-cyber-amber/30 px-2.5 py-1 rounded">
                  <AlertTriangle className="w-4 h-4" />
                  <span>{scoreData.pointsNeeded} PTS TO PASS</span>
                </div>
              )}
            </div>
          </div>

          {/* 24-Hour Countdown Clock */}
          <div className="p-3.5 rounded-lg bg-cyber-bg border border-cyber-border flex items-center justify-between">
            <div>
              <span className="text-[10px] text-cyber-muted uppercase font-bold tracking-wider flex items-center gap-1">
                <Clock className="w-3 h-3 text-cyber-cyan" /> 24H EXAM COUNTDOWN
              </span>
              <div className="text-2xl font-black text-white tracking-widest mt-0.5 font-mono">
                {formatExamTime(timerSeconds)}
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => {
                  setTimerRunning(!timerRunning);
                  if (soundEnabled) playCyberSound('timer');
                }}
                className={`p-2 rounded-lg border transition-all ${
                  timerRunning
                    ? 'bg-cyber-amber/20 border-cyber-amber text-cyber-amber'
                    : 'bg-cyber-emerald/20 border-cyber-emerald text-cyber-emerald'
                }`}
                title={timerRunning ? 'Pause Exam Clock' : 'Start Exam Clock'}
              >
                {timerRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>
              <button
                onClick={() => {
                  setTimerSeconds(24 * 3600);
                  setTimerRunning(false);
                  if (soundEnabled) playCyberSound('click');
                }}
                className="p-2 rounded-lg bg-cyber-card border border-cyber-border text-cyber-muted hover:text-white"
                title="Reset Clock to 24:00:00"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Generator & Report Controls */}
          <div className="p-3.5 rounded-lg bg-cyber-bg border border-cyber-border flex items-center justify-between gap-2">
            <button
              onClick={() => {
                setExamBoxes(generateExamBoxes());
                if (soundEnabled) playCyberSound('shuffle');
              }}
              className="flex-1 py-2 px-3 rounded-lg bg-cyber-card border border-cyber-cyan/40 text-cyber-cyan hover:bg-cyber-cyan hover:text-black font-bold text-xs transition-all flex items-center justify-center gap-1.5"
              title="Pick random real boxes matching exam difficulty"
            >
              <Shuffle className="w-3.5 h-3.5" />
              <span>🎲 New Mock Set</span>
            </button>

            <button
              onClick={handleExportReport}
              className="flex-1 py-2 px-3 rounded-lg bg-cyber-emerald/20 border border-cyber-emerald/50 text-cyber-emerald hover:bg-cyber-emerald hover:text-black font-bold text-xs transition-all flex items-center justify-center gap-1.5 shadow-glow-emerald/20"
              title="Download formal Markdown Exam Log"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Export Report</span>
            </button>
          </div>

        </div>
      </div>

      {/* 3. Exam Targets Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {examBoxes.map((box, idx) => {
          const isAd = box.type.startsWith('ad');
          const isFullyPwned = (box.userPoints === 0 || box.userPwned) && (box.rootPoints === 0 || box.rootPwned);

          return (
            <motion.div
              key={box.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className={`p-4 rounded-xl border bg-cyber-card/95 relative overflow-hidden transition-all ${
                isFullyPwned
                  ? 'border-cyber-emerald shadow-[0_0_20px_rgba(16,185,129,0.2)]'
                  : 'border-cyber-border hover:border-cyber-borderGlow'
              }`}
            >
              {/* Category Header */}
              <div className="flex items-center justify-between gap-2 mb-2.5">
                <span className={`text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider ${
                  isAd ? 'bg-purple-950/60 text-purple-400 border border-purple-800/40' : 'bg-cyber-bg text-cyber-cyan border border-cyber-cyan/30'
                }`}>
                  {box.label}
                </span>

                <span className="text-xs font-bold text-white px-2 py-0.5 rounded bg-cyber-bg border border-cyber-border">
                  {box.userPoints + box.rootPoints} PTS TOTAL
                </span>
              </div>

              {/* Box Identity */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-base font-bold text-white tracking-wide">{box.name}</h3>
                  <div className="text-[11px] text-cyber-muted font-mono flex items-center gap-2 mt-0.5">
                    <span>IP: <strong className="text-cyber-cyan">{box.ip}</strong></span>
                    <span>•</span>
                    <OsBadge os={box.os} size="xs" />
                  </div>
                </div>

                <span className={`text-[10px] px-2 py-0.5 rounded font-bold ${
                  box.difficulty === 'Easy' ? 'text-cyber-emerald bg-cyber-emerald/10 border border-cyber-emerald/30' :
                  box.difficulty === 'Medium' ? 'text-cyber-amber bg-cyber-amber/10 border border-cyber-amber/30' :
                  'text-cyber-crimson bg-cyber-crimson/10 border border-cyber-crimson/30'
                }`}>
                  {box.difficulty}
                </span>
              </div>

              {/* Flag Submission / Scoring Buttons */}
              <div className="space-y-2 pt-3 border-t border-cyber-border/70">
                {/* User Flag Button */}
                {box.userPoints > 0 && (
                  <button
                    onClick={() => toggleFlag(box.id, 'user')}
                    className={`w-full p-2.5 rounded-lg border flex items-center justify-between text-xs transition-all ${
                      box.userPwned
                        ? 'bg-cyber-amber/20 border-cyber-amber text-cyber-amber font-bold shadow-[0_0_12px_rgba(245,158,11,0.2)]'
                        : 'bg-cyber-bg border-cyber-border text-cyber-muted hover:text-white hover:border-cyber-amber/50'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Flag className="w-3.5 h-3.5" />
                      <span>{box.type === 'ad-foothold' ? 'Initial Access Flag' : 'User Flag (local.txt)'}</span>
                    </div>
                    <span className="font-bold">
                      {box.userPwned ? `✓ +${box.userPoints} PTS` : `+${box.userPoints} PTS`}
                    </span>
                  </button>
                )}

                {/* Root Flag Button */}
                {box.rootPoints > 0 && (
                  <button
                    onClick={() => toggleFlag(box.id, 'root')}
                    className={`w-full p-2.5 rounded-lg border flex items-center justify-between text-xs transition-all ${
                      box.rootPwned
                        ? 'bg-cyber-emerald/20 border-cyber-emerald text-cyber-emerald font-bold shadow-[0_0_15px_rgba(16,185,129,0.3)]'
                        : 'bg-cyber-bg border-cyber-border text-cyber-muted hover:text-white hover:border-cyber-emerald/50'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Trophy className="w-3.5 h-3.5" />
                      <span>{box.type === 'ad-dc' ? 'Enterprise Admin (proof.txt)' : 'Root Flag (proof.txt)'}</span>
                    </div>
                    <span className="font-bold">
                      {box.rootPwned ? `👑 +${box.rootPoints} PTS` : `+${box.rootPoints} PTS`}
                    </span>
                  </button>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* 4. Exam Scratchpad & Evidence Vault */}
      <div className="p-4 rounded-xl border border-cyber-border bg-cyber-card/90 shadow-md space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
            <Terminal className="w-4 h-4 text-cyber-cyan" />
            OFFICIAL EXAM LOG & CREDENTIALS VAULT
          </span>
          <span className="text-[10px] text-cyber-muted">Auto-saved locally • Included in exported report</span>
        </div>
        <textarea
          value={scratchNotes}
          onChange={(e) => setScratchNotes(e.target.value)}
          rows={6}
          className="w-full p-3 rounded-lg bg-cyber-bg border border-cyber-border text-xs text-white font-mono focus:outline-none focus:border-cyber-cyan leading-relaxed"
          placeholder="Paste flags, hashes, Nmap extracts, and proof screenshots references here..."
        />
      </div>
    </div>
  );
};
