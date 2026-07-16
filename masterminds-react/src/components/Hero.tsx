import { useLang } from '../i18n/LanguageContext'
import { Reveal } from './Reveal'
import { CountUp } from './CountUp'
import { ConvergenceArt } from './ConvergenceArt'

export function Hero() {
  const { t } = useLang()
  return (
    <section className="hero">
      <div className="container">
        <Reveal as="div" className="hero__meta">
          {t.heroMeta.map((m, i) => <span key={i}>{m}</span>)}
        </Reveal>

        <div className="hero__grid">
          <Reveal>
            <div className="eyebrow">{t.heroKicker}</div>
            <h1 className="hero__title">
              {t.heroA} <em>{t.heroEm}</em> {t.heroB}
            </h1>
            <p className="hero__sub">{t.heroSub}</p>
            <div className="hero__cta">
              <a href="#contacto" className="btn btn--primary">{t.heroCta1}</a>
              <a href="#servicios" className="btn btn--ghost">{t.heroCta2}</a>
            </div>
            <div className="hero__stats">
              {t.heroStats.map((s, i) => (
                <div className="stat-chip" key={i}>
                  <div className="n"><CountUp value={s.value} suffix={s.suffix} /></div>
                  <div className="l">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="hero__panel" delay={120}>
            <img className="knot" src="/assets/logo.jpeg" alt="" aria-hidden="true" />
            <ConvergenceArt title={t.artLabel} lenses={t.artLenses} outLabel={t.artOut} />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
