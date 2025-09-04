import ExploreSectionContainer from "./ExploreSectionContainer";
import styles from "../../styles/AboutSection.module.css";

function ExploreSection(){
  return(
     <section className={styles.exploreSection}>
       <ExploreSectionContainer/>
     </section>
  );
}

export default ExploreSection;