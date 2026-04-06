'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './Navigation.module.css'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
  }, [menuOpen])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          Maison&nbsp;C&#x153;ur
        </Link>

        <nav className={styles.nav}>
          <ul className={styles.links}>
            <li><Link href="#shop"    className={styles.link}>Shop</Link></li>
            <li><Link href="#about"   className={styles.link}>About</Link></li>
            <li><Link href="#contact" className={styles.link}>Contact</Link></li>
          </ul>
          <a href="#shop" className={styles.ctaSmall}>Shop Now</a>
        </nav>

        <button
          className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span /><span />
        </button>
      </div>

      {/* Mobile */}
      <div className={`${styles.mobile} ${menuOpen ? styles.mobileOpen : ''}`}>
        <ul className={styles.mobileLinks}>
          {['Shop', 'About', 'Contact'].map((item) => (
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
