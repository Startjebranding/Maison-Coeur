'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './HeroFrontPage.module.css'

export default function HeroFrontPage() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className={`${styles.hero} ${loaded ? styles.loaded : ''}`}>

      {/* ── PHOTO FIRST — full bleed, tall ── */}
      <div className={styles.photoBlock}>
        <Image
          src="https://picsum.photos/seed/mc-hero-main/1400/900"
          alt="Maison Cœur SS25 — Campaign editorial image"
          fill
          priority
          quality={90}
          className={styles.photo}
          sizes="100vw"
        />
        {/* Newspaper headline overlay on photo */}
        <div className={styles.photoOverlay}>
          <div className={styles.overlayInner}>
            <p className={styles.kicker}>
              &#9632;&nbsp;Breaking&nbsp;&#9632;
              <span className={styles.sprayTag} aria-hidden="true">SS&#x2019;25</span>
            </p>
            <h1 className={styles.headline}>
              Maison C&#x153;ur<br />
              Drops{' '}
              <span className={styles.headlineMarked}>New</span>
              <br />
              Collection
            </h1>
            <a href="#shop" className={styles.cta}>
              Shop the Drop &rarr;
            </a>
          </div>

          {/* Graffiti on photo */}
          <span className={styles.grafBig}   aria-hidden="true">MC</span>
          <span className={styles.grafSmall} aria-hidden="true">&#x2665;ur</span>
          <div  className={styles.accentStrip} aria-hidden="true" />
          <span className={styles.yearStamp} aria-hidden="true">2025</span>
        </div>
      </div>

      {/* ── NEWSPAPER CONTENT BELOW PHOTO ── */}
      <div className={styles.newsBlock}>
        <div className={styles.dateline}>
          <span>Sunday, 6 April 2025</span>
          <span className={styles.datelineMid}>★ Complete SS25 Coverage ★</span>
          <span>maisoncoeur.com</span>
        </div>
        <hr className={styles.rule} />

        <div className={styles.columns}>
          <div className={styles.col}>
            <p className={styles.colEyebrow}>Style Notes</p>
            <hr className={styles.colRule} />
            <p className={styles.colText}>
              There is a moment, just before you put on the coat, when
              the room is still and the morning light sits low
              on the floor. That moment is what we make clothing for.
            </p>
            <span className={styles.stickerLeft} aria-hidden="true">real ones</span>
          </div>

          <div className={styles.col}>
            <p className={styles.colEyebrow}>From the Atelier</p>
            <hr className={styles.colRule} />
            <p className={styles.colText}>
              Twelve pieces. Three fabrics. One intention.
              Maison C&#x153;ur opens its third chapter with a collection
              rooted in restraint — garments that earn attention
              without demanding it.
            </p>
            <p className={styles.colByline}>&#8212; The Editors</p>
          </div>

          <div className={styles.col}>
            <p className={styles.colEyebrow}>Also Inside</p>
            <hr className={styles.colRule} />
            <p className={styles.sideHeadline}>The Overcoat Returns</p>
            <p className={styles.colText}>
              Why the oversized coat is the only statement worth making this season.
            </p>
          </div>

          <div className={styles.colPrice}>
            <p className={styles.colEyebrow}>Now Available</p>
            <p className={styles.priceRing}>
              <span className={styles.priceValue}>€&nbsp;195</span>
            </p>
            <a href="#shop" className={styles.sideLink}>Shop the Drop</a>
            <span className={styles.stickerRight} aria-hidden="true">drop!</span>
          </div>
        </div>
      </div>

      <hr className={styles.ruleBottom} />
    </section>
  )
}
