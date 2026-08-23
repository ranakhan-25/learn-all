import { useTranslations } from 'next-intl';
import React from 'react'

const Hero = () => {
  const t = useTranslations('HomePage');

  return (
    <div> This Is Hero Section {t('title')}</div>
  )
}

export default Hero