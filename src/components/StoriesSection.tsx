import { useEffect, useMemo, useState, type FormEvent } from 'react';
import { ArrowRight, CheckCircle2, Info, X } from 'lucide-react';
import {
  PHOTO_CREDITS,
  STORIES_LIST,
  STORY_FILTERS,
  type StoryEntry,
  type StoryFilterCategory,
} from '../data/storiesAndQuotes';
import { ResilientImage } from './ResilientImage';

interface SubmissionPreview {
  nickname: string;
  ageRange: string;
  addictionType: string;
  storyText: string;
}

export function StoriesSection() {
  const [activeFilter, setActiveFilter] = useState<StoryFilterCategory>('all');
  const [openStory, setOpenStory] = useState<StoryEntry | null>(null);

  // Share Your Story Form State (client-only until a backend is connected)
  const [nickname, setNickname] = useState('');
  const [ageRange, setAgeRange] = useState('19–24');
  const [addictionType, setAddictionType] = useState('Alcohol');
  const [storyText, setStoryText] = useState('');
  const [consentChecked, setConsentChecked] = useState(false);
  const [formError, setFormError] = useState('');
  const [submittedPreview, setSubmittedPreview] = useState<SubmissionPreview | null>(null);

  const filteredStories = useMemo(() => {
    if (activeFilter === 'all') return STORIES_LIST;
    return STORIES_LIST.filter((story) =>
      story.filterCategories.includes(activeFilter)
    );
  }, [activeFilter]);

  // Handle Escape key & body scroll lock when story modal is open
  useEffect(() => {
    if (!openStory) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpenStory(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [openStory]);

  const handleShareSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmedStory = storyText.trim();
    if (trimmedStory.length < 40) {
      setFormError('Please share at least a few sentences (40+ characters) before submitting.');
      return;
    }
    if (!consentChecked) {
      setFormError('Please confirm consent to publish anonymously after review.');
      return;
    }

    setFormError('');
    setSubmittedPreview({
      nickname: nickname.trim() || 'Anonymous',
      ageRange,
      addictionType,
      storyText: trimmedStory,
    });
  };

  const resetForm = () => {
    setNickname('');
    setAgeRange('19–24');
    setAddictionType('Alcohol');
    setStoryText('');
    setConsentChecked(false);
    setFormError('');
    setSubmittedPreview(null);
  };

  return (
    <section id="stories" className="border-b border-white/10 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-wide text-[#E87A24]">
            07. Real Stories &amp; Lived Experience
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#F2F3F5] sm:text-4xl">
            How recovery actually looks—honest setbacks and steady ground.
          </h2>
          <p className="mt-3 text-base leading-relaxed text-[#A1A6B3]">
            Every slot below currently holds a clearly labeled composite sample story written to reflect common patterns young men face. Never invented as real people—ready to be replaced with stories shared with permission.
          </p>
        </div>

        {/* Filter Controls */}
        <div
          role="tablist"
          aria-label="Filter stories by addiction type"
          className="mt-8 flex flex-wrap gap-2 border-b border-white/10 pb-6"
        >
          {STORY_FILTERS.map((filter) => {
            const active = activeFilter === filter.id;
            return (
              <button
                key={filter.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setActiveFilter(filter.id)}
                className={`min-h-[40px] rounded-md border px-3.5 py-2 text-xs font-semibold whitespace-nowrap shrink-0 transition-colors ${
                  active
                    ? 'border-[#E87A24] bg-[#E87A24] text-[#0C0D10]'
                    : 'border-white/10 bg-[#14161B] text-[#A1A6B3] hover:border-white/25 hover:text-[#F2F3F5]'
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        {/* 6 Story Cards Grid */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredStories.map((story) => (
            <article
              key={story.id}
              className="flex flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-[#14161B]"
            >
              <div>
                {/* Symbolic Atmospheric Image */}
                <div className="aspect-[4/3] w-full overflow-hidden border-b border-white/10 bg-[#0C0D10]">
                  <ResilientImage
                    src={story.imageSrc}
                    alt={story.imageAlt}
                    loading="lazy"
                    fallbackTitle={story.addictionLabel}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-[1.02]"
                  />
                </div>

                {/* Card Body */}
                <div className="p-6">
                  {/* Unboxed Metadata Line */}
                  <div className="text-xs font-medium text-[#A1A6B3]">
                    <span className="text-[#E87A24]">{story.addictionLabel}</span>
                    <span aria-hidden="true" className="mx-1.5">
                      ·
                    </span>
                    <span>
                      {story.displayName}
                      {story.age !== undefined ? `, ${story.age}` : ''}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-[#6B7280]">{story.attributionLabel}</p>

                  {/* Short Pull Quote */}
                  <blockquote className="mt-4 font-display text-xl font-semibold leading-snug text-[#F2F3F5]">
                    &ldquo;{story.pullQuote}&rdquo;
                  </blockquote>
                </div>
              </div>

              <div className="border-t border-white/10 px-6 py-4">
                <button
                  type="button"
                  onClick={() => setOpenStory(story)}
                  className="inline-flex min-h-[40px] w-full items-center justify-between text-sm font-semibold text-[#F2F3F5] transition-colors hover:text-[#E87A24]"
                >
                  <span>Read the full story</span>
                  <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Share Your Story Form */}
        <div className="mt-12 rounded-xl border border-white/12 bg-[#14161B] p-6 sm:p-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold tracking-wide text-[#E87A24]">
                Share Your Story
              </p>
              <h3 className="mt-2 font-display text-2xl font-bold text-[#F2F3F5] sm:text-3xl">
                Your honest words could help another guy step out.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#A1A6B3]">
                Tell us what got you stuck, what changed, and what you wish someone had told you earlier. Keep everything anonymous—never include full names, school names, exact cities, phone numbers, or identifying details.
              </p>

              <div className="mt-5 flex items-start gap-2.5 rounded-lg border border-white/10 bg-[#0C0D10] p-4 text-xs leading-relaxed text-[#A1A6B3]">
                <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#E87A24]" aria-hidden="true" />
                <p>
                  <strong className="font-semibold text-[#F2F3F5]">Privacy &amp; Review Notice:</strong>{' '}
                  All submitted stories are reviewed before publishing. Nothing is stored or sent anywhere from this form until a backend is connected.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              {submittedPreview ? (
                <div
                  role="status"
                  className="rounded-lg border border-emerald-400/35 bg-emerald-950/20 p-6"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300"
                      aria-hidden="true"
                    />
                    <div className="flex-1">
                      <h4 className="font-display text-2xl font-bold text-[#F2F3F5]">
                        Draft Preview Ready (Nothing Sent)
                      </h4>
                      <p className="mt-1.5 text-sm leading-relaxed text-[#D1D5DB]">
                        Because no backend is connected yet, nothing was transmitted or stored on a server. Here is how your anonymous submission would appear after review:
                      </p>

                      <div className="mt-4 rounded-lg border border-white/10 bg-[#0C0D10] p-4 text-sm">
                        <p className="text-xs font-medium text-[#A1A6B3]">
                          <span className="text-[#E87A24]">{submittedPreview.addictionType}</span>
                          <span aria-hidden="true" className="mx-1.5">
                            ·
                          </span>
                          <span>
                            {submittedPreview.nickname}, Age {submittedPreview.ageRange}
                          </span>
                          <span aria-hidden="true" className="mx-1.5">
                            ·
                          </span>
                          <span>Shared with permission (pending review)</span>
                        </p>
                        <p className="mt-2.5 whitespace-pre-line leading-relaxed text-[#F2F3F5]">
                          {submittedPreview.storyText}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={resetForm}
                        className="mt-4 inline-flex min-h-[40px] items-center justify-center rounded-md border border-white/20 px-4 py-2 text-xs font-semibold text-[#F2F3F5] hover:border-white/40"
                      >
                        Clear draft
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleShareSubmit} noValidate className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <div>
                      <label
                        htmlFor="story-nickname"
                        className="block text-xs font-medium text-[#A1A6B3]"
                      >
                        Nickname (optional)
                      </label>
                      <input
                        id="story-nickname"
                        type="text"
                        maxLength={24}
                        value={nickname}
                        onChange={(e) => setNickname(e.target.value)}
                        placeholder="Anonymous"
                        className="mt-1.5 min-h-[42px] w-full rounded-md border border-white/12 bg-[#0C0D10] px-3 py-2 text-sm text-[#F2F3F5] placeholder:text-[#6B7280] focus:border-[#E87A24] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="story-age-range"
                        className="block text-xs font-medium text-[#A1A6B3]"
                      >
                        Age range
                      </label>
                      <select
                        id="story-age-range"
                        value={ageRange}
                        onChange={(e) => setAgeRange(e.target.value)}
                        className="mt-1.5 min-h-[42px] w-full rounded-md border border-white/12 bg-[#0C0D10] px-3 py-2 text-sm text-[#F2F3F5] focus:border-[#E87A24] focus:outline-none"
                      >
                        <option value="15–18">15–18</option>
                        <option value="19–24">19–24</option>
                        <option value="25–30">25–30</option>
                        <option value="31–35">31–35</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="story-addiction-type"
                        className="block text-xs font-medium text-[#A1A6B3]"
                      >
                        Addiction type
                      </label>
                      <select
                        id="story-addiction-type"
                        value={addictionType}
                        onChange={(e) => setAddictionType(e.target.value)}
                        className="mt-1.5 min-h-[42px] w-full rounded-md border border-white/12 bg-[#0C0D10] px-3 py-2 text-sm text-[#F2F3F5] focus:border-[#E87A24] focus:outline-none"
                      >
                        <option value="Alcohol">Alcohol</option>
                        <option value="Drugs">Drugs</option>
                        <option value="Vaping">Vaping</option>
                        <option value="Betting">Betting</option>
                        <option value="Gaming">Gaming</option>
                        <option value="Porn">Porn</option>
                        <option value="Phone">Phone</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="story-body"
                      className="block text-xs font-medium text-[#A1A6B3]"
                    >
                      Your story (Where it started, breaking point, what helped, what changed)
                    </label>
                    <textarea
                      id="story-body"
                      rows={5}
                      value={storyText}
                      onChange={(e) => setStoryText(e.target.value)}
                      placeholder="Write honestly without full names, schools, exact locations, or phone numbers..."
                      className="mt-1.5 w-full rounded-md border border-white/12 bg-[#0C0D10] p-3 text-sm leading-relaxed text-[#F2F3F5] placeholder:text-[#6B7280] focus:border-[#E87A24] focus:outline-none"
                    />
                  </div>

                  <label className="flex cursor-pointer items-start gap-3 text-xs leading-relaxed text-[#A1A6B3]">
                    <input
                      type="checkbox"
                      checked={consentChecked}
                      onChange={(e) => setConsentChecked(e.target.checked)}
                      className="mt-0.5 h-4 w-4 shrink-0 rounded border-white/25 bg-[#0C0D10] accent-[#E87A24]"
                    />
                    <span>
                      I consent for this story to be reviewed and published anonymously as &ldquo;Shared with permission&rdquo; (knowing nothing is sent anywhere until a backend is connected).
                    </span>
                  </label>

                  {formError && (
                    <p role="alert" className="text-xs font-medium text-[#F28C38]">
                      {formError}
                    </p>
                  )}

                  <div className="pt-1">
                    <button
                      type="submit"
                      className="inline-flex min-h-[44px] items-center justify-center rounded-md bg-[#E87A24] px-5 py-2.5 text-sm font-semibold text-[#0C0D10] whitespace-nowrap transition-colors hover:bg-[#F28C38]"
                    >
                      Preview anonymous submission
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Short Photo Credits List */}
        <div className="mt-8 border-t border-white/10 pt-6">
          <h3 className="text-xs font-semibold tracking-wide text-[#A1A6B3]">
            Symbolic Photography Credits &amp; Slot Guide
          </h3>
          <div className="mt-3 grid grid-cols-1 gap-x-8 gap-y-1.5 text-xs text-[#6B7280] sm:grid-cols-2 lg:grid-cols-4">
            {PHOTO_CREDITS.map((item) => (
              <p key={item.slot}>
                <span className="text-[#A1A6B3]">{item.slot}:</span> {item.subject} ({item.credit})
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Accessible Full Story Modal */}
      {openStory && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="story-modal-title"
          onClick={() => setOpenStory(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-xl border border-white/15 bg-[#14161B] shadow-2xl"
          >
            {/* Modal Header */}
            <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-white/10 bg-[#14161B]/95 px-6 py-5 backdrop-blur-sm">
              <div>
                <div className="text-xs font-medium text-[#A1A6B3]">
                  <span className="text-[#E87A24]">{openStory.addictionLabel}</span>
                  <span aria-hidden="true" className="mx-1.5">
                    ·
                  </span>
                  <span>
                    {openStory.displayName}
                    {openStory.age !== undefined ? `, Age ${openStory.age}` : ''}
                  </span>
                </div>
                <h3
                  id="story-modal-title"
                  className="mt-1 font-display text-2xl font-bold text-[#F2F3F5] sm:text-3xl"
                >
                  &ldquo;{openStory.pullQuote}&rdquo;
                </h3>
                <p className="mt-1 text-xs text-[#A1A6B3]">{openStory.attributionLabel}</p>
              </div>
              <button
                type="button"
                onClick={() => setOpenStory(null)}
                aria-label="Close story modal"
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-white/12 text-[#A1A6B3] hover:border-white/30 hover:text-[#F2F3F5]"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="space-y-6 p-6 text-sm leading-relaxed text-[#D1D5DB] sm:text-base">
              <div>
                <h4 className="font-display text-xl font-bold text-[#F2F3F5]">
                  Where it started
                </h4>
                <p className="mt-1.5 text-[#A1A6B3]">{openStory.sections.whereItStarted}</p>
              </div>

              <div>
                <h4 className="font-display text-xl font-bold text-[#F2F3F5]">
                  The breaking point
                </h4>
                <p className="mt-1.5 text-[#A1A6B3]">{openStory.sections.breakingPoint}</p>
              </div>

              <div>
                <h4 className="font-display text-xl font-bold text-[#F2F3F5]">
                  What got me help
                </h4>
                <p className="mt-1.5 text-[#A1A6B3]">{openStory.sections.whatGotMeHelp}</p>
              </div>

              <div>
                <h4 className="font-display text-xl font-bold text-[#F2F3F5]">
                  What changed
                </h4>
                <p className="mt-1.5 text-[#A1A6B3]">{openStory.sections.whatChanged}</p>
              </div>

              <div className="rounded-lg border border-white/10 bg-[#0C0D10] p-4">
                <h4 className="font-display text-xl font-bold text-[#E87A24]">
                  What I tell other guys
                </h4>
                <p className="mt-1.5 text-[#F2F3F5]">{openStory.sections.whatITellOtherGuys}</p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 px-6 py-4">
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#urge-timer"
                  onClick={() => setOpenStory(null)}
                  className="text-xs font-semibold text-[#E87A24] underline underline-offset-4 hover:text-[#F28C38]"
                >
                  Fighting an urge right now? Start 10-Min Reset
                </a>
                <a
                  href="#get-help"
                  onClick={() => setOpenStory(null)}
                  className="text-xs font-medium text-[#A1A6B3] underline underline-offset-4 hover:text-[#F2F3F5]"
                >
                  View help options
                </a>
              </div>
              <button
                type="button"
                onClick={() => setOpenStory(null)}
                className="inline-flex min-h-[40px] items-center justify-center rounded-md border border-white/15 px-4 py-2 text-xs font-semibold text-[#F2F3F5] hover:border-white/35"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
