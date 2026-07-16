import { useLang } from '../i18n/LanguageContext'
import { Reveal } from './Reveal'
import { CountUp } from './CountUp'

export function Metrics() {
  const { t } = useLang()
  return (
    <section className="section section--dark metrics-band">
      <div className="container metrics">
        {t.metrics.map((m, i) => (
          <Reveal className="metric" key={i} delay={i * 80}>
            <div className="n"><CountUp value={m.value} suffix={m.suffix} /></div>
            <div className="l">{m.label}</div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
