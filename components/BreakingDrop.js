'use client'

import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import styles from './BreakingDrop.module.css'

export default function BreakingDrop() {
  const [ref, visible] = useScrollAnimation(0.1)

  return (
    <section className={styles.section}>
      <div ref={ref} className={`${styles.inner} ${visible ? styles.visible : ''}`}>

        {/* Breaking label */}
        <div className={styles.breakingBar}>
          <span className={styles.breakingLabel}>&#9632; Breaking</span>
          <span className={styles.breakingText}>
            Limited edition — only 40 pieces per style — while stock lasts
          </span>
        </div>

        <div className={styles.card}>
          {/* Exclusive stamp */}
          <div className={styles.stamp} aria-hidden="true">
            EXCLUSIVE
          </div>

          {/* Graffiti tag */}
          <span className={styles.grafTag} aria-hidden="true">
            drop!
          </span>

          <div className={styles.cardGrid}>
            <div className={styles.cardImage}>
              <Image
                src="https://picsum.photos/seed/mc-drop/700/900"
                alt="Maison Cœur featured drop — limited edition piece"
                fill
                quality={85}
                className={styles.image}
                sizes="(max-width: 768px) 100vw, 45vw"
              />
              {/* Blue accent line */}
              <div className={styles.accentLine} aria-hidden="true" />
            </div>

            <div className={styles.cardContent}>
              <p className={styles.issue}>Issue Exclusive</p>
              <h2 className={styles.title}>
                The Piece<br />
                <em>Everyone</em><br />
                Will Ask About
              </h2>

              <hr className={styles.rule} />

              <p className={styles.body}>
                Forty pieces. One fabric. Zero compromises.
                The Raw Edge Overcoat in natural undyed canvas —
                our most requested silhouette in its purest form.
              </p>

              <p className={styles.body}>
                Ships within 48 hours. Returns accepted.
                Once it&#8217;s gone, it&#8217;s gone.
              </p>

              <div className={styles.priceBlock}>
                <span className={styles.price}>€ 485</span>
                <span className={styles.stock}>
                  <span className={styles.stockDot} />
                  In stock
                </span>
              </div>

              <a href="#shop" className={styles.cta}>
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
