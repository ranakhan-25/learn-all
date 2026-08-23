'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';

/**
 * Two-sided toggle: EN sits left, BN sits right.
 * A sliding pill behind the active label shows which side is on.
 */
export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const setLocale = (nextLocale: 'en' | 'bn') => {
    if (nextLocale === locale) return;
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <div className="relative flex items-center rounded-full border border-gold/40 bg-panel/60 p-1 font-mono text-xs uppercase tracking-widest">
      {/* sliding highlight */}
      <span
        className={`absolute inset-y-1 w-[calc(50%-4px)] rounded-full bg-gold transition-transform duration-300 ease-out ${
          locale === 'en' ? 'translate-x-0' : 'translate-x-[calc(100%+8px)]'
        }`}
        aria-hidden="true"
      />

      <button
        onClick={() => setLocale('en')}
        className={`relative z-10 w-12 px-3 py-1.5 transition-colors ${
          locale === 'en' ? 'text-night' : 'text-ivory/60 hover:text-ivory'
        }`}
        aria-pressed={locale === 'en'}
      >
        EN
      </button>

      <button
        onClick={() => setLocale('bn')}
        className={`relative z-10 w-12 px-3 py-1.5 transition-colors ${
          locale === 'bn' ? 'text-night' : 'text-ivory/60 hover:text-ivory'
        }`}
        aria-pressed={locale === 'bn'}
      >
        BN
      </button>
    </div>
  );
}