import { Link } from "react-router-dom"
import styles from "../styles/Header.module.css";

function Logo() {
    return (
        < Link to='/' >
            <div className={styles.logo}>
                <img src='/logo.jpeg' alt="Company Logo" />
            </div>
        </Link >
    );
}

export default Logo;