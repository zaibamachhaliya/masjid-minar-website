import styles from '/src/styles/ParapetJali.module.css';
import { Link } from 'react-router-dom';
function ParapetJaliHeroSection() {
  return (
    <section className={styles.parapetjaliHeroSection}>
      <div className={styles.ParpetJaliHeroContainer}>
        <div className={styles.parapetJaliHeroContent}>
          <div className={styles.parapetJaliHeroImgPart}>
            <img src={`${import.meta.env.BASE_URL}img2.png`} alt="Description"
              data-aos="zoom-in"
              data-aos-duration="3000"
            />
          </div>
          <div className={styles.parapetJaliHeroText}>
            <h1>Parapet Jali</h1>
            <p><a href={'https://www.google.com/search?output=search&q=HARMAIN+PRECAST+INDUSTRIES+-+Masjid+Minar+%26+RCC+Minar+for+Masjid&ludocid=4372215395066124'} target='_blank'><span>Harmain Traders</span> </a> Manufacturing All Type Parapet Jali <Link to='/products/parapet-jali/parapet-boundary-wall'><span>Parapet Boundary Wall,</span></Link> Parapet Jali, <Link to='/products/parapet-jali/medium-size-paraper-jali'><span>Medium size Parapet Jali</span></Link>,<Link to='/products/parapet-jali/small-paraperjali'><span>Small Parapet Jali.</span></Link> The Parapet Jali is very effective and made for use in mosques and other places.</p>
            <Link to='/contact'><button>Contact-Us</button></Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ParapetJaliHeroSection;