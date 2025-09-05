import AboutHeroSectionContainer from "./AboutHeroSectionContainer";
import styles from "../../styles/AboutSection.module.css";


function AboutHeroSection() {
  return (
    <section
      className={styles.aboutHerosection}
      style={{ backgroundImage: `url(${import.meta.env.BASE_URL}abouthero.jpeg)` }}
    >
      <AboutHeroSectionContainer />
    </section>

  );
}

export default AboutHeroSection;