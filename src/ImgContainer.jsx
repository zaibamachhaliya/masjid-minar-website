
import styles from './ImgContainer.module.css';
import Img from './about-harmain-best-masjid-minar.png';


function ImgContainer() {
  
  return (
    <div className={styles.imgContainer}>
      <img
        src={Img}
        alt="Masjid Minar"
        data-aos="zoom-in"
        data-aos-duration="2000"
      />
    </div>
  );
}

export default ImgContainer;
