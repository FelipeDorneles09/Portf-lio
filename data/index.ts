export const navItems = [
  { name: "Início", link: "#hero" },
  { name: "Sobre", link: "#about" },
  { name: "Projetos", link: "#projects" },
  { name: "Trajetória", link: "#experience" },
  { name: "Metodologia", link: "#approach" },
  { name: "Contato", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Foco em arquitetura limpa, testes e entrega contínua",
    description: "Engenharia de Software",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Comunicação clara e flexibilidade global",
    description: "Atuação remota e híbrida",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Minha Stack",
    description: "Evolução técnica contínua",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Paixão por tecnologia, telemetria e IoT",
    description: "Inovação contínua",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Desenvolvendo software e telemetria na SkyDrones",
    description: "Ocupação atual",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Vamos iniciar um novo projeto juntos?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "SkyCloud - Telemetria e Gestão de Drones",
    des: "Plataforma multi-tenant de telemetria em tempo real, replay 3D de voos com análise de parâmetros e gestão de frotas com Stripe.",
    img: "/SkyCloud.png",
    iconLists: ["/next.svg", "/ts.svg", "/tail.svg", "/cloud.svg", "/dock.svg"],
    link: "https://docs.skydrones.com.br/skydrones-solutions/skyclean/skycloud",
  },
  {
    id: 2,
    title: "ClinicOS - Gestão Hospitalar Full Stack",
    des: "Gestão hospitalar em Docker com agendamento sem conflitos, RBAC via JWT e 45 testes automatizados (Jest, Vitest e Supertest).",
    img: "/ClinicOs.png",
    iconLists: ["/next.svg", "/ts.svg", "/dock.svg", "/re.svg", "/tail.svg"],
    link: "https://github.com/FelipeDorneles09/ClinicOS",
  },
  {
    id: 3,
    title: "ArtFlow - SaaS de Gestão para Ateliês",
    des: "SaaS completo com controle de estoque, cálculo de precificação, financeiro integrado ao Stripe e quadro Kanban com Zustand.",
    img: "/ArtisticFlow.png",
    iconLists: ["/re.svg", "/ts.svg", "/tail.svg", "/stream.svg"],
    link: "https://artflow-teal.vercel.app/",
  },
  {
    id: 4,
    title: "SmartFarm - Dashboard IoT Agrícola",
    des: "Dashboard IoT com telemetria em tempo real, acionamento remoto ESP32 (irrigação e ventilação) e API proxy resiliente.",
    img: "/SmartFarm.png",
    iconLists: ["/next.svg", "/re.svg", "/ts.svg", "/tail.svg", "/cloud.svg"],
    link: "https://smart-farm-rho.vercel.app/",
  },
];

export const testimonials = [
  {
    quote:
      "O Felipe demonstrou uma capacidade excepcional em liderar a arquitetura dos softwares das ground stations e da plataforma web, elevando o padrão técnico da nossa equipe.",
    name: "Equipe de Engenharia Aviônica",
    title: "SkyDrones Tecnologia Aviônica",
  },
  {
    quote:
      "O replay 3D e a ferramenta de logs reduziram o tempo de diagnóstico do suporte de 2 horas para 20 minutos. A facilidade de comunicação faz dele um profissional diferenciado.",
    name: "Equipe de Operações e Suporte",
    title: "SkyDrones Tecnologia Aviônica",
  },
  {
    quote:
      "O redesign e as automações criadas pelo Felipe aumentaram nossa conversão em 30% e cortaram o tempo de carregamento em 40%, gerando impacto real no negócio.",
    name: "Diretoria Comercial",
    title: "DrOriginals",
  },
  {
    quote:
      "A postura analítica do Felipe e seu raciocínio lógico (1º lugar na Olimpíada de Matemática) se refletem em código limpo, arquitetura escalável e sistemas confiáveis.",
    name: "Coordenação Acadêmica de Engenharia de Software",
    title: "UniLasalle",
  },
];

export const companies = [
  {
    id: 1,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
  {
    id: 2,
    name: "GCP / Cloud",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 3,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 4,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 5,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Engenheiro de Software Júnior - SkyDrones",
    desc: "Ground stations de drones em Qt/QML e C++. Cliente NTRIP RTK nativo e navegação inercial com radar (90-95% de precisão sem RTK).",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "SkyCloud & Missões 3D - SkyDrones",
    desc: "Plataforma web (Next.js, Node.js, GCP), replay 3D reduzindo análise de 2h para 20min e planos de limpeza 3D com Stripe.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Desenvolvedor Web Full Stack - DrOriginals",
    desc: "Redesign de e-commerce (+30% conversão, -40% carregamento), integração de estoque no Mercado Livre e automações em Python.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Engenharia de Software - UniLasalle",
    desc: "Bacharelado em Engenharia de Software (1º lugar Olimpíada de Matemática). Foco em testes (Vitest/Jest), CI/CD e acessibilidade.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/FelipeDorneles09",
  }, 
  {
    id: 2,
    img: "/link.svg",
    link: "https://linkedin.com/in/felipe-dorneles-carvalho",
  },
];