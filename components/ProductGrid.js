'use client'

import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import styles from './ProductGrid.module.css'

function ProductCard({ name, price, image, alt, tag, index }) {
  const [ref, visible] = useScrollAnimation(0.05)

  return (
    <a
      ref={ref}
      href="#"
      className={`${styles.card} ${visible ? styles.visible : ''}`}
      style={{ transitionDelay: `${index * 0.06}s` }}
    >
      <div className={styles.imageWrapper}>
        <Image
          src={image} alt={alt} fill quality={80}
          className={styles.image}
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        {/* Tag */}
        {tag === 'new'     && <span className={`${styles.tag} ${styles.tagNew}`}>New</span>}
        {tag === 'limited' && <span className={`${styles.tag} ${styles.tagLimited}`}>Limited</span>}

        {/* Hover line — neon pink underline on image bottom */}
        <div className={styles.hoverLine} aria-hidden="true" />
      </div>

      <div className={styles.meta}>
        <p className={styles.name}>{name}</p>
        <p className={styles.price}>{price}</p>
      </div>
    </a>
  )
}

export default function ProductGrid({ products }) {
  const [ref, visible] = useScrollAnimation(0.05)

  return (
    <section className={styles.section} id="shop">
      <div className={`${styles.header} ${visible ? styles.headerVisible : ''}`} ref={ref}>
        <h2 className={styles.title}>The Drop</h2>
        <p className={styles.meta}>SS25 — {products.length} pieces</p>
      </div>

      <div className={styles.grid}>
        {products.map((p, i) => (
          <ProductCard key={p.id} {...p} index={i} />
        ))}
      </div>
    </section>
  )
}
