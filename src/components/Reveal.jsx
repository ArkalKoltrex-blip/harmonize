import { motion } from 'motion/react'

const ease = [0.22, 1, 0.36, 1]

/**
 * Wrapper de scroll-reveal no estilo Zetta: fade + slide suave ao entrar
 * na viewport. `dir` controla a direção e `delay` o escalonamento.
 */
export default function Reveal({
  children,
  delay = 0,
  dir = 'up',
  amount = 0.3,
  className = '',
  as = 'div',
}) {
  const offset = {
    up: { y: 32, x: 0 },
    down: { y: -32, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
  }[dir]

  const MotionTag = motion[as] || motion.div

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.8, ease, delay }}
    >
      {children}
    </MotionTag>
  )
}
