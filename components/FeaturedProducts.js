'use client'

import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import styles from './FeaturedProducts.module.css'

function FeaturedCard({ name, price, image, alt, index }) {
  const [ref, visible] = useScrollAnimation(0.06)
  return (
    <a
      ref={ref}
      href="#"
      className={`${styles.card} ${visible ? styles.visible : ''}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className={styles.imageWrapper}>
        <Image
          src={image} alt={alt} fill quality={82}
          className={styles.image}
          sizes="(max-width: 768px) 50vw, 25vw"
        />
        <div className={styles.hoverOverlay}>
          <span className={styles.hoverText}>View piece</span>
        </div>
      </div>
      <div className={styles.meta}>
        <p className={styles.name}>{name}</p>
        <p className={styles.price}>{price}</p>
      </div>
    </a>
  )
}

export default function FeaturedProducts({ products }) {
  const [ref, visible] = useScrollAnimation(0.08)
  return (
    <section className={styles.section}>
      <div
        ref={ref}
        className={`${styles.header} ${visible ? styles.headerVisible : ''}`}
      >
        <p className={styles.eyebrow}>Curated for you</p>
        <h2 className={styles.title}>Featured Pieces</h2>
      </div>
      <div className={styles.grid}>
        {products.map((p, i) => <FeaturedCard key={p.id} {...p} index={i} />)}
      </div>
      <div className={styles.footer}>
        <a href="#shop" className={styles.viewAll}>View full collection</a>
      </div>
    </section>
  )
}
