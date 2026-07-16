import { useLang } from '../i18n/LanguageContext'

export function Ticker() {
  const { t } = useLang()
  const items = [...t.ticker, ...t.ticker] // duplicated for a seamless loop
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker__track">
        {items.map((item, i) => (
          <span className="ticker__item" key={i}>{item}</span>
        ))}
      </div>
    </div>
  )
}
