import styles from "../styles/Footer.module.css";
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';


function Footer() {

    return (
        <footer>
            <div className={styles.footerContainer}>
                <div className={styles.info}>
                    <CallIcon />
                    <div className={styles.h3Pperent}>
                        <h3>Contact Number</h3>
                        <div>
                            <p>+91 98812 90998 (India)</p>
                            <p>+91 98608 36033 (India)</p>
                        </div>
                    </div>
                </div>
                <div className={styles.info}>
                    <EmailIcon />
                    <div className={styles.h3Pperent}>
                        <h3>Email Address</h3>
                        <div>
                            <p>dauvahanif786@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className={styles.info}>
                    <LocationOnIcon />
                    <div className={styles.h3Pperent}>
                        <h3>Location</h3>
                        <div>
                            <p>Western Express Highway Vasai East – 401208 Mumbai (Maharashtra-India)</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.bottemfooter}>
                <div className={styles.boottemContainer}>
                    <p>© Copyright 2022 Harmain Precast Industries. All Rights Reserved</p>
                    <p>Developed by-Zaiba</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;