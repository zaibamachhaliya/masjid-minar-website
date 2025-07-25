
import styles from './ImgContainer.module.css';
import Img from './about-harmain-best-masjid-minar.png';

function ImgContainer() {
  return (
    <div className={styles.imgContainer}>
      <img src={Img} className='animate__animated animate__zoomIn Modifier	Effect animate__slow	2s duration animate__slower'  alt="Masjid Minar"  style={{ animationDuration: "7s",

  }}/>
    </div>
  );
}

export default ImgContainer;
