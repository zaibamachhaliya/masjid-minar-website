import styles from '/src/styles/Wuzustand.module.css';
import WuzuStandContainer from './WuzuStandContainer';
import WuzustandCardContainer from './WuzustandCardContainer';



function WuzuStand() {
    return (
        <main>
            <section className={styles.wuzustandHeroSection}>
                <WuzuStandContainer />
            </section>
            <section className={styles.wuzuStandCardSection}>
                  <WuzustandCardContainer/>
            </section>
        </main>
    );
}

export default WuzuStand;