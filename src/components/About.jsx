import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import CountUp from './CountUp.jsx'

const ease = [0.22, 1, 0.36, 1]

const stats = [
  { value: 500, prefix: '+', suffix: '', label: 'projetos entregues' },
  { value: 2, prefix: '', suffix: '', label: 'regiões atendidas' },
  { value: 4, prefix: '', suffix: '', label: 'linhas de acabamento' },
]

export default function About() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const imgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  return (
    <section id="quem-somos" className="about" ref={ref}>
      <div className="container about__grid">
        <motion.div
          className="about__media"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease }}
        >
          <div className="about__frame">
            <motion.img
              src="/images/ambiente-externo.jpg"
              alt="Painel ripado externo em ambiente contemporâneo"
              style={{ y: imgY, scale: 1.12 }}
            />
          </div>
        </motion.div>

        <motion.div
          className="about__copy"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease, delay: 0.1 }}
        >
          <span className="eyebrow">Quem somos</span>
          <h2 className="section-title">
            Feita para quem leva o <span className="accent-italic">detalhe</span> a
            sério
          </h2>
          <p className="about__text">
            A Harmonize nasceu da convicção de que um ambiente bem acabado
            transforma a forma como vivemos. Trabalhamos com pisos vinílicos,
            ripados e revestimentos selecionados para unir beleza, conforto e
            durabilidade — sempre com a leveza que torna cada espaço único.
          </p>
          <p className="about__text">
            Atendemos arquitetos, profissionais e clientes que estão reformando o
            lar em todo o sul e sudoeste da Bahia, com curadoria de produtos,
            orientação técnica e um atendimento próximo do começo ao fim do projeto.
            Autenticidade, elegância e conforto guiam cada recomendação que fazemos.
          </p>

          <div className="about__stats">
            {stats.map((s) => (
              <div key={s.label} className="about__stat">
                <span className="about__stat-num">
                  <CountUp value={s.value} prefix={s.prefix} suffix={s.suffix} />
                </span>
                <span className="about__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
