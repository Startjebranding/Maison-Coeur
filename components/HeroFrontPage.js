'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import styles from './HeroFrontPage.module.css'

export default function HeroFrontPage() {
  const [loaded, setLoaded] = useState(false)
  const [ref, visible] = useScrollAnimation(0.05)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className={`${styles.hero} ${loaded ? styles.loaded : ''}`}>
      {/* Top dateline */}
      <div className={styles.dateline}>
        <span>Sunday, 6 April 2025</span>
        <span className={styles.datelineMid}>★ Complete SS25 Coverage ★</span>
        <span>maisoncoeur.com</span>
      </div>
      <hr className={styles.rule} />

      {/* Main grid */}
      <div className={styles.grid} ref={ref}>
        {/* Left column */}
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
        </aside>

        {/* Center — main story */}
        <div className={styles.center}>
          <p className={styles.kicker}>
            &#9632;&nbsp;Breaking&nbsp;&#9632;
          </p>

          <h1 className={styles.headline}>
            Maison C&#x153;ur<br />
            <span className={styles.headlineSub}>Drops New</span><br />
            Collection
          </h1>

          <p className={styles.deck}>
            The most anticipated drop of the season arrives
            with twelve pieces built for those who move slowly
            through a world in a hurry.
          </p>

          {/* Hero image */}
          <div className={styles.photoWrapper}>
            <Image
              src="https://picsum.photos/seed/mc-hero-main/900/700"
              alt="Maison Cœur SS25 — Campaign image, hero editorial"
              fill
              priority
              quality={88}
              className={styles.photo}
              sizes="(max-width: 768px) 100vw, 55vw"
            />
            {/* Graffiti tag overlay */}
            <span className={styles.graffitiTag} aria-hidden="true">
              MC&#x2019;25
            </span>
          </div>

          <p className={styles.caption}>
            <em>Campaign image: SS25, photographed on location.</em>
          </p>

          <a href="#shop" className={styles.cta}>
            Read Full Story &rarr;
          </a>
        </div>

        {/* Right column */}
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
            <p className={styles.sideHeadline}>On Linen & Time</p>
            <p className={styles.sideText}>
              An essay on fabric that improves with age,
              and what that means for how we dress.
            </p>
          </div>

          <hr className={styles.colRule} />

          <div className={styles.sideStory}>
            <p className={styles.colEyebrow}>Now Available</p>
            <p className={styles.priceNote}>
              From <strong>€ 195</strong>
            </p>
            <a href="#shop" className={styles.sideLink}>
              Shop the Drop
            </a>
          </div>
        </aside>
      </div>

      <hr className={styles.ruleBottom} />
    </section>
  )
}
