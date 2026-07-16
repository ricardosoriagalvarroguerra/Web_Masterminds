import { useState } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Ticker } from './components/Ticker'
import { Context } from './components/Context'
import { Approach } from './components/Approach'
import { About } from './components/About'
import { Metrics } from './components/Metrics'
import { Services } from './components/Services'
import { Mirada } from './components/Mirada'
import { Sectors } from './components/Sectors'
import { Method } from './components/Method'
import { Quote } from './components/Quote'
import { Events } from './components/Events'
import { Team } from './components/Team'
import { Insights } from './components/Insights'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Modal, type ModalTarget } from './components/Modal'

export function App() {
  const [modal, setModal] = useState<ModalTarget | null>(null)

  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Ticker />
        <Context />
        <Approach />
        <About />
        <Metrics />
        <Services onOpen={(i) => setModal({ kind: 'service', i })} />
        <Mirada />
        <Sectors />
        <Method />
        <Quote />
        <Events />
        <Team />
        <Insights onOpen={(i) => setModal({ kind: 'insight', i })} />
        <Contact />
      </main>
      <Footer />
      <Modal target={modal} onClose={() => setModal(null)} />
    </>
  )
}
