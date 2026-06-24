import { WHATSAPP_MESSAGES, WHATSAPP_NUMBER } from '../config';
import { useLanguage } from '../context/LanguageContext';
import { WhatsAppIcon } from './Icons';

export default function WhatsAppButton({ children, className = 'whatsapp-btn' }) {
  const { lang } = useLanguage();
  const message = encodeURIComponent(WHATSAPP_MESSAGES[lang]);
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={typeof children === 'string' ? children : 'WhatsApp'}
    >
      <WhatsAppIcon />
      <span>{children}</span>
    </a>
  );
}
