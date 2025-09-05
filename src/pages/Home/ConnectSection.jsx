import ConnectContainer from "./ConnectSectionContainer";
import styles from "../../styles/ConnectSection.module.css";


function ConnectSection() {
  return (
    <section
      className={styles.connectSection}
      style={{ backgroundImage: `url(${import.meta.env.BASE_URL}wall.jpg)` }}
    >
      <ConnectContainer />
    </section>

  );
}

export default ConnectSection;