'use client'

import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import styles from './EditorialSection.module.css'

export default function EditorialSection({ title, subtitle, body, image, imageAlt, reverse }) {
  const [textRef, textVisible] = useScrollAnimation(0.1)
  const [imageRef, imageVisible] = useScrollAnimation(0.08)

  return (
    <article className={`${styles.section} ${reverse ? styles.reverse : ''}`}>
      <div
        ref={imageRef}
        className={`${styles.imageColumn} ${imageVisible ? styles.visible : ''}`}
      >
        <div className={styles.imageFrame}>
          <Image
            src={image}
            alt={imageAlt}
            fill
            quality={85}
            className={styles.image}
            sizes="(max-width: 768px) 100vw, 55vw"
          />
        </div>
      </div>

      <div
        ref={textRef}
        className={`${styles.textColumn} ${textVisible ? styles.visible : ''}`}
      >
        <div className={styles.textInner}>
          <p className={styles.subtitle}>{subtitle}</p>
          <h2 className={styles.title}>{title}</h2>
          <div className={styles.divider} />
          <p className={styles.body}>{body}</p>
          <a href="#collection" className={styles.link}>
            View Collection
          </a>
        </div>
      </div>
    </article>
  )
}
