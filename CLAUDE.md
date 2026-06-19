# Harmonize — Instruções do Projeto

Site demo para a **Harmonize**, revenda de pisos vinílicos, ripados e acabamentos
no sul e sudoeste da Bahia.

## Leia ANTES de qualquer tarefa
1. **[DESIGN.md](DESIGN.md)** — sistema de design completo (cores, fontes, seções, animações). Fonte de verdade.
2. **[ASSETS.md](ASSETS.md)** — mapa das imagens e onde cada uma é usada.
3. **[styles/tokens.css](styles/tokens.css)** — tokens CSS. Nunca hardcode cores/fontes fora daqui.

## Stack
- HTML + CSS + **React**
- Animação: **Motion (motion.dev)** — usar a skill `/motion-animations`

## Regras
- Sempre invoque `/frontend-design` antes de criar uma nova seção/componente.
- Nunca usar cores fora da paleta do DESIGN.md. Nunca usar Inter como fonte de título (títulos = Playfair Display).
- Tema é **claro/creme e quente** — nunca escuro, nunca azul corporativo.
- Site é **demo**: filtros e questionário podem ser visuais/parcialmente funcionais. Preços são fictícios.
- Navbar é de vidro (glassmorphism bege) e acompanha todo o site.
- Respeitar `prefers-reduced-motion` em todas as animações.

## Seções (ordem)
Navbar → Hero → Produtos+Filtro → Questionário (CTA) → Quem Somos → Fornecedores → Footer/Contato

## Contato / Social
- Instagram: @harmonizerevestdecor (apenas link)
- WhatsApp (apenas link)
