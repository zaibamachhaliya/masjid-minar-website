import styles from "../../styles/ConnectPage.module.css";


function MapContainer() {
    return (
        <div className={styles.mapcontainer}>
            <div className={styles.mapContainer}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.458937171459!2d72.87329527419377!3d19.435770140581624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a98315f7224b%3A0x3cad3abca0691728!2sHARMAIN%20PRECAST%20INDUSTRIES%20-%20Readymade%20Masjid%20Minar%2C%20RCC%20Masjid%20Minar!5e0!3m2!1sen!2sin!4v1755912526730!5m2!1sen!2sin"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    );
}

export default MapContainer;