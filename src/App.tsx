import { AlertTriangle, ArrowDownRight, ArrowUpRight, CheckCircle2, ExternalLink, Mail, PhoneCall, ShieldAlert, XCircle } from 'lucide-react';
import { AddictionsExplorer } from './components/AddictionsExplorer';
import { DailyToolkit } from './components/DailyToolkit';
import { FaqAccordion } from './components/FaqAccordion';
import { HeroCounter } from './components/HeroCounter';
import { Navbar } from './components/Navbar';
import { QuotationsSection } from './components/QuotationsSection';
import { ResilientImage } from './components/ResilientImage';
import { SelfCheckQuiz } from './components/SelfCheckQuiz';
import { StoriesSection } from './components/StoriesSection';
import { UrgeTimer } from './components/UrgeTimer';
import {
  BRAIN_MECHANISMS,
  HELPING_FRIEND_GUIDE,
  PERFORMANCE_AREAS,
  RECOVERY_ROADMAP,
  SITE_CONFIG,
  SUPPORT_DIRECTORY,
} from './data/siteContent';

export default function App() {
  return (
    <div id="top" className="min-h-screen bg-[#0C0D10] text-[#F2F3F5]">
      <Navbar />

      <main>
        {/* ================================================================
            SECTION 1: HERO & INTERACTIVE DAYS CLEAN COUNTER
            ================================================================ */}
        <section className="relative overflow-hidden border-b border-white/10">
          {/* Atmospheric background photograph with measured contrast scrim */}
          <div className="pointer-events-none absolute inset-0">
            <ResilientImage
              src="/src/assets/images/hero_dawn_overlook_1795723846933.jpg"
              alt="Young man standing on a quiet waterfront pier looking out toward dawn light"
              className="h-full w-full object-cover object-center opacity-40"
              fallbackTitle="Dawn Overlook"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0C0D10]/80 via-[#0C0D10]/75 to-[#0C0D10]" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0C0D10] via-[#0C0D10]/85 to-[#0C0D10]/45" />
          </div>

          <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:py-24">
            <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
              {/* Left Hero Copy */}
              <div className="flex flex-col justify-center lg:col-span-7">
                <p className="text-xs font-medium tracking-wide text-[#A1A6B3]">
                  {SITE_CONFIG.regionLabel}
                </p>
                <h1 className="mt-3 font-display text-[clamp(2.5rem,5vw,4.25rem)] font-bold leading-[1.03] tracking-tight text-[#F2F3F5]">
                  {SITE_CONFIG.heroHeadline}
                </h1>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-[#D1D5DB] sm:text-lg">
                  {SITE_CONFIG.heroSubtext}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3.5">
                  <a
                    href="#self-check"
                    className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-md bg-[#E87A24] px-6 py-3 text-sm font-semibold text-[#0C0D10] whitespace-nowrap transition-colors duration-150 hover:bg-[#F28C38]"
                  >
                    Check where I stand
                    <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                  <a
                    href="#get-help"
                    className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-md border border-white/20 bg-[#14161B]/80 px-6 py-3 text-sm font-semibold text-[#F2F3F5] whitespace-nowrap transition-colors duration-150 hover:border-white/40 hover:bg-[#1A1D24]"
                  >
                    Get help now
                  </a>
                </div>
              </div>

              {/* Right Interactive Momentum Counter */}
              <div className="flex flex-col justify-center lg:col-span-5">
                <HeroCounter />
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================
            SECTION 2: UNDERSTAND ADDICTION (BRAIN WIRING & WHY WILLPOWER FAILS)
            ================================================================ */}
        <section id="understand" className="border-b border-white/10 py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="text-xs font-semibold tracking-wide text-[#E87A24]">
                  01. Understand the Mechanism
                </p>
                <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#F2F3F5] sm:text-4xl">
                  It is hijacked circuitry, not a moral failure.
                </h2>
                <p className="mt-4 max-w-prose text-base leading-relaxed text-[#A1A6B3]">
                  Addiction happens when a substance or compulsive behavior trains your brain to prioritize short-term chemical relief over everything you actually care about. You can be smart, hardworking, and loyal—and still get caught in a loop your nervous system treats like survival.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl border border-white/10 bg-[#14161B]">
                  <ResilientImage
                    src="/src/assets/images/recovery_discipline_gym_1795723847773.jpg"
                    alt="Young man sitting on a wooden gym bench tying his running shoes in morning window light"
                    className="aspect-[4/3] w-full object-cover"
                    fallbackTitle="Discipline & Recovery"
                  />
                  <p className="border-t border-white/10 px-4 py-3 text-xs text-[#A1A6B3]">
                    Rewiring takes structure and repetition—just like rebuilding after an injury.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
                {BRAIN_MECHANISMS.map((mech) => (
                  <article
                    key={mech.index}
                    className="flex flex-col justify-between rounded-xl border border-white/10 bg-[#14161B] p-6"
                  >
                    <div>
                      <span className="font-mono text-xs font-semibold tabular-nums text-[#E87A24]">
                        {mech.index}
                      </span>
                      <h3 className="mt-2 font-display text-2xl font-bold text-[#F2F3F5]">
                        {mech.title}
                      </h3>
                      <p className="mt-2 text-sm font-medium text-[#D1D5DB]">
                        {mech.summary}
                      </p>
                    </div>
                    <p className="mt-4 border-t border-white/8 pt-4 text-sm leading-relaxed text-[#A1A6B3]">
                      {mech.detail}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================
            SECTION 3: TYPES OF ADDICTION (SEARCHABLE & FILTERABLE)
            ================================================================ */}
        <section id="addictions" className="border-b border-white/10 py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-wide text-[#E87A24]">
                02. Recognize the Pattern
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#F2F3F5] sm:text-4xl">
                Substances and behaviors that quietly take the wheel.
              </h2>
              <p className="mt-3 text-base leading-relaxed text-[#A1A6B3]">
                Addiction is not limited to hard drugs. Anything you rely on repeatedly to numb stress, escape boredom, or chase a rush—even when it damages your life—belongs on the table. Search or filter below to see the warning signs and performance cost.
              </p>
            </div>

            <div className="mt-8">
              <AddictionsExplorer />
            </div>
          </div>
        </section>

        {/* ================================================================
            SECTION 4: HOW ADDICTION DESTROYS PERFORMANCE
            ================================================================ */}
        <section id="performance" className="border-b border-white/10 py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-wide text-[#E87A24]">
                03. The Performance Tax
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#F2F3F5] sm:text-4xl">
                What the habit actually costs across your life.
              </h2>
              <p className="mt-3 text-base leading-relaxed text-[#A1A6B3]">
                Most guys do not notice the slide all at once. It shows up as slightly worse sleep, slower recovery, tighter money, and broken focus—until months have passed without real progress.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {PERFORMANCE_AREAS.map((area, idx) => (
                <article
                  key={area.id}
                  className="flex flex-col justify-between rounded-xl border border-white/10 bg-[#14161B] p-5"
                >
                  <div>
                    <span className="font-mono text-xs tabular-nums text-[#A1A6B3]">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <h3 className="mt-1.5 font-display text-2xl font-bold text-[#F2F3F5]">
                      {area.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-[#A1A6B3]">
                      {area.reality}
                    </p>
                  </div>
                  <div className="mt-4 border-t border-white/8 pt-3.5">
                    <p className="text-xs font-semibold text-[#E87A24]">When you step out</p>
                    <p className="mt-1 text-xs leading-relaxed text-[#D1D5DB]">
                      {area.recoveryGain}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================
            SECTION 5: WARNING SIGNS & PRIVATE SELF-CHECK QUIZ
            ================================================================ */}
        <section id="self-check" className="border-b border-white/10 py-16 sm:py-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-wide text-[#E87A24]">
                04. Honest Check-In
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#F2F3F5] sm:text-4xl">
                Check where you stand right now.
              </h2>
              <p className="mt-3 text-base leading-relaxed text-[#A1A6B3]">
                No account, no tracking, no lecture. Take sixty seconds to answer eight direct questions and get an honest read on your next move.
              </p>
            </div>

            <div className="mt-8">
              <SelfCheckQuiz />
            </div>
          </div>
        </section>

        {/* ================================================================
            SECTION 6: HOW TO OVERCOME IT (PRACTICAL RECOVERY ROADMAP)
            ================================================================ */}
        <section id="roadmap" className="border-b border-white/10 py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-wide text-[#E87A24]">
                05. Recovery Roadmap
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#F2F3F5] sm:text-4xl">
                A practical, step-by-step way out.
              </h2>
              <p className="mt-3 text-base leading-relaxed text-[#A1A6B3]">
                Getting clean is not about one dramatic speech at midnight. It is about building a system that holds up when you are tired, stressed, and alone on a Friday night.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
              {RECOVERY_ROADMAP.map((step) => (
                <article
                  key={step.number}
                  className={`rounded-xl border p-6 ${
                    step.isMedicalWarning
                      ? 'border-amber-400/40 bg-amber-950/25'
                      : 'border-white/10 bg-[#14161B]'
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span
                      className={`font-mono text-xs font-semibold tabular-nums ${
                        step.isMedicalWarning ? 'text-amber-300' : 'text-[#E87A24]'
                      }`}
                    >
                      Step {step.number}
                    </span>
                    {step.isMedicalWarning && (
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-300">
                        <AlertTriangle className="h-4 w-4" aria-hidden="true" />
                        Medical Safety Critical
                      </span>
                    )}
                  </div>

                  <h3 className="mt-2 font-display text-2xl font-bold text-[#F2F3F5]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#D1D5DB]">
                    {step.summary}
                  </p>

                  <ul className="mt-4 space-y-2 border-t border-white/10 pt-4 text-sm leading-relaxed text-[#A1A6B3]">
                    {step.actions.map((action) => (
                      <li key={action} className="flex gap-2.5">
                        <span
                          className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${
                            step.isMedicalWarning ? 'bg-amber-300' : 'bg-[#E87A24]'
                          }`}
                          aria-hidden="true"
                        />
                        <span>{action}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <UrgeTimer />
          </div>
        </section>

        {/* ================================================================
            SECTION 7: DAILY RECOVERY TOOLKIT
            ================================================================ */}
        <section id="toolkit" className="border-b border-white/10 py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-wide text-[#E87A24]">
                06. Daily Recovery Toolkit
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#F2F3F5] sm:text-4xl">
                Win today with five boring, reliable basics.
              </h2>
              <p className="mt-3 text-base leading-relaxed text-[#A1A6B3]">
                Come back to this daily checklist whenever your head feels noisy. Everything saves locally in your browser so your routine stays yours.
              </p>
            </div>

            <div className="mt-8">
              <DailyToolkit />
            </div>
          </div>
        </section>

        {/* ================================================================
            SECTION 8: REAL STORIES (FILTERABLE + MODAL + SHARE FORM)
            ================================================================ */}
        <StoriesSection />

        {/* ================================================================
            QUOTATIONS: QUOTE OF THE DAY & ROTATING CAROUSEL
            ================================================================ */}
        <QuotationsSection />

        {/* ================================================================
            SECTION 9: HELPING A FRIEND OR BROTHER
            ================================================================ */}
        <section id="help-friend" className="border-b border-white/10 py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <p className="text-xs font-semibold tracking-wide text-[#E87A24]">
                  08. Helping a Friend or Brother
                </p>
                <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#F2F3F5] sm:text-4xl">
                  Worried about someone close to you?
                </h2>
                <p className="mt-3 max-w-prose text-base leading-relaxed text-[#A1A6B3]">
                  You do not need clinical training to be a steady friend. How you bring it up decides whether he shuts down or lets you in.
                </p>
              </div>
              <div className="lg:col-span-5">
                <div className="overflow-hidden rounded-xl border border-white/10 bg-[#14161B]">
                  <ResilientImage
                    src="/src/assets/images/brotherhood_support_talk_1795723848449.jpg"
                    alt="Two young friends sitting on stone steps outdoors at dusk having an open conversation"
                    loading="lazy"
                    className="aspect-[16/9] w-full object-cover"
                    fallbackTitle="Friends Talking"
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-[#14161B] p-6">
                <div className="flex items-center gap-2.5 border-b border-white/10 pb-4">
                  <CheckCircle2 className="h-5 w-5 text-emerald-400" aria-hidden="true" />
                  <h3 className="font-display text-2xl font-bold text-[#F2F3F5]">
                    What actually helps
                  </h3>
                </div>
                <ul className="mt-5 space-y-4">
                  {HELPING_FRIEND_GUIDE.doList.map((item) => (
                    <li key={item.title}>
                      <h4 className="text-sm font-semibold text-[#F2F3F5]">{item.title}</h4>
                      <p className="mt-1 text-sm leading-relaxed text-[#A1A6B3]">{item.detail}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-white/10 bg-[#14161B] p-6">
                <div className="flex items-center gap-2.5 border-b border-white/10 pb-4">
                  <XCircle className="h-5 w-5 text-[#E87A24]" aria-hidden="true" />
                  <h3 className="font-display text-2xl font-bold text-[#F2F3F5]">
                    What pushes him away
                  </h3>
                </div>
                <ul className="mt-5 space-y-4">
                  {HELPING_FRIEND_GUIDE.avoidList.map((item) => (
                    <li key={item.title}>
                      <h4 className="text-sm font-semibold text-[#F2F3F5]">{item.title}</h4>
                      <p className="mt-1 text-sm leading-relaxed text-[#A1A6B3]">{item.detail}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================
            SECTION 10: GET HELP NOW (EMERGENCY & SUPPORT DIRECTORY)
            ================================================================ */}
        <section id="get-help" className="border-b border-white/10 py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-wide text-[#E87A24]">
                09. Get Help Now
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#F2F3F5] sm:text-4xl">
                Real support options—confidential and free to start.
              </h2>
              <p className="mt-3 text-base leading-relaxed text-[#A1A6B3]">
                Reaching out early saves years of damage. Call or message our direct support line, connect by email for counseling guidance, or use the global directory to locate care near you.
              </p>
            </div>

            {/* Immediate Emergency Banner */}
            <div className="mt-8 rounded-xl border border-[#E87A24]/60 bg-[#2A180D]/60 p-6 sm:p-7">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                <ShieldAlert
                  className="h-7 w-7 shrink-0 text-[#F28C38]"
                  aria-hidden="true"
                />
                <div className="flex-1">
                  <h3 className="font-display text-2xl font-bold text-[#F2F3F5]">
                    {SUPPORT_DIRECTORY.emergencyBanner.title}
                  </h3>
                  <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[#FDECE2] sm:text-base">
                    {SUPPORT_DIRECTORY.emergencyBanner.message}
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    <a
                      href={`tel:${SITE_CONFIG.helplineNumber}`}
                      className="inline-flex min-h-[44px] items-center gap-2 rounded-md bg-[#E87A24] px-5 py-2.5 text-sm font-semibold text-[#0C0D10] whitespace-nowrap transition-colors hover:bg-[#F28C38]"
                    >
                      <PhoneCall className="h-4 w-4" aria-hidden="true" />
                      Call Helpline: {SITE_CONFIG.helplineNumber}
                    </a>
                    <a
                      href={SUPPORT_DIRECTORY.globalFinderUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[44px] items-center gap-2 rounded-md border border-white/25 px-5 py-2.5 text-sm font-semibold text-[#F2F3F5] whitespace-nowrap transition-colors hover:border-white/45"
                    >
                      Find a helpline in your country (findahelpline.com)
                      <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Local Directory & Helpline Cards */}
            <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-3">
              {SUPPORT_DIRECTORY.resources.map((res) => (
                <div
                  key={res.type}
                  className="flex flex-col justify-between rounded-xl border border-white/12 bg-[#14161B] p-6"
                >
                  <div>
                    <p className="text-xs font-semibold text-[#E87A24]">{res.type}</p>
                    <h3 className="mt-2 font-display text-xl font-bold text-[#F2F3F5]">
                      {res.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#A1A6B3]">{res.detail}</p>
                  </div>
                  <div className="mt-5 flex items-center gap-2 border-t border-white/10 pt-4 font-mono text-xs text-[#F2F3F5]">
                    {res.href.startsWith('mailto:') ? (
                      <Mail className="h-4 w-4 shrink-0 text-[#E87A24]" aria-hidden="true" />
                    ) : (
                      <PhoneCall className="h-4 w-4 shrink-0 text-[#E87A24]" aria-hidden="true" />
                    )}
                    <a
                      href={res.href}
                      className="font-semibold text-[#F2F3F5] underline underline-offset-4 hover:text-[#E87A24]"
                    >
                      {res.contactLabel}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Free Peer Support Groups */}
            <div className="mt-10 rounded-xl border border-white/10 bg-[#14161B] p-6 sm:p-8">
              <h3 className="font-display text-2xl font-bold text-[#F2F3F5]">
                Free Peer Support Groups (Anonymous &amp; Worldwide)
              </h3>
              <p className="mt-1.5 text-sm text-[#A1A6B3]">
                Walking into your first meeting—online or in person—is one of the fastest ways to realize you are not the only guy fighting this.
              </p>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {SUPPORT_DIRECTORY.peerGroups.map((group) => (
                  <a
                    key={group.name}
                    href={group.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start justify-between gap-4 rounded-lg border border-white/10 bg-[#0C0D10] p-4 transition-colors hover:border-[#E87A24]/50"
                  >
                    <div>
                      <h4 className="text-base font-semibold text-[#F2F3F5] group-hover:text-[#E87A24]">
                        {group.name}
                      </h4>
                      <p className="mt-1 text-sm leading-relaxed text-[#A1A6B3]">
                        {group.focus}
                      </p>
                    </div>
                    <ArrowUpRight
                      className="mt-1 h-4 w-4 shrink-0 text-[#A1A6B3] group-hover:text-[#E87A24]"
                      aria-hidden="true"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================
            SECTION 11: FAQ
            ================================================================ */}
        <section id="faq" className="py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-wide text-[#E87A24]">
                10. Straight Answers
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#F2F3F5] sm:text-4xl">
                Questions guys usually hesitate to ask out loud.
              </h2>
            </div>

            <div className="mt-8">
              <FaqAccordion />
            </div>
          </div>
        </section>
      </main>

      {/* ================================================================
          SECTION 12: FOOTER (DISCLAIMER, PRIVACY, CONTACT)
          ================================================================ */}
      <footer className="border-t border-white/10 bg-[#090A0D] py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
            <div className="md:col-span-4">
              <a
                href="#top"
                className="font-display text-2xl font-bold tracking-tight text-[#F2F3F5]"
              >
                {SITE_CONFIG.siteName}
              </a>
              <p className="mt-3 text-sm leading-relaxed text-[#A1A6B3]">
                Built to give young men clear, non-judgmental information and practical tools for overcoming substance and behavioral addictions.
              </p>
              <p className="mt-3 text-xs text-[#A1A6B3]">
                Contact:{' '}
                <a
                  href={`mailto:${SITE_CONFIG.contactEmail}`}
                  className="text-[#F2F3F5] underline underline-offset-4 hover:text-[#E87A24]"
                >
                  {SITE_CONFIG.contactEmail}
                </a>
              </p>
            </div>

            <div className="md:col-span-4">
              <h3 className="text-xs font-semibold tracking-wide text-[#F2F3F5]">
                Medical &amp; Educational Disclaimer
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-[#A1A6B3]">
                This website is strictly for educational support and personal reflection. It does not provide medical advice, clinical diagnosis, or emergency treatment. Always consult a qualified physician before stopping heavy alcohol, benzodiazepines, or opioids.
              </p>
            </div>

            <div className="md:col-span-4">
              <h3 className="text-xs font-semibold tracking-wide text-[#F2F3F5]">
                Privacy Statement
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-[#A1A6B3]">
                Your privacy comes first. The self-check quiz runs solely in memory and resets when closed. Your days-clean counter and daily checklist stay strictly on your own device via browser storage—zero accounts, zero tracking cookies, and zero server uploads.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-[#6B7280]">
            <span>{SITE_CONFIG.siteName} · Educational Recovery Guide</span>
            <div className="flex flex-wrap gap-5">
              <a href="#understand" className="hover:text-[#A1A6B3]">
                Understand
              </a>
              <a href="#addictions" className="hover:text-[#A1A6B3]">
                Addictions
              </a>
              <a href="#self-check" className="hover:text-[#A1A6B3]">
                Self-Check
              </a>
              <a href="#roadmap" className="hover:text-[#A1A6B3]">
                Roadmap
              </a>
              <a href="#get-help" className="hover:text-[#A1A6B3]">
                Get Help
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
