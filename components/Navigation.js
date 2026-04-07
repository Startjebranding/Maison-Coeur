'use client'

import { useState } from 'react'
import Link from 'next/link'
import styles from './Navigation.module.css'

export default function Navigation() {
  const [open, setOpen] = useState(false)

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          Maison&nbsp;C&#x153;ur
        </Link>

        <nav className={styles.nav}>
          <Link href="#shop"    className={styles.link}>Shop</Link>
          <Link href="#about"   className={styles.link}>About</Link>
          <Link href="#contact" className={styles.link}>Contact</Link>
        </nav>

        <button
          className={`${styles.burger} ${open ? styles.open : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span /><span />
        </button>
      </div>

      <div className={`${styles.drawer} ${open ? styles.drawerOpen : ''}`}>
        {['Shop', 'About', 'Contact'].map((item) => (
          <Link
            key={item}
            href={`#${item.toLowerCase()}`}
            className={styles.drawerLink}
            onClick={() => setOpen(false)}
          >
            {item}
          </Link>
        ))}
      </div>
    </header>
  )
}
