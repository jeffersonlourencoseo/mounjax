/**
 * CENTRAL DE DADOS — CÉREBRO DO SITE
 * Todas as informações globais do blogmounjax.com.br
 */

export const SITE_CONFIG = {
  // Domínio e identidade
  domain: 'https://blogmounjax.com.br',
  siteName: 'Blog Mounjax',
  tagline: 'Análise Independente do Suplemento Mounjax da OzenPharma',
  language: 'pt-BR',
  locale: 'pt_BR',

  // SEO Defaults
  titleDefault: 'Mounjax Funciona? Preço, Gotas, Composição e Onde Comprar [2026]',
  descriptionDefault:
    'Descubra se o Mounjax da OzenPharma realmente funciona. Análise completa da fórmula em gotas, preço, benefícios, contraindicações e onde comprar com desconto oficial. Leia antes de usar!',
  keywordsDefault:
    'mounjax funciona, mounjax funciona mesmo, o que é mounjax, pra que serve o mounjax, mounjax preço, mounjax valor, mounjax para emagrecer, mounjax para que serve, mounjax gotas, mounjax em gotas, mounjax emagrece, mounjax reclame aqui',

  // Branding & E-E-A-T
  author: {
    name: 'Blog Mounjax',
    role: 'Especialistas em Suplementação Natural',
    email: 'contato@blogmounjax.com.br',
    since: '2025',
  },

  // Autor especialista para schemas Article (Person)
  expert: {
    name: 'Dra. Ana Luiza Mendes',
    jobTitle: 'Nutricionista Funcional e Especialista em Suplementação Natural',
    url: 'https://blogmounjax.com.br/sobre-nos/',
    description:
      'Nutricionista funcional com mais de 12 anos de experiência em suplementação natural, emagrecimento saudável e regulagem metabólica.',
  },

  // Redes sociais
  social: {
    instagram: '',
    facebook: '',
    youtube: '',
    tiktok: '',
  },

  // Produto review
  product: {
    name: 'Mounjax',
    brand: 'OzenPharma',
    category: 'Suplemento Alimentar em Gotas',
    officialUrl: 'https://mounjax.com',
    affiliateLink: 'https://app.monetizze.com.br/r/ATX25785612',
    price: '197.00',
    priceCurrency: 'BRL',
    availability: 'https://schema.org/InStock',
    sku: 'MOUNJAX-30ML-GOTAS',
    image: 'https://blogmounjax.com.br/images/mounjax-produto.jpg',
    aggregateRating: {
      ratingValue: '4.8',
      bestRating: '5',
      worstRating: '1',
      reviewCount: '2157',
    },
  },

  // Afiliados & Disclaimer
  affiliate: {
    disclaimer:
      'Este site contém links de afiliados. Ao comprar por nossos links, podemos receber uma comissão, sem custo adicional para você.',
    partner: 'OzenPharma — Programa de Afiliados',
  },

  // Performance & SEO
  ogImage: 'https://blogmounjax.com.br/images/og-default.jpg',
  twitterHandle: '',
  themeColor: '#513F7E',
} as const;

export type SiteConfig = typeof SITE_CONFIG;
