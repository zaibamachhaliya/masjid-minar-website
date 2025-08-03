
import styles from './CardeSectionContainer.module.css';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Img1 from './masjid-minar-harmain-traders.jpg';
import Img2 from './marble-rcc-masjid-mimber.jpg';
import Img3 from './25-feet-aman-masjid-minar.jpg';
import Img4 from './harmain-marble-wuzu-stand.jpg';


function CardeSectionContainer() {

  return (
    <div className={styles.cardeSectionContainer}>
      <div className={styles.contntContainer}>
        <div className={styles.content}>
          <h1>Our Products</h1>
          <p>
            We are the Best RCC Minar Manufacturer, Readymade Masjid Minar, RCC Mimber, Marble Mimber and Wuzu Stand, Parapet Boundry Wall, etc.
          </p>
        </div>
        <a
          href='https://masjidminar.com/products-masjid-minar/'
          className={styles.btn}
        >
          View All Products <ChevronRightIcon className={styles.icon} />
        </a>
      </div>

      <div className={styles.cardContainer}>
        <div className={styles.gridContainer}>
          <div className={`${styles.grid} ${styles.firstgrid}`}>
            <img
              src={Img1}
              alt="Masjid Minar 1"
              className={styles.firstimg}
              data-aos="zoom-in"
              data-aos-duration="2000"
            />
          </div>

          <div className={styles.grid}>
            <img
              src={Img2}
              alt="Masjid Minar 2"
              data-aos="zoom-in"
              data-aos-duration="2000"
            />
          </div>

          <div className={styles.grid}>
            <img
              src={Img3}
              alt="Masjid Minar 3"
              data-aos="zoom-in"
              data-aos-duration="2000"
            />
          </div>

          <div className={styles.grid}>
            <img
              src={Img4}
              alt="Masjid Minar 4"
              data-aos="zoom-in"
              data-aos-duration="2000"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardeSectionContainer;
