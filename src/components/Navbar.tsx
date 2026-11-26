import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteContent';

const NAV_LINKS = [
  { href: '#understand', label: 'Understand' },
  { href: '#addictions', label: 'Addictions' },
  { href: '#self-check', label: 'Self-Check' },
  { href: '#roadmap', label: 'Roadmap' },
  { href: '#toolkit', label: 'Toolkit' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0C0D10]/95 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-8 px-4 sm:px-6">
        {/* Zone 1: Single-line brand wordmark */}
        <a
          href="#top"
          className="font-display text-2xl font-bold tracking-tight text-[#F2F3F5] whitespace-nowrap shrink-0"
        >
          {SITE_CONFIG.siteName}
        </a>

        {/* Zone 2: 5 concise single-line text nav links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-6 text-sm font-medium text-[#A1A6B3]"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-[#F2F3F5] hover:underline hover:underline-offset-4"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Persistent primary action + mobile toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#get-help"
            className="inline-flex min-h-[40px] items-center justify-center rounded-md bg-[#E87A24] px-4 py-2 text-xs font-semibold text-[#0C0D10] whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#F28C38]"
          >
            Get help now
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/12 text-[#F2F3F5] md:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Collapsible Mobile Drawer */}
      {mobileOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile Navigation"
          className="border-t border-white/10 bg-[#14161B] px-4 py-4 md:hidden"
        >
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="flex min-h-[44px] items-center rounded-md px-3 text-base font-medium text-[#F2F3F5] transition-colors hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#stories"
              onClick={() => setMobileOpen(false)}
              className="flex min-h-[44px] items-center rounded-md px-3 text-base font-medium text-[#A1A6B3] transition-colors hover:bg-white/5 hover:text-[#F2F3F5]"
            >
              Real Stories
            </a>
            <a
              href="#help-friend"
              onClick={() => setMobileOpen(false)}
              className="flex min-h-[44px] items-center rounded-md px-3 text-base font-medium text-[#A1A6B3] transition-colors hover:bg-white/5 hover:text-[#F2F3F5]"
            >
              Help a Friend
            </a>
            <a
              href="#faq"
              onClick={() => setMobileOpen(false)}
              className="flex min-h-[44px] items-center rounded-md px-3 text-base font-medium text-[#A1A6B3] transition-colors hover:bg-white/5 hover:text-[#F2F3F5]"
            >
              FAQ
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
