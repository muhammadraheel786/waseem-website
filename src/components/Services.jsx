import { useLanguage } from '../context/LanguageContext';
import { ServiceIcon } from './Icons';

export default function Services() {
  const { t } = useLanguage();

  return (
    <section className="services" id="services">
      <div className="container">
        <h2 className="section-title section-title--dark animate-on-scroll">{t.services.title}</h2>
        <div className="services__grid">
          {t.services.items.map((item, i) => (
            <article key={item.title} className={`service-card animate-on-scroll delay-${(i + 1) * 100}`}>
              <div className="service-card__icon">
                <ServiceIcon index={i} />
              </div>
              <h3 className="service-card__title">{item.title}</h3>
              <p className="service-card__desc">{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
