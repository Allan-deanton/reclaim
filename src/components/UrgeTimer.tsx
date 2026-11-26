import { useEffect, useState } from 'react';
import { Pause, Play, RotateCcw, Timer } from 'lucide-react';

const TEN_MINUTES_SECONDS = 10 * 60;

const URGE_STEPS = [
  {
    step: '01',
    title: 'Break physical isolation',
    detail: 'Leave your bedroom or bathroom immediately. Put your phone face-down in another room.',
  },
  {
    step: '02',
    title: 'Reset your nervous system',
    detail: 'Splash cold water on your face and drink one full glass of water slowly.',
  },
  {
    step: '03',
    title: 'Burn off the spike',
    detail: 'Do 20–30 pushups, stretch, or step outside for a fast 5-minute walk.',
  },
  {
    step: '04',
    title: 'Wait out the wave',
    detail: 'Cravings peak and drop when starved of stimulation. If it still hits hard after 10:00, text a friend or call 0791839151.',
  },
];

export function UrgeTimer() {
  const [secondsLeft, setSecondsLeft] = useState(TEN_MINUTES_SECONDS);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;
    const id = window.setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          setRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => window.clearInterval(id);
  }, [running]);

  const minutes = String(Math.floor(secondsLeft / 60)).padStart(2, '0');
  const seconds = String(secondsLeft % 60).padStart(2, '0');
  const elapsedPercent = Math.round(
    ((TEN_MINUTES_SECONDS - secondsLeft) / TEN_MINUTES_SECONDS) * 100
  );

  const handleReset = () => {
    setRunning(false);
    setSecondsLeft(TEN_MINUTES_SECONDS);
  };

  return (
    <div
      id="urge-timer"
      className="mt-10 rounded-xl border border-[#E87A24]/40 bg-[#14161B] p-6 sm:p-8"
    >
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Left Timer Column */}
        <div className="flex flex-col justify-between lg:col-span-5">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#E87A24]">
              <Timer className="h-4 w-4" aria-hidden="true" />
              <span>When an Urge Hits Tonight · 10-Minute Rule</span>
            </div>
            <h3 className="mt-2 font-display text-2xl font-bold text-[#F2F3F5] sm:text-3xl">
              Do not decide in the first ten minutes.
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[#A1A6B3]">
              Start this timer instead of giving in on autopilot. An urge feels urgent right now, but it loses intensity when you refuse to feed it for ten minutes.
            </p>
          </div>

          <div className="mt-6 rounded-lg border border-white/10 bg-[#0C0D10] p-5">
            <div className="flex items-baseline justify-between gap-4">
              <span
                aria-live="off"
                className="font-mono text-5xl font-semibold tabular-nums tracking-tight text-[#F2F3F5]"
              >
                {minutes}:{seconds}
              </span>
              <span className="font-mono text-xs tabular-nums text-[#A1A6B3]">
                {secondsLeft === 0 ? 'Wave cleared' : `${elapsedPercent}% complete`}
              </span>
            </div>

            <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-[#14161B]">
              <div
                className="h-full bg-[#E87A24] transition-all duration-300"
                style={{ width: `${elapsedPercent}%` }}
              />
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-2.5">
              <button
                type="button"
                onClick={() => {
                  if (secondsLeft === 0) {
                    setSecondsLeft(TEN_MINUTES_SECONDS);
                  }
                  setRunning((prev) => !prev);
                }}
                className="inline-flex min-h-[42px] items-center gap-2 rounded-md bg-[#E87A24] px-4 py-2 text-xs font-semibold text-[#0C0D10] whitespace-nowrap transition-colors hover:bg-[#F28C38]"
              >
                {running ? (
                  <>
                    <Pause className="h-4 w-4" aria-hidden="true" />
                    Pause timer
                  </>
                ) : (
                  <>
                    <Play className="h-4 w-4" aria-hidden="true" />
                    {secondsLeft === TEN_MINUTES_SECONDS
                      ? 'Start 10-min reset'
                      : secondsLeft === 0
                        ? 'Restart 10-min reset'
                        : 'Resume timer'}
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handleReset}
                className="inline-flex min-h-[42px] items-center gap-1.5 rounded-md border border-white/15 px-3.5 py-2 text-xs font-medium text-[#A1A6B3] whitespace-nowrap transition-colors hover:border-white/30 hover:text-[#F2F3F5]"
              >
                <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                Reset
              </button>
            </div>
          </div>
        </div>

        {/* Right 4-Step Immediate Action Grid */}
        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:col-span-7">
          {URGE_STEPS.map((item) => (
            <div
              key={item.step}
              className="rounded-lg border border-white/10 bg-[#0C0D10] p-4"
            >
              <span className="font-mono text-xs font-semibold tabular-nums text-[#E87A24]">
                {item.step}
              </span>
              <h4 className="mt-1.5 text-sm font-semibold text-[#F2F3F5]">{item.title}</h4>
              <p className="mt-1 text-xs leading-relaxed text-[#A1A6B3]">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
