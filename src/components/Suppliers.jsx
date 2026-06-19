import { motion } from 'motion/react'

const ease = [0.22, 1, 0.36, 1]
const suppliers = ['Macheto', 'Paviflex', 'Tarkett', 'Vinil Forte']

export default function Suppliers() {
  return (
    <section id="fornecedores" className="suppliers">
      <div className="container">
        <motion.div
          className="suppliers__head"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease }}
        >
          <span className="eyebrow">Nossos fornecedores</span>
          <h2 className="section-title">
            Marcas que <span className="accent-italic">confiamos</span>
          </h2>
        </motion.div>

        <div className="suppliers__grid">
          {suppliers.map((name, i) => (
            <motion.div
              key={name}
              className="supplier"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
            >
              {name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
