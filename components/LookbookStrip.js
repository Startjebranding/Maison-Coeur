'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import styles from './LookbookStrip.module.css'

export default function LookbookStrip({ items }) {
  const stripRef = useRef(null)
  const [headingRef, headingVisible] = useScrollAnimation(0.1)

  const scroll = (direction) => {
    const el = stripRef.current
    if (!el) return
    el.scrollBy({ left: direction * 420, behavior: 'smooth' })
  }

  return (
    <section className={styles.section} id="lookbook">
      <div
        ref={headingRef}
        className={`${styles.heading} ${headingVisible ? styles.visible : ''}`}
      >
        <p className={styles.eyebrow}>No. 3 — 2025</p>
        <h2 className={styles.title}>Lookbook</h2>
      </div>

      <div className={styles.stripWrapper}>
        <button
          className={`${styles.arrow} ${styles.arrowLeft}`}
          onClick={() => scroll(-1)}
          aria-label="Scroll left"
        >
          ←
        </button>

        <div ref={stripRef} className={styles.strip}>
          {items.map((item, i) => (
            <div key={item.id} className={styles.slide}>
              <div className={styles.slideInner}>
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  quality={80}
                  className={styles.image}
                  sizes="420px"
                />
                <div className={styles.slideOverlay}>
                  <span className={styles.lookNumber}>
                    Look {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          className={`${styles.arrow} ${styles.arrowRight}`}
          onClick={() => scroll(1)}
          aria-label="Scroll right"
        >
          →
        </button>
      </div>

      <div className={styles.footer}>
        <a href="#collection" className={styles.link}>
          Shop all looks
        </a>
      </div>
    </section>
  )
}
