import React, { useRef, useEffect, Suspense, lazy } from 'react';
import { HashRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from './components/layout/Header';
import { Sidebar } from './components/layout/Sidebar';
import { MobileNav } from './components/layout/MobileNav';
import { CommandPalette } from './components/layout/CommandPalette';
import { BackupModal } from './components/backup/BackupModal';
import { ReconAutomationModal } from './components/automation/ReconAutomationModal';
import { CrtOverlay } from './components/common/CrtOverlay';
import { ScrollProgressBar } from './components/common/ScrollProgressBar';
import { BackToTopButton } from './components/common/BackToTopButton';
import { ScrollProvider, useWorkspaceScroll } from './context/ScrollContext';
import { TrackerView } from './components/tracker/TrackerView';
import { MachineDetailModal } from './components/tracker/MachineDetailModal';
import { NewMachineModal } from './components/tracker/NewMachineModal';
import { PentestReportModal } from './components/writeup/PentestReportModal';
import { OperatorDossierModal } from './components/common/OperatorDossierModal';
import { LicenseModal } from './components/common/LicenseModal';
import { OperatorFlexCardModal } from './components/common/OperatorFlexCardModal';
import { QuickAssignIpModal } from './components/common/QuickAssignIpModal';
import { KeyboardShortcutsModal } from './components/common/KeyboardShortcutsModal';
import { ThemeRippleOverlay } from './components/common/ThemeRippleOverlay';
import { useTacticalHotkeys } from './hooks/useTacticalHotkeys';
import { useCtfStore, mergeMachinesWithCatalog } from './store/useCtfStore';

// Code-Split Route Modules (Zero-overhead on initial tracker load)
const CheatsheetView = lazy(() => import('./components/cheatsheet/CheatsheetView').then(m => ({ default: m.CheatsheetView })));
const WriteupStudio = lazy(() => import('./components/writeup/WriteupStudio').then(m => ({ default: m.WriteupStudio })));
const AnalyticsView = lazy(() => import('./components/analytics/AnalyticsView').then(m => ({ default: m.AnalyticsView })));
const TargetDetailPage = lazy(() => import('./pages/TargetDetailPage').then(m => ({ default: m.TargetDetailPage })));
const MethodologyPage = lazy(() => import('./pages/MethodologyPage').then(m => ({ default: m.MethodologyPage })));
const ExamSimulatorPage = lazy(() => import('./pages/ExamSimulatorPage').then(m => ({ default: m.ExamSimulatorPage })));
const ThemeShowcaseDemo = lazy(() => import('./components/common/ThemeShowcaseDemo').then(m => ({ default: m.ThemeShowcaseDemo })));

const CyberRouteLoader: React.FC = () => (
  <div className="flex flex-col items-center justify-center min-h-[50vh] space-y-4 font-mono">
    <div className="relative flex items-center justify-center">
      <div className="w-12 h-12 rounded border-2 border-cyber-cyan/30 border-t-cyber-cyan animate-spin" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-cyber-emerald animate-ping" />
      </div>
    </div>
    <div className="text-center space-y-1">
      <div className="text-xs tracking-wider text-cyber-cyan font-bold uppercase flex items-center justify-center gap-2">
        <span className="inline-block w-2 h-2 rounded-full bg-cyber-cyan animate-pulse" />
        INITIALIZING TACTICAL MODULE
      </div>
      <div className="text-[10px] text-cyber-muted tracking-widest uppercase">
        DECRYPTING DATASTREAM &middot; SECURE CHANNEL ACTIVE
      </div>
    </div>
  </div>
);

const ParallaxBackdrop: React.FC = () => {
  const { scrollProgress } = useWorkspaceScroll();
  return (
    <div 
      className="absolute inset-0 pointer-events-none opacity-[0.04] will-change-transform transform-gpu"
      style={{
        backgroundImage: `linear-gradient(#06B6D4 1px, transparent 1px), linear-gradient(90deg, #06B6D4 1px, transparent 1px)`,
        backgroundSize: '36px 36px',
        transform: `translate3d(0, ${Math.round(scrollProgress * -60)}px, 0)`,
      }}
    />
  );
};

const TimerController: React.FC = () => {
  const isTimerRunning = useCtfStore((s) => s.isTimerRunning);
  const tickTimer = useCtfStore((s) => s.tickTimer);

  useEffect(() => {
    if (!isTimerRunning) return;
    const interval = setInterval(() => {
      tickTimer();
    }, 1000);
    return () => clearInterval(interval);
  }, [isTimerRunning, tickTimer]);

  return null;
};

const MainAppContent: React.FC = () => {
  const { setScrollElement } = useWorkspaceScroll();
  const location = useLocation();
  const setActiveTab = useCtfStore((s) => s.setActiveTab);
  const reportMachineId = useCtfStore((s) => s.reportMachineId);
  const setReportMachineId = useCtfStore((s) => s.setReportMachineId);
  const uiScale = useCtfStore((s) => s.uiScale || 'normal');

  // Tactical keyboard hotkeys engine
  useTacticalHotkeys();

  // Handle global UI scale (Tiny: 80%, Compact: 90%, Normal: 100%, Large: 110%, Huge: 122%)
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const zoomMap: Record<string, string> = {
        tiny: '0.80',
        compact: '0.90',
        normal: '1.0',
        large: '1.10',
        huge: '1.22',
      };
      const zoomVal = zoomMap[uiScale] || '1.0';
      (document.documentElement.style as any).zoom = zoomVal;
    }
  }, [uiScale]);

  // Guarantee that all 45 completed HTB targets are populated in active state and profile,
  // and force brand to ZEROBOX if still set to legacy rootvector or specter
  useEffect(() => {
    const state = useCtfStore.getState();
    const current = state.machines;
    const merged = mergeMachinesWithCatalog(current);
    const updates: Partial<typeof state> = { machines: merged };
    if (!state.appBrand || state.appBrand === 'rootvector' || state.appBrand === 'specter') {
      updates.appBrand = 'zerobox';
    }
    useCtfStore.setState(updates);
    useCtfStore.getState().saveProfileData();
  }, []);

  // Sync store activeTab with route
  useEffect(() => {
    const path = location.pathname;
    if (path.startsWith('/methodology')) {
      setActiveTab('methodology');
    } else if (path.startsWith('/cheatsheets') || path.startsWith('/notes') || path.startsWith('/field-manual') || path.startsWith('/cpts')) {
      setActiveTab('cheatsheet');
    } else if (path.startsWith('/writeup')) {
      setActiveTab('writeup');
    } else if (path.startsWith('/analytics')) {
      setActiveTab('analytics');
    } else if (path.startsWith('/exam')) {
      setActiveTab('exam' as any);
    } else {
      setActiveTab('tracker');
    }
  }, [location.pathname, setActiveTab]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-cyber-bg text-slate-900 dark:text-cyber-text flex flex-col font-mono selection:bg-cyber-emerald selection:text-black relative transition-colors duration-300">
      {/* Top glowing laser scroll progress bar */}
      <ScrollProgressBar />

      {/* Global Liquid Theme Transition Ripple Overlay */}
      <ThemeRippleOverlay />

      {/* Floating Tactical Thruster Back to Top */}
      <BackToTopButton />

      {/* Cyberpunk CRT Scanline Overlay */}
      <CrtOverlay />

      {/* Global Quick Command Palette (Ctrl+K) */}
      <CommandPalette />

      {/* Backup & Restore Modal */}
      <BackupModal />

      {/* Tactical Recon Automation & Payload Engine */}
      <ReconAutomationModal />

      {/* Deep Target Inspection Modal */}
      <MachineDetailModal />

      {/* Quick Spawned Target IP Assignment Dialog */}
      <QuickAssignIpModal />

      {/* Deploy Target Modal */}
      <NewMachineModal />

      {/* Background Timer Controller (Zero-Lag 1Hz Clock Isolation) */}
      <TimerController />

      {/* Executive Pentest Pre-Report Modal */}
      <PentestReportModal
        machineId={reportMachineId}
        isOpen={Boolean(reportMachineId)}
        onClose={() => setReportMachineId(null)}
      />

      {/* Operator & Creator Classified Dossier Modal */}
      <OperatorDossierModal />

      {/* ZeroBox Legal & Non-Commercial License Modal */}
      <LicenseModal />

      {/* Operator Sharable Holographic Flex Card Modal */}
      <OperatorFlexCardModal />

      {/* Tactical Keyboard Shortcuts & Hotkeys Modal */}
      <KeyboardShortcutsModal />

      {/* Tactical Top Header */}
      <Header />

      {/* Main Workspace Layout */}
      <div className="flex-1 flex overflow-hidden">
        {/* Responsive Collapsible Sidebar */}
        <Sidebar />

        {/* Dynamic Main Stage View with Cyber Grid Backdrop */}
        <main ref={setScrollElement} className="flex-1 overflow-y-auto p-3 pb-24 sm:p-4 md:p-6 md:pb-6 relative bg-slate-50/70 dark:bg-cyber-bg transition-colors duration-300">
          {/* Isolated Parallax Backdrop (Zero Root Re-Renders on Scroll) */}
          <ParallaxBackdrop />

          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10"
            >
              <Suspense fallback={<CyberRouteLoader />}>
                <Routes location={location} key={location.pathname}>
                  <Route path="/" element={<Navigate to="/tracker" replace />} />
                  <Route path="/tracker" element={<TrackerView />} />
                  <Route path="/target/:id" element={<TargetDetailPage />} />
                  <Route path="/methodology" element={<MethodologyPage />} />
                  <Route path="/cheatsheets" element={<CheatsheetView />} />
                  <Route path="/cheatsheet" element={<Navigate to="/cheatsheets" replace />} />
                  <Route path="/notes" element={<CheatsheetView defaultMode="cpts-manual" />} />
                  <Route path="/field-manual" element={<CheatsheetView defaultMode="cpts-manual" />} />
                  <Route path="/cpts" element={<CheatsheetView defaultMode="cpts-manual" />} />
                  <Route path="/cpts-manual" element={<CheatsheetView defaultMode="cpts-manual" />} />
                  <Route path="/writeup" element={<WriteupStudio />} />
                  <Route path="/writeup/:id" element={<WriteupStudio />} />
                  <Route path="/writeups" element={<Navigate to="/writeup" replace />} />
                  <Route path="/analytics" element={<AnalyticsView />} />
                  <Route path="/exam" element={<ExamSimulatorPage />} />
                  <Route path="/exam-simulator" element={<Navigate to="/exam" replace />} />
                  <Route path="/theme-demo" element={<ThemeShowcaseDemo />} />
                  <Route path="/theme" element={<ThemeShowcaseDemo />} />
                  <Route path="/dark-mode" element={<ThemeShowcaseDemo />} />
                  <Route path="*" element={<Navigate to="/tracker" replace />} />
                </Routes>
              </Suspense>
            </motion.div>
          </AnimatePresence>
        </main>
      </div>

      {/* Tactical Mobile Bottom Navigation Bar (md:hidden) */}
      <MobileNav />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollProvider>
        <MainAppContent />
      </ScrollProvider>
    </HashRouter>
  );
};

export default App;

