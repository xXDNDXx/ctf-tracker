import React, { useRef, useEffect } from 'react';
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
import { CheatsheetView } from './components/cheatsheet/CheatsheetView';
import { WriteupStudio } from './components/writeup/WriteupStudio';
import { AnalyticsView } from './components/analytics/AnalyticsView';
import { TargetDetailPage } from './pages/TargetDetailPage';
import { MethodologyPage } from './pages/MethodologyPage';
import { ExamSimulatorPage } from './pages/ExamSimulatorPage';
import { MachineDetailModal } from './components/tracker/MachineDetailModal';
import { NewMachineModal } from './components/tracker/NewMachineModal';
import { PentestReportModal } from './components/writeup/PentestReportModal';
import { OperatorDossierModal } from './components/common/OperatorDossierModal';
import { useCtfStore, mergeMachinesWithCatalog } from './store/useCtfStore';

const MainAppContent: React.FC = () => {
  const { setScrollElement, scrollProgress } = useWorkspaceScroll();
  const location = useLocation();
  const setActiveTab = useCtfStore((s) => s.setActiveTab);
  const machines = useCtfStore((s) => s.machines);
  const reportMachineId = useCtfStore((s) => s.reportMachineId);
  const setReportMachineId = useCtfStore((s) => s.setReportMachineId);

  const reportMachine = reportMachineId ? machines.find((m) => m.id === reportMachineId) || null : null;

  // Guarantee that all 45 completed HTB targets are populated in active state and profile,
  // and force brand to SPECTER CTF if still set to legacy rootvector
  useEffect(() => {
    const state = useCtfStore.getState();
    const current = state.machines;
    const merged = mergeMachinesWithCatalog(current);
    const updates: Partial<typeof state> = { machines: merged };
    if (!state.appBrand || state.appBrand === 'rootvector') {
      updates.appBrand = 'specter';
    }
    useCtfStore.setState(updates);
    useCtfStore.getState().saveProfileData();
  }, []);

  // Sync store activeTab with route
  useEffect(() => {
    const path = location.pathname;
    if (path.startsWith('/methodology')) {
      setActiveTab('methodology');
    } else if (path.startsWith('/cheatsheets')) {
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
    <div className="min-h-screen bg-cyber-bg text-cyber-text flex flex-col font-mono selection:bg-cyber-emerald selection:text-black relative">
      {/* Top glowing laser scroll progress bar */}
      <ScrollProgressBar />

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

      {/* Deploy Target Modal */}
      <NewMachineModal />

      {/* Executive Pentest Pre-Report Modal */}
      <PentestReportModal
        machine={reportMachine}
        isOpen={Boolean(reportMachineId)}
        onClose={() => setReportMachineId(null)}
      />

      {/* Operator & Creator Classified Dossier Modal */}
      <OperatorDossierModal />

      {/* Tactical Top Header */}
      <Header />

      {/* Main Workspace Layout */}
      <div className="flex-1 flex overflow-hidden">
        {/* Responsive Collapsible Sidebar */}
        <Sidebar />

        {/* Dynamic Main Stage View with Cyber Grid Backdrop */}
        <main ref={setScrollElement} className="flex-1 overflow-y-auto p-3 pb-24 sm:p-4 md:p-6 md:pb-6 relative bg-cyber-bg">
          {/* Subtle Cyber Grid Background with Scroll Parallax Drift */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-[0.04] transition-transform duration-75"
            style={{
              backgroundImage: `linear-gradient(#06B6D4 1px, transparent 1px), linear-gradient(90deg, #06B6D4 1px, transparent 1px)`,
              backgroundSize: '36px 36px',
              transform: `translateY(${Math.round(scrollProgress * -60)}px)`,
            }}
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10"
            >
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Navigate to="/tracker" replace />} />
                <Route path="/tracker" element={<TrackerView />} />
                <Route path="/target/:id" element={<TargetDetailPage />} />
                <Route path="/methodology" element={<MethodologyPage />} />
                <Route path="/cheatsheets" element={<CheatsheetView />} />
                <Route path="/writeup" element={<WriteupStudio />} />
                <Route path="/writeup/:id" element={<WriteupStudio />} />
                <Route path="/analytics" element={<AnalyticsView />} />
                <Route path="/exam" element={<ExamSimulatorPage />} />
                <Route path="*" element={<Navigate to="/tracker" replace />} />
              </Routes>
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

