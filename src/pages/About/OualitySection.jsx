import styles from "../../styles/AboutSection.module.css";
import QualitySectionContainer from "./QualitySectionContainer";

function QualitySection(){
    return (
      <section className={styles.qualitySection}>
         <QualitySectionContainer/>
      </section>
    );
}

export default QualitySection;