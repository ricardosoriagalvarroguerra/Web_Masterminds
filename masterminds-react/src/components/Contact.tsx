import type { FormEvent } from 'react'
import { useLang } from '../i18n/LanguageContext'
import { Reveal } from './Reveal'

const EMAIL = 'contacto@masterminds.bo'
const LINKEDIN = 'https://bo.linkedin.com/company/mastermindsbol'

export function Contact() {
  const { t } = useLang()

  const prepareEmail = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get('name') ?? '').trim()
    const company = String(data.get('company') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()
    const subject = company ? `Consulta MasterMinds · ${company}` : 'Consulta MasterMinds'
    const body = [
      `${t.fName}: ${name}`,
      `${t.fCompany}: ${company || '—'}`,
      `${t.fEmail}: ${email}`,
      '',
      `${t.fMsg}:`,
      message,
    ].join('\n')

    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

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
          <form onSubmit={prepareEmail} style={{ display: 'contents' }}>
            <div className="form__row">
              <label className="field">
                <span>{t.fName}</span>
                <input name="name" type="text" autoComplete="name" required />
              </label>
              <label className="field">
                <span>{t.fCompany}</span>
                <input name="company" type="text" autoComplete="organization" />
              </label>
            </div>
            <label className="field">
              <span>{t.fEmail}</span>
              <input name="email" type="email" autoComplete="email" required />
            </label>
            <label className="field">
              <span>{t.fMsg}</span>
              <textarea name="message" rows={4} required />
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
