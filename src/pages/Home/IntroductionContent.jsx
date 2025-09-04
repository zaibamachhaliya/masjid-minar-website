import styles from "../../styles/IntroductionSection.module.css";
import { MdChevronRight } from "react-icons/md";
import { Link } from 'react-router-dom'



function IntroductionContent() {
  return (
    <div className={styles.introductionContent}>
      <div className={styles.introductionImg}>
        <img
          src='img2.png'
          alt="Masjid Minar 1"
          data-aos="zoom-in"
          data-aos-duration="3000"
        />
      </div>

      <div className={styles.introductionText}>
        <div className={styles.contentText}>
          <span className={styles.introductionTextHading}>Leading RCC Minar Manufacturer.</span>
          <div className={styles.outline}></div>
          <p><Link to='/category/blog'><span className={styles.link}>Harmain Precast Industries</span> </Link>is a leading RCC Minar Manufacturer,provide Readymade Masjid Minar,<Link to='/products'><span className={styles.link}>RCC Minar</span></Link> all over India including Gujrat and Maharashtra. Harmain Minar having its presence in RCC Minar construction and concrete minar product manufacturing was established in 1983 by concrete technologists with a mission to provide environment friendly,</p>
          <p>Our Main Goal is to provide Good Quality and Strong <Link to='/products'><span className={styles.link}>RCC Masjid Minar</span></Link> and RCC construction services and concrete products Our Focuse is to provide High Quality and Good Finishing material and ensure timely completion of project.</p>
          <a href='/'> <button>Read More About Company <MdChevronRight /></button></a>
        </div>
      </div>
    </div>
  );
}

export default IntroductionContent;