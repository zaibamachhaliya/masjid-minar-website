import styles from "../styles/Header.module.css";
import { Link } from "react-router-dom";

function Workli({ Makeurl }) {

    const Workli = ['WORK PHOTOS', 'WORK VIDEOS'];

    return (
        <>
            <ul className={styles.workDropdown}>
                {Workli.map((item, idx) => {
                    return <li key={idx}>
                        <Link to={`${Makeurl(item)}`}>
                            {item}
                        </Link>
                    </li>
                })}
            </ul>
        </>

    );
}

export default Workli;