import styles from "../styles/Header.module.css";
import { Link } from "react-router-dom";
import { slugify } from "../data/utils";


function Parapetjali({ Makeurl }) {

    const Parapetjali = ['Parapet Boundary Wall', 'Shahi Boundary', 'small paraper-jali', 'Medium Size Paraper Jali', 'Paraper-Jali Design:1', 'Parapet-Jali Design:2', 'Parapet-Jali Design:3', 'Paraper-Jali Design-4', 'Parapet-Jali DEsign-5'];
    return (
        <>
            {
                <ul className={styles.ParapetJalidropdown}>
                    {
                        Parapetjali.map((paratapitme, idx) => {
                            return <li key={idx}>
                                <Link to={`/products/parapet-jali/${slugify(paratapitme)}`}>
                                    {paratapitme}
                                </Link>
                            </li>
                        })
                    }
                </ul>
            }
        </>
    );
}

export default Parapetjali;