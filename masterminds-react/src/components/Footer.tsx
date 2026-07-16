import { useLang } from '../i18n/LanguageContext'

export function Footer() {
  const { t } = useLang()
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <div className="footer__brand">
              <img src="/assets/logo.jpeg" alt="" width={36} height={36} />
              <div>
                <b>MasterMinds</b>
                <div className="t">{t.footTag}</div>
              </div>
            </div>
            <p>{t.footSlogan}</p>
          </div>
          <div>
            <h5>{t.footExplore}</h5>
            <ul>
              {t.nav.map((n) => (
                <li key={n.href}><a href={n.href}>{n.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h5>{t.footContact}</h5>
            <ul>
              <li><a href="mailto:contacto@masterminds.bo">contacto@masterminds.bo</a></li>
              <li><a href="https://bo.linkedin.com/company/mastermindsbol" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li>Santa Cruz de la Sierra, Bolivia</li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <span>{t.footRights}</span>
          <span>{t.footSlogan}</span>
        </div>
      </div>
    </footer>
  )
}
