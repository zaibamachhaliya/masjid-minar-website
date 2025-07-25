
import ImgContainer from "./ImgContainer";
import styles from './IntroductionsectionContainer.module.css';
import IntroductionContentContainer from "./IntroductionContentContainer";


function IntroductionsectionContainer(){

    return (
      <div className={styles.introductionContainer}>
          <ImgContainer></ImgContainer>
          <IntroductionContentContainer></IntroductionContentContainer>
      </div>  
    );
}

export default IntroductionsectionContainer;