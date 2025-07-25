import styles from './HeroContent.module.css';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function HeroContent() {
    return (
        <div className={styles.heroContent}>
            <h1><a href=''>Masjid Minar Manufacturer</a></h1>
            <p>All Type Of RCC Minar | ReadyMade Minar | Long and Strong Minar | Lighting Minar All Type Minar and Sizes are ready to Supply All Over India</p>


            <div className={styles.btn}>
                  <button><a href=''>View Product</a><ChevronRightIcon className={styles.btnicon}></ChevronRightIcon></button>
            </div>
           
        </div>
    );
}

export default HeroContent;