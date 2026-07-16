import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { CONTENT, type Content, type Lang } from '../data/content'

interface LanguageContextValue {
  lang: Lang
  t: Content
  toggle: () => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('es')

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const value: LanguageContextValue = {
    lang,
    t: CONTENT[lang],
    toggle: () => setLang((l) => (l === 'es' ? 'en' : 'es')),
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLang(): LanguageContextValue {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used within a LanguageProvider')
  return ctx
}
