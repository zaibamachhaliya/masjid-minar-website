import { slugify } from "../data/utils";
import styles from "../styles/Header.module.css";
import { Link } from "react-router-dom";

function MarbleMimberWuzuStand({ Makeurl }) {

 
     console.log(Makeurl);


    const MarbleMimerlink = ['Marble Mimber', 'Marble Jali For Dargah', 'Masjid-Marble-Mehrab', 'Wuzu Stand'];

    return (
        <>
            {
                <ul className={styles.MarbleMimberDropdown} style={{margin:'0'}}>
                    {
                        MarbleMimerlink.map((mimberItem, idx) => {
                            return (
                                <li key={idx}>
                                    <Link to={`/products/marble-mimber--wuzu-stand/${slugify(mimberItem)}`}>
                                        {mimberItem}
                                    </Link>
                                </li>
                            ); 
                        })
                    }
                </ul>
            }
        </>
    )
}

export default MarbleMimberWuzuStand;