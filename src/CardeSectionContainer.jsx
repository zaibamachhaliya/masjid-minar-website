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
                    <p>We are the Best RCC Minar Manufacturer, Readymade Masjid Minar, RCC Mimber, Marble Mimber and Wuzu Stand, Parapet Boundry Wall, etc.</p>
                </div>
                <a href='https://masjidminar.com/products-masjid-minar/' className={styles.btn}>View All Products <ChevronRightIcon className={styles.icon}></ChevronRightIcon></a>
            </div>

            <div className={styles.cardContainer}>
                <div className={styles.gridContainer}>
                    <div className={styles.grid}>
                        <img
                            src={Img1}
                            className={`${styles.firstimg} animate__animated animate__zoomIn animate__slower`}
                            style={{ animationDuration: "7s" }}
                        />
                    </div>

                    <div className={styles.grid}>
                        <img src={Img2}
                            className={'animate__animated animate__zoomIn animate__slower'}
                            style={{ animationDuration: "7s" }}>
                        </img>
                    </div>


                    <div className={styles.grid}>
                        <img src={Img3} className={'animate__animated animate__zoomIn animate__slower'}
                            style={{ animationDuration: "7s" }}>
                        </img>
                    </div>

                    <div className={styles.grid}>
                        <img src={Img4} className={'animate__animated animate__zoomIn animate__slower'}
                            style={{ animationDuration: "7s" }}>
                        </img>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default CardeSectionContainer;