import { useEffect } from 'react'
import { useLang } from '../i18n/LanguageContext'

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { t } = useLang()

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <div className={`mobile-menu${open ? ' open' : ''}`} aria-hidden={!open}>
      <div className="mobile-menu__top">
        <a href="#top" className="brand" onClick={onClose}>
          <img src="/assets/logo.jpeg" alt="" width={38} height={38} />
          <b>MasterMinds</b>
        </a>
        <button className="menu-toggle" onClick={onClose} aria-label="Cerrar">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M6 6l12 12M18 6L6 18" /></svg>
        </button>
      </div>
      <nav>
        {t.nav.map((n) => (
          <a key={n.href} href={n.href} onClick={onClose}>{n.label}</a>
        ))}
      </nav>
      <a href="#contacto" className="btn btn--primary" onClick={onClose}>{t.ctaMeeting}</a>
    </div>
  )
}
