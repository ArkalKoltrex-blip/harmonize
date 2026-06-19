import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'motion/react'

const links = [
  { label: 'Início', href: '#hero' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Quem Somos', href: '#quem-somos' },
  { label: 'Fornecedores', href: '#fornecedores' },
  { label: 'Contato', href: '#contato' },
]

const WHATSAPP =
  'https://wa.me/557732028028?text=Ol%C3%A1%20gostaria%20de%20fazer%20um%20or%C3%A7amento'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="navbar__inner container">
        <a href="#hero" className="navbar__brand" aria-label="Harmonize - início">
          <img src="/images/logo.png" alt="" className="navbar__logo" />
          <span className="navbar__wordmark">armonize</span>
        </a>

        <ul className="navbar__links">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>

        <a
          className="btn btn-primary navbar__cta"
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
        >
          Orçamento
        </a>

        <button
          className="navbar__burger"
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* barra de progresso de leitura (ref. Zetta) */}
      <motion.div className="navbar__progress" style={{ scaleX: progress }} />


      {open && (
        <motion.ul
          className="navbar__mobile"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
              Fazer orçamento
            </a>
          </li>
        </motion.ul>
      )}
    </motion.nav>
  )
}
