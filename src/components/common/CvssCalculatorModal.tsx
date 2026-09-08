import React, { useRef } from 'react';
import { X, ShieldAlert } from 'lucide-react';
import { useCtfStore } from '../../store/useCtfStore';
import { CvssCalculator } from './CvssCalculator';
import { useModalA11y } from '../../hooks/useModalA11y';

interface CvssCalculatorModalProps {
  onInsertIntoWriteup?: (markdown: string) => void;
}

export const CvssCalculatorModal: React.FC<CvssCalculatorModalProps> = ({
  onInsertIntoWriteup,
}) => {
  const { cvssModalOpen, cvssInitialVector, setCvssModalOpen, cvssInsertHandler } = useCtfStore();
  const modalContainerRef = useRef<HTMLDivElement>(null);

  useModalA11y({
    isOpen: cvssModalOpen,
    onClose: () => setCvssModalOpen(false),
    modalRef: modalContainerRef,
  });

  if (!cvssModalOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[125] flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md animate-fade-in font-mono"
      onClick={() => setCvssModalOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-labelledby="cvss-modal-title"
    >
      <div
        ref={modalContainerRef}
        className="w-full max-w-4xl h-full sm:h-auto sm:max-h-[92vh] flex flex-col rounded-xl border border-purple-500/30 bg-cyber-card shadow-[0_0_50px_rgba(168,85,247,0.15)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex-shrink-0 flex items-center justify-between border-b border-cyber-border p-4 bg-cyber-bg/95">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <h3 id="cvss-modal-title" className="text-base font-bold text-white tracking-wide flex items-center gap-2">
                CVSS v3.1 CALCULATOR <span className="text-purple-400">//</span> VECTOR GENERATOR
              </h3>
              <p className="text-xs text-cyber-muted">
                Compute Common Vulnerability Scoring System v3.1 base metrics according to official specifications.
              </p>
            </div>
          </div>

          <button
            onClick={() => setCvssModalOpen(false)}
            className="p-2 rounded-lg text-cyber-muted hover:text-white hover:bg-slate-800 transition-colors"
            title="Close (Esc)"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-4 bg-[#070b16]">
          <CvssCalculator
            initialVector={cvssInitialVector}
            onInsertIntoWriteup={(md) => {
              const handler = onInsertIntoWriteup || cvssInsertHandler;
              handler?.(md);
              setCvssModalOpen(false);
            }}
          />
        </div>

        {/* Modal Footer */}
        <div className="p-3 bg-[#080d19] border-t border-cyber-border flex items-center justify-end text-xs text-cyber-muted flex-shrink-0">
          <button
            onClick={() => setCvssModalOpen(false)}
            className="px-4 py-1.5 rounded bg-cyber-card hover:bg-slate-800 text-white border border-cyber-border text-xs font-bold transition-all"
          >
            Close Calculator
          </button>
        </div>
      </div>
    </div>
  );
};
