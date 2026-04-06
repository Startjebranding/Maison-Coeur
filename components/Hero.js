'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './Hero.module.css'

export default function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className={styles.hero}>
      <div className={styles.imageWrapper}>
        <Image
          src="https://picsum.photos/seed/mc-hero/1600/1000"
          alt="Maison Cœur — Hero editorial image"
          fill
          priority
          quality={90}
          className={styles.heroImage}
          sizes="100vw"
        />
        <div className={styles.overlay} />
      </div>

      <div className={`${styles.content} ${loaded ? styles.visible : ''}`}>
        <p className={styles.eyebrow}>Collection 2025</p>
        <h1 className={styles.title}>
          Maison<br />C&#x153;ur
        </h1>
        <p className={styles.tagline}>
          Worn in silence. Felt in full.
        </p>
        <a href="#collection" className={styles.cta}>
          <span>Explore Collection</span>
          <svg width="18" height="1" viewBox="0 0 18 1" fill="none" aria-hidden="true">
            <line x1="0" y1="0.5" x2="18" y2="0.5" stroke="currentColor" />
          </svg>
        </a>
      </div>

      <div className={styles.scrollIndicator} aria-hidden="true">
        <div className={styles.scrollLine} />
      </div>
    </section>
  )
}
