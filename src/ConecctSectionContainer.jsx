
import styles from './conecctSectionContainer.module.css';
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

function ConnecctSectionContainer() {
    return (
        <div className={styles.connectsectioncontainer}>
            <div className={styles.content}>
                <h1>Connect With Us</h1>
                <p>Harmain Masjid Minar is a Leading Brand in manufacturing of RCC Products and Construction Services it is a product of Harmain Traders. Connect us and Follow Us for Reguler Update about Aman Minar</p>
                <div className={styles.iconContainer}>
                    <ul className={styles.iconContainerUl}>

                        <li className={styles.iconContainerUlLi}><a href=''><FaFacebookSquare className={styles.facbookicon}></FaFacebookSquare></a></li>
                        <li className={styles.iconContainerUlLi}><a href=""><FaSquareXTwitter className={styles.twittericon}></FaSquareXTwitter></a></li>
                        <li className={styles.iconContainerUlLi}><a href=""><FaSquareInstagram className={styles.insgramicon}></FaSquareInstagram></a></li>
                        <li className={styles.iconContainerUlLi}><a href=""><FaLinkedin className={styles.linkdenicon}></FaLinkedin></a></li>
                        <li className={styles.iconContainerUlLi}><a href=""> <FaSquareWhatsapp className={styles.watsepicon}></FaSquareWhatsapp></a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ConnecctSectionContainer;