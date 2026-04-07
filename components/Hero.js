'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './Hero.module.css'

export default function Hero() {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => { const t = setTimeout(() => setLoaded(true), 120); return () => clearTimeout(t) }, [])

  return (
    <section className={styles.hero}>
      <div className={styles.imageWrapper}>
        <Image
          src="/hero.jpg"
          alt="Maison Cœur — SS25"
          fill priority quality={90}
          className={styles.image}
          sizes="100vw"
        />
        <div className={styles.overlay} />
      </div>

      {/* Off-center content */}
      <div className={`${styles.content} ${loaded ? styles.visible : ''}`}>
        <p className={styles.season}>SS25 — Now Live</p>
        <h1 className={styles.title}>
          Maison<br />C&#x153;ur
        </h1>
        <p className={styles.sub}>new drop live</p>
        <a href="#shop" className={styles.cta}>
          Shop Now
        </a>
      </div>

      {/* Corner tag */}
      <div className={styles.cornerTag} aria-hidden="true">
        <span>Limited pieces</span>
      </div>
    </section>
  )
}
