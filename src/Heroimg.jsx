import styles from './Heroimg.module.css';
import  Img1 from './harmain-masjid-minar-slider.png'; 

function Heroimg(){
    return (
       
        <>
          <img src={Img1} className={styles.img}></img> 
         </> 
    );
} 

export default Heroimg;