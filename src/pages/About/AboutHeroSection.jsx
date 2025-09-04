import AboutHeroSectionContainer from "./AboutHeroSectionContainer";
import styles from "../../styles/AboutSection.module.css";


function AboutHeroSection(){
    return (
      <section className={styles.aboutHerosection}>
         <AboutHeroSectionContainer/>
      </section>
    ); 
}

export default AboutHeroSection;