import { useState } from 'react'
import { useLang } from '../i18n/LanguageContext'
import { useActiveSection } from '../hooks/useActiveSection'
import { useScrollProgress } from '../hooks/useScrollProgress'
import { MobileMenu } from './MobileMenu'

const SECTION_IDS = ['enfoque', 'servicios', 'mirada', 'metodo', 'equipo', 'contacto']

export function Header() {
  const { t, lang, toggle } = useLang()
  const active = useActiveSection(SECTION_IDS)
  const progress = useScrollProgress()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <div className="progress" style={{ transform: `scaleX(${progress})` }} />
      <header className="site-header">
        <div className="container nav">
          <a href="#top" className="brand" aria-label="MasterMinds — inicio">
            <img src="/assets/logo.jpeg" alt="" width={40} height={40} />
            <b>MasterMinds</b>
          </a>
          <nav className="nav-links" aria-label={lang === 'es' ? 'Principal' : 'Main'}>
            {t.nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className={`nav-link${active === n.href.slice(1) ? ' active' : ''}`}
              >
                {n.label}
              </a>
            ))}
          </nav>
          <div className="nav-actions">
            <button className="lang-btn" onClick={toggle} aria-label={lang === 'es' ? 'Switch to English' : 'Cambiar a español'}>
              {t.langOther}
            </button>
            <a href="#contacto" className="btn btn--primary btn--sm">{t.ctaMeeting}</a>
            <button className="menu-toggle" onClick={() => setMenuOpen(true)} aria-label="Menú" aria-expanded={menuOpen}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M3 6h18M3 12h18M3 18h18" /></svg>
            </button>
          </div>
        </div>
      </header>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
