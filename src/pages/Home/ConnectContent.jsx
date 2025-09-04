import styles from "../../styles/ConnectSection.module.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

function ConnectContent() {
    return (
        <div className={styles.ConnectContent}>
            <h1>Connect With Us</h1>
            <p>Harmain Masjid Minar is a Leading Brand in manufacturing of RCC Products and Construction Services it is a product of Harmain Traders. Connect us and Follow Us for Reguler Update about Aman Minar</p>
            <div className={styles.iconContainer}>
                <a href='https://www.facebook.com/harmainmasjidminar'><div className={styles.icon}><FaFacebookSquare className={styles.facebookicon} /></div></a>
                <a href='https://x.com/harmainmasjidminar'><div className={styles.icon}><FaSquareXTwitter className={styles.twittericon} /></div></a>
                <a href='https://www.instagram.com/'> <div className={styles.icon}><FaSquareInstagram className={styles.instagramicon} /></div></a>
                <a href='https://www.linkedin.com/feed/'><div className={styles.icon}><FaLinkedin className={styles.linkdin} /></div></a>
                <a href='https://www.whatsapp.com/'><div className={styles.icon}><FaSquareWhatsapp className={styles.watsepicon} /></div></a>
            </div>
        </div>
    );
}

export default ConnectContent;