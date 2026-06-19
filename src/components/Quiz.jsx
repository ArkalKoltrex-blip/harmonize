import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { asset } from '../utils/asset.js'

const ease = [0.22, 1, 0.36, 1]
const WHATSAPP =
  'https://wa.me/557732028028?text=Ol%C3%A1%20gostaria%20de%20ajuda%20para%20escolher%20um%20acabamento'

export default function Quiz() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ['-12%', '12%'])

  return (
    <section id="questionario" className="quiz" ref={ref}>
      <motion.div
        className="quiz__bg"
        style={{
          backgroundImage: `url(${asset('images/ambiente-interno.png')})`,
          y: bgY,
        }}
        aria-hidden="true"
      />
      <div className="quiz__overlay" aria-hidden="true" />

      <motion.div
        className="container quiz__content"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-120px' }}
        transition={{ duration: 0.8, ease }}
      >
        <span className="eyebrow eyebrow--light">Ajuda especializada</span>
        <h2 className="quiz__title">
          Dúvidas de qual acabamento <span className="accent-italic">usar?</span>
        </h2>
        <p className="quiz__lead">
          Responda algumas perguntas rápidas e receba a recomendação ideal para o
          estilo, o ambiente e o orçamento do seu projeto.
        </p>
        <a
          className="btn btn-primary quiz__cta"
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
        >
          Vamos para o questionário →
        </a>
      </motion.div>
    </section>
  )
}
