import { EMAIL } from '../config';
import { useLanguage } from '../context/LanguageContext';
import { ClockIcon, EmailIcon, LocationIcon } from './Icons';
import WhatsAppButton from './WhatsAppButton';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer" id="contact">
      <div className="container footer__content">
        <img src="/logo.png" alt="Fnoon Al-Kahraba" className="footer__logo animate-on-scroll" />
        <h2 className="section-title animate-on-scroll">{t.contact.title}</h2>
        <p className="footer__subtitle animate-on-scroll">{t.contact.subtitle}</p>
        <ul className="footer__info animate-on-scroll">
          <li>
            <ClockIcon />
            <span>{t.contact.hours}</span>
          </li>
          <li>
            <LocationIcon />
            <span>{t.contact.location}</span>
          </li>
          <li>
            <EmailIcon />
            <span>{EMAIL}</span>
          </li>
        </ul>
        <WhatsAppButton className="whatsapp-btn whatsapp-btn--large animate-on-scroll">{t.contact.cta}</WhatsAppButton>
        
      </div>
    </footer>
  );
}
