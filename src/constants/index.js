import { people01, people02, people03, facebook, instagram, linkedin, twitter, airbnb, binance, coinbase, dropbox, send, shield, star  } from "../assets";

export const navLinks = [
  {
    id: "home", // Vai para "/"
    title: "Início",
  },
  {
    id: "diagnosticogratuito", // Vai para "/diagnosticogratuito"
    title: "Diagnóstico",
  },
  {
    id: "trocadetoner", // Vai para "/trocadetoner"
    title: "Troca de Toner",
  },
  {
    id: "todasmarcas", // Vai para "/todasmarcas"
    title: "Marcas",
  },
  {
    id: "contato", // Vai para "/contato"
    title: "Contato",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Atendimento Rápido",
    content:
      "Nossa equipe chega até você em tempo recorde para minimizar o tempo de inatividade da sua empresa.",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "Técnicos Certificados",
    content:
      "Conte com profissionais qualificados que entendem a fundo de todas as marcas e modelos de impressoras.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Manutenção Preventiva",
    content:
      "Evite problemas futuros com nossos planos de manutenção que garantem a longevidade dos seus equipamentos.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "O serviço de manutenção preventiva salvou nossa produtividade! Não tivemos mais problemas com impressoras paradas.",
    name: "João Silva",
    title: "Gerente de TI",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Atendimento rápido e eficiente. O técnico resolveu o problema da nossa impressora em menos de uma hora. Recomendo!",
    name: "Maria Oliveira",
    title: "Diretora, ABC Contabilidade",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "São nosso parceiro de confiança para suprimentos e manutenção. A qualidade e o preço são imbatíveis.",
    name: "Carlos Souza",
    title: "Sócio, Advocacia Souza & Irmãos",
    img: people03,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Clientes Satisfeitos",
    value: "340+",
  },
  {
    id: "stats-2",
    title: "Empresas Atendidas",
    value: "94+",
  },
  {
    id: "stats-3",
    title: "Impressoras Reparadas",
    value: "800+",
  },
];

export const footerLinks = [
  {
    title: "Navegação",
    links: [
      {
        name: "Serviços",
        link: "#features",
      },
      {
        name: "Como Funciona",
        link: "#about",
      },
      {
        name: "Planos",
        link: "#product",
      },
      {
        name: "Guia",
        link: "#clients",
      },
      {
        name: "Termos & Serviços",
        link: "#",
      },
    ],
  },
  {
    title: "Comunidade",
    links: [
      {
        name: "Central de Ajuda",
        link: "#help",
      },
      {
        name: "Parceiros",
        link: "#partners",
      },
      {
        name: "Sugestões",
        link: "#suggestions",
      },
    ],
  },
  {
    title: "Parceiros",
    links: [
      {
        name: "Nossos Parceiros",
        link: "#our-partners",
      },
      {
        name: "Torne-se um Parceiro",
        link: "#become-a-partner",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];