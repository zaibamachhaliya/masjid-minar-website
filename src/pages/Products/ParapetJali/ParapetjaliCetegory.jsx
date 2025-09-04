import ParapetJaliCetegoryContainer from "./ParapetjaliCetegoryContainer";
import styles from '/src/styles/ParapetjaliCetegory.module.css';

function ParapetJaliCetegory(){
    return (
         <main>
             <section className={styles.parapetJaliCetegorySectionn}>
                  <ParapetJaliCetegoryContainer/>
             </section>
         </main>
    );
}

export default ParapetJaliCetegory;