'use client'

import { useEffect, useState } from 'react'
import styles from './Hero.module.css'

export default function Hero() {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => { const t = setTimeout(() => setLoaded(true), 120); return () => clearTimeout(t) }, [])

  return (
    <section className={styles.hero}>
      {/* Regular img tag — most reliable for user-uploaded images */}
      <img
        src="/hero.jpg"
        alt="Maison Cœur — SS25"
        className={styles.image}
      />
      <div className={styles.overlay} />

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
