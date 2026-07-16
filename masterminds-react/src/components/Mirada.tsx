import { useLang } from '../i18n/LanguageContext'
import { Reveal } from './Reveal'

export function Mirada() {
  const { t } = useLang()
  return (
    <section id="mirada" className="section section--tight-top">
      <div className="container">
        <Reveal className="mirada">
          <div className="mirada__grid">
            <div>
              <div className="eyebrow eyebrow--bright">{t.miradaKicker}</div>
              <h2>{t.miradaTitle}</h2>
              <p>{t.miradaP}</p>
              <a href="#contacto" className="btn btn--light mirada__cta">{t.miradaCta} →</a>
            </div>
            <div className="mirada__facts">
              {t.miradaFacts.map((f, i) => (
                <div className="mirada__fact" key={i}>
                  <div className="k">{f.k}</div>
                  <div className="v">{f.v}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
