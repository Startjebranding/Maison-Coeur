'use client'

import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import styles from './LookbookStreet.module.css'

function LookCard({ image, caption, index }) {
  const [ref, visible] = useScrollAnimation(0.06)

  /* Slight rotation alternation for messy grid feel */
  const rotations = [-0.8, 0.6, -1.2, 0.4, -0.5, 1.0]
  const rot = rotations[index % rotations.length]

  return (
    <div
      ref={ref}
      className={`${styles.card} ${visible ? styles.visible : ''}`}
      style={{
        transitionDelay: `${index * 0.09}s`,
        '--rot': `${rot}deg`,
      }}
    >
      <div className={styles.imageWrapper}>
        <Image
          src={image}
          alt={caption}
          fill
          quality={78}
          className={styles.image}
          sizes="(max-width: 768px) 50vw, 25vw"
        />
      </div>
      <p className={styles.caption}>{caption}</p>
    </div>
  )
}

export default function LookbookStreet({ items }) {
  const [headRef, headVisible] = useScrollAnimation(0.1)

  return (
    <section className={styles.section} id="lookbook">
      <div ref={headRef} className={`${styles.header} ${headVisible ? styles.headerVisible : ''}`}>
        <div className={styles.headerInner}>
          <div className={styles.headerLeft}>
            <p className={styles.sectionLabel}>Street Report</p>
            <div>
              <h2 className={styles.sectionTitle}>The Lookbook</h2>
              <span className={styles.headerGraf} aria-hidden="true">raw.</span>
            </div>
          </div>
          <p className={styles.headerNote}>
            Photography: Various locations, Spring 2025.<br />
            All looks available in limited quantities.
          </p>
        </div>
        <hr className={styles.headerRule} />
      </div>

      <div className={styles.grid}>
        {items.map((item, i) => (
          <LookCard key={item.id} {...item} index={i} />
        ))}
      </div>

      <div className={styles.footer}>
        <a href="#shop" className={styles.footerLink}>
          &#8592;&nbsp;View full lookbook
        </a>
        <span className={styles.footerCount}>
          {items.length} looks documented
        </span>
      </div>
    </section>
  )
}
