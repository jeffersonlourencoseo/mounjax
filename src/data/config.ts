/**
 * CENTRAL DE DADOS — CÉREBRO DO SITE
 * Todas as informações globais do blogmounjax.com.br
 */

export const SITE_CONFIG = {
  // Domínio e identidade
  domain: 'https://blogmounjax.com.br',
  siteName: 'Blog Mounjax',
  tagline: 'Análise Independente do Suplemento Mounjax da Nutryme',
  language: 'pt-BR',
  locale: 'pt_BR',

  // SEO Defaults
  titleDefault: 'Mounjax Funciona Mesmo? Análise Completa, Composição e Onde Comprar [2026]',
  descriptionDefault:
    'Descubra se o Mounjax da Nutryme realmente funciona. Análise completa da composição, benefícios, contraindicações e onde comprar com desconto. Leia antes de usar!',
  keywordsDefault:
    'mounjax funciona, mounjax nutryme, mounjax composição, mounjax contraindicações, mounjax onde comprar, mounjax valor, mounjax benefícios, emagrecer natural, suplemento saciedade',

  // Branding & E-E-A-T
  author: {
    name: 'Blog Mounjax',
    role: 'Especialistas em Suplementação Natural',
    email: 'contato@blogmounjax.com.br',
    since: '2025',
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
    brand: 'Nutryme',
    category: 'Suplemento Alimentar / Nutracentico',
    officialUrl: 'https://mounjax.com',
    affiliateLink: 'https://mounjax.com',
    price: '197.00',
    priceCurrency: 'BRL',
    availability: 'https://schema.org/InStock',
    sku: 'MOUNJAX-60CAPS',
    image: 'https://blogmounjax.com.br/images/mounjax-produto.jpg',
    aggregateRating: {
      ratingValue: '4.7',
      bestRating: '5',
      worstRating: '1',
      reviewCount: '1283',
    },
  },

  // Afiliados & Disclaimer
  affiliate: {
    disclaimer:
      'Este site contém links de afiliados. Ao comprar por nossos links, podemos receber uma comissão, sem custo adicional para você.',
    partner: 'Nutryme — Programa de Afiliados',
  },

  // Contato / Conversão
  whatsapp: {
    number: '5511999999999',
    message: 'Olá! Tenho dúvidas sobre o Mounjax. Pode me ajudar?',
    label: 'Fale Conosco no WhatsApp',
  },

  // Performance & SEO
  ogImage: 'https://blogmounjax.com.br/images/og-default.jpg',
  twitterHandle: '',
  themeColor: '#513F7E',
} as const;

export type SiteConfig = typeof SITE_CONFIG;
