import HeroContainer from "./HeroContainer";
import styles from "../../styles/HeroSection.module.css";


function HeroSection() {
    return (
        <section className={styles.heroSection} style={{
            backgroundImage: `url(${import.meta.env.BASE_URL}heroImg.jpg)`,
        }}>
            <HeroContainer />
        </section>
    );
}

export default HeroSection;