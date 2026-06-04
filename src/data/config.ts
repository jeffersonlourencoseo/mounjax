/**
 * CENTRAL DE DADOS — CÉREBRO DO SITE
 * Todas as informações globais do blogmounjax.com.br
 */

export const SITE_CONFIG = {
  // Domínio e identidade
  domain: 'https://www.portalmounjax.com.br',
  siteName: 'Blog Mounjax',
  tagline: 'Análise Independente do Suplemento Mounjax',
  language: 'pt-BR',
  locale: 'pt_BR',

  // SEO Defaults
  titleDefault: 'Mounjax Funciona? Análise 2026 — 12 Gotas/Dia',
  descriptionDefault:
    'Mounjax em gotas: 12 gotas por dia, 9 ingredientes naturais, App com aulas e e-books de bônus. Veja preços, kits com até 40% OFF e garantia de 30 dias.',
  keywordsDefault:
    'mounjax funciona, mounjax funciona mesmo, o que é mounjax, pra que serve o mounjax, mounjax preço, mounjax valor, mounjax para emagrecer, mounjax para que serve, mounjax gotas, mounjax em gotas, mounjax emagrece, mounjax reclame aqui, mounjax onde comprar, mounjax desconto, mounjax ozenpharma',

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
    url: 'https://www.portalmounjax.com.br/sobre-nos/',
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
    brand: 'Mounjax',
    category: 'Suplemento Alimentar em Gotas',
    officialUrl: 'https://mounjax.com',
    affiliateLink: 'https://app.monetizze.com.br/r/ATX25785612',
    price: '197.00',
    priceCurrency: 'BRL',
    availability: 'https://schema.org/InStock',
    sku: 'MOUNJAX-30ML-GOTAS',
    image: 'https://www.portalmounjax.com.br/images/mounjax-produto.jpg',
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
      'Este site contém links de afiliados via Monetizze. Ao comprar por nossos links, podemos receber uma comissão, sem custo adicional para você.',
    partner: 'Mounjax — Programa de Afiliados Monetizze',
  },

  // Performance & SEO
  ogImage: 'https://www.portalmounjax.com.br/images/og-default.jpg',
  twitterHandle: '',
  themeColor: '#513F7E',
} as const;

export type SiteConfig = typeof SITE_CONFIG;
