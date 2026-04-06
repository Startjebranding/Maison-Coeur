'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import styles from './UspBar.module.css'

const usps = [
  { icon: '◇', title: 'Premium Materials',  text: 'Natural fabrics sourced from certified mills.' },
  { icon: '◇', title: 'Timeless Design',    text: 'Pieces built to last beyond any single season.' },
  { icon: '◇', title: 'Fair Pricing',        text: 'No luxury markup. Quality at an honest price.' },
  { icon: '◇', title: 'Free Returns',        text: '30-day returns. No questions asked.' },
]

export default function UspBar() {
  const [ref, visible] = useScrollAnimation(0.1)
  return (
    <section className={`${styles.section} ${visible ? styles.visible : ''}`} ref={ref}>
      <div className={styles.inner}>
        {usps.map((u, i) => (
          <div key={i} className={styles.item} style={{ transitionDelay: `${i * 0.1}s` }}>
            <span className={styles.icon}>{u.icon}</span>
            <p className={styles.title}>{u.title}</p>
            <p className={styles.text}>{u.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
