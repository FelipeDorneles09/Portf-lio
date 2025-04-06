export const navItems = [
  { name: "Menu", link: "#hero" },
  { name: "Sobre", link: "#about" },
  { name: "Projetos", link: "#projects" },
  { name: "Clientes", link: "#testimonials" },
  { name: "Contato", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Minha prioridade é a produção, juntamente da comunicação",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Projetos de qualidade e dentro do prazo",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Tecnologias",
    description: "Sempre adquirindo conhecimento",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Apaixonado por desenvolver tecnologias",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Atualmente desenvolvendo um aplicativo com React Native",
    description: "Ocupação atual",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Quer me contatar para começar um projeto?",
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
    title: "BuylyStore - E-commerce Fullstack",
    des: "Plataforma de comércio eletrônico moderna construída com arquitetura modular e foco em performance, escalabilidade e experiência do usuário. ",
    img: "/p1.jpg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/c.svg"],
    link: "https://buyly-store.vercel.app",
  },
  {
    id: 2,
    title: "BuylyStore - Dashboard de Admin",
    des: "Painel administrativo moderno para e-commerce construído com arquitetura avançada, focado em segurança, performance e análise de dados.",
    img: "/p2.jpg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/c.svg"],
    link: "https://admin-buyly-store.vercel.app",
  },
  {
    id: 3,
    title: "Grilli Restaurant - Site Gourmet Responsivo",
    des: "O projeto Grilli Restaurant é um site elegante e responsivo para um restaurante de alta gastronomia.",
    img: "/p3.jpg",
    iconLists: ["/re.svg", "/tail.svg"],
    link: "https://grilli-master-indol.vercel.app",
  },
  {
    id: 4,
    title: "Nexos - Plataforma de vendas de SaaS",
    des: "Nexos é um website que oferece planos para pequenos negócios conseguirem adquirir seu próprio site por um baixo preço de aquisição e uma qualidade excelente.",
    img: "/p4.jpg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    link: "https://nexos-six.vercel.app",
  },
];

export const testimonials = [
  {
    quote:
      "Trabalhar com Felipe foi uma experiência incrível. Sua atenção aos detalhes, pontualidade e dedicação para entregar resultados excepcionais foram evidentes durante todo o projeto. A paixão de Felipe por cada aspecto do desenvolvimento realmente se destaca. Se você procura elevar seu site e sua marca, Felipe é o parceiro ideal.",
    name: "Carlos Souza",
    title: "CEO da TechWave Solutions",
  },
  {
    quote:
      "Felipe demonstrou um profissionalismo impressionante e uma habilidade técnica de alto nível. Sua capacidade de entender nossas necessidades e transformá-las em um site funcional e atraente foi simplesmente incrível. Recomendo fortemente seus serviços.",
    name: "Ana Clara Mendes",
    title: "Gerente de Projetos na Innovatech",
  },
  {
    quote:
      "A colaboração com Felipe superou todas as expectativas. Ele é extremamente competente, sempre entregando as tarefas no prazo e com uma qualidade excepcional. A comunicação foi sempre clara e eficiente. Ele realmente entende como transformar ideias em realidade.",
    name: "Mariana Oliveira",
    title: "Diretora de Marketing na BrightFuture Inc.",
  },
  {
    quote:
      "Felipe é um desenvolvedor talentoso e dedicado. Sua capacidade de resolver problemas complexos e fornecer soluções inovadoras foi fundamental para o sucesso do nosso projeto. É um prazer trabalhar com alguém tão apaixonado pelo que faz.",
    name: "Ricardo Alves",
    title: "CTO da GreenTech Labs",
  },
  {
    quote:
      "Recomendo Felipe sem hesitação. Sua habilidade de transformar nossas necessidades em um produto final de alta qualidade é impressionante. Ele é um profissional exemplar, sempre disponível para esclarecer dúvidas e garantir que tudo esteja perfeito.",
    name: "Juliana Ferreira",
    title: "CFO da NextGen Enterprises",
  },
];


export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Desenvolvedor Fullstack",
    desc: "Diversos projetos desenvolvidos utilizando Typescript, React, React Native, NodeJS, Python, Java, C#, PHP",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Expêriencia de design",
    desc: "Conhecimento de Photoshop e AfterEffects, utilizado nos projetos que desenvolvi.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Soluções Criativas",
    desc: "Desenvolvimento de aplicativos e websites inovadores, transformando ideias em produtos digitais atraentes.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Criador de Experiências Digitais",
    desc: "Transformação de conceitos em interfaces web interativas e intuitivas, utilizando tecnologias atuais para melhorar a experiência do usuário.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: 'https://github.com/FelipeDorneles09',
  }, 
  {
    id: 2,
    img: "/link.svg",
    link: "https://linkedin.com/in/felipe-dorneles-carvalho",
  },
];