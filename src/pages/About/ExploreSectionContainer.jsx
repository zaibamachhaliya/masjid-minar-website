import ExploreSectionContent from "./ExploreSectionContent";
import styles from "../../styles/AboutSection.module.css";


function ExploreSectionContainer() {
    return (
        <>
            <div className={styles.explorePrt}>
                <div className={styles.explorePartContainer}>
                    <h1>Explore Our Products for Masjid Minar</h1>
                    <p>We specialize in a diverse range of products, including:</p>
                </div>
            </div>
            <div className={styles.cardPart}>
                <ExploreSectionContent />
            </div>
        </>

    );
}

export default ExploreSectionContainer;