import ImgSectionContainer from "./ImgSectionContainer";
import styles from "../../styles/ProductPage.module.css";


function ImgSection(){
    return (
      <section className={styles.imgSection}>
         <ImgSectionContainer/>
      </section>
    );
}

export default ImgSection;