import { motion } from 'motion/react'

const ease = [0.22, 1, 0.36, 1]

const stats = [
  { num: '+500', label: 'projetos entregues' },
  { num: '2', label: 'regiões atendidas' },
  { num: '4', label: 'linhas de acabamento' },
]

export default function About() {
  return (
    <section id="quem-somos" className="about">
      <div className="container about__grid">
        <motion.div
          className="about__media"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease }}
        >
          <div className="about__frame">
            <img
              src="/images/ambiente-externo.jpg"
              alt="Painel ripado externo em ambiente contemporâneo"
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
                <span className="about__stat-num">{s.num}</span>
                <span className="about__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
