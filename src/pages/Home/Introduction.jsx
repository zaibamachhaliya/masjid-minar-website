import IntroductionContainer from "./IntroductionContainer";
import styles from "../../styles/IntroductionSection.module.css";



function Introduction(){
    return (
      <section className={styles.introduction}>
        <IntroductionContainer/>
      </section>
    );
}

export default Introduction;