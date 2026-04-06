import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <p className={styles.logo}>Maison&nbsp;C&#x153;ur</p>
            <p className={styles.brandText}>
              Refined quality.<br />Honest pricing.
            </p>
          </div>

          <div className={styles.cols}>
            <div>
              <p className={styles.colTitle}>Shop</p>
              <ul className={styles.colLinks}>
                <li><a href="#shop">All pieces</a></li>
                <li><a href="#">New arrivals</a></li>
                <li><a href="#">Sale</a></li>
              </ul>
            </div>
            <div>
              <p className={styles.colTitle}>Info</p>
              <ul className={styles.colLinks}>
                <li><a href="#about">About</a></li>
                <li><a href="#">Sustainability</a></li>
                <li><a href="#">Shipping &amp; returns</a></li>
              </ul>
            </div>
            <div>
              <p className={styles.colTitle}>Contact</p>
              <ul className={styles.colLinks}>
                <li><a href="#">info@maisoncoeur.com</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Pinterest</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>&copy; {year} Maison C&#x153;ur. All rights reserved.</p>
          <div className={styles.legal}>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
