import { useEffect, useState } from 'react';
import { Minus, Plus, RotateCcw } from 'lucide-react';

const STORAGE_KEY = 'reclaim_days_clean_v1';

interface CounterState {
  days: number;
  goalLabel: string;
}

const MILESTONES = [
  { days: 1, label: '24 Hours' },
  { days: 7, label: '7 Days' },
  { days: 30, label: '30 Days' },
  { days: 90, label: '90 Days' },
  { days: 365, label: '1 Year' },
];

export function HeroCounter() {
  const [state, setState] = useState<CounterState>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as Partial<CounterState>;
        return {
          days: typeof parsed.days === 'number' && parsed.days >= 0 ? parsed.days : 0,
          goalLabel: typeof parsed.goalLabel === 'string' ? parsed.goalLabel : '',
        };
      }
    } catch {
      // Ignore storage access errors in restricted modes
    }
    return { days: 0, goalLabel: '' };
  });

  const [resetMessage, setResetMessage] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // Ignore storage write errors
    }
  }, [state]);

  const adjustDays = (delta: number) => {
    setResetMessage(false);
    setState((prev) => ({
      ...prev,
      days: Math.max(0, Math.min(9999, prev.days + delta)),
    }));
  };

  const handleDirectInput = (raw: string) => {
    setResetMessage(false);
    const cleaned = raw.replace(/\D/g, '');
    const numeric = cleaned === '' ? 0 : Math.min(9999, parseInt(cleaned, 10));
    setState((prev) => ({ ...prev, days: numeric }));
  };

  const handleSlipReset = () => {
    setState((prev) => ({ ...prev, days: 0 }));
    setResetMessage(true);
  };

  const nextMilestone = MILESTONES.find((m) => m.days > state.days) ?? MILESTONES[MILESTONES.length - 1];

  return (
    <div className="rounded-xl border border-white/12 bg-[#14161B]/95 p-6 backdrop-blur-sm">
      <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div>
          <p className="text-xs font-semibold tracking-wide text-[#E87A24]">
            Private Momentum Counter
          </p>
          <p className="mt-0.5 text-xs text-[#A1A6B3]">
            Saved on this device only · Nothing uploaded
          </p>
        </div>
        <button
          type="button"
          onClick={handleSlipReset}
          className="inline-flex min-h-[40px] items-center gap-1.5 rounded-md border border-white/12 px-3 py-1.5 text-xs font-medium text-[#A1A6B3] whitespace-nowrap shrink-0 transition-colors hover:border-white/25 hover:text-[#F2F3F5]"
        >
          <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
          Reset to 0
        </button>
      </div>

      {/* Main Counter Readout */}
      <div className="mt-5 flex items-end justify-between gap-4">
        <div>
          <label htmlFor="days-clean-input" className="block text-xs font-medium text-[#A1A6B3]">
            Days clean or habit-free
          </label>
          <div className="mt-1 flex items-baseline gap-2.5">
            <input
              id="days-clean-input"
              type="text"
              inputMode="numeric"
              aria-label="Days clean count"
              value={state.days}
              onChange={(e) => handleDirectInput(e.target.value)}
              className="w-24 rounded-md border border-white/12 bg-[#0C0D10] px-3 py-1.5 font-mono text-4xl font-semibold tabular-nums text-[#F2F3F5] focus:border-[#E87A24] focus:outline-none"
            />
            <span className="font-display text-2xl font-semibold text-[#A1A6B3]">
              {state.days === 1 ? 'Day' : 'Days'}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => adjustDays(-1)}
            aria-label="Subtract one day"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/12 bg-[#0C0D10] text-[#F2F3F5] transition-colors hover:border-white/30"
          >
            <Minus className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => adjustDays(1)}
            aria-label="Add one day"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-[#E87A24] text-[#0C0D10] transition-colors hover:bg-[#F28C38]"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Optional focus target */}
      <div className="mt-4">
        <label htmlFor="focus-habit-input" className="block text-xs font-medium text-[#A1A6B3]">
          What are you stepping away from? (optional, private)
        </label>
        <input
          id="focus-habit-input"
          type="text"
          maxLength={60}
          placeholder="e.g., Vaping, betting apps, late-night scrolling"
          value={state.goalLabel}
          onChange={(e) => setState((prev) => ({ ...prev, goalLabel: e.target.value }))}
          className="mt-1.5 w-full rounded-md border border-white/10 bg-[#0C0D10] px-3 py-2 text-sm text-[#F2F3F5] placeholder:text-[#6B7280] focus:border-[#E87A24] focus:outline-none"
        />
      </div>

      {/* Milestone progress row */}
      <div className="mt-5 border-t border-white/10 pt-4">
        <div className="flex items-center justify-between text-xs text-[#A1A6B3]">
          <span>
            {state.days === 0
              ? 'Day 0 is where every real turnaround begins.'
              : state.days >= 365
                ? 'Over a full year reclaimed—stay grounded.'
                : `Next checkpoint: ${nextMilestone.label}`}
          </span>
          <span className="font-mono tabular-nums text-[#F2F3F5]">
            {Math.min(100, Math.round((state.days / nextMilestone.days) * 100))}%
          </span>
        </div>
        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-[#0C0D10]">
          <div
            className="h-full bg-[#E87A24] transition-all duration-200"
            style={{
              width: `${Math.min(100, Math.round((state.days / nextMilestone.days) * 100))}%`,
            }}
          />
        </div>
        {resetMessage && (
          <p className="mt-3 text-xs text-[#E87A24]">
            A reset is not failure. Keep what you learned from the last streak and lock in today.
          </p>
        )}
      </div>
    </div>
  );
}
