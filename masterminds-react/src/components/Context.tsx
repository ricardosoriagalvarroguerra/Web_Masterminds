import { useLang } from '../i18n/LanguageContext'
import { Reveal } from './Reveal'
import { TerrainArt } from './TerrainArt'

export function Context() {
  const { t } = useLang()
  return (
    <section className="section section--dark">
      <div className="container context__grid">
        <Reveal>
          <div className="eyebrow">{t.ctxKicker}</div>
          <h2 className="context__title">{t.ctxTitle}</h2>
          <p className="lead">{t.ctxSub}</p>
        </Reveal>
        <Reveal className="viz" delay={120}>
          <TerrainArt label={t.ctxArtLabel} />
          <div className="viz__note">{t.ctxArtNote}</div>
        </Reveal>
      </div>
    </section>
  )
}
