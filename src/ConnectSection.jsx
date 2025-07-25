import ConnecctSectionContainer from "./ConecctSectionContainer";
import styles from './connectSection.module.css';


function ConnectSection(){
    return (
       <section className={styles.connectSection}>
            <ConnecctSectionContainer></ConnecctSectionContainer>
       </section>
    );
}

export default ConnectSection;