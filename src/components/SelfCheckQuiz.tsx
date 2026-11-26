import { useMemo, useState } from 'react';
import { AlertTriangle, Info, RotateCcw, ShieldCheck } from 'lucide-react';
import { SELF_CHECK_QUESTIONS } from '../data/siteContent';

type AnswerValue = 0 | 1 | 2; // 0 = No, 1 = Sometimes, 2 = Often / Yes

const ANSWER_OPTIONS: { value: AnswerValue; label: string }[] = [
  { value: 0, label: 'No / Rarely' },
  { value: 1, label: 'Sometimes' },
  { value: 2, label: 'Yes, often' },
];

export function SelfCheckQuiz() {
  const [answers, setAnswers] = useState<Record<string, AnswerValue>>({});

  const answeredCount = Object.keys(answers).length;
  const isComplete = answeredCount === SELF_CHECK_QUESTIONS.length;

  const totalScore = useMemo(
    () => Object.values(answers).reduce<number>((sum, val) => sum + val, 0),
    [answers]
  );

  const result = useMemo(() => {
    if (!isComplete) return null;
    if (totalScore <= 4) {
      return {
        level: 'Low Concern',
        toneClass: 'border-emerald-400/30 bg-emerald-950/25 text-emerald-100',
        badgeColor: 'text-emerald-300',
        Icon: ShieldCheck,
        headline: 'Early awareness is your edge.',
        guidance:
          'Your answers do not show heavy loss of control right now, but noticing any habit you felt pushed to check on is smart. Set clear boundaries on late-night screens, spending, or weekend drinking before tolerance creeps up.',
        primaryAction: { href: '#toolkit', label: 'Lock in daily habits' },
      };
    }
    if (totalScore <= 9) {
      return {
        level: 'Moderate Concern',
        toneClass: 'border-amber-400/35 bg-amber-950/25 text-amber-100',
        badgeColor: 'text-amber-300',
        Icon: Info,
        headline: 'The habit is taking more than it gives.',
        guidance:
          'You are seeing real friction—whether in sleep, focus, money, or failed cutbacks. Do not wait for a rock-bottom moment. Map your triggers, put blockers and friction in place today, and tell one trusted friend or mentor what you are changing.',
        primaryAction: { href: '#roadmap', label: 'Start the 8-step roadmap' },
      };
    }
    return {
      level: 'High Concern',
      toneClass: 'border-[#E87A24]/50 bg-[#2A180D]/60 text-[#FDECE2]',
      badgeColor: 'text-[#F28C38]',
      Icon: AlertTriangle,
      headline: 'You do not have to carry this alone anymore.',
      guidance:
        'This pattern is actively pulling against your health, performance, and control. Trying to muscle through it in isolation usually leads to exhaustion and another slip. Reach out to a doctor, licensed counselor, or support group this week—and if you use heavy alcohol, benzos, or opioids daily, get medical advice before quitting suddenly.',
      primaryAction: { href: '#get-help', label: 'Find real support now' },
    };
  }, [isComplete, totalScore]);

  const handleSelect = (questionId: string, value: AnswerValue) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleReset = () => {
    setAnswers({});
  };

  return (
    <div className="rounded-xl border border-white/12 bg-[#14161B] p-6 sm:p-8">
      <div className="flex flex-col gap-3 border-b border-white/10 pb-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-semibold text-[#E87A24]">
            100% Private Self-Check · Nothing Saved or Sent
          </p>
          <p className="mt-1 text-sm text-[#A1A6B3]">
            Answer honestly for the habit or substance on your mind. This is an educational check, not a medical diagnosis.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <span className="font-mono text-xs tabular-nums text-[#A1A6B3]">
            {answeredCount} / {SELF_CHECK_QUESTIONS.length} answered
          </span>
          {answeredCount > 0 && (
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex min-h-[38px] items-center gap-1.5 rounded-md border border-white/12 px-3 py-1.5 text-xs font-medium text-[#A1A6B3] whitespace-nowrap shrink-0 hover:border-white/25 hover:text-[#F2F3F5]"
            >
              <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
              Reset
            </button>
          )}
        </div>
      </div>

      {/* Questions List */}
      <div className="mt-6 space-y-5">
        {SELF_CHECK_QUESTIONS.map((q, idx) => {
          const selected = answers[q.id];
          return (
            <fieldset
              key={q.id}
              className="rounded-lg border border-white/8 bg-[#0C0D10] p-4 sm:p-5"
            >
              <legend className="sr-only">{q.prompt}</legend>
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <p className="text-sm font-medium leading-relaxed text-[#F2F3F5] sm:text-base">
                  <span className="mr-2 font-mono text-xs tabular-nums text-[#E87A24]">
                    {String(idx + 1).padStart(2, '0')}.
                  </span>
                  {q.prompt}
                </p>

                <div className="grid grid-cols-3 gap-2 shrink-0 lg:w-80">
                  {ANSWER_OPTIONS.map((opt) => {
                    const active = selected === opt.value;
                    return (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => handleSelect(q.id, opt.value)}
                        aria-pressed={active}
                        className={`min-h-[42px] rounded-md border px-2.5 py-2 text-xs font-semibold whitespace-nowrap transition-colors ${
                          active
                            ? 'border-[#E87A24] bg-[#E87A24] text-[#0C0D10]'
                            : 'border-white/10 bg-[#14161B] text-[#A1A6B3] hover:border-white/25 hover:text-[#F2F3F5]'
                        }`}
                      >
                        {opt.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </fieldset>
          );
        })}
      </div>

      {/* Live Result Box */}
      <div className="mt-6">
        {!isComplete ? (
          <div className="rounded-lg border border-white/10 bg-[#0C0D10] p-5 text-sm text-[#A1A6B3]">
            Answer all {SELF_CHECK_QUESTIONS.length} questions above to see your private concern level and suggested next step.
          </div>
        ) : (
          result && (
            <div
              role="status"
              aria-live="polite"
              className={`rounded-xl border p-6 ${result.toneClass}`}
            >
              <div className="flex items-start gap-3.5">
                <result.Icon
                  className={`mt-0.5 h-6 w-6 shrink-0 ${result.badgeColor}`}
                  aria-hidden="true"
                />
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
                    <span className={result.badgeColor}>Result: {result.level}</span>
                    <span aria-hidden="true" className="text-white/40">
                      ·
                    </span>
                    <span className="font-mono tabular-nums text-white/75">
                      Score {totalScore} / {SELF_CHECK_QUESTIONS.length * 2}
                    </span>
                  </div>
                  <h3 className="mt-1.5 font-display text-2xl font-bold text-[#F2F3F5]">
                    {result.headline}
                  </h3>
                  <p className="mt-2 max-w-prose text-sm leading-relaxed text-white/85 sm:text-base">
                    {result.guidance}
                  </p>
                  <p className="mt-3 text-xs text-white/65">
                    Reminder: This private self-check is for reflection only and is not a clinical or medical diagnosis.
                  </p>
                  <div className="mt-5 flex flex-wrap items-center gap-3">
                    <a
                      href={result.primaryAction.href}
                      className="inline-flex min-h-[42px] items-center justify-center rounded-md bg-[#E87A24] px-5 py-2.5 text-sm font-semibold text-[#0C0D10] whitespace-nowrap transition-colors hover:bg-[#F28C38]"
                    >
                      {result.primaryAction.label}
                    </a>
                    <a
                      href="#get-help"
                      className="inline-flex min-h-[42px] items-center justify-center rounded-md border border-white/20 px-4 py-2.5 text-sm font-medium text-[#F2F3F5] whitespace-nowrap transition-colors hover:border-white/40"
                    >
                      View help options
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
