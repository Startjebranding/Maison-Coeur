'use client'

import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import styles from './ArticleProducts.module.css'

function ProductArticle({ headline, category, name, price, description, image, alt, column, index }) {
  const [ref, visible] = useScrollAnimation(0.08)

  return (
    <article
      ref={ref}
      className={`${styles.article} ${visible ? styles.visible : ''}`}
      style={{ transitionDelay: `${index * 0.12}s` }}
    >
      <div className={styles.articleTop}>
        <span className={styles.column}>{column}</span>
        <span className={styles.category}>{category}</span>
      </div>
      <hr className={styles.rule} />

      <div className={styles.articleBody}>
        <div className={styles.textBlock}>
          <h2 className={styles.headline}>{headline}</h2>
          <p className={styles.byline}>By Maison C&#x153;ur Atelier</p>
          <p className={styles.description}>{description}</p>
          <div className={styles.priceRow}>
            <span className={styles.price}>{price}</span>
            <a href="#" className={styles.buyLink}>Add to cart</a>
          </div>
        </div>

        <div className={styles.imageWrapper}>
          <Image
            src={image}
            alt={alt}
            fill
            quality={80}
            className={styles.image}
            sizes="(max-width: 768px) 100vw, 35vw"
          />
          <span className={styles.imageName} aria-hidden="true">{name}</span>
        </div>
      </div>
    </article>
  )
}

export default function ArticleProducts({ products }) {
  const [ref, visible] = useScrollAnimation(0.05)

  return (
    <section className={styles.section} id="shop">
      <div ref={ref} className={`${styles.sectionHead} ${visible ? styles.headVisible : ''}`}>
        <div className={styles.sectionHeadInner}>
          <span className={styles.eyebrow}>Shop</span>
          <h2 className={styles.sectionTitle}>The Collection</h2>
          <span className={styles.eyebrow}>SS25</span>
        </div>
        <hr className={styles.headRule} />
      </div>

      <div className={styles.grid}>
        {products.map((product, i) => (
          <ProductArticle key={product.id} {...product} index={i} />
        ))}
      </div>
    </section>
  )
}
