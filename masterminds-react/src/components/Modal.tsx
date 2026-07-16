import { useEffect } from 'react'
import { useLang } from '../i18n/LanguageContext'

export interface ModalTarget { kind: 'service' | 'insight'; i: number }

export function Modal({ target, onClose }: { target: ModalTarget | null; onClose: () => void }) {
  const { t } = useLang()

  useEffect(() => {
    if (!target) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [target, onClose])

  const open = target !== null
  let tag = ''
  let title = ''
  let body: React.ReactNode = null

  if (target) {
    if (target.kind === 'service') {
      const s = t.services[target.i]
      tag = t.servKicker.replace(/^\d+\s*·\s*/, '')
      title = s.title
      body = (
        <>
          <div className="blk"><p>{s.desc}</p></div>
          <div className="blk">
            <div className="bt">{t.modalDeliver}</div>
            {s.deliver.map((d, i) => (
              <div className="li" key={i}><span>{d}</span></div>
            ))}
          </div>
          <div className="blk">
            <div className="bt">{t.modalWho}</div>
            <p>{s.who}</p>
          </div>
        </>
      )
    } else {
      const a = t.insights[target.i]
      tag = `${a.tag} · ${a.date}`
      title = a.title
      body = (
        <>
          <div className="blk"><p>{a.lede}</p></div>
          {a.body.map((p, i) => (
            <div className="blk" key={i}><p>{p}</p></div>
          ))}
        </>
      )
    }
  }

  return (
    <div
      className={`modal${open ? ' open' : ''}`}
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
      role="dialog"
      aria-modal="true"
      aria-hidden={!open}
    >
      <div className="modal__panel">
        <div className="modal__head">
          <button className="modal__close" onClick={onClose} aria-label="Cerrar">✕</button>
          <div className="modal__tag">{tag}</div>
          <h3>{title}</h3>
        </div>
        <div className="modal__body">
          {body}
          <div>
            <a href="#contacto" className="btn btn--primary" onClick={onClose}>{t.modalCta} →</a>
          </div>
        </div>
      </div>
    </div>
  )
}
