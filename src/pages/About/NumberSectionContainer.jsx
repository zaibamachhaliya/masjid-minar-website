import styles from "../../styles/AboutSection.module.css";
import Counter from "./Counter";

function NumberSectionContainer() {

    return (
        <div className={styles.numberSectionContainer}>
            <div className={styles.numberPart} style={{ width: '33%' }}>
                <Counter target={10}/>
                <h4>Year Of Experience</h4>
                <p>Trusted name in mosque Gumbad and Masjid Minar Manufacturing in mumbai India.</p>
            </div>
            <div className={styles.numberPart} style={{ width: '33%' }}>
                <Counter target={150}/>
                <h4>Total Successfull Projects</h4>
                <p>Completed 150+ Projects For Mosque Minar Products with great results.</p>
            </div>
            <div className={styles.numberPart} style={{ width: '33%' }}>
                <Counter target={3}/>
                <h4>Cities We Serve</h4>
                <p>Helping people in 3+ cities with our services and support for Masjid Minar.</p>
            </div>
        </div>
    );

}

export default NumberSectionContainer;