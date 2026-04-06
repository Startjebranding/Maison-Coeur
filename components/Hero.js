'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './Hero.module.css'

export default function Hero() {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => { const t = setTimeout(() => setLoaded(true), 100); return () => clearTimeout(t) }, [])

  return (
    <section className={styles.hero}>
      <div className={styles.imageWrapper}>
        <Image
          src="https://picsum.photos/seed/mc-hero/1600/900"
          alt="Maison Cœur — hero campaign"
          fill priority quality={90}
          className={styles.image}
          sizes="100vw"
        />
        <div className={styles.overlay} />
      </div>

      <div className={`${styles.content} ${loaded ? styles.visible : ''}`}>
        <p className={styles.eyebrow}>Collection SS25</p>
        <h1 className={styles.title}>
          Maison&nbsp;C&#x153;ur
        </h1>
        <p className={styles.tagline}>
          Refined quality. Honest pricing.
        </p>
        <a href="#shop" className={styles.cta}>Shop Now</a>
      </div>

      <div className={styles.scrollHint} aria-hidden="true">
        <span className={styles.scrollLine} />
      </div>
    </section>
  )
}
