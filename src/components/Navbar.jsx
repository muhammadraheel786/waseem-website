import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const { t, toggleLang } = useLanguage();

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <button type="button" className="lang-toggle" onClick={toggleLang} aria-label="Toggle language">
          {t.nav.langToggle}
        </button>
      </div>
    </header>
  );
}
