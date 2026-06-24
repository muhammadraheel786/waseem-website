import { useLanguage } from '../context/LanguageContext';
import { BuildingIcon } from './Icons';

export default function ServiceAreas() {
  const { t } = useLanguage();

  return (
    <section className="areas" id="areas">
      <div className="container">
        <div className="areas__card animate-on-scroll">
          <h2 className="section-title section-title--dark">{t.areas.title}</h2>
          <p className="areas__subtitle">{t.areas.subtitle}</p>
          <div className="areas__tags">
            {t.areas.cities.map((city, i) => (
              <span key={city} className={`area-tag animate-on-scroll delay-${(i + 1) * 100}`}>
                <BuildingIcon />
                {city}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
