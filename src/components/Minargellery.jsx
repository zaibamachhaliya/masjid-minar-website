import styles from "../styles/Header.module.css";
import { Link } from "react-router-dom";
import { slugify } from "../data/utils";

function Minargelleryli({ Makeurl }) {

    const Minargellery = ['All Masjid Product', 'High Quality Minar', 'khubsurat-Minar', 'Lighting Minar', 'Minar Block', 'Mosque Minar - Masjid ke Minar', 'Strong Minar', 'Shandar-Minar', 'Makki Minar', 'Madni Minar'];
    return (
        <>
            {

                <ul className={styles.MinargellerydropDown}>
                    {
                        Minargellery.map((minargelleryItem, idx) => {
                            return <li key={idx}>
                                <Link to={`/products/Minar-gallery/${slugify(minargelleryItem)}`}>
                                    {minargelleryItem}
                                </Link>
                            </li>
                        })
                    }
                </ul>

            }
        </>
    );
}

export default Minargelleryli;