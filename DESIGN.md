# Design System — Harmonize

> Fonte de verdade para todas as decisões de design e desenvolvimento deste projeto.
> Claude deve ler este arquivo no início de cada sessão antes de construir qualquer coisa.

## Brand
- **Name:** Harmonize
- **Tagline:** Pisos vinílicos, ripados e acabamentos que dão leveza e sofisticação ao ambiente.
- **Audience:** Duplo — (1) arquitetos e prestadores de serviço (B2B); (2) consumidor final em reforma que quer dar um ar de leveza ao lar (B2C).
- **Região de atuação:** Todo o sul e sudoeste da Bahia.
- **Design adjectives:** Elegância, Autenticidade, Conforto/Leveza.
- **Instagram:** @harmonizerevestdecor
- **Contato:** WhatsApp + Instagram (apenas links, sem feed embutido).

### Frases-chave (copy aprovada pelo cliente)
- "Acabamento e Sofisticação único na região"
- "Atendemos todo sul e sudoeste da Bahia"
- "Porque o seu ambiente merece Harmonize"

## References
- **PiFi (Dribbble shot)**
  - Layout: Hero com **imagem em enquadramento arredondado** (border-radius generoso), texto sobreposto à esquerda, dois CTAs (primário sólido + secundário outline), faixa de social proof logo abaixo.
  - Font style: Mista — display sans-serif bold + acento em serif itálico.
  - Fundo: Neutro/creme com formas geométricas suaves nos cantos.
  - **Borrow:** Enquadramento arredondado da hero, dupla de CTAs, faixa de prova social, fundo creme com linhas geométricas sutis.
  - **Avoid:** Nada significativo.

- **Tarkett (site do setor)**
  - Layout: Grid de cards de artigos/inspiração 4 colunas.
  - **Borrow:** Estrutura de cards para seção de inspiração/ambientes.
  - **Avoid:** Azul corporativo pesado, sensação fria e institucional.

- **Smart Home (Dribbble dark)**
  - Layout: Bento-grid de produtos com fotos de ambiente, display font grande e bold.
  - **Borrow:** Bento-grid de produtos, fotografia rica de interiores com luz quente.
  - **Avoid:** Tema totalmente escuro (Harmonize é claro/creme).

- **Zetta-Joule** — https://zetta-joule.com/
  - **Esta é a principal referência de fontes e animação.**
  - Font style: Sans-serif moderno, limpo, bem espaçado.
  - Motion: Scroll reveals com fade, parallax leve, transições de opacidade suaves.
  - Navbar: Clara, com seções tipo "Quem Somos", "Produtos".
  - **Borrow:** Sistema de animação (scroll fade + parallax leve), espaçamento generoso entre seções, navbar com itens institucionais, badge/logo circular para definição da marca.

## Color Palette
| Role | Name | Hex | Usage |
|------|------|-----|-------|
| Primary | Espresso | #6B4A2A | CTAs, links, accent da marca |
| Secondary | Areia Dourada | #C4A882 | Destaques, hover states, detalhes |
| Background | Creme | #F5F0E8 | Base de todas as páginas |
| Surface | Bege | #EDE8DC | Cards, modais, seções alternadas |
| Text | Mogno | #2C1F14 | Títulos, texto forte |
| Muted | Taupe | #8C7B6B | Corpo de texto, captions |
| Accent escuro | Antracite | #2E2E30 | Footer, contraste pontual, texto sobre claro |

### CSS Variables
```css
:root {
  --color-primary: #6B4A2A;
  --color-secondary: #C4A882;
  --color-bg: #F5F0E8;
  --color-surface: #EDE8DC;
  --color-text: #2C1F14;
  --color-muted: #8C7B6B;
  --color-accent-dark: #2E2E30;
}
```

### Navbar — Glassmorphism Bege
A barra de navegação acompanha o site inteiro (fixa no topo), com efeito de vidro bege fosco e baixa opacidade.
```css
.navbar {
  background: rgba(245, 240, 232, 0.55);
  backdrop-filter: blur(24px) saturate(180%);
  -webkit-backdrop-filter: blur(24px) saturate(180%);
  border-bottom: 1px solid rgba(196, 168, 130, 0.25);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 50;
}
```

## Typography
### Google Fonts Import
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;1,400;1,600&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

### Font Roles
| Role | Font | Weights | Usage |
|------|------|---------|-------|
| Display | Playfair Display | 400, 600, 700, 800 + itálico 400/600 | Hero title, títulos de seção |
| Body | Inter | 400, 500, 600, 700 | Parágrafos, labels de UI, botões |
| Mono | — | — | Não usado |

> Detalhe de estilo: usar **Playfair Display itálico** para destacar palavras-chave dentro dos títulos (ex: "Porque o seu ambiente merece *Harmonize*"), inspirado no acento serif itálico da referência PiFi.

### Type Scale
```css
:root {
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
  --text-3xl: 1.875rem;
  --text-4xl: 2.25rem;
  --text-5xl: 3rem;
  --text-6xl: 3.75rem;
  --font-display: 'Playfair Display', serif;
  --font-body: 'Inter', sans-serif;
}
```

## Logo
- Monograma **"H"** em estilo Art Déco / arquitetônico, composto por múltiplas linhas verticais paralelas que remetem aos próprios ripados do produto.
- Arquivo: `assets/images/logo-h.png` (a salvar).
- Versões: usar em Antracite (#2E2E30) sobre fundo claro; criar versão clara (creme) para uso sobre footer escuro.

## Hero Section
- **Headline:** "Acabamento e Sofisticação único na região"
- **Subheadline:** "Atendemos todo sul e sudoeste da Bahia"
- **Reforço/CTA emocional:** "Porque o seu ambiente merece *Harmonize*"
- **Imagem:** `assets/images/hero.jpg` — foto da fachada com ripado de madeira e plantas (luz natural, tons quentes). **Enquadramento arredondado** (border-radius ~24-32px), inspirado em PiFi.
- **Layout:** Texto à esquerda sobreposto/ao lado da imagem arredondada; navbar de vidro fixa no topo; fundo creme com linhas geométricas sutis nos cantos.
- **CTAs:** Primário sólido (Espresso) "Ver Produtos" + Secundário outline "Fale no WhatsApp".

## Site Structure (ordem final)
1. **Navbar** — vidro bege fixo. Itens: Início, Produtos, Quem Somos, Fornecedores, Contato.
2. **Hero** — headline + imagem arredondada + 2 CTAs.
3. **Produtos + Filtro** — grid (bento) dos 4 ripados, com filtro por **cor** e por **faixa de preço** (valores fictícios). Cada card mostra textura, nome e preço/m².
4. **Questionário (CTA decorativo)** — seção intermediária "Dúvidas de qual acabamento usar? Vamos para um questionário". Fundo = uma das fotos de ambiente enviadas. **Não funcional** (site demo).
5. **Quem Somos** — texto institucional + foto de ambiente.
6. **Nossos Fornecedores** — logos/nomes: Macheto, Pedfa Flex, Tarkett, Vinil Forte.
7. **Contato / Footer** — links de WhatsApp e Instagram (@harmonizerevestdecor), logo clara, região de atuação.

## Products (catálogo demo)
| Produto | Cor (filtro) | Hex aprox. | Preço fictício | Textura |
|---------|--------------|------------|----------------|---------|
| Ripado Caramelo | Madeira escura | #A0522D | R$ 129/m² | `produto-caramelo.jpg` |
| Ripado Natural | Madeira clara | #C9A876 | R$ 109/m² | `produto-natural.jpg` |
| Ripado Branco | Branco | #F2F2F0 | R$ 99/m² | `produto-branco.jpg` |
| Ripado Antracite | Escuro/ardósia | #2E2E30 | R$ 149/m² | `produto-antracite.jpg` |

> Filtro por cor: agrupar em "Madeira", "Claro/Branco", "Escuro". Filtro por preço: faixa slider R$ 90–R$ 160.

## Animations & Interactions
Inspirado no Zetta-Joule. Stack de animação: **Motion (motion.dev)** para React.
- **Hero:** parallax leve na imagem + fade/slide-up no texto na entrada.
- **Scroll reveals:** seções aparecem com fade + slide-up sutil (`whileInView`).
- **Navbar:** opacidade/blur aumenta levemente ao rolar.
- **Cards de produto:** `whileHover` com leve elevação e zoom suave na textura.
- **CTAs:** micro-interação de hover (escala + mudança de cor).
- Respeitar sempre `prefers-reduced-motion`. Alvo ≥60fps, apenas transform/opacity.

## Anti-patterns to Avoid
- ❌ Azul corporativo / sensação fria e institucional (erro do Tarkett).
- ❌ Tema totalmente escuro — Harmonize é claro, creme e quente.
- ❌ Gradientes agressivos, roxo/AI-slop, emoji como bullet.
- ❌ Cards com borda colorida à esquerda + sombra genérica.
- ❌ Fontes default (Inter sozinho como display) — sempre usar Playfair para títulos.
- ❌ Silhuetas SVG no lugar das fotos reais de ambiente/produto.

## Tech Stack
- HTML + CSS + **React**.
- Animação: Motion (motion.dev).
- Imagens reais em `assets/images/` (ver ASSETS.md).
