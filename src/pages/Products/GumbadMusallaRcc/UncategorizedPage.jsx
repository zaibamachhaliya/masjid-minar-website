import UnCetegorizeContainer from "./UncategorizePageContainer";
import styles from '/src/styles/Uncetegoriz.module.css';


function UnCategoryzPage(){
    return (
      <main>
         <section className={styles.uncetegorizSection}>
            <UnCetegorizeContainer/>
         </section>
      </main>
    ); 
}

export default UnCategoryzPage;