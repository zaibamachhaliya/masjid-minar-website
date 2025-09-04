import styles from "../styles/Header.module.css";
import { Link } from "react-router-dom"
import { MdChevronRight } from "react-icons/md";


function LinkdinButton() {
    return (
        <div className={styles.linkdinBtn}>
           
            <a href=''>
                <div>
                    <button>
                        CONNECT US ON LINKEDIN
                        <MdChevronRight />
                    </button>
                </div>
            </a>
           
        </div>
    );
}

export default LinkdinButton;