import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer} id="contact">
      <hr className={styles.ruleTop} />

      <div className={styles.inner}>
        {/* Masthead footer */}
        <div className={styles.mastheadLine}>
          <span>The Maison C&#x153;ur Gazette</span>
          <span>&#9632;</span>
          <span>Vol. I &mdash; {year}</span>
          <span>&#9632;</span>
          <span>maisoncoeur.com</span>
        </div>

        <hr className={styles.ruleMid} />

        <div className={styles.grid}>
          <div className={styles.about}>
            <p className={styles.colHead}>Maison C&#x153;ur</p>
            <p className={styles.text}>
              A clothing atelier for those who move slowly through
              a world in a hurry. Each season: twelve pieces,
              three fabrics, one intention.
            </p>
          </div>

          <div>
            <p className={styles.colHead}>Shop</p>
            <ul className={styles.links}>
              <li><a href="#shop">Collection</a></li>
              <li><a href="#lookbook">Lookbook</a></li>
              <li><a href="#">New Arrivals</a></li>
              <li><a href="#">Sale</a></li>
            </ul>
          </div>

          <div>
            <p className={styles.colHead}>Info</p>
            <ul className={styles.links}>
              <li><a href="#">About</a></li>
              <li><a href="#">Shipping & Returns</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Sustainability</a></li>
            </ul>
          </div>

          <div>
            <p className={styles.colHead}>Contact</p>
            <ul className={styles.links}>
              <li><a href="#">info@maisoncoeur.com</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Pinterest</a></li>
              <li><a href="#">TikTok</a></li>
            </ul>
          </div>
        </div>

        <hr className={styles.ruleMid} />

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            &copy; {year} Maison C&#x153;ur. All rights reserved.
          </p>
          <p className={styles.legal}>
            <a href="#">Privacy</a>
            &ensp;&middot;&ensp;
            <a href="#">Terms</a>
            &ensp;&middot;&ensp;
            <a href="#">Cookies</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
