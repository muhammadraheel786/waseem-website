import { useLanguage } from '../context/LanguageContext';
import { HeroTagIcon } from './Icons';
import WhatsAppButton from './WhatsAppButton';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero" id="top">
      <div className="container hero__content">
        <div className="hero__logo-wrap animate-on-scroll">
          <img src="/logo.png" alt="Fnoon Al-Kahraba" className="hero__logo" />
        </div>
        <span className="hero__badge animate-on-scroll">{t.hero.badge}</span>
        <h1 className="hero__title animate-on-scroll">{t.hero.title}</h1>
        <p className="hero__subtitle animate-on-scroll">{t.hero.subtitle}</p>
        <div className="hero__tags">
          {t.hero.tags.map((tag, i) => (
            <span key={tag} className={`hero__tag animate-on-scroll delay-${(i + 1) * 100}`}>
              <HeroTagIcon index={i} />
              {tag}
            </span>
          ))}
        </div>
        <WhatsAppButton className="whatsapp-btn whatsapp-btn--large animate-on-scroll">{t.hero.cta}</WhatsAppButton>
      </div>
      <div className="hero__wave" aria-hidden="true">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,64 C360,120 720,0 1080,48 C1260,72 1380,96 1440,80 L1440,120 L0,120 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
}
