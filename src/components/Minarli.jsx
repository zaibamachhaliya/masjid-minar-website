import { slugify } from "../data/utils";
import styles from "../styles/Header.module.css";
import { Link } from "react-router-dom";

function Minarli({Makeurl}) {

    const Minarli = ['90 FEET MINAR', '70 FEET MINAR', '60 FEET MINAR', '50 FEET MINAR', '44 FEET MINAR', '42 FEET MINAR', '40 FEET MINAR', '35 FEET MINAR', '32 FEET MINAR', '30 FEET MINAR', '28 FEET MINAR', '25 FEET MINAR', '23 FEET MINAR', '22 FEET MINAR', '20.5 FEET MINAR', '18 FEET MINAR', '17 FEET MINAR', '16 FEET MINAR', '14 FEET MINAR', '12 FEET MINAR', '11 FEET MINAR', '8 FEET MINAR', '6 FEET MINAR', '5 FEET MINAR', '3.5 FEET MINAR', '2 FEET MINAR',];

    return (
       
           <>
                <ul className={styles.Minardropdown}>
                    {
                        Minarli.map((minarItem, idx) => {
                            return <li key={idx}>
                                <Link to={`/products/minar/${slugify(minarItem)}`}>  
                                    {minarItem}
                                </Link>
                            </li>
                        })
                    }
                </ul>
             </>
        
    );
}

export default Minarli;