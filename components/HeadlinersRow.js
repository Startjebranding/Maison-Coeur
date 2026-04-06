'use client'

import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import styles from './HeadlinersRow.module.css'

const headliners = [
  {
    id: 1,
    name: 'Raw Edge Overcoat',
    price: '€ 485',
    image: 'https://picsum.photos/seed/mc-hl-1/600/800',
    alt: 'Raw Edge Overcoat — natural canvas',
    tag: 'New',
  },
  {
    id: 2,
    name: 'Draped Column Dress',
    price: '€ 320',
    image: 'https://picsum.photos/seed/mc-hl-2/600/800',
    alt: 'Draped Column Dress — ivory silk',
    tag: 'Limited',
  },
  {
    id: 3,
    name: 'Deconstructed Blazer',
    price: '€ 395',
    image: 'https://picsum.photos/seed/mc-hl-3/600/800',
    alt: 'Deconstructed Blazer — charcoal',
    tag: null,
  },
]

function ProductCard({ name, price, image, alt, tag, index }) {
  const [ref, visible] = useScrollAnimation(0.06)
  return (
    <a
      href="#shop"
      ref={ref}
      className={`${styles.card} ${visible ? styles.visible : ''}`}
      style={{ transitionDelay: `${0.1 + index * 0.12}s` }}
    >
      <div className={styles.cardImage}>
        <Image
          src={image}
          alt={alt}
          fill
          quality={82}
          className={styles.cardImg}
          sizes="25vw"
        />
        {tag && (
          <span className={`${styles.cardTag} ${tag === 'Limited' ? styles.cardTagPink : ''}`}>
            {tag}
          </span>
        )}
        <div className={styles.cardHover}>
          <span className={styles.cardHoverText}>Quick View</span>
        </div>
      </div>
      <div className={styles.cardMeta}>
        <p className={styles.cardName}>{name}</p>
        <p className={styles.cardPrice}>{price}</p>
      </div>
    </a>
  )
}

export default function HeadlinersRow() {
  const [ref, visible] = useScrollAnimation(0.08)

  return (
    <section className={styles.section}>
      <div className={styles.grid}>

        {/* Left block — editorial/graffiti */}
        <div
          ref={ref}
          className={`${styles.editorial} ${visible ? styles.editorialVisible : ''}`}
        >
          {/* Top label */}
          <p className={styles.editorialEyebrow}>Vol. I — SS25</p>
          <hr className={styles.editorialRule} />

          {/* Big graffiti headline */}
          <p className={styles.grafHeading} aria-hidden="true">Our</p>
          <p className={styles.grafHeadingLarge} aria-hidden="true">Head<br/>liners</p>

          <hr className={styles.editorialRule} />

          {/* Neon yellow description */}
          <p className={styles.editorialText}>
            Three pieces. One season.<br />
            Zero excuses.
          </p>

          {/* Neon pink tag */}
          <span className={styles.editorialGrafTag} aria-hidden="true">&#x2665; wear it</span>

          {/* Bottom — neon CTA */}
          <a href="#shop" className={styles.editorialCta}>
            See All Pieces
          </a>

          {/* Background neon number */}
          <span className={styles.bgNumber} aria-hidden="true">03</span>
        </div>

        {/* Right 3 product photos */}
        {headliners.map((item, i) => (
          <ProductCard key={item.id} {...item} index={i} />
        ))}

      </div>
    </section>
  )
}
