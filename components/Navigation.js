'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './Navigation.module.css'

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
  }, [menuOpen])

  return (
    <header className={styles.header}>
      {/* Masthead */}
      <div className={styles.masthead}>
        <hr className={styles.ruleTop} />
        <div className={styles.mastheadInner}>
          <div className={styles.mastheadMeta}>
            <span>Vol. I, No. 3</span>
            <span>Spring 2025</span>
          </div>

          <div className={styles.mastheadCenter}>
            <p className={styles.gazetteName}>The Maison C&#x153;ur Gazette</p>
            <span className={styles.mastheadGraf} aria-hidden="true">&#x2665;</span>
            <p className={styles.tagline}>
              &#8220;Worn in silence. Felt in full.&#8221;
            </p>
          </div>

          <div className={styles.mastheadMeta}>
            <span>Est. 2025</span>
            <span>Price: &#8212;</span>
          </div>
        </div>
        <hr className={styles.ruleDouble} />
      </div>

      {/* Nav bar */}
      <nav className={styles.nav}>
        <ul className={styles.navLinks}>
          <li><Link href="/" className={styles.navLink}>Home</Link></li>
          <li><Link href="#shop" className={styles.navLink}>Shop</Link></li>
          <li><Link href="#lookbook" className={styles.navLink}>Archive</Link></li>
          <li><Link href="#contact" className={styles.navLink}>Contact</Link></li>
        </ul>

        <button
          className={`${styles.menuToggle} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span />
        </button>
      </nav>
      <hr className={styles.ruleNav} />

      {/* Mobile overlay */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileOpen : ''}`}>
        <ul className={styles.mobileLinks}>
          {['Home', 'Shop', 'Archive', 'Contact'].map((item) => (
            <li key={item}>
              <Link
                href={`#${item.toLowerCase()}`}
                className={styles.mobileLink}
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
