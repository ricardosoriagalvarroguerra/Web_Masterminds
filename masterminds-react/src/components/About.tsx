import { useLang } from '../i18n/LanguageContext'
import { Reveal } from './Reveal'

export function About() {
  const { t } = useLang()
  return (
    <section id="nosotros" className="section section--paper2">
      <div className="container about__grid">
        <Reveal className="about__media">
          <img src="/assets/martin-rapp-bw.png" alt="Martin Rapp, Director Ejecutivo y Fundador de MasterMinds" />
          <div className="about__cap">
            <div className="nm">Martin Rapp</div>
            <div className="rl">{t.aboutCaptionRole}</div>
          </div>
        </Reveal>
        <Reveal className="about__body" delay={100}>
          <div className="eyebrow">{t.aboutKicker}</div>
          <h2>{t.aboutTitle}</h2>
          <p>{t.aboutP1}</p>
          <p>{t.aboutP2}</p>
          <div className="creds">
            {t.creds.map((c, i) => <span className="cred" key={i}>{c}</span>)}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
