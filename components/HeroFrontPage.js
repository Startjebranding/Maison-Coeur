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
      {/* Dateline */}
      <div className={styles.dateline}>
        <span>Sunday, 6 April 2025</span>
        <span className={styles.datelineMid}>★ Complete SS25 Coverage ★</span>
        <span>maisoncoeur.com</span>
      </div>
      <hr className={styles.rule} />

      {/* Main grid */}
      <div className={styles.grid}>
        {/* Left col */}
        <aside className={styles.colLeft}>
          <p className={styles.colEyebrow}>Style Notes</p>
          <hr className={styles.colRule} />
          <p className={styles.colText}>
            There is a moment, just before you put on the coat, when
            the room is still and the morning light sits low
            on the floor. That moment is what we make clothing for.
          </p>
          <hr className={styles.colRule} />
          <p className={styles.colText}>
            Maison C&#x153;ur opens its third chapter with a collection
            rooted in restraint. Twelve pieces. Three fabrics.
            One intention.
          </p>
          <hr className={styles.colRule} />
          <p className={styles.colByline}>&#8212; The Editors</p>

          {/* Graffiti sticker on left col */}
          <span className={styles.stickerLeft} aria-hidden="true">
            real ones
          </span>
        </aside>

        {/* Center */}
        <div className={styles.center}>
          {/* Kicker */}
          <div className={styles.kickerRow}>
            <p className={styles.kicker}>&#9632;&nbsp;Breaking&nbsp;&#9632;</p>
            {/* Spray tag floating */}
            <span className={styles.sprayTag} aria-hidden="true">
              SS&#x2019;25
            </span>
          </div>

          {/* Headline — "New" gets neon marker highlight */}
          <h1 className={styles.headline}>
            Maison C&#x153;ur<br />
            Drops{' '}
            <span className={styles.headlineMarked}>New</span>
            <br />
            Collection
          </h1>

          <p className={styles.deck}>
            The most anticipated drop of the season arrives
            with twelve pieces built for those who move slowly
            through a world in a hurry.
          </p>

          {/* Hero photo */}
          <div className={styles.photoWrapper}>
            <Image
              src="https://picsum.photos/seed/mc-hero-main/900/700"
              alt="Maison Cœur SS25 — Campaign editorial image"
              fill
              priority
              quality={88}
              className={styles.photo}
              sizes="(max-width: 768px) 100vw, 55vw"
            />

            {/* Large graffiti overlay on photo */}
            <span className={styles.grafBig} aria-hidden="true">MC</span>
            <span className={styles.grafSmall} aria-hidden="true">&#x2665;ur</span>

            {/* Neon blue accent strip */}
            <div className={styles.accentStrip} aria-hidden="true" />

            {/* Year stamp */}
            <span className={styles.yearStamp} aria-hidden="true">2025</span>
          </div>

          <p className={styles.caption}>
            <em>Campaign image: SS25. Photographed on location.</em>
          </p>

          <a href="#shop" className={styles.cta}>
            Read Full Story &rarr;
          </a>
        </div>

        {/* Right col */}
        <aside className={styles.colRight}>
          <p className={styles.colEyebrow}>Also Inside</p>
          <hr className={styles.colRule} />

          <div className={styles.sideStory}>
            <p className={styles.sideHeadline}>The Overcoat Returns</p>
            <p className={styles.sideText}>
              Why the oversized coat is the only statement
              worth making this season.
            </p>
          </div>

          <hr className={styles.colRule} />

          <div className={styles.sideStory}>
            <p className={styles.sideHeadline}>On Linen &amp; Time</p>
            <p className={styles.sideText}>
              An essay on fabric that improves with age,
              and what that means for how we dress.
            </p>
          </div>

          <hr className={styles.colRule} />

          {/* Price with neon spray circle */}
          <div className={styles.priceBlock}>
            <p className={styles.colEyebrow}>Now Available</p>
            <p className={styles.priceRing}>
              <span className={styles.priceValue}>€&nbsp;195</span>
            </p>
            <a href="#shop" className={styles.sideLink}>Shop the Drop</a>
          </div>

          {/* Graffiti tag right col */}
          <span className={styles.stickerRight} aria-hidden="true">
            drop!
          </span>
        </aside>
      </div>

      <hr className={styles.ruleBottom} />
    </section>
  )
}
