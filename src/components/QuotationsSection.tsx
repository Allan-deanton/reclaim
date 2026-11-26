import { useEffect, useState, type KeyboardEvent } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { QUOTATIONS_LIST } from '../data/storiesAndQuotes';

function getDayOfYearIndex(total: number): number {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - start.getTime();
  const day = Math.floor(diff / (1000 * 60 * 60 * 24));
  return day % total;
}

export function QuotationsSection() {
  const quoteOfDay = QUOTATIONS_LIST[getDayOfYearIndex(QUOTATIONS_LIST.length)];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isHoveredOrFocused, setIsHoveredOrFocused] = useState(false);
  const [manualPaused, setManualPaused] = useState(false);

  const isPaused = isHoveredOrFocused || manualPaused;

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + QUOTATIONS_LIST.length) % QUOTATIONS_LIST.length);
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % QUOTATIONS_LIST.length);
  };

  useEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isPaused || prefersReduced) return;

    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % QUOTATIONS_LIST.length);
    }, 7000);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      goPrev();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      goNext();
    }
  };

  const currentQuote = QUOTATIONS_LIST[activeIndex];

  return (
    <section id="quotations" className="border-b border-white/10 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-wide text-[#E87A24]">
            Voices &amp; Perspective
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#F2F3F5] sm:text-4xl">
            Words worth keeping close on hard nights.
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Quote of the Day Block */}
          <div className="flex flex-col justify-between rounded-xl border border-white/12 bg-[#14161B] p-6 sm:p-8 lg:col-span-5">
            <div>
              <p className="text-xs font-semibold tracking-wide text-[#E87A24]">
                Quote of the Day
              </p>
              <div className="mt-4 h-[2px] w-12 bg-[#E87A24]" aria-hidden="true" />
              <blockquote className="mt-5 font-display text-2xl font-bold leading-snug text-[#F2F3F5] sm:text-3xl">
                &ldquo;{quoteOfDay.quote}&rdquo;
              </blockquote>
            </div>

            <div className="mt-6 border-t border-white/10 pt-4">
              <p className="text-sm font-semibold text-[#F2F3F5]">{quoteOfDay.attribution}</p>
              <p className="mt-0.5 text-xs text-[#A1A6B3]">{quoteOfDay.sourceNote}</p>
            </div>
          </div>

          {/* Rotating Quote Carousel */}
          <div
            role="region"
            aria-roledescription="carousel"
            aria-label="Recovery quotations carousel"
            tabIndex={0}
            onKeyDown={handleKeyDown}
            onMouseEnter={() => setIsHoveredOrFocused(true)}
            onMouseLeave={() => setIsHoveredOrFocused(false)}
            onFocus={() => setIsHoveredOrFocused(true)}
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget)) {
                setIsHoveredOrFocused(false);
              }
            }}
            className="flex flex-col justify-between rounded-xl border border-white/12 bg-[#14161B] p-6 focus:border-[#E87A24] focus:outline-none sm:p-8 lg:col-span-7"
          >
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-xs text-[#A1A6B3]">
                  <span className="font-mono tabular-nums text-[#E87A24]">
                    {String(activeIndex + 1).padStart(2, '0')} / {QUOTATIONS_LIST.length}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{isPaused ? 'Paused' : 'Auto-advancing'}</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setManualPaused((prev) => !prev)}
                    aria-label={manualPaused ? 'Resume quote rotation' : 'Pause quote rotation'}
                    className="inline-flex h-9 items-center gap-1.5 rounded-md border border-white/12 px-2.5 text-xs font-medium text-[#A1A6B3] transition-colors hover:border-white/30 hover:text-[#F2F3F5]"
                  >
                    {manualPaused ? (
                      <>
                        <Play className="h-3.5 w-3.5" aria-hidden="true" />
                        Resume
                      </>
                    ) : (
                      <>
                        <Pause className="h-3.5 w-3.5" aria-hidden="true" />
                        Pause
                      </>
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={goPrev}
                    aria-label="Previous quote"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/12 text-[#F2F3F5] transition-colors hover:border-white/30"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={goNext}
                    aria-label="Next quote"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/12 text-[#F2F3F5] transition-colors hover:border-white/30"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="mt-6 h-[2px] w-16 bg-[#E87A24]" aria-hidden="true" />

              <blockquote
                aria-live="polite"
                className="mt-5 font-display text-3xl font-bold leading-tight text-[#F2F3F5] sm:text-4xl"
              >
                &ldquo;{currentQuote.quote}&rdquo;
              </blockquote>
            </div>

            <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-[#F2F3F5]">
                  {currentQuote.attribution}
                </p>
                <p className="mt-0.5 text-xs text-[#A1A6B3]">{currentQuote.sourceNote}</p>
              </div>

              {/* Slide Progress Selectors */}
              <div className="flex flex-wrap items-center gap-1.5" aria-label="Choose quote">
                {QUOTATIONS_LIST.map((item, idx) => {
                  const isActive = idx === activeIndex;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setActiveIndex(idx)}
                      aria-label={`Show quote ${idx + 1} of ${QUOTATIONS_LIST.length}`}
                      aria-current={isActive ? 'true' : undefined}
                      className={`h-2 rounded-full transition-all ${
                        isActive
                          ? 'w-6 bg-[#E87A24]'
                          : 'w-2 bg-white/20 hover:bg-white/40'
                      }`}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <p className="mt-4 text-xs text-[#6B7280]">
          Tip: Hover or focus the quote panel to pause, and use Left / Right arrow keys to step through all {QUOTATIONS_LIST.length} quotes.
        </p>
      </div>
    </section>
  );
}
