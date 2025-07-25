
import IntroductionsectionContainer from "./IntroductionsectionContainer";
import styles from './IntroductionSection.module.css';

function IntroductionSection(){
    return <section className={styles.introductionSection}>
           <IntroductionsectionContainer></IntroductionsectionContainer>
    </section>
}

export default IntroductionSection;