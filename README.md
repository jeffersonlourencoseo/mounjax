# Blog Mounjax — Review Independente do Suplemento Mounjax

Site de review e resenha completa do suplemento nutracêutico **Mounjax** da linha **Nutryme**, desenvolvido para rankeamento orgânico no Google com foco em SEO técnico avançado, E-E-A-T e conversão.

## Sobre o Projeto

O **Blog Mounjax** oferece uma análise honesta, independente e completa do suplemento Mounjax. Nosso objetivo é informar o consumidor brasileiro sobre a composição, benefícios, contraindicações, modo de uso e onde comprar com desconto — tudo com base em dados reais e revisão técnica.

> **Status:** Pronto para Produção

## Tecnologias Utilizadas

- **Astro 4.x** — Framework estático com islands architecture para performance máxima
- **Tailwind CSS 3.4** — Utility-first CSS para design consistente e responsivo
- **Content Collections** — Gerenciamento de conteúdo em Markdown com schema Zod
- **Vercel Adapter** — Deploy serverless otimizado para Edge Network

## Estrutura do Site

| Página | Tipo | Prioridade SEO |
|--------|------|----------------|
| `/` | Home (long-form review) | 1.0 |
| `/o-que-e/` | Content Collection | 0.9 |
| `/composicao/` | Content Collection | 0.9 |
| `/beneficios/` | Content Collection | 0.9 |
| `/como-usar/` | Content Collection | 0.8 |
| `/contraindicacoes/` | Content Collection | 0.8 |
| `/depoimentos/` | Content Collection | 0.8 |
| `/onde-comprar/` | Content Collection (conversão) | 0.9 |
| `/sobre-nos/` | Página estática | 0.5 |
| `/contato/` | Página estática | 0.5 |
| `/politica-de-privacidade/` | Página estática (noindex) | — |
| `/termos-de-uso/` | Página estática (noindex) | — |
| `/politica-de-cookies/` | Página estática (noindex) | — |

## SEO Orgânico Implementado

- **Sitemap.xml** gerado automaticamente no postbuild (10 rotas indexadas)
- **Robots.txt** com apontamento para `sitemap-index.xml`
- **Meta Tags** completas: title, description, keywords, canonical, author, robots avançados
- **Open Graph** e **Twitter Cards** em todas as páginas
- **Schema JSON-LD**:
  - `Organization` (E-E-A-T)
  - `WebSite` com Sitelinks Searchbox
  - `Product` + `AggregateRating` + `Review`
  - `FAQPage` na home (5 perguntas/respostas)
- **Preconnect / DNS-prefetch** para Google Fonts
- **Scroll-padding** e `prefers-reduced-motion` para acessibilidade

## Palavras-Chave Principais

- mounjax funciona
- mounjax nutryme
- mounjax composição
- mounjax contraindicações
- mounjax onde comprar
- mounjax valor
- mounjax benefícios
- emagrecer natural
- suplemento saciedade

## Design e UX

- Paleta de cores oficial extraída de `mounjax.com`
- Tipografia: Inter (corpo) + Cormorant Garamond (display)
- Navegação fixa com blur e menu mobile profissional (scroll lock, overlay, animação hamburger→X)
- Breadcrumb "Início" em todas as páginas internas
- Botão WhatsApp flutuante com pulsação e label no hover
- CTA "Ver Oferta" em nav e footer

## Como Executar Localmente

```bash
npm install
npm run dev
```

## Como Fazer Deploy

```bash
npm run build
```

O projeto está configurado para deploy na **Vercel** via `@astrojs/vercel`.

## Ajustes Antes do Deploy

Edite `src/data/config.ts` e substitua:
- Domínio real (se diferente de `https://blogmounjax.com.br`)
- Link de afiliado em `product.affiliateLink`
- Número de WhatsApp em `whatsapp.number`
- URLs das imagens OG em `/public/images/`

## Licença

Este projeto contém links de afiliados. Todas as análises são independentes e honestas.

© 2026 Blog Mounjax. Todos os direitos reservados.
