// Resolve caminhos de imagens/arquivos públicos respeitando o `base` do Vite.
// Funciona tanto em dev quanto no GitHub Pages (/harmonize/).
export const asset = (path) =>
  `${import.meta.env.BASE_URL}${String(path).replace(/^\//, '')}`
