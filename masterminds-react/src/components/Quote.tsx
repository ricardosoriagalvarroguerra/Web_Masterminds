import { useLang } from '../i18n/LanguageContext'
import { Reveal } from './Reveal'

export function Quote() {
  const { t } = useLang()
  return (
    <section className="section section--dark">
      <div className="container">
        <Reveal className="quote">
          <div className="quote__mark" aria-hidden="true">&ldquo;</div>
          <p>{t.quote}</p>
          <div className="quote__by">{t.quoteBy}</div>
        </Reveal>
      </div>
    </section>
  )
}
