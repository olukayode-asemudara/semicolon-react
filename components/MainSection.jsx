// import { NavLink } from 'react-router-dom';
import styles from './main.module.css'
import MainBox from './MainBox';

const MainSection = () => {
  return (
    <>
    <section className={styles.heroSection}>
         <div className={styles.heroLeft}>
            <h1>Accelerating Africa's Digital Transformation</h1>

            <small>We are on a mission to empower African talent and drive digital innovation across the continent.</small>

            <div className={styles.buttons}>
                <a className="main-button" href="#">For Individuals</a>
                <a classNameName={styles.outlineButton} href="#">For Businesses</a>
            </div>
         </div>

         <div className={styles.heroImage}>
            <img src="/hero-gif.gif" alt="hero-gif"/>
         </div>
    </section>

    <section className={styles.whatWeDo}>
         <h3 className={styles.title}>What <span className="colored">We</span> Do</h3>
         
         <div className={styles.boxes}>  
            <MainBox img="circle.svg" desi="We help" desc="thrive and stand out in the digital economy by training them to become world-class tech professionals. We also help entrepreneurs successfully launch impactful, job-creating companies."/>
            <MainBox img="outline-box.svg"/>
        </div>
    </section>

    
    
    </>
  )
}

export default MainSection