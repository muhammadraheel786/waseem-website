import { useLanguage } from '../context/LanguageContext';
import { WhyIcon } from './Icons';

export default function WhyUs() {
  const { t } = useLanguage();

  return (
    <section className="why" id="why">
      <div className="container">
        <h2 className="section-title animate-on-scroll">{t.why.title}</h2>
        <p className="why__subtitle animate-on-scroll">{t.why.subtitle}</p>
        <div className="why__grid">
          {t.why.items.map((item, i) => (
            <div key={item.title} className={`why-card animate-on-scroll delay-${(i + 1) * 100}`}>
              <div className="why-card__icon">
                <WhyIcon index={i} />
              </div>
              <h3 className="why-card__title">{item.title}</h3>
              <p className="why-card__desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
