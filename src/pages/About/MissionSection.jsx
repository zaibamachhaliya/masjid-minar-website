import MissionSectionContainer from "./MissionSEctionContainer";
import styles from "../../styles/AboutSection.module.css";


function MissionSection(){
    return (
      <section className={styles.missionSection}>
       <MissionSectionContainer/>
      </section>
    );
}

export default MissionSection;