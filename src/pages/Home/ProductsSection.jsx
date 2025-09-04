import ProductsSectionContainer from "./ProductsSectionContainer";
import styles from "../../styles/ProductSection.module.css";


function ProductsSection(){
    return (
      <section className={styles.productSection}>  
        <ProductsSectionContainer/>
      </section>
    );
}

export default ProductsSection;