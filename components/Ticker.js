'use client'

import styles from './Ticker.module.css'

const items = [
  { text: 'NEW DROP LIVE', neon: false },
  { text: '◆', neon: false },
  { text: 'LIMITED PIECES', neon: true },
  { text: '◆', neon: false },
  { text: 'MAISON CŒUR', neon: false },
  { text: '◆', neon: false },
  { text: 'SS25 COLLECTION', neon: false },
  { text: '◆', neon: false },
  { text: 'STREET GAZETTE', neon: false },
  { text: '◆', neon: false },
  { text: 'FREE SHIPPING OVER €150', neon: true },
  { text: '◆', neon: false },
]

const repeated = [...items, ...items, ...items]

export default function Ticker() {
  return (
    <div className={styles.ticker} aria-label="News ticker">
      <div className={styles.track}>
        {repeated.map((item, i) => (
          <span
            key={i}
            className={`${styles.item} ${item.neon ? styles.neon : ''}`}
          >
            {item.text}
          </span>
        ))}
      </div>
    </div>
  )
}
