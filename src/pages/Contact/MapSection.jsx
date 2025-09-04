import MapContainer from "./MapContainer";
import styles from "../../styles/ConnectPage.module.css";


function MapSection() {
    return <section className={styles.mapSection}>
            <MapContainer />
    </section>
}

export default MapSection;