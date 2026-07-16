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
  heroMeta: ['Base en Santa Cruz · alcance nacional', 'Inteligencia estratégica', 'Fundada en 2023'],
  heroKicker: 'Análisis económico · coyuntural · político',
  heroA: 'Leemos la economía boliviana — y la',
  heroEm: 'traducimos',
  heroB: 'en decisiones.',
  heroSub: 'Acompañamos a inversores, empresas e instituciones con análisis riguroso para decidir con mayor claridad en un entorno económico de alta complejidad.',
  heroCta1: 'Agendar una consulta',
  heroCta2: 'Ver servicios',
  artLabel: 'Perspectivas que convergen',
  artLenses: ['Económico', 'Coyuntural', 'Político'],
  artOut: 'Una lectura clara',
  heroStats: [
    { value: 40, suffix: '+', label: 'Años de trayectoria del fundador' },
    { value: 16, suffix: '', label: 'Países con proyectos' },
    { value: 100, suffix: '+', label: 'Participantes en ediciones recientes' },
  ],
  ticker: ['Inflación', 'Tipo de cambio', 'Riesgo país', 'PIB', 'Reservas internacionales', 'Exportaciones', 'Inversión extranjera', 'Política fiscal', 'Coyuntura política', 'Sector privado', 'Crédito', 'Combustibles'],
  ctxKicker: '01 · El contexto',
  ctxTitle: 'Bolivia atraviesa un entorno económico de alta complejidad.',
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
  aboutTitle: 'Experiencia internacional para interpretar la economía boliviana.',
  aboutP1: 'MasterMinds es una firma boliviana de inteligencia estratégica fundada en 2023. Conectamos a líderes empresariales con análisis de profundidad y espacios de conversación que reúnen a especialistas, autoridades y referentes del sector privado.',
  aboutP2: 'La firma es fundada y dirigida por Martin Rapp, ejecutivo y analista económico nacido en Alemania, con más de cuatro décadas de trayectoria en América Latina, proyectos desarrollados en 16 países y experiencia comprobada en instituciones bancarias y directorios empresariales.',
  aboutCaptionRole: 'Director Ejecutivo & Fundador',
  creds: ['Ejecutivo y analista económico · Alemania', 'Proyectos en 16 países de América Latina', 'Experiencia comprobada en directorios', 'Forum Líder · Santa Cruz desde 2012', 'Presencia en foros AMCHAM y BRAQ'],
  metrics: [
    { value: 40, suffix: '+', label: 'Años de trayectoria del fundador' },
    { value: 16, suffix: '', label: 'Países con proyectos' },
    { value: 100, suffix: '+', label: 'Participantes en ediciones recientes' },
    { value: 3, suffix: '', label: 'Ciudades en la gira Perspectivas 2024' },
  ],
  servKicker: '03 · Servicios',
  servTitle: 'Análisis que se traduce en decisiones.',
  servSub: 'Cada servicio combina rigor técnico con una lectura real del terreno boliviano y regional.',
  servMore: 'Ver más',
  services: [
    { n: '01', title: 'Análisis Económico', desc: 'Lectura macroeconómica y sectorial para interpretar variables, tendencias y escenarios relevantes para cada decisión.', deliver: ['Lectura macroeconómica y sectorial', 'Seguimiento de variables relevantes', 'Construcción de escenarios de referencia', 'Presentaciones para equipos ejecutivos'], who: 'Inversores e instituciones que necesitan una lectura fundamentada del entorno.' },
    { n: '02', title: 'Análisis Coyuntural', desc: 'Interpretación del entorno económico y de sus posibles efectos sobre empresas e inversiones.', deliver: ['Seguimiento de la coyuntura', 'Identificación de señales relevantes', 'Lectura de posibles efectos sobre precios, costos y liquidez', 'Conversaciones periódicas con el equipo ejecutivo'], who: 'Empresas que operan en un entorno cambiante y de alta incertidumbre.' },
    { n: '03', title: 'Análisis Político', desc: 'Evaluación de riesgo político, escenarios electorales y regulatorios para anticipar cambios y proteger su capital.', deliver: ['Mapa de actores y escenarios electorales', 'Evaluación de riesgo regulatorio y normativo', 'Impacto político sobre inversiones y contratos', 'Escenarios de transición y sus consecuencias'], who: 'Quienes evalúan riesgo político antes de comprometer capital.' },
    { n: '04', title: 'Asesoría Empresarial', desc: 'Acompañamiento estratégico a directorios y equipos ejecutivos, respaldado por experiencia en proyectos desarrollados en 16 países.', deliver: ['Conversaciones con directorios y comités', 'Diagnóstico estratégico y priorización', 'Aplicación de aprendizajes internacionales', 'Seguimiento de decisiones clave'], who: 'Directorios y equipos ejecutivos que buscan una mirada externa.' },
    { n: '05', title: 'Inteligencia Estratégica', desc: 'Integración de señales económicas, políticas y sectoriales para construir una lectura conjunta del entorno.', deliver: ['Síntesis de información relevante', 'Lectura integrada de riesgos y oportunidades', 'Escenarios para la conversación ejecutiva', 'Identificación de asuntos a monitorear'], who: 'Organizaciones que necesitan ordenar información dispersa antes de decidir.' },
    { n: '06', title: 'Foros Ejecutivos', desc: 'Conversaciones y encuentros de liderazgo orientados al intercambio de perspectivas entre pares.', deliver: ['Diseño de conversaciones ejecutivas', 'Intercambio de experiencias entre pares', 'Presentación de perspectivas especializadas', 'Síntesis de temas relevantes para la decisión'], who: 'Organizaciones y líderes que valoran el aprendizaje entre pares.' },
  ],
  miradaKicker: 'Iniciativa insignia',
  miradaTitle: 'Mirada Panorámica',
  miradaP: 'Nuestro espacio de conversación estratégica de alto nivel. Ediciones recientes documentadas han reunido a más de 100 líderes empresariales, especialistas y autoridades para analizar los escenarios del año siguiente y sus implicaciones para la toma de decisiones.',
  miradaFacts: [
    { k: '100+', v: 'Participantes en ediciones recientes documentadas' },
    { k: '3', v: 'Miradas: económica, coyuntural y política, convergiendo' },
    { k: '∞', v: 'Perspectivas que convergen. Decisiones que trascienden.' },
  ],
  miradaCta: 'Solicitar una invitación',
  sectKicker: 'Sectores',
  sectTitle: 'Sectores donde aportamos una lectura estratégica.',
  sectors: ['Banca y Finanzas', 'Energía e Hidrocarburos', 'Agroindustria', 'Construcción y Vivienda', 'Sector Público y Multilaterales', 'Manufactura e Industria'],
  methodKicker: '04 · Metodología',
  methodTitle: 'Un proceso claro, de la pregunta a la acción.',
  method: [
    { n: '01', title: 'Diagnóstico', desc: 'Entendemos su objetivo, su exposición y las preguntas que realmente importan.' },
    { n: '02', title: 'Análisis', desc: 'Procesamos información económica, coyuntural y política con marcos analíticos adecuados a cada pregunta.' },
    { n: '03', title: 'Estrategia', desc: 'Traducimos el análisis en escenarios y recomendaciones accionables.' },
    { n: '04', title: 'Acompañamiento', desc: 'Acompañamos la ejecución y ajustamos ante cada cambio del entorno.' },
  ],
  quote: 'El análisis tiene valor cuando mejora la calidad de una decisión.',
  quoteBy: 'MasterMinds · Inteligencia estratégica',
  eventsKicker: 'Eventos',
  eventsTitle: 'Presentes donde se decide la economía del país.',
  eventsSub: 'Foros, directorios y encuentros donde compartimos análisis con líderes empresariales y autoridades.',
  eventsSoon: 'Galería en preparación',
  events: [
    { meta: 'La Paz · Cochabamba · Santa Cruz', title: 'Perspectivas Económicas y Desafíos Empresariales' },
    { meta: 'AMCHAM Bolivia', title: 'AMCHAM Business Forum' },
    { meta: 'CAINCO · UPSA', title: 'Mirada Panorámica hacia 2024' },
    { meta: 'GCF Task Force · Santa Cruz', title: 'Encuentro Técnico Regional' },
    { meta: 'Renaissance Executive Forums', title: 'Forum Líder · Santa Cruz' },
    { meta: 'Pacto Global Red Bolivia', title: 'V Foro Internacional de Finanzas Sostenibles' },
  ],
  teamKicker: 'Equipo',
  teamTitle: 'Trayectoria ejecutiva documentada.',
  teamLead: {
    role: 'Director Ejecutivo & Fundador',
    name: 'Martin Rapp',
    bio: 'Nacido en Alemania, Martin Rapp es ejecutivo y analista económico con más de cuatro décadas de trayectoria en América Latina. Ha desarrollado proyectos en 16 países, dirigió instituciones bancarias durante más de una década y cuenta con experiencia documentada en directorios empresariales. Desde 2012 lidera Forum Líder en Santa Cruz bajo el modelo Renaissance Executive Forums.',
  },
  teamRest: [],
  insKicker: 'Insights',
  insTitle: 'Próximos análisis sobre Bolivia y la región.',
  insLink: 'Contactar',
  insRead: 'Próximamente',
  insights: [
    { tag: 'En preparación', date: 'Próximamente', title: 'Escenarios económicos para Bolivia.', lede: 'Estamos preparando este análisis para su publicación.', body: ['El contenido final será publicado con fecha, autoría y metodología claramente identificadas.'] },
    { tag: 'En preparación', date: 'Próximamente', title: 'Riesgo político y decisiones de inversión.', lede: 'Estamos preparando este análisis para su publicación.', body: ['El contenido final será publicado con fecha, autoría y fuentes claramente identificadas.'] },
    { tag: 'En preparación', date: 'Próximamente', title: 'Señales de la coyuntura empresarial.', lede: 'Estamos preparando este análisis para su publicación.', body: ['El contenido final será publicado una vez concluida su revisión editorial.'] },
  ],
  contactKicker: 'Contacto',
  contactTitle: 'Hablemos de su próxima decisión.',
  contactSub: 'Cuéntenos su desafío para evaluar cómo nuestro enfoque puede contribuir a su próxima decisión.',
  contactRows: [
    { k: 'Contacto', v: 'Martin Rapp · Director Ejecutivo' },
    { k: 'Email', v: 'contacto@masterminds.bo' },
    { k: 'Ubicación', v: 'Santa Cruz de la Sierra, Bolivia' },
    { k: 'LinkedIn', v: '/company/mastermindsbol' },
  ],
  fName: 'Nombre', fCompany: 'Empresa', fEmail: 'Correo', fMsg: '¿En qué podemos ayudar?',
  fSubmit: 'Preparar correo', fMore: 'Escribir directamente',
  fNote: 'Al continuar, se abrirá su aplicación de correo con el mensaje preparado.',
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
  heroMeta: ['Santa Cruz-based · nationwide reach', 'Strategic intelligence', 'Founded in 2023'],
  heroKicker: 'Economic · situational · political analysis',
  heroA: 'We read Bolivia’s economy — and',
  heroEm: 'translate it',
  heroB: 'into decisions.',
  heroSub: 'We guide investors, companies and institutions with rigorous analysis to make clearer decisions in a highly complex economic environment.',
  heroCta1: 'Book a consultation',
  heroCta2: 'See services',
  artLabel: 'Perspectives that converge',
  artLenses: ['Economic', 'Situational', 'Political'],
  artOut: 'A clear reading',
  heroStats: [
    { value: 40, suffix: '+', label: 'Years in the founder’s career' },
    { value: 16, suffix: '', label: 'Countries with projects' },
    { value: 100, suffix: '+', label: 'Participants at recent editions' },
  ],
  ticker: ['Inflation', 'Exchange rate', 'Country risk', 'GDP', 'Intl. reserves', 'Exports', 'Foreign investment', 'Fiscal policy', 'Political outlook', 'Private sector', 'Credit', 'Fuel'],
  ctxKicker: '01 · The context',
  ctxTitle: 'Bolivia is navigating a highly complex economic environment.',
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
  aboutTitle: 'International experience for interpreting Bolivia’s economy.',
  aboutP1: 'MasterMinds is a Bolivian strategic-intelligence firm founded in 2023. We connect business leaders with in-depth analysis and conversations that bring together specialists, authorities and private-sector leaders.',
  aboutP2: 'The firm was founded and is led by Martin Rapp, a German-born executive and economic analyst with more than four decades of experience in Latin America, projects developed across 16 countries and documented experience in banking institutions and corporate boards.',
  aboutCaptionRole: 'Executive Director & Founder',
  creds: ['Executive and economic analyst · Germany', 'Projects across 16 Latin American countries', 'Documented corporate-board experience', 'Forum Líder · Santa Cruz since 2012', 'Present at AMCHAM & BRAQ forums'],
  metrics: [
    { value: 40, suffix: '+', label: 'Years in the founder’s career' },
    { value: 16, suffix: '', label: 'Countries with projects' },
    { value: 100, suffix: '+', label: 'Participants at recent editions' },
    { value: 3, suffix: '', label: 'Cities in the 2024 Outlook tour' },
  ],
  servKicker: '03 · Services',
  servTitle: 'Analysis that turns into decisions.',
  servSub: 'Every service pairs technical rigor with a real reading of the Bolivian and regional ground.',
  servMore: 'See more',
  services: [
    { n: '01', title: 'Economic Analysis', desc: 'Macroeconomic and sector analysis to interpret variables, trends and scenarios relevant to each decision.', deliver: ['Macroeconomic and sector reading', 'Monitoring of relevant variables', 'Development of reference scenarios', 'Presentations for executive teams'], who: 'Investors and institutions that need an evidence-based reading of the environment.' },
    { n: '02', title: 'Situational Analysis', desc: 'Interpretation of the economic environment and its possible effects on companies and investments.', deliver: ['Monitoring of current conditions', 'Identification of relevant signals', 'Assessment of possible effects on prices, costs and liquidity', 'Regular conversations with the executive team'], who: 'Companies operating in a shifting, high-uncertainty environment.' },
    { n: '03', title: 'Political Analysis', desc: 'Political-risk assessment, electoral and regulatory scenarios to anticipate change and protect your capital.', deliver: ['Map of actors and electoral scenarios', 'Regulatory and legal risk assessment', 'Political impact on investments and contracts', 'Transition scenarios and their consequences'], who: 'Those assessing political risk before committing capital.' },
    { n: '04', title: 'Business Advisory', desc: 'Strategic guidance for boards and executive teams, backed by experience in projects developed across 16 countries.', deliver: ['Conversations with boards and committees', 'Strategic diagnosis and prioritization', 'Application of international lessons', 'Follow-up of key decisions'], who: 'Boards and executive teams seeking an outside view.' },
    { n: '05', title: 'Strategic Intelligence', desc: 'Integration of economic, political and sector signals to build a shared reading of the environment.', deliver: ['Synthesis of relevant information', 'Integrated reading of risks and opportunities', 'Scenarios for executive discussion', 'Identification of issues to monitor'], who: 'Organizations that need to structure dispersed information before deciding.' },
    { n: '06', title: 'Executive Forums', desc: 'Leadership conversations and gatherings focused on exchanging perspectives among peers.', deliver: ['Design of executive conversations', 'Exchange of experience among peers', 'Presentation of specialist perspectives', 'Synthesis of decision-relevant issues'], who: 'Organizations and leaders who value peer learning.' },
  ],
  miradaKicker: 'Flagship initiative',
  miradaTitle: 'Panoramic View',
  miradaP: 'Our high-level strategic conversation. Documented recent editions have brought together more than 100 business leaders, specialists and authorities to examine the scenarios for the year ahead and their implications for decision-making.',
  miradaFacts: [
    { k: '100+', v: 'Participants at documented recent editions' },
    { k: '3', v: 'Lenses: economic, situational and political, converging' },
    { k: '∞', v: 'Converging perspectives. Decisions that transcend.' },
  ],
  miradaCta: 'Request an invitation',
  sectKicker: 'Sectors',
  sectTitle: 'Sectors where we contribute a strategic perspective.',
  sectors: ['Banking & Finance', 'Energy & Hydrocarbons', 'Agribusiness', 'Construction & Housing', 'Public Sector & Multilaterals', 'Manufacturing & Industry'],
  methodKicker: '04 · Method',
  methodTitle: 'A clear process, from question to action.',
  method: [
    { n: '01', title: 'Diagnosis', desc: 'We understand your goal, your exposure and the questions that truly matter.' },
    { n: '02', title: 'Analysis', desc: 'We process economic, situational and political information with analytical frameworks suited to each question.' },
    { n: '03', title: 'Strategy', desc: 'We translate the analysis into scenarios and actionable recommendations.' },
    { n: '04', title: 'Support', desc: 'We support execution and adjust to every shift in the environment.' },
  ],
  quote: 'Analysis creates value when it improves the quality of a decision.',
  quoteBy: 'MasterMinds · Strategic intelligence',
  eventsKicker: 'Events',
  eventsTitle: 'Present where the country’s economy is decided.',
  eventsSub: 'Forums, boards and gatherings where we share analysis with business leaders and authorities.',
  eventsSoon: 'Gallery in preparation',
  events: [
    { meta: 'La Paz · Cochabamba · Santa Cruz', title: 'Economic Outlook & Business Challenges' },
    { meta: 'AMCHAM Bolivia', title: 'AMCHAM Business Forum' },
    { meta: 'CAINCO · UPSA', title: 'Panoramic View towards 2024' },
    { meta: 'GCF Task Force · Santa Cruz', title: 'Regional Technical Meeting' },
    { meta: 'Renaissance Executive Forums', title: 'Forum Líder · Santa Cruz' },
    { meta: 'UN Global Compact Network Bolivia', title: '5th International Sustainable Finance Forum' },
  ],
  teamKicker: 'Team',
  teamTitle: 'A documented executive career.',
  teamLead: {
    role: 'Executive Director & Founder',
    name: 'Martin Rapp',
    bio: 'Born in Germany, Martin Rapp is an executive and economic analyst with more than four decades of experience in Latin America. He has developed projects across 16 countries, led banking institutions for more than a decade and has documented experience on corporate boards. Since 2012, he has led Forum Líder in Santa Cruz under the Renaissance Executive Forums model.',
  },
  teamRest: [],
  insKicker: 'Insights',
  insTitle: 'Upcoming analysis on Bolivia and the region.',
  insLink: 'Contact us',
  insRead: 'Coming soon',
  insights: [
    { tag: 'In preparation', date: 'Coming soon', title: 'Economic scenarios for Bolivia.', lede: 'We are preparing this analysis for publication.', body: ['The final content will be published with a clearly identified date, author and methodology.'] },
    { tag: 'In preparation', date: 'Coming soon', title: 'Political risk and investment decisions.', lede: 'We are preparing this analysis for publication.', body: ['The final content will be published with a clearly identified date, author and sources.'] },
    { tag: 'In preparation', date: 'Coming soon', title: 'Signals from the business environment.', lede: 'We are preparing this analysis for publication.', body: ['The final content will be published once its editorial review is complete.'] },
  ],
  contactKicker: 'Contact',
  contactTitle: 'Let’s talk about your next decision.',
  contactSub: 'Tell us about your challenge so we can assess how our approach may contribute to your next decision.',
  contactRows: [
    { k: 'Contact', v: 'Martin Rapp · Executive Director' },
    { k: 'Email', v: 'contacto@masterminds.bo' },
    { k: 'Location', v: 'Santa Cruz de la Sierra, Bolivia' },
    { k: 'LinkedIn', v: '/company/mastermindsbol' },
  ],
  fName: 'Name', fCompany: 'Company', fEmail: 'Email', fMsg: 'How can we help?',
  fSubmit: 'Prepare email', fMore: 'Write directly',
  fNote: 'Continuing will open your email application with the message prepared.',
  modalDeliver: 'What we deliver', modalWho: 'Ideal for', modalCta: 'Talk about this',
  footTag: 'Strategic intelligence · Bolivia', footExplore: 'Explore', footContact: 'Contact',
  footRights: '© 2026 MasterMinds S.R.L. · Bolivia',
  footSlogan: 'Converging perspectives. Decisions that transcend.',
}

export const CONTENT: Record<Lang, Content> = { es, en }
