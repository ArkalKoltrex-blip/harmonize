// Catálogo demo da Harmonize. Preços fictícios.
// `image` aponta para foto real; quando null, usa textura ripada CSS (rip).

export const products = [
  {
    id: 'caramelo',
    name: 'Ripado Caramelo',
    desc: 'Madeira quente de tom âmbar, ideal para fachadas e painéis de destaque.',
    price: 129,
    colorGroup: 'Madeira',
    image: '/images/produto-caramelo.jpg',
    rip: null,
  },
  {
    id: 'natural',
    name: 'Ripado Natural',
    desc: 'Tom claro e neutro que traz leveza e amplitude aos ambientes.',
    price: 109,
    colorGroup: 'Madeira',
    image: null,
    rip: { dark: '#c9a876', light: '#e3cda6' },
  },
  {
    id: 'branco',
    name: 'Ripado Branco',
    desc: 'Acabamento off-white minimalista para projetos clean e sofisticados.',
    price: 99,
    colorGroup: 'Claro',
    image: null,
    rip: { dark: '#e6e1d7', light: '#f7f4ee' },
  },
  {
    id: 'antracite',
    name: 'Ripado Antracite',
    desc: 'Ardósia escura de presença marcante para ambientes contemporâneos.',
    price: 149,
    colorGroup: 'Escuro',
    image: '/images/produto-antracite.webp',
    rip: null,
  },
]

export const colorGroups = ['Todas', 'Madeira', 'Claro', 'Escuro']
