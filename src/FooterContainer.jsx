import styles from './FooterContainer.module.css';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';


function FooterContainer() {
    return (
        <div className={styles.footercontainer}>

            <div className={styles.info}>
            
                <CallIcon className={`${styles.infoicon} animate__animated animate__slideInDown`}/>
                <div className={styles.h3pperent}>
                    <h3 className={styles.locationh3}>Contact Number</h3>
                    <div>
                        <p className={styles.locationp}>+91 98812 90998 (India)</p>
                        <p className={styles.locationp}>+91 98608 36033 (India)</p>
                    </div>
                </div>
            </div>


            <div className={styles.info}>
                <EmailIcon className={`${styles.infoicon} animate__animated animate__slideInDown`}></EmailIcon>

                <div  className={styles.h3pperent}>
                    <h3 className={styles.locationh3}>Email Address</h3>
                    <div>
                        <p className={styles.locationp}>dauvahanif786@gmail.com</p>
                    </div>
                </div>
            </div>


            <div className={styles.info}>
                <LocationOnIcon className={`${styles.infoicon} animate__animated animate__slideInDown`}></LocationOnIcon>
                <div  className={styles.h3pperent}>
                    <h3 className={styles.locationh3}>Location</h3>
                    <div>
                        <p className={styles.locationp}>Western Express Highway Vasai East – 401208 Mumbai (Maharashtra-India)</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FooterContainer;