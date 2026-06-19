import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { products, colorGroups } from '../data/products.js'
import { asset } from '../utils/asset.js'

const ease = [0.22, 1, 0.36, 1]
const WHATSAPP = (name) =>
  `https://wa.me/557732028028?text=${encodeURIComponent(
    `Olá gostaria de fazer um orçamento do ${name}`,
  )}`

export default function Products() {
  const [color, setColor] = useState('Todas')
  const [maxPrice, setMaxPrice] = useState(160)

  const filtered = useMemo(
    () =>
      products.filter(
        (p) =>
          (color === 'Todas' || p.colorGroup === color) && p.price <= maxPrice,
      ),
    [color, maxPrice],
  )

  return (
    <section id="produtos" className="products">
      <div className="container">
        <motion.div
          className="products__head"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease }}
        >
          <div>
            <span className="eyebrow">Nossa linha</span>
            <h2 className="section-title">
              Ripados que vestem o seu <span className="accent-italic">espaço</span>
            </h2>
          </div>
          <p className="section-lead">
            Filtre por cor e por faixa de preço e encontre o acabamento ideal para
            o seu projeto. Valores por m².
          </p>
        </motion.div>

        {/* Filtros */}
        <div className="filters">
          <div className="filters__group">
            <span className="filters__label">Cor</span>
            <div className="chips">
              {colorGroups.map((c) => (
                <button
                  key={c}
                  className={`chip ${color === c ? 'chip--active' : ''}`}
                  onClick={() => setColor(c)}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="filters__group filters__price">
            <span className="filters__label">
              Até <strong>R$ {maxPrice}</strong>/m²
            </span>
            <input
              type="range"
              min="90"
              max="160"
              step="10"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="range"
              aria-label="Preço máximo por metro quadrado"
            />
          </div>
        </div>

        {/* Grid */}
        <motion.div className="products__grid" layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.article
                key={p.id}
                className="card"
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.4, ease }}
                whileHover={{ y: -8 }}
              >
                <div className="card__media">
                  {p.image ? (
                    <img src={asset(p.image)} alt={p.name} loading="lazy" />
                  ) : (
                    <div
                      className="card__texture ripado-texture"
                      style={{
                        '--rip-dark': p.rip.dark,
                        '--rip-light': p.rip.light,
                      }}
                      aria-label={`Textura ${p.name}`}
                    />
                  )}
                  <span className="card__group">{p.colorGroup}</span>
                </div>
                <div className="card__body">
                  <h3 className="card__name">{p.name}</h3>
                  <p className="card__desc">{p.desc}</p>
                  <div className="card__foot">
                    <span className="card__price">
                      R$ {p.price}
                      <small>/m²</small>
                    </span>
                    <a
                      className="card__cta"
                      href={WHATSAPP(p.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Orçar →
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="products__empty">
            Nenhum produto nessa faixa. Ajuste os filtros acima.
          </p>
        )}
      </div>
    </section>
  )
}
