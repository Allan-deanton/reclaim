import { useMemo, useState } from 'react';
import { AlertTriangle, ChevronDown, Search, X } from 'lucide-react';
import { ADDICTIONS_LIST, type AddictionCategory } from '../data/siteContent';

type FilterType = 'all' | AddictionCategory;

export function AddictionsExplorer() {
  const [filter, setFilter] = useState<FilterType>('all');
  const [query, setQuery] = useState('');
  const [expandedId, setExpandedId] = useState<string>('alcohol');

  const substanceCount = useMemo(
    () => ADDICTIONS_LIST.filter((item) => item.category === 'substance').length,
    []
  );
  const behaviorCount = useMemo(
    () => ADDICTIONS_LIST.filter((item) => item.category === 'behavior').length,
    []
  );

  const filteredItems = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ADDICTIONS_LIST.filter((item) => {
      const matchesCategory = filter === 'all' || item.category === filter;
      if (!matchesCategory) return false;
      if (!q) return true;
      return (
        item.name.toLowerCase().includes(q) ||
        item.shortDesc.toLowerCase().includes(q) ||
        item.performanceImpact.toLowerCase().includes(q) ||
        item.warningSigns.some((sign) => sign.toLowerCase().includes(q))
      );
    });
  }, [filter, query]);

  const toggleItem = (id: string) => {
    setExpandedId((prev) => (prev === id ? '' : id));
  };

  return (
    <div>
      {/* Search + Category Filter Bar */}
      <div className="flex flex-col gap-4 border-b border-white/10 pb-6 md:flex-row md:items-center md:justify-between">
        <div
          role="tablist"
          aria-label="Filter addictions by type"
          className="inline-flex w-full rounded-lg border border-white/10 bg-[#14161B] p-1 md:w-auto"
        >
          <button
            type="button"
            role="tab"
            aria-selected={filter === 'all'}
            onClick={() => setFilter('all')}
            className={`flex-1 rounded-md px-4 py-2 text-xs font-semibold whitespace-nowrap shrink-0 transition-colors md:flex-initial ${
              filter === 'all'
                ? 'bg-[#E87A24] text-[#0C0D10]'
                : 'text-[#A1A6B3] hover:text-[#F2F3F5]'
            }`}
          >
            All ({ADDICTIONS_LIST.length})
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={filter === 'substance'}
            onClick={() => setFilter('substance')}
            className={`flex-1 rounded-md px-4 py-2 text-xs font-semibold whitespace-nowrap shrink-0 transition-colors md:flex-initial ${
              filter === 'substance'
                ? 'bg-[#E87A24] text-[#0C0D10]'
                : 'text-[#A1A6B3] hover:text-[#F2F3F5]'
            }`}
          >
            Substances ({substanceCount})
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={filter === 'behavior'}
            onClick={() => setFilter('behavior')}
            className={`flex-1 rounded-md px-4 py-2 text-xs font-semibold whitespace-nowrap shrink-0 transition-colors md:flex-initial ${
              filter === 'behavior'
                ? 'bg-[#E87A24] text-[#0C0D10]'
                : 'text-[#A1A6B3] hover:text-[#F2F3F5]'
            }`}
          >
            Behaviors ({behaviorCount})
          </button>
        </div>

        {/* Search Input */}
        <div className="relative w-full md:max-w-sm">
          <Search
            className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#A1A6B3]"
            aria-hidden="true"
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search substance, habit, or symptom..."
            aria-label="Search addictions list"
            className="min-h-[44px] w-full rounded-lg border border-white/10 bg-[#14161B] py-2 pl-10 pr-10 text-sm text-[#F2F3F5] placeholder:text-[#6B7280] focus:border-[#E87A24] focus:outline-none"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              aria-label="Clear search"
              className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded text-[#A1A6B3] hover:text-[#F2F3F5]"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      {/* Results Accordion Grid */}
      {filteredItems.length === 0 ? (
        <div className="mt-8 rounded-xl border border-white/10 bg-[#14161B] p-8 text-center">
          <p className="text-base font-medium text-[#F2F3F5]">
            No matches found for &ldquo;{query}&rdquo;.
          </p>
          <p className="mt-1 text-sm text-[#A1A6B3]">
            Try clearing your search or switching between Substances and Behaviors.
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery('');
              setFilter('all');
            }}
            className="mt-4 inline-flex min-h-[40px] items-center justify-center rounded-md border border-white/15 px-4 py-2 text-xs font-semibold text-[#F2F3F5] hover:border-white/30"
          >
            Show all {ADDICTIONS_LIST.length} types
          </button>
        </div>
      ) : (
        <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {filteredItems.map((item) => {
            const isOpen = expandedId === item.id;
            return (
              <div
                key={item.id}
                className={`rounded-xl border transition-colors ${
                  isOpen
                    ? 'border-[#E87A24]/50 bg-[#14161B]'
                    : 'border-white/10 bg-[#14161B]/60 hover:border-white/20'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`addiction-panel-${item.id}`}
                  className="flex w-full items-start justify-between gap-4 p-5 text-left"
                >
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 text-xs font-medium text-[#A1A6B3]">
                      <span className="text-[#E87A24]">
                        {item.category === 'substance' ? 'Substance' : 'Behavior'}
                      </span>
                      {item.medicalWarning && (
                        <>
                          <span aria-hidden="true">·</span>
                          <span className="inline-flex items-center gap-1 text-amber-300">
                            <AlertTriangle className="h-3.5 w-3.5" aria-hidden="true" />
                            Medical detox caution
                          </span>
                        </>
                      )}
                    </div>
                    <h3 className="mt-1.5 font-display text-2xl font-bold tracking-tight text-[#F2F3F5]">
                      {item.name}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-[#A1A6B3]">
                      {item.shortDesc}
                    </p>
                  </div>
                  <ChevronDown
                    className={`mt-1 h-5 w-5 shrink-0 text-[#A1A6B3] transition-transform duration-150 ${
                      isOpen ? 'rotate-180 text-[#E87A24]' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>

                {isOpen && (
                  <div
                    id={`addiction-panel-${item.id}`}
                    className="border-t border-white/10 px-5 pb-5 pt-4 space-y-4"
                  >
                    <div>
                      <h4 className="text-xs font-semibold tracking-wide text-[#F2F3F5]">
                        Common Warning Signs
                      </h4>
                      <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-[#A1A6B3]">
                        {item.warningSigns.map((sign) => (
                          <li key={sign} className="flex gap-2.5">
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#E87A24]" aria-hidden="true" />
                            <span>{sign}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-lg bg-[#0C0D10] p-3.5 border border-white/8">
                      <h4 className="text-xs font-semibold tracking-wide text-[#E87A24]">
                        How It Hits Performance
                      </h4>
                      <p className="mt-1 text-sm leading-relaxed text-[#D1D5DB]">
                        {item.performanceImpact}
                      </p>
                    </div>

                    {item.medicalWarning && (
                      <div className="flex items-start gap-2.5 rounded-lg border border-amber-400/30 bg-amber-950/30 p-3.5 text-sm text-amber-100">
                        <AlertTriangle
                          className="mt-0.5 h-4 w-4 shrink-0 text-amber-300"
                          aria-hidden="true"
                        />
                        <p className="leading-relaxed">
                          <strong className="font-semibold">Safety Warning:</strong>{' '}
                          {item.medicalWarning}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
