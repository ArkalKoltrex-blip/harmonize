import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { asset } from '../utils/asset.js'

const ease = [0.22, 1, 0.36, 1]

/**
 * Imagem que começa pequena e cresce até preencher a tela conforme o scroll.
 * Efeito "scroll-expand" inspirado no movimento do Zetta.
 */
export default function Showcase() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })

  // do pequeno (centro) até preencher a viewport
  const width = useTransform(scrollYProgress, [0, 0.6], ['38%', '100%'])
  const height = useTransform(scrollYProgress, [0, 0.6], ['44vh', '100vh'])
  const radius = useTransform(scrollYProgress, [0, 0.6], [28, 0])
  const imgScale = useTransform(scrollYProgress, [0, 0.6], [1.3, 1])
  const captionOpacity = useTransform(scrollYProgress, [0.55, 0.75], [0, 1])
  const captionY = useTransform(scrollYProgress, [0.55, 0.8], [30, 0])

  return (
    <section className="showcase" ref={ref}>
      <div className="showcase__sticky">
        <motion.div
          className="showcase__frame"
          style={{ width, height, borderRadius: radius }}
        >
          <motion.img
            src={asset('images/ambiente-interno.png')}
            alt="Ambiente interno com revestimento ripado e piso Harmonize"
            style={{ scale: imgScale }}
          />
          <div className="showcase__scrim" aria-hidden="true" />
          <motion.div
            className="showcase__caption"
            style={{ opacity: captionOpacity, y: captionY }}
          >
            <span className="eyebrow eyebrow--light">Ambientes reais</span>
            <h2 className="showcase__title">
              Porque o seu ambiente merece{' '}
              <span className="accent-soft">Harmonize</span>
            </h2>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
