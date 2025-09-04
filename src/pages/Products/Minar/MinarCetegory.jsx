import MinarcetegoryContainer from "./MinarCetgoryContainer";
import styles from '/src/styles/MinarCetegorypage.module.css';


function MinarCetegory() {
  return (
    <main>
      <section className={styles.cetegorySection}>
        <MinarcetegoryContainer />
      </section>
    </main>
  );
}

export default MinarCetegory;