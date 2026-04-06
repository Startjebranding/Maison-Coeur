'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import styles from './FeaturedCollection.module.css'

function CollectionItem({ name, price, image, alt, index }) {
  const [ref, visible] = useScrollAnimation(0.08)
  const [hovered, setHovered] = useState(false)

  return (
    <div
      ref={ref}
      className={`${styles.item} ${visible ? styles.visible : ''}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={styles.imageWrapper}>
        <Image
          src={image}
          alt={alt}
          fill
          quality={80}
          className={`${styles.image} ${hovered ? styles.zoomed : ''}`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className={`${styles.overlay} ${hovered ? styles.overlayVisible : ''}`}>
          <p className={styles.overlayName}>{name}</p>
          <p className={styles.overlayPrice}>{price}</p>
          <span className={styles.overlayAction}>View piece</span>
        </div>
      </div>
      <div className={styles.meta}>
        <p className={styles.metaName}>{name}</p>
        <p className={styles.metaPrice}>{price}</p>
      </div>
    </div>
  )
}

export default function FeaturedCollection({ items }) {
  const [headingRef, headingVisible] = useScrollAnimation(0.1)

  return (
    <section className={styles.section} id="collection">
      <div
        ref={headingRef}
        className={`${styles.heading} ${headingVisible ? styles.headingVisible : ''}`}
      >
        <p className={styles.eyebrow}>Spring / Summer 2025</p>
        <h2 className={styles.title}>The Collection</h2>
        <p className={styles.subtitle}>
          Pieces conceived in stillness. Worn in motion.
        </p>
      </div>

      <div className={styles.grid}>
        {items.map((item, i) => (
          <CollectionItem key={item.id} {...item} index={i} />
        ))}
      </div>
    </section>
  )
}
