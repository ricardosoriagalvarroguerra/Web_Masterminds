import { useLang } from '../i18n/LanguageContext'
import { Reveal } from './Reveal'

export function Insights({ onOpen }: { onOpen: (index: number) => void }) {
  const { t } = useLang()
  return (
    <section id="insights" className="section">
      <div className="container">
        <Reveal className="sec-head sec-head--split">
          <div className="sec-head__lead">
            <div className="eyebrow">{t.insKicker}</div>
            <h2>{t.insTitle}</h2>
          </div>
          <a href="#contacto" className="sec-head__link">{t.insLink} →</a>
        </Reveal>
        <div className="insights">
          {t.insights.map((a, i) => (
            <Reveal
              as="button"
              className="insight"
              key={a.title}
              delay={(i % 3) * 70}
              onClick={() => onOpen(i)}
              ariaLabel={a.title}
            >
              <div className="insight__top">
                <span>{a.tag}</span>
                <span className="date">{a.date}</span>
              </div>
              <h3>{a.title}</h3>
              <div className="insight__read">{t.insRead} →</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
