import { useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations('hero');
  return (
    <div>
      <h1>{t('title')}</h1>
      <h1>{t('description')}</h1>
    </div>
  )
}

export default Hero