import { useLang } from '../i18n/LanguageContext'
import { Reveal } from './Reveal'

export function Sectors() {
  const { t } = useLang()
  return (
    <section id="sectores" className="section section--tight-top">
      <div className="container">
        <Reveal className="sec-head">
          <div className="eyebrow">{t.sectKicker}</div>
          <h2>{t.sectTitle}</h2>
        </Reveal>
        <div className="sectors">
          {t.sectors.map((s, i) => (
            <Reveal className="sector" key={s} delay={(i % 3) * 60}>
              <span className="sector__dot" />
              <b>{s}</b>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
