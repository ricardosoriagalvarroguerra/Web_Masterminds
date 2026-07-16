import { useLang } from '../i18n/LanguageContext'
import { Reveal } from './Reveal'

export function Team() {
  const { t } = useLang()
  const lead = t.teamLead
  return (
    <section id="equipo" className="section section--dark">
      <div className="container">
        <Reveal className="sec-head">
          <div className="eyebrow">{t.teamKicker}</div>
          <h2 style={{ color: '#fff' }}>{t.teamTitle}</h2>
        </Reveal>

        <Reveal className="team__lead">
          <div className="team__ph">
            <img src="/assets/martin-rapp-bw.png" alt="Martin Rapp" />
          </div>
          <div className="team__info">
            <div className="team__role">{lead.role}</div>
            <h3>{lead.name}</h3>
            <p>{lead.bio}</p>
            <a href="https://bo.linkedin.com/company/mastermindsbol" target="_blank" rel="noopener noreferrer" className="team__link">LinkedIn →</a>
          </div>
        </Reveal>

        <div className="team__grid">
          {t.teamRest.map((p, i) => (
            <Reveal className="member" key={p.name} delay={i * 90}>
              <div className="member__av" aria-hidden="true">◇</div>
              <div>
                <h4>{p.name}</h4>
                <div className="member__role">{p.role}</div>
                <p>{p.bio}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
