import HeroContainer from "./HeroContainer";
import styles from "../../styles/HeroSection.module.css";


function HeroSection() {
    return (
        <section className={styles.heroSection}>
            <HeroContainer/>
        </section>
    );
}

export default HeroSection;