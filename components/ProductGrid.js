'use client'

import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import styles from './ProductGrid.module.css'

function ProductCard({ name, price, image, alt, index }) {
  const [ref, visible] = useScrollAnimation(0.06)
  return (
    <a
      ref={ref}
      href="#"
      className={`${styles.card} ${visible ? styles.visible : ''}`}
      style={{ transitionDelay: `${index * 0.07}s` }}
    >
      <div className={styles.imageWrapper}>
        <Image
          src={image} alt={alt} fill quality={80}
          className={styles.image}
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
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
        <h2 className={styles.title}>The Collection</h2>
        <p className={styles.subtitle}>SS25 — All pieces</p>
      </div>
      <div className={styles.grid}>
        {products.map((p, i) => <ProductCard key={p.id} {...p} index={i} />)}
      </div>
    </section>
  )
}
