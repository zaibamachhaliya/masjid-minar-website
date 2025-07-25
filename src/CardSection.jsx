import CardeSectionContainer from "./CardeSectionContainer";
import styles from './CardSection.module.css';


function CardSection(){
    return (
       <section className={styles.cardSection}>
          <CardeSectionContainer></CardeSectionContainer>
       </section>
    );
}

export default CardSection;