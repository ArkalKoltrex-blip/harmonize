import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { asset } from '../utils/asset.js'

const WHATSAPP =
  'https://wa.me/557732028028?text=Ol%C3%A1%20gostaria%20de%20fazer%20um%20or%C3%A7amento'

const ease = [0.22, 1, 0.36, 1]

const proof = [
  'Pisos Vinílicos',
  'Ripados',
  'Réguas & Mantas',
  'Revestimentos',
  'Acabamentos',
]

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  // parallax leve da imagem dentro do banner (ref. Zetta)
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '12%'])
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.14])

  return (
    <section id="hero" className="hero" ref={ref}>
      {/* linhas geométricas sutis no fundo creme (ref. PiFi) */}
      <div className="hero__decor" aria-hidden="true" />

      <div className="container">
        {/* banner largo com imagem + texto sobreposto */}
        <motion.div
          className="hero__banner"
          initial={{ opacity: 0, y: 36, scale: 0.985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease }}
        >
          <motion.img
            className="hero__img"
            src={asset('images/hero.jpg')}
            alt="Fachada com ripado de madeira e vegetação"
            style={{ y: imgY, scale: imgScale }}
          />
          <div className="hero__scrim" aria-hidden="true" />

          <motion.div
            className="hero__copy"
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.12, delayChildren: 0.35 } },
            }}
          >
            <motion.span
              className="eyebrow eyebrow--light"
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.6, ease }}
            >
              Revestimentos & Decoração
            </motion.span>

            <motion.h1
              className="hero__title"
              variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.8, ease }}
            >
              Acabamento e <span className="accent-soft">Sofisticação</span>
              <br />
              único na região
            </motion.h1>

            <motion.p
              className="hero__lead"
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.7, ease }}
            >
              Pisos vinílicos, ripados e revestimentos que trazem leveza e
              identidade. Atendemos todo o sul e sudoeste da Bahia.
            </motion.p>

            <motion.div
              className="hero__actions"
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.7, ease }}
            >
              <a href="#produtos" className="btn btn-light">
                Ver produtos
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                Fale no WhatsApp
              </a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* faixa de prova / tagline (ref. PiFi) */}
        <motion.div
          className="hero__proof"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.6 }}
        >
          <span className="hero__proof-label">
            Porque o seu ambiente merece <strong>Harmonize</strong>
          </span>
          <ul className="hero__proof-list">
            {proof.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
