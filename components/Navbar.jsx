import { Link } from 'react-router-dom';
import styles from './navbar.module.css'
import '../src/index.css'

const Navbar = () => {
  return (
    
    <>
          <section className={styles.navSection}>
              <nav className={styles.navbar}>
                  <div className={styles.logoBox}>
                      <img className={styles.logoImg} src="/logo.svg" alt="Semicolon Favicon" />
            </div>

                  <ul className={styles.navLinks}>
                <li><Link to="/individuals" className={styles.link}>Individuals</Link></li>
                <li><Link to="/businesses" className={styles.link}>Businesses</Link></li>
                <li><Link to="/about-us" className={styles.link}>About us</Link></li>
                <li><Link to="/careers" className={styles.link}>Careers</Link></li>
                <li><Link to="/our-impact" className={styles.link}>Impact</Link></li>

                      <Link to="/join-talent-pool" className={styles.outlineButton} id="join-btn">Join Talent Pool</Link>
            </ul>
        </nav>
    </section>
    
    </>
  )
}

export default Navbar;