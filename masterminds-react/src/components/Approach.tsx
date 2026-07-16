import { useLang } from '../i18n/LanguageContext'
import { Reveal } from './Reveal'

export function Approach() {
  const { t } = useLang()
  return (
    <section id="enfoque" className="section">
      <div className="container">
        <Reveal className="sec-head">
          <div className="eyebrow">{t.enfKicker}</div>
          <h2>{t.enfTitle}</h2>
        </Reveal>
        <div className="grid-3">
          {t.lenses.map((l, i) => (
            <Reveal className="lens" key={l.n} delay={i * 90}>
              <div className="lens__rule" />
              <div className="lens__n">{l.n}</div>
              <h3>{l.k}</h3>
              <p>{l.d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
