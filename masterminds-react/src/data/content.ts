/* ============================================================
   MasterMinds · Contenido (fuente única de verdad, ES / EN)
   Edita aquí los textos y se actualizan en toda la página.
   ============================================================ */

export type Lang = 'es' | 'en'

export interface NavLink { label: string; href: string }
export interface Stat { value: number; suffix: string; label: string }
export interface Lens { n: string; k: string; d: string }
export interface Service {
  n: string; title: string; desc: string; deliver: string[]; who: string
}
export interface MiradaFact { k: string; v: string }
export interface MethodStep { n: string; title: string; desc: string }
export interface EventItem { meta: string; title: string; img?: string }
export interface Member { name: string; role: string; bio: string }
export interface Insight {
  tag: string; date: string; title: string; lede: string; body: string[]
}
export interface ContactRow { k: string; v: string }

export interface Content {
  langOther: string
  ctaMeeting: string
  nav: NavLink[]
  heroMeta: string[]
  heroKicker: string
  heroA: string
  heroEm: string
  heroB: string
  heroSub: string
  heroCta1: string
  heroCta2: string
  artLabel: string
  artLenses: string[]
  artOut: string
  heroStats: Stat[]
  ticker: string[]
  ctxKicker: string
  ctxTitle: string
  ctxSub: string
  ctxArtLabel: string
  ctxArtNote: string
  enfKicker: string
  enfTitle: string
  lenses: Lens[]
  aboutKicker: string
  aboutTitle: string
  aboutP1: string
  aboutP2: string
  aboutCaptionRole: string
  creds: string[]
  metrics: Stat[]
  servKicker: string
  servTitle: string
  servSub: string
  servMore: string
  services: Service[]
  miradaKicker: string
  miradaTitle: string
  miradaP: string
  miradaFacts: MiradaFact[]
  miradaCta: string
  sectKicker: string
  sectTitle: string
  sectors: string[]
  methodKicker: string
  methodTitle: string
  method: MethodStep[]
  quote: string
  quoteBy: string
  eventsKicker: string
  eventsTitle: string
  eventsSub: string
  eventsSoon: string
  events: EventItem[]
  teamKicker: string
  teamTitle: string
  teamLead: Member
  teamRest: Member[]
  insKicker: string
  insTitle: string
  insLink: string
  insRead: string
  insights: Insight[]
  contactKicker: string
  contactTitle: string
  contactSub: string
  contactRows: ContactRow[]
  fName: string; fCompany: string; fEmail: string; fMsg: string
  fSubmit: string; fMore: string; fNote: string
  modalDeliver: string; modalWho: string; modalCta: string
  footTag: string; footExplore: string; footContact: string
  footRights: string; footSlogan: string
}

const es: Content = {
  langOther: 'EN',
  ctaMeeting: 'Agendar reunión',
  nav: [
    { label: 'Enfoque', href: '#enfoque' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Mirada Panorámica', href: '#mirada' },
    { label: 'Método', href: '#metodo' },
    { label: 'Equipo', href: '#equipo' },
    { label: 'Contacto', href: '#contacto' },
  ],
  heroMeta: ['La Paz · Santa Cruz · Cochabamba', 'Inteligencia estratégica', 'Est. Bolivia'],
  heroKicker: 'Análisis económico · coyuntural · político',
  heroA: 'Leemos la economía boliviana — y la',
  heroEm: 'traducimos',
  heroB: 'en decisiones.',
  heroSub: 'Acompañamos a inversores, empresas líderes e instituciones con análisis de alto rigor para decidir con certeza en el entorno más difícil de leer de la región.',
  heroCta1: 'Agendar una consulta',
  heroCta2: 'Ver servicios',
  artLabel: 'Perspectivas que convergen',
  artLenses: ['Económico', 'Coyuntural', 'Político'],
  artOut: 'Una lectura clara',
  heroStats: [
    { value: 44, suffix: '', label: 'Años de experiencia' },
    { value: 16, suffix: '', label: 'Países y geografías' },
    { value: 350, suffix: '+', label: 'Líderes asesorados' },
  ],
  ticker: ['Inflación', 'Tipo de cambio', 'Riesgo país', 'PIB', 'Reservas internacionales', 'Exportaciones', 'Inversión extranjera', 'Política fiscal', 'Coyuntura política', 'Sector privado', 'Crédito', 'Combustibles'],
  ctxKicker: '01 · El contexto',
  ctxTitle: 'Bolivia es uno de los entornos más difíciles de leer de la región.',
  ctxSub: 'Inflación, tipo de cambio, política y regulación se mueven al mismo tiempo. Para quien invierte o dirige, malinterpretar el ruido cuesta caro.',
  ctxArtLabel: 'El terreno',
  ctxArtNote: 'Leemos el terreno completo — no un solo indicador.',
  enfKicker: '02 · El enfoque',
  enfTitle: 'Tres miradas que trabajan juntas para explicar no solo qué pasa, sino qué hacer.',
  lenses: [
    { n: '01', k: 'Económico', d: 'La estructura: inflación, crecimiento y desempeño sectorial que definen el terreno de juego.' },
    { n: '02', k: 'Coyuntural', d: 'El momento: qué cambia hoy y por qué le importa directamente a su negocio.' },
    { n: '03', k: 'Político', d: 'El poder: escenarios electorales, riesgo regulatorio y transiciones institucionales.' },
  ],
  aboutKicker: 'Nosotros',
  aboutTitle: 'Décadas leyendo la economía boliviana — y traduciéndola para el mundo.',
  aboutP1: 'MasterMinds es una firma boliviana de inteligencia estratégica. Conectamos a líderes empresariales con información exclusiva y análisis de profundidad — reuniendo a protagonistas de la política económica, expertos internacionales y referentes del mundo empresarial para anticipar tendencias y transformarlas en decisiones.',
  aboutP2: 'Fundada y dirigida por Martin Rapp — economista de formación alemana con más de 40 años de trayectoria ejecutiva y 18 en directorios — combinamos rigor analítico, experiencia real de directorio y una red construida durante décadas al más alto nivel empresarial e institucional del país.',
  aboutCaptionRole: 'Director Ejecutivo & Fundador',
  creds: ['Formación en Economía · Alemania', 'Director y Advisory Boards desde 2001', 'Programa de Liderazgo CAINCO', 'Renaissance Executive Forums · Santa Cruz', 'Presencia en foros AMCHAM y BRAQ'],
  metrics: [
    { value: 44, suffix: '', label: 'Años de experiencia' },
    { value: 16, suffix: '', label: 'Países y geografías' },
    { value: 350, suffix: '+', label: 'Líderes empresariales asesorados' },
    { value: 18, suffix: '', label: 'Años en directorios' },
  ],
  servKicker: '03 · Servicios',
  servTitle: 'Análisis que se traduce en decisiones.',
  servSub: 'Cada servicio combina rigor técnico con una lectura real del terreno boliviano y regional.',
  servMore: 'Ver más',
  services: [
    { n: '01', title: 'Análisis Económico', desc: 'Lectura macroeconómica y sectorial, proyecciones y escenarios que convierten datos complejos en decisiones claras.', deliver: ['Informe macroeconómico con proyecciones de inflación, tipo de cambio y crecimiento', 'Análisis sectorial a la medida de su industria', 'Escenarios base, optimista y de estrés', 'Recomendaciones accionables para su directorio'], who: 'Inversores e instituciones que necesitan una lectura macro confiable.' },
    { n: '02', title: 'Análisis Coyuntural', desc: 'Interpretación en tiempo real del entorno económico y su impacto directo sobre su negocio e inversiones.', deliver: ['Monitoreo del entorno económico en tiempo real', 'Alertas ante hechos que impactan su operación', 'Lectura del impacto sobre precios, costos y liquidez', 'Briefings periódicos para el equipo ejecutivo'], who: 'Empresas que operan en un entorno cambiante y de alta incertidumbre.' },
    { n: '03', title: 'Análisis Político', desc: 'Evaluación de riesgo político, escenarios electorales y regulatorios para anticipar cambios y proteger su capital.', deliver: ['Mapa de actores y escenarios electorales', 'Evaluación de riesgo regulatorio y normativo', 'Impacto político sobre inversiones y contratos', 'Escenarios de transición y sus consecuencias'], who: 'Quienes evalúan riesgo político antes de comprometer capital.' },
    { n: '04', title: 'Asesoría Empresarial', desc: 'Acompañamiento estratégico a directorios y equipos ejecutivos con métodos de gestión probados en 16 países.', deliver: ['Acompañamiento a directorios y comités', 'Diagnóstico estratégico y priorización', 'Métodos de gestión probados en 16 países', 'Seguimiento y ajuste de la ejecución'], who: 'Directorios y equipos ejecutivos que buscan una mirada externa.' },
    { n: '05', title: 'Estudios de Factibilidad', desc: 'Evaluación económica y financiera de proyectos e inversiones, del diagnóstico a la recomendación accionable.', deliver: ['Modelo económico-financiero del proyecto', 'Análisis de viabilidad y sensibilidad', 'Lectura regulatoria y del entorno', 'Recomendación de inversión fundamentada'], who: 'Proyectos de inversión que requieren sustento económico riguroso.' },
    { n: '06', title: 'Programas de Liderazgo', desc: 'Formación ejecutiva y foros de liderazgo que fortalecen la capacidad de decisión de sus líderes.', deliver: ['Programas y foros ejecutivos a la medida', 'Desarrollo de la capacidad de decisión', 'Intercambio entre pares del más alto nivel', 'Herramientas prácticas y accionables'], who: 'Organizaciones que quieren fortalecer a sus líderes.' },
  ],
  miradaKicker: 'Iniciativa insignia',
  miradaTitle: 'Mirada Panorámica',
  miradaP: 'Nuestro espacio de conversación estratégica de alto nivel. Reunimos a más de 100 líderes empresariales, protagonistas de la política económica y autoridades para anticipar, en una sola sala, los escenarios del año que viene — y qué significan para cada decisión.',
  miradaFacts: [
    { k: '100+', v: 'Líderes empresariales y autoridades en cada edición' },
    { k: '3', v: 'Miradas: económica, coyuntural y política, convergiendo' },
    { k: '∞', v: 'Perspectivas que convergen. Decisiones que trascienden.' },
  ],
  miradaCta: 'Solicitar una invitación',
  sectKicker: 'Sectores',
  sectTitle: 'Sectores donde nuestro análisis genera ventaja.',
  sectors: ['Banca y Finanzas', 'Energía y Minería', 'Agroindustria', 'Inversión Extranjera', 'Sector Público y Multilaterales', 'Manufactura e Industria'],
  methodKicker: '04 · Metodología',
  methodTitle: 'Un proceso claro, de la pregunta a la acción.',
  method: [
    { n: '01', title: 'Diagnóstico', desc: 'Entendemos su objetivo, su exposición y las preguntas que realmente importan.' },
    { n: '02', title: 'Análisis', desc: 'Procesamos datos económicos, coyunturales y políticos con marcos propios.' },
    { n: '03', title: 'Estrategia', desc: 'Traducimos el análisis en escenarios y recomendaciones accionables.' },
    { n: '04', title: 'Acompañamiento', desc: 'Acompañamos la ejecución y ajustamos ante cada cambio del entorno.' },
  ],
  quote: 'Hacemos más exitosos a nuestros clientes a través de métodos ingeniosos de gestión.',
  quoteBy: 'Martin Rapp · Director Ejecutivo',
  eventsKicker: 'Eventos',
  eventsTitle: 'Presentes donde se decide la economía del país.',
  eventsSub: 'Foros, directorios y encuentros donde compartimos análisis con líderes empresariales y autoridades.',
  eventsSoon: 'Galería en preparación',
  events: [
    { meta: 'La Paz · Cochabamba · Santa Cruz', title: 'Perspectivas Económicas y Desafíos Empresariales' },
    { meta: 'AMCHAM Bolivia', title: 'AMCHAM Business Forum' },
    { meta: 'CAINCO', title: 'Programa de Liderazgo CAINCO' },
    { meta: 'Millennials CAINCO', title: 'El rol del CEO en el contexto actual' },
    { meta: 'GCF Task Force · Santa Cruz', title: 'Encuentro Técnico Regional' },
    { meta: 'Renaissance Executive Forums', title: 'Forum Líder · Santa Cruz' },
  ],
  teamKicker: 'Equipo',
  teamTitle: 'Experiencia que rara vez cabe en un CV.',
  teamLead: {
    role: 'Director Ejecutivo & Fundador',
    name: 'Martin Rapp',
    bio: 'Nacido en Alemania y economista de formación. Más de 40 años en cargos ejecutivos y 18 en directorios; subgerente general y director de bancos durante 14 años. Ha hecho más exitosos a sus clientes con métodos de gestión en 16 países y geografías. Lidera el Programa de Liderazgo de CAINCO y dirige el Forum Líder de Renaissance Executive Forums en Santa Cruz. Reconocido como uno de los economistas más influyentes de Bolivia.',
  },
  teamRest: [
    { name: 'Análisis Económico', role: 'Equipo senior', bio: 'Especialistas en análisis macroeconómico y sectorial, proyecciones y modelación financiera al servicio de cada decisión.' },
    { name: 'Análisis Político', role: 'Equipo senior', bio: 'Enfocados en riesgo político, escenarios electorales y regulatorios para anticipar el cambio del entorno.' },
  ],
  insKicker: 'Insights',
  insTitle: 'Perspectivas sobre Bolivia y la región.',
  insLink: 'Suscribirse',
  insRead: 'Leer',
  insights: [
    { tag: 'Perspectivas', date: '2026', title: 'Escenarios económicos para el próximo ciclo.', lede: 'Un adelanto de los escenarios que MasterMinds proyecta para el próximo ciclo económico.', body: ['Desarrollamos las variables clave — inflación, tipo de cambio, reservas y crecimiento — y su interacción en distintos escenarios.', 'Incluye una lectura accionable para directorios e inversores.'] },
    { tag: 'Riesgo Político', date: '2026', title: 'Riesgo político y decisiones de inversión en Bolivia.', lede: 'Cómo el riesgo político condiciona las decisiones de inversión en Bolivia.', body: ['Analizamos el mapa de actores, los escenarios electorales y su impacto sobre contratos e inversiones.', 'Cerramos con recomendaciones para anticipar cambios y proteger el capital.'] },
    { tag: 'Coyuntura', date: '2026', title: 'El año de la empresa privada: cómo leer el entorno.', lede: 'Una lectura del entorno y del rol de la empresa privada en el ciclo actual.', body: ['Revisamos la coyuntura reciente y las oportunidades para el sector privado.', 'Incluye señales a monitorear en los próximos meses.'] },
  ],
  contactKicker: 'Contacto',
  contactTitle: 'Hablemos de su próxima decisión.',
  contactSub: 'Cuéntenos su desafío. Preparamos una primera conversación sin costo para entender cómo podemos ayudar.',
  contactRows: [
    { k: 'Contacto', v: 'Martin Rapp · Director Ejecutivo' },
    { k: 'Email', v: 'contacto@masterminds.bo' },
    { k: 'Ubicación', v: 'Santa Cruz de la Sierra, Bolivia' },
    { k: 'LinkedIn', v: '/company/mastermindsbol' },
  ],
  fName: 'Nombre', fCompany: 'Empresa', fEmail: 'Correo', fMsg: '¿En qué podemos ayudar?',
  fSubmit: 'Enviar mensaje', fMore: 'Escribir por email',
  fNote: 'Respondemos en menos de 48 horas hábiles.',
  modalDeliver: 'Qué entregamos', modalWho: 'Ideal para', modalCta: 'Conversar sobre esto',
  footTag: 'Inteligencia estratégica · Bolivia', footExplore: 'Explorar', footContact: 'Contacto',
  footRights: '© 2026 MasterMinds S.R.L. · Bolivia',
  footSlogan: 'Perspectivas que convergen. Decisiones que trascienden.',
}

const en: Content = {
  langOther: 'ES',
  ctaMeeting: 'Book a meeting',
  nav: [
    { label: 'Approach', href: '#enfoque' },
    { label: 'Services', href: '#servicios' },
    { label: 'Panoramic View', href: '#mirada' },
    { label: 'Method', href: '#metodo' },
    { label: 'Team', href: '#equipo' },
    { label: 'Contact', href: '#contacto' },
  ],
  heroMeta: ['La Paz · Santa Cruz · Cochabamba', 'Strategic intelligence', 'Est. Bolivia'],
  heroKicker: 'Economic · situational · political analysis',
  heroA: 'We read Bolivia’s economy — and',
  heroEm: 'translate it',
  heroB: 'into decisions.',
  heroSub: 'We guide investors, leading companies and institutions with high-rigor analysis to decide with confidence in the hardest environment to read in the region.',
  heroCta1: 'Book a consultation',
  heroCta2: 'See services',
  artLabel: 'Perspectives that converge',
  artLenses: ['Economic', 'Situational', 'Political'],
  artOut: 'A clear reading',
  heroStats: [
    { value: 44, suffix: '', label: 'Years of experience' },
    { value: 16, suffix: '', label: 'Countries & geographies' },
    { value: 350, suffix: '+', label: 'Leaders advised' },
  ],
  ticker: ['Inflation', 'Exchange rate', 'Country risk', 'GDP', 'Intl. reserves', 'Exports', 'Foreign investment', 'Fiscal policy', 'Political outlook', 'Private sector', 'Credit', 'Fuel'],
  ctxKicker: '01 · The context',
  ctxTitle: 'Bolivia is one of the hardest environments to read in the region.',
  ctxSub: 'Inflation, exchange rate, politics and regulation all move at once. For those who invest or lead, misreading the noise is costly.',
  ctxArtLabel: 'The terrain',
  ctxArtNote: 'We read the whole terrain — not a single indicator.',
  enfKicker: '02 · The approach',
  enfTitle: 'Three lenses working together to explain not just what is happening, but what to do about it.',
  lenses: [
    { n: '01', k: 'Economic', d: 'The structure: inflation, growth and sector performance that define the playing field.' },
    { n: '02', k: 'Situational', d: 'The moment: what changes today and why it matters directly to your business.' },
    { n: '03', k: 'Political', d: 'Power: electoral scenarios, regulatory risk and institutional transitions.' },
  ],
  aboutKicker: 'About us',
  aboutTitle: 'Decades reading Bolivia’s economy — and translating it for the world.',
  aboutP1: 'MasterMinds is a Bolivian strategic-intelligence firm. We connect business leaders with exclusive information and in-depth analysis — bringing together economic-policy protagonists, international experts and business thought-leaders to anticipate trends and turn them into decisions.',
  aboutP2: 'Founded and led by Martin Rapp — a German-trained economist with 40+ years of executive experience and 18 on boards — we combine analytical rigor, real board experience and a network built over decades at the highest business and institutional level in the country.',
  aboutCaptionRole: 'Executive Director & Founder',
  creds: ['Economics training · Germany', 'Director & advisory boards since 2001', 'CAINCO Leadership Program', 'Renaissance Executive Forums · Santa Cruz', 'Present at AMCHAM & BRAQ forums'],
  metrics: [
    { value: 44, suffix: '', label: 'Years of experience' },
    { value: 16, suffix: '', label: 'Countries & geographies' },
    { value: 350, suffix: '+', label: 'Business leaders advised' },
    { value: 18, suffix: '', label: 'Years on boards' },
  ],
  servKicker: '03 · Services',
  servTitle: 'Analysis that turns into decisions.',
  servSub: 'Every service pairs technical rigor with a real reading of the Bolivian and regional ground.',
  servMore: 'See more',
  services: [
    { n: '01', title: 'Economic Analysis', desc: 'Macroeconomic and sector reading, forecasts and scenarios that turn complex data into clear decisions.', deliver: ['Macroeconomic report with inflation, FX and growth forecasts', 'Sector analysis tailored to your industry', 'Base, upside and stress scenarios', 'Actionable recommendations for your board'], who: 'Investors and institutions that need a reliable macro reading.' },
    { n: '02', title: 'Situational Analysis', desc: 'Real-time interpretation of the economic environment and its direct impact on your business and investments.', deliver: ['Real-time monitoring of the economic environment', 'Alerts on events that affect your operation', 'Reading of the impact on prices, costs and liquidity', 'Regular briefings for the executive team'], who: 'Companies operating in a shifting, high-uncertainty environment.' },
    { n: '03', title: 'Political Analysis', desc: 'Political-risk assessment, electoral and regulatory scenarios to anticipate change and protect your capital.', deliver: ['Map of actors and electoral scenarios', 'Regulatory and legal risk assessment', 'Political impact on investments and contracts', 'Transition scenarios and their consequences'], who: 'Those assessing political risk before committing capital.' },
    { n: '04', title: 'Business Advisory', desc: 'Strategic guidance for boards and executive teams, with management methods proven across 16 countries.', deliver: ['Support for boards and committees', 'Strategic diagnosis and prioritization', 'Management methods proven across 16 countries', 'Follow-up and adjustment of execution'], who: 'Boards and executive teams seeking an outside view.' },
    { n: '05', title: 'Feasibility Studies', desc: 'Economic and financial evaluation of projects and investments, from diagnosis to actionable recommendation.', deliver: ['Economic-financial model of the project', 'Viability and sensitivity analysis', 'Regulatory and environment reading', 'Well-founded investment recommendation'], who: 'Investment projects that need rigorous economic grounding.' },
    { n: '06', title: 'Leadership Programs', desc: 'Executive training and leadership forums that strengthen your leaders’ capacity to decide.', deliver: ['Tailored executive programs and forums', 'Building decision-making capacity', 'Peer exchange at the highest level', 'Practical, actionable tools'], who: 'Organizations that want to strengthen their leaders.' },
  ],
  miradaKicker: 'Flagship initiative',
  miradaTitle: 'Panoramic View',
  miradaP: 'Our high-level strategic conversation. We bring together 100+ business leaders, economic-policy protagonists and authorities to anticipate, in a single room, the scenarios of the year ahead — and what they mean for every decision.',
  miradaFacts: [
    { k: '100+', v: 'Business leaders and authorities at each edition' },
    { k: '3', v: 'Lenses: economic, situational and political, converging' },
    { k: '∞', v: 'Converging perspectives. Decisions that transcend.' },
  ],
  miradaCta: 'Request an invitation',
  sectKicker: 'Sectors',
  sectTitle: 'Sectors where our analysis creates an edge.',
  sectors: ['Banking & Finance', 'Energy & Mining', 'Agribusiness', 'Foreign Investment', 'Public Sector & Multilaterals', 'Manufacturing & Industry'],
  methodKicker: '04 · Method',
  methodTitle: 'A clear process, from question to action.',
  method: [
    { n: '01', title: 'Diagnosis', desc: 'We understand your goal, your exposure and the questions that truly matter.' },
    { n: '02', title: 'Analysis', desc: 'We process economic, situational and political data with proprietary frameworks.' },
    { n: '03', title: 'Strategy', desc: 'We translate the analysis into scenarios and actionable recommendations.' },
    { n: '04', title: 'Support', desc: 'We support execution and adjust to every shift in the environment.' },
  ],
  quote: 'We make our clients more successful through ingenious management methods.',
  quoteBy: 'Martin Rapp · Executive Director',
  eventsKicker: 'Events',
  eventsTitle: 'Present where the country’s economy is decided.',
  eventsSub: 'Forums, boards and gatherings where we share analysis with business leaders and authorities.',
  eventsSoon: 'Gallery in preparation',
  events: [
    { meta: 'La Paz · Cochabamba · Santa Cruz', title: 'Economic Outlook & Business Challenges' },
    { meta: 'AMCHAM Bolivia', title: 'AMCHAM Business Forum' },
    { meta: 'CAINCO', title: 'CAINCO Leadership Program' },
    { meta: 'Millennials CAINCO', title: 'The role of the CEO in today’s context' },
    { meta: 'GCF Task Force · Santa Cruz', title: 'Regional Technical Meeting' },
    { meta: 'Renaissance Executive Forums', title: 'Forum Líder · Santa Cruz' },
  ],
  teamKicker: 'Team',
  teamTitle: 'Experience that rarely fits on a CV.',
  teamLead: {
    role: 'Executive Director & Founder',
    name: 'Martin Rapp',
    bio: 'German-born, trained as an economist. 40+ years in executive roles and 18 on boards; deputy general manager and bank director for 14 years. He has made his clients more successful with management methods across 16 countries and geographies. He leads the CAINCO Leadership Program and directs the Renaissance Executive Forums’ Forum Líder in Santa Cruz. Recognized as one of Bolivia’s most influential economists.',
  },
  teamRest: [
    { name: 'Economic Analysis', role: 'Senior team', bio: 'Specialists in macroeconomic and sector analysis, forecasting and financial modeling in service of every decision.' },
    { name: 'Political Analysis', role: 'Senior team', bio: 'Focused on political risk, electoral and regulatory scenarios to anticipate shifts in the environment.' },
  ],
  insKicker: 'Insights',
  insTitle: 'Perspectives on Bolivia and the region.',
  insLink: 'Subscribe',
  insRead: 'Read',
  insights: [
    { tag: 'Outlook', date: '2026', title: 'Economic scenarios for the next cycle.', lede: 'A preview of the scenarios MasterMinds projects for the next economic cycle.', body: ['We develop the key variables — inflation, FX, reserves and growth — and their interaction across scenarios.', 'It includes an actionable reading for boards and investors.'] },
    { tag: 'Political Risk', date: '2026', title: 'Political risk and investment decisions in Bolivia.', lede: 'How political risk shapes investment decisions in Bolivia.', body: ['We analyze the map of actors, electoral scenarios and their impact on contracts and investments.', 'We close with recommendations to anticipate change and protect capital.'] },
    { tag: 'Situation', date: '2026', title: 'The year of private enterprise: how to read the environment.', lede: 'A reading of the environment and the role of private enterprise in the current cycle.', body: ['We review the recent situation and the opportunities for the private sector.', 'It includes signals to monitor in the coming months.'] },
  ],
  contactKicker: 'Contact',
  contactTitle: 'Let’s talk about your next decision.',
  contactSub: 'Tell us your challenge. We’ll set up a first conversation at no cost to understand how we can help.',
  contactRows: [
    { k: 'Contact', v: 'Martin Rapp · Executive Director' },
    { k: 'Email', v: 'contacto@masterminds.bo' },
    { k: 'Location', v: 'Santa Cruz de la Sierra, Bolivia' },
    { k: 'LinkedIn', v: '/company/mastermindsbol' },
  ],
  fName: 'Name', fCompany: 'Company', fEmail: 'Email', fMsg: 'How can we help?',
  fSubmit: 'Send message', fMore: 'Write by email',
  fNote: 'We reply within 48 business hours.',
  modalDeliver: 'What we deliver', modalWho: 'Ideal for', modalCta: 'Talk about this',
  footTag: 'Strategic intelligence · Bolivia', footExplore: 'Explore', footContact: 'Contact',
  footRights: '© 2026 MasterMinds S.R.L. · Bolivia',
  footSlogan: 'Converging perspectives. Decisions that transcend.',
}

export const CONTENT: Record<Lang, Content> = { es, en }
