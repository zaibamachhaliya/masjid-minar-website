import MinarCardSectionContainer from "./MinarCardSectionContainer";
import styles from '/src/styles/MinarPage.module.css';


function MinarCardeSection(){
     return(
       <section className={styles.minarCardeSection}>
           <MinarCardSectionContainer/>
       </section>
     );
}  

export default MinarCardeSection;