import { useLang } from '../i18n/LanguageContext'
import { Reveal } from './Reveal'

export function Services({ onOpen }: { onOpen: (index: number) => void }) {
  const { t } = useLang()
  return (
    <section id="servicios" className="section">
      <div className="container">
        <Reveal className="sec-head sec-head--split">
          <div className="sec-head__lead">
            <div className="eyebrow">{t.servKicker}</div>
            <h2>{t.servTitle}</h2>
          </div>
          <p className="lead">{t.servSub}</p>
        </Reveal>
        <div className="svc-grid">
          {t.services.map((s, i) => (
            <Reveal
              as="button"
              className="svc"
              key={s.n}
              delay={(i % 3) * 70}
              onClick={() => onOpen(i)}
              ariaLabel={s.title}
            >
              <div className="svc__n">{s.n}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <div className="svc__more">{t.servMore} <span aria-hidden="true">→</span></div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
