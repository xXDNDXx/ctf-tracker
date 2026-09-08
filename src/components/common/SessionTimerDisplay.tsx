import React from 'react';
import { useCtfStore } from '../../store/useCtfStore';
import { formatSeconds } from '../../utils/helpers';

interface SessionTimerDisplayProps {
  machineId: string;
  staticSeconds: number;
  className?: string;
}

/**
 * Isolated live timer component.
 * Selectively re-renders every 1 second ONLY when its machine is the currently active engagement target,
 * completely shielding parent modals, cards, and pages from 1Hz re-render cascades.
 */
export const SessionTimerDisplay: React.FC<SessionTimerDisplayProps> = React.memo(({
  machineId,
  staticSeconds,
  className = 'text-xl font-bold text-slate-900 dark:text-white mt-0.5 font-mono',
}) => {
  const isTargetActive = useCtfStore((s) => s.activeTargetId === machineId);
  const activeTimerSeconds = useCtfStore((s) => (s.activeTargetId === machineId ? s.activeTimerSeconds : 0));

  return (
    <span className={className}>
      {formatSeconds(isTargetActive ? activeTimerSeconds : staticSeconds)}
    </span>
  );
});
