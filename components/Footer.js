import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.inner}>
        <div className={styles.top}>
          <p className={styles.logo}>Maison&nbsp;C&#x153;ur</p>
          <nav className={styles.links}>
            <a href="#shop">Shop</a>
            <a href="#about">About</a>
            <a href="#">Instagram</a>
            <a href="#">info@maisoncoeur.com</a>
          </nav>
        </div>
        <div className={styles.bottom}>
          <p className={styles.copy}>&copy; {year} Maison C&#x153;ur</p>
          <div className={styles.legal}>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
