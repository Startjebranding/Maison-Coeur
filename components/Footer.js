import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.inner}>
        <div className={styles.top}>
          <p className={styles.logo}>Maison&nbsp;C&#x153;ur</p>

          <div className={styles.columns}>
            <div className={styles.column}>
              <p className={styles.columnTitle}>Shop</p>
              <ul className={styles.columnLinks}>
                <li><Link href="#collection">Collection</Link></li>
                <li><Link href="#lookbook">Lookbook</Link></li>
                <li><Link href="#">New Arrivals</Link></li>
                <li><Link href="#">Sale</Link></li>
              </ul>
            </div>

            <div className={styles.column}>
              <p className={styles.columnTitle}>Brand</p>
              <ul className={styles.columnLinks}>
                <li><Link href="#about">About</Link></li>
                <li><Link href="#">Atelier</Link></li>
                <li><Link href="#">Sustainability</Link></li>
              </ul>
            </div>

            <div className={styles.column}>
              <p className={styles.columnTitle}>Contact</p>
              <ul className={styles.columnLinks}>
                <li><Link href="#">info@maisoncoeur.com</Link></li>
                <li><Link href="#">FAQ</Link></li>
                <li><Link href="#">Returns</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            &copy; {year} Maison C&#x153;ur. All rights reserved.
          </p>

          <div className={styles.social}>
            <Link href="#" aria-label="Instagram" className={styles.socialLink}>
              IG
            </Link>
            <Link href="#" aria-label="Pinterest" className={styles.socialLink}>
              PI
            </Link>
            <Link href="#" aria-label="TikTok" className={styles.socialLink}>
              TK
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
