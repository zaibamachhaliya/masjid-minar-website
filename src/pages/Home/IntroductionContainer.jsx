import IntroductionContent from "./IntroductionContent";
import styles from "../../styles/IntroductionSection.module.css";


function IntroductionContainer(){
    return (
        <div className={styles.introductionContainer}>
             <IntroductionContent/>
        </div>
    );
}

export default IntroductionContainer;