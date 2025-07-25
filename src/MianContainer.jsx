import styles from './MianContainer.module.css';
import HeroSection from './HeroSection';
import IntroductionSection from './introductionSection';
import CardSection from './CardSection';
import ConnectSection from './ConnectSection';

function MinContainer(){
    return (
       <div className={styles.MinContiner}>
          <HeroSection></HeroSection>
          <IntroductionSection></IntroductionSection>
          <CardSection></CardSection>
          <ConnectSection></ConnectSection>
       </div>
    );
}

export default MinContainer;