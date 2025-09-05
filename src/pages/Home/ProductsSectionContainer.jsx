import { Link } from "react-router-dom";
import styles from "../../styles/ProductSection.module.css";
import { MdChevronRight } from "react-icons/md";



function ProductsSectionContainer() {


    const ProductCard = [
        { img: `${import.meta.env.BASE_URL}card1.jpg` },
        { img: `${import.meta.env.BASE_URL}card2.jpg` },
        { img: `${import.meta.env.BASE_URL}card3.jpg` },
        { img: `${import.meta.env.BASE_URL}card4.jpg` }

    ];



    return <div className={styles.productssectionContainer}>
        <div className={styles.productContent}>
            <div className={styles.productText}>
                <h2 className={styles.productHading}>Our Products</h2>
                <p>We are the Best RCC Minar Manufacturer, Readymade Masjid Minar, RCC Mimber, Marble Mimber and Wuzu Stand, Parapet Boundry Wall, etc.</p>
            </div>
            <div className={styles.productBtn}>
                <Link to='/products'><button>View All Products <MdChevronRight /></button></Link>
            </div>
        </div>
        <div className={styles.productCard}>
            <div className={styles.gridContainer} data-aos="zoom-in" data-aos-duration="3000">
                {
                    ProductCard.map((item, idx) => {
                        return <div className={styles.grid} key={idx}>
                            <img src={item.img} />
                        </div>
                    })
                }
            </div>
        </div>
    </div>
}

export default ProductsSectionContainer;