import { useLang } from '../i18n/LanguageContext'
import { Reveal } from './Reveal'

export function Method() {
  const { t } = useLang()
  return (
    <section id="metodo" className="section section--paper2">
      <div className="container">
        <Reveal className="sec-head">
          <div className="eyebrow">{t.methodKicker}</div>
          <h2>{t.methodTitle}</h2>
        </Reveal>
        <div className="method">
          {t.method.map((s, i) => (
            <Reveal className="step" key={s.n} delay={i * 80}>
              <div className="step__n">{s.n}</div>
              <div className="step__rule" />
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
