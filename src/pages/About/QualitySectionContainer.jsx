import styles from "../../styles/AboutSection.module.css";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


function QualitySectionContainer() {
    return (
        <div className={styles.QualitySectionContainer}>
            <div className={styles.content}>
                <a href=''>  <button>Quality Assurance <ChevronRightIcon /></button></a>
                <p>As an ISO-certified company, we adhere to stringent quality control measures, ensuring that each product meets the highest standards of strength, durability, and finish. Our experienced team utilizes premium-grade materials and advanced techniques to deliver products that stand the test of time.</p>
            </div>
        </div>
    )
}

export default QualitySectionContainer;