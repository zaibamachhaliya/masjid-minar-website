import ConnectContainer from "./ConnectSectionContainer";
import styles from "../../styles/ConnectSection.module.css";


function ConnectSection(){
    return (
      <section className={styles.connectSection}>
          <ConnectContainer/>
      </section>
    );
}

export default ConnectSection;