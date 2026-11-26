import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '../data/siteContent';

export function FaqAccordion() {
  const [openId, setOpenId] = useState<string>(FAQ_ITEMS[0]?.id ?? '');

  return (
    <div className="divide-y divide-white/10 rounded-xl border border-white/12 bg-[#14161B]">
      {FAQ_ITEMS.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id}>
            <button
              type="button"
              onClick={() => setOpenId((prev) => (prev === item.id ? '' : item.id))}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${item.id}`}
              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-white/[0.02] sm:px-6"
            >
              <span className="font-display text-xl font-semibold text-[#F2F3F5] sm:text-2xl">
                {item.question}
              </span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-[#A1A6B3] transition-transform duration-150 ${
                  isOpen ? 'rotate-180 text-[#E87A24]' : ''
                }`}
                aria-hidden="true"
              />
            </button>
            {isOpen && (
              <div
                id={`faq-answer-${item.id}`}
                className="px-5 pb-6 pt-0 text-sm leading-relaxed text-[#A1A6B3] sm:px-6 sm:text-base"
              >
                <p className="max-w-prose">{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
