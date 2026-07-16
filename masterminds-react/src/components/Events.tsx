import { useLang } from '../i18n/LanguageContext'
import { Reveal } from './Reveal'

export function Events() {
  const { t } = useLang()
  return (
    <section id="eventos" className="section">
      <div className="container">
        <Reveal className="sec-head sec-head--split">
          <div className="sec-head__lead">
            <div className="eyebrow">{t.eventsKicker}</div>
            <h2>{t.eventsTitle}</h2>
          </div>
          <p className="lead">{t.eventsSub}</p>
        </Reveal>
        <div className="events">
          {t.events.map((ev, i) => (
            <Reveal className="event" key={ev.title} delay={(i % 3) * 70}>
              <div className="event__img">
                {ev.img ? (
                  <img src={ev.img} alt={ev.title} loading="lazy" />
                ) : (
                  <div className="event__ph" aria-hidden="true">
                    <img className="event__ph-mark" src="/assets/logo.jpeg" alt="" />
                    <span className="event__ph-tag">{t.eventsSoon}</span>
                  </div>
                )}
              </div>
              <div className="event__body">
                <div className="event__meta">{ev.meta}</div>
                <h3>{ev.title}</h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
