"use client"
import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";

const LanguageSwitcher = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const setLocale = (nextLocale: "en" | "bn") => {
    if (nextLocale === locale) return;
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <div className="relative flex items-center rounded-full border border-gold/40 bg-panel/60 font-mono text-xs uppercase tracking-widest overflow-hidden">
      {/* sliding highlight */}
      <span
        className={`absolute inset-y-1 w-[calc(50%-4px)] rounded-full bg-gold transition-transform duration-300 ease-out ${
          locale === "en" ? "translate-x-0" : "translate-x-[calc(100%+8px)]"
        }`}
        aria-hidden="true"
      />

      <button
        onClick={() => setLocale("en")}
        className={` relative z-10 w-12 px-3 py-1.5 transition-colors ${
          locale === "en" ? "text-night bg-red-300" : "text-ivory/60 hover:text-ivory bg-white"
        }`}
        aria-pressed={locale === "en"}
      >
        EN
      </button>

      <button
        onClick={() => setLocale("bn")}
        className={`relative z-10 w-12 px-3 py-1.5 transition-colors ${
          locale === "bn" ? "text-night bg-red-300" : "text-ivory/60 hover:text-ivory bg-white"
        }`}
        aria-pressed={locale === "bn"}
      >
        BN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
