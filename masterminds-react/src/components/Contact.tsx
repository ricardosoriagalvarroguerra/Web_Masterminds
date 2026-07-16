import { useLang } from '../i18n/LanguageContext'
import { Reveal } from './Reveal'

const EMAIL = 'contacto@masterminds.bo'
const LINKEDIN = 'https://bo.linkedin.com/company/mastermindsbol'

export function Contact() {
  const { t } = useLang()
  return (
    <section id="contacto" className="section section--paper2">
      <div className="container contact__grid">
        <Reveal>
          <div className="eyebrow">{t.contactKicker}</div>
          <h2 className="contact__title">{t.contactTitle}</h2>
          <p className="lead contact__sub">{t.contactSub}</p>
          <div className="contact__rows">
            {t.contactRows.map((r) => (
              <div className="crow" key={r.k}>
                <span className="k">{r.k}</span>
                <span className="v">
                  {r.k === 'Email' ? (
                    <a href={`mailto:${EMAIL}`}>{r.v}</a>
                  ) : r.k === 'LinkedIn' ? (
                    <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">{r.v}</a>
                  ) : (
                    r.v
                  )}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="form" delay={100}>
          <form onSubmit={(e) => e.preventDefault()} style={{ display: 'contents' }}>
            <div className="form__row">
              <label className="field">
                <span>{t.fName}</span>
                <input type="text" autoComplete="name" />
              </label>
              <label className="field">
                <span>{t.fCompany}</span>
                <input type="text" autoComplete="organization" />
              </label>
            </div>
            <label className="field">
              <span>{t.fEmail}</span>
              <input type="email" autoComplete="email" />
            </label>
            <label className="field">
              <span>{t.fMsg}</span>
              <textarea rows={4} />
            </label>
            <div className="form__actions">
              <button type="submit" className="btn btn--primary">{t.fSubmit}</button>
              <a href={`mailto:${EMAIL}`} className="btn btn--ghost">{t.fMore} →</a>
            </div>
            <div className="form__note">{t.fNote}</div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
