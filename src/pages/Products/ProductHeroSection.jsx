import ProductSectionContainer from "./ProductSectionContainer";
import styles from "../../styles/ProductPage.module.css";


function ProductHeroSection() {
    return (
        <section
            className={styles.productHeroSection}
            style={{
                height: '77.6vh',
                background: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
                 url(${import.meta.env.BASE_URL}productHero.png)`,
            }}
        >
            <ProductSectionContainer />
        </section>

    );
}

export default ProductHeroSection;