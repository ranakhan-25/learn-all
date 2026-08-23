'use client';

import Link from 'next/link';
import { useState } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import { useLocale, useTranslations } from 'next-intl';

const Navbar = () => {
  const t = useTranslations('navbar');
  const local = useLocale();

  const [theme, setTheme] = useState<'dark' | 'light'>('dark');


  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="flex items-center justify-between px-6 py-4 bg-amber-100">
      <div className="font-bold">
        {t('logo')}
      </div>

      <div className="flex gap-6">
        <Link href={`/${local}`}>{t('menu.home')}</Link>
        <Link href={`/${local}/about`}>{t('menu.about')}</Link>
        <Link href={`/${local}/service`}>{t('menu.service')}</Link>
      </div>

      <div className="flex items-center gap-4">
        <Link href={`/${local}/signin`}>{t('btn')}</Link>

        <button onClick={toggleTheme}>
          theme:{theme}
        </button>

        <LanguageSwitcher/>
      </div>
    </div>
  );
};

export default Navbar;