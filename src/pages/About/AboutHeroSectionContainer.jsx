import styles from "../../styles/AboutSection.module.css";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function AboutHeroSectionContainer() {
  return (
    <div className={styles.aboutHeroSectionContainer}>
      <div className={styles.aboutCotainerContent}>
        <button className={styles.harmain}>Harmain Minar</button>
        <h1>Top Masjid Minar Manufacturer.</h1>
        <p>At Harmain Precast Industries, we take pride in being a leading manufacturer and supplier of high-quality RCC (Reinforced Cement Concrete) products tailored for mosques and religious institutions across India. Established in 1983, our commitment to excellence and innovation has positioned us as a trusted name in the industry.</p>
        <a href=''> <button className={styles.comapnybtn}>Read More About Company <ChevronRightIcon /></button></a>
      </div>
    </div>
  );
}

export default AboutHeroSectionContainer;  