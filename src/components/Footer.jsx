import { asset } from '../utils/asset.js'

const WHATSAPP =
  'https://wa.me/557732028028?text=Ol%C3%A1%20gostaria%20de%20fazer%20um%20or%C3%A7amento'
const INSTAGRAM = 'https://instagram.com/harmonizerevestdecor'

export default function Footer() {
  return (
    <footer id="contato" className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <img src={asset('images/logo.png')} alt="Harmonize" className="footer__logo" />
          <p className="footer__tagline">
            Acabamento e sofisticação único na região.
          </p>
        </div>

        <div className="footer__col">
          <h4 className="footer__title">Navegação</h4>
          <a href="#hero">Início</a>
          <a href="#produtos">Produtos</a>
          <a href="#quem-somos">Quem Somos</a>
          <a href="#fornecedores">Fornecedores</a>
        </div>

        <div className="footer__col">
          <h4 className="footer__title">Contato</h4>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
            WhatsApp · (77) 3202-8028
          </a>
          <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">
            Instagram · @harmonizerevestdecor
          </a>
          <span className="footer__region">
            Atendemos todo o sul e sudoeste da Bahia
          </span>
        </div>
      </div>

      <div className="footer__bottom container">
        <span>© {new Date().getFullYear()} Harmonize Revestimentos & Decoração</span>
        <span className="footer__credit">Porque o seu ambiente merece Harmonize.</span>
      </div>
    </footer>
  )
}
