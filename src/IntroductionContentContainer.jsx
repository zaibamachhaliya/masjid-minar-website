import styles from './IntroductionContentContainer.module.css';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function IntroductionContentContainer(){
    return (
       <div className={styles.introductioncontentcontainer}>
            <div className={styles.content}>
                <span>Leading RCC Minar Manufacturer.</span>
                <div className={styles.outline}></div>
                <p><a href='https://masjidminar.com/%20%20https:/g.co/kgs/j4QbAC'>Harmain Precast Industries</a> is a leading RCC Minar Manufacturer,provide Readymade Masjid Minar,<a href='https://masjidminar.com/products-masjid-minar/'>RCC Minar</a> all over India including Gujrat and Maharashtra. Harmain Minar having its presence in RCC Minar construction and concrete minar product manufacturing was established in 1983 by concrete technologists with a mission to provide environment friendly,</p>
                <p>Our Main Goal is to provide Good Quality and Strong <a href='https://masjidminar.com/products-masjid-minar/'>RCC Masjid Minar</a> and RCC construction services and concrete products  Our Focuse is to provide High Quality and Good Finishing material and ensure timely completion of project.</p>
                <a href='' className={styles.abtn}>Read More About Company <ChevronRightIcon className={styles.Iicon}></ChevronRightIcon></a>
            </div>
       </div>
    );
}

export default IntroductionContentContainer;