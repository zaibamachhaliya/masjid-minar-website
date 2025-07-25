import Heroimg from "./Heroimg";
import HeroContent from "./HeroContent";
import styles from './HeroSectionContainer.module.css';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';



function HeroSectionContainer({ silderArray, currentidx }) {

    const element = silderArray[currentidx];

  

    return (

        <div className={styles.heroSectionContainer}>

            <div className={styles.heroSliderWrapper} key={currentidx}>
                <div className={styles.imgContentContainer}>
                     <div className={styles.imgContainer}>
                        <img src={element.Img} className={styles.img}></img>
                     </div>
                    <div className={styles.heroContent}>
                        <h1><a href='https://masjidminar.com/products-masjid-minar/' className={styles.a}>{element.h1}</a></h1>
                        <p>{element.p}</p>

                        <div className={styles.btn}>
                            <button><a href='https://masjidminar.com/products-masjid-minar/'>View Product</a><ChevronRightIcon className={styles.btnicon}></ChevronRightIcon></button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}




export default HeroSectionContainer;


