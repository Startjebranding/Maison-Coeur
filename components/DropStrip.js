'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import styles from './DropStrip.module.css'

export default function DropStrip() {
  const [ref, visible] = useScrollAnimation(0.1)

  return (
    <section className={`${styles.section} ${visible ? styles.visible : ''}`} ref={ref} id="about">
      <div className={styles.inner}>
        <div className={styles.left}>
          <p className={styles.label}>Our approach</p>
          <h2 className={styles.title}>
            Designed with<br />intention.
          </h2>
        </div>
        <div className={styles.right}>
          <p className={styles.body}>
            Maison C&#x153;ur makes clothes for people who know what they want.
            No excess. No noise. Pieces that hold up — to time, to wear, to scrutiny.
          </p>
          <p className={styles.body}>
            Premium materials. Direct pricing. Nothing added that doesn&#8217;t need to be there.
          </p>
          <a href="#shop" className={styles.link}>Shop all pieces &rarr;</a>
        </div>
      </div>
    </section>
  )
}
