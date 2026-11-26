import { useEffect, useState } from 'react';
import { Check, RefreshCw, Trash2 } from 'lucide-react';
import { DAILY_TOOLKIT_HABITS, MOTIVATIONAL_QUOTES } from '../data/siteContent';

const TOOLKIT_STORAGE_KEY = 'reclaim_daily_toolkit_v1';

interface ToolkitStorage {
  date: string;
  checkedIds: string[];
  note: string;
}

function getTodayIso(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function DailyToolkit() {
  const today = getTodayIso();

  const [state, setState] = useState<ToolkitStorage>(() => {
    try {
      const saved = localStorage.getItem(TOOLKIT_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as Partial<ToolkitStorage>;
        if (parsed.date === today) {
          return {
            date: today,
            checkedIds: Array.isArray(parsed.checkedIds) ? parsed.checkedIds : [],
            note: typeof parsed.note === 'string' ? parsed.note : '',
          };
        }
      }
    } catch {
      // Ignore storage errors
    }
    return { date: today, checkedIds: [], note: '' };
  });

  const [quoteIdx, setQuoteIdx] = useState(0);

  useEffect(() => {
    try {
      localStorage.setItem(TOOLKIT_STORAGE_KEY, JSON.stringify(state));
    } catch {
      // Ignore storage errors
    }
  }, [state]);

  const toggleHabit = (id: string) => {
    setState((prev) => {
      const exists = prev.checkedIds.includes(id);
      return {
        ...prev,
        checkedIds: exists
          ? prev.checkedIds.filter((item) => item !== id)
          : [...prev.checkedIds, id],
      };
    });
  };

  const clearToday = () => {
    setState({ date: today, checkedIds: [], note: '' });
  };

  const completedCount = state.checkedIds.length;
  const totalCount = DAILY_TOOLKIT_HABITS.length;
  const currentQuote = MOTIVATIONAL_QUOTES[quoteIdx];

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
      {/* Daily Habit Checklist */}
      <div className="rounded-xl border border-white/12 bg-[#14161B] p-6 lg:col-span-7">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
          <div>
            <h3 className="font-display text-2xl font-bold text-[#F2F3F5]">
              Today&apos;s Baseline Checklist
            </h3>
            <p className="mt-0.5 text-xs text-[#A1A6B3]">
              Stored privately in your browser for {today}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm font-semibold tabular-nums text-[#E87A24]">
              {completedCount} / {totalCount} done
            </span>
            {(completedCount > 0 || state.note.length > 0) && (
              <button
                type="button"
                onClick={clearToday}
                aria-label="Clear today's checklist"
                className="inline-flex min-h-[36px] items-center gap-1 rounded-md border border-white/10 px-2.5 py-1 text-xs text-[#A1A6B3] hover:border-white/25 hover:text-[#F2F3F5]"
              >
                <Trash2 className="h-3.5 w-3.5" aria-hidden="true" />
                Clear
              </button>
            )}
          </div>
        </div>

        <div className="mt-4 space-y-2.5">
          {DAILY_TOOLKIT_HABITS.map((habit) => {
            const checked = state.checkedIds.includes(habit.id);
            return (
              <button
                key={habit.id}
                type="button"
                onClick={() => toggleHabit(habit.id)}
                aria-pressed={checked}
                className={`flex w-full items-start gap-3.5 rounded-lg border p-3.5 text-left transition-colors ${
                  checked
                    ? 'border-[#E87A24]/45 bg-[#E87A24]/10'
                    : 'border-white/8 bg-[#0C0D10] hover:border-white/20'
                }`}
              >
                <span
                  className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border transition-colors ${
                    checked
                      ? 'border-[#E87A24] bg-[#E87A24] text-[#0C0D10]'
                      : 'border-white/25 bg-transparent text-transparent'
                  }`}
                  aria-hidden="true"
                >
                  <Check className="h-3.5 w-3.5 stroke-[3]" />
                </span>
                <div>
                  <span
                    className={`block text-sm font-semibold ${
                      checked ? 'text-[#F2F3F5]' : 'text-[#F2F3F5]'
                    }`}
                  >
                    {habit.label}
                  </span>
                  <span className="mt-0.5 block text-xs leading-relaxed text-[#A1A6B3]">
                    {habit.detail}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Private 1-line check-in note */}
        <div className="mt-5">
          <label htmlFor="daily-note" className="block text-xs font-medium text-[#A1A6B3]">
            Quick private note (trigger spotted today or one win):
          </label>
          <input
            id="daily-note"
            type="text"
            maxLength={140}
            value={state.note}
            onChange={(e) => setState((prev) => ({ ...prev, note: e.target.value }))}
            placeholder="e.g., Craving hit at 9 PM—went for a 15-minute walk instead."
            className="mt-1.5 min-h-[42px] w-full rounded-md border border-white/10 bg-[#0C0D10] px-3 py-2 text-sm text-[#F2F3F5] placeholder:text-[#6B7280] focus:border-[#E87A24] focus:outline-none"
          />
        </div>
      </div>

      {/* Grounded Coach Note / Quote Panel */}
      <div className="flex flex-col justify-between rounded-xl border border-white/12 bg-[#14161B] p-6 lg:col-span-5">
        <div>
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <span className="text-xs font-semibold text-[#E87A24]">
              Daily Mindset Anchor
            </span>
            <button
              type="button"
              onClick={() => setQuoteIdx((prev) => (prev + 1) % MOTIVATIONAL_QUOTES.length)}
              className="inline-flex min-h-[36px] items-center gap-1.5 rounded-md border border-white/12 px-3 py-1 text-xs font-medium text-[#A1A6B3] whitespace-nowrap shrink-0 transition-colors hover:border-white/25 hover:text-[#F2F3F5]"
            >
              <RefreshCw className="h-3.5 w-3.5" aria-hidden="true" />
              Next note
            </button>
          </div>

          <blockquote className="mt-6 font-display text-2xl font-semibold leading-snug text-[#F2F3F5] sm:text-3xl">
            &ldquo;{currentQuote.quote}&rdquo;
          </blockquote>
          <p className="mt-4 text-xs text-[#A1A6B3]">{currentQuote.context}</p>
        </div>

        <div className="mt-8 rounded-lg border border-white/8 bg-[#0C0D10] p-4">
          <p className="text-xs font-semibold text-[#F2F3F5]">
            Why small daily habits beat hype
          </p>
          <p className="mt-1.5 text-xs leading-relaxed text-[#A1A6B3]">
            Cravings spike hardest when you are hungry, sleep-deprived, isolated, or stuck in your room. Hitting these five basics lowers the physical noise so your judgment stays sharp.
          </p>
        </div>
      </div>
    </div>
  );
}
