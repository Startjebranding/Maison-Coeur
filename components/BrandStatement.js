'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import styles from './BrandStatement.module.css'

export default function BrandStatement() {
  const [ref, visible] = useScrollAnimation(0.15)

  return (
    <section className={styles.section} id="about">
      <div ref={ref} className={`${styles.inner} ${visible ? styles.visible : ''}`}>
        <p className={styles.eyebrow}>Maison Cœur — Est. 2025</p>

        <blockquote className={styles.statement}>
          Maison C&#x153;ur is an ode to silence,<br />
          to restraint, to the poetry hidden<br />
          in the everyday.
        </blockquote>

        <div className={styles.divider} />

        <p className={styles.body}>
          We believe in clothing that does not demand attention — it earns it.
          Each piece is shaped by the same principle: less, but better. Made for those
          who understand that true luxury is the freedom to be unhurried.
        </p>

        <a href="#collection" className={styles.cta}>
          Discover the collection
        </a>
      </div>
    </section>
  )
}
