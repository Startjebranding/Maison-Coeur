'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import styles from './BrandStatement.module.css'

export default function BrandStatement() {
  const [ref, visible] = useScrollAnimation(0.15)
  return (
    <section className={styles.section} id="about">
      <div ref={ref} className={`${styles.inner} ${visible ? styles.visible : ''}`}>
        <p className={styles.eyebrow}>Our philosophy</p>
        <blockquote className={styles.quote}>
          &#8220;Designed with intention.<br />
          Built for everyday wear.<br />
          Priced without the luxury markup.&#8221;
        </blockquote>
        <div className={styles.divider} />
        <p className={styles.body}>
          Maison C&#x153;ur was founded on a single belief: that well-made, beautifully
          designed clothing should not come with an inaccessible price tag. We work
          directly with certified fabric mills, skip the middlemen, and pass the
          savings on to you — without compromising on a single detail.
        </p>
        <a href="#shop" className={styles.cta}>Discover the collection</a>
      </div>
    </section>
  )
}
