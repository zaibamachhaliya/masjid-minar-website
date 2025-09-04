import ProductSectionContainer from "./ProductSectionContainer";
import styles from "../../styles/ProductPage.module.css";


function ProductHeroSection() {
    return (
        <section className={styles.productHeroSection}>
            <ProductSectionContainer/>
        </section>
    );
}

export default ProductHeroSection;