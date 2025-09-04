import styles from "../styles/Header.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Minarli from "./Minarli";
import Minargelleryli from "./Minargellery";
import Parapetjali from "./Parapetjali";
import MarbleMimberWuzuStand from "./MarblemimberWuzuStand";
import { useEffect } from "react";


function Productli({ Makeurl }) {


    const Productli = ['MINAR', 'GUMBAD', 'MINAR GALLERY', 'PARAPET JALI', 'Marble Mimber & Wuzu Stand', 'RCC Mimber', 'Musalla Tiles'];
    const [Minarmenu, setMinarmenu] = useState(null);
    const [Minargellerymenu, setminargellerymenu] = useState(null);
    const [parapetjalimenu, setParapertjalimenu] = useState(null);
    const [MarbleMimbermenu, setMArblemimbermenu] = useState(null);



    useEffect(() => {

        const handleresize = () => {
            if (window.innerWidth > 1024) {
                setMinarmenu(null);
                setminargellerymenu(null);
                setParapertjalimenu(null);
                setMArblemimbermenu(null);
            }
        };


        window.addEventListener("resize", handleresize)
        return (() => window.removeEventListener("resize", handleresize));

    }, []);


    return (
        <>
            {
                <ul className={styles.productDropdown}>
                    {
                        Productli.map((item, idx) => {
                            return <li
                                key={idx}
                                onMouseEnter={() => {
                                    if (window.innerWidth > 1024) {
                                        if (item === 'MINAR') {
                                            setMinarmenu(item);
                                        }

                                        else if (item === 'MINAR GALLERY') {
                                            setminargellerymenu(item);
                                        }

                                        else if (item === 'PARAPET JALI') {
                                            setParapertjalimenu(item);
                                        }

                                        else if (item === 'Marble Mimber & Wuzu Stand') {
                                            setMArblemimbermenu(item);
                                        }
                                    }
                                }}

                                onMouseLeave={() => {
                                    if (window.innerWidth > 1024) {
                                        if (item === 'MINAR') {
                                            setMinarmenu(null);
                                        }

                                        else if (item === 'MINAR GALLERY') {
                                            setminargellerymenu(null);
                                        }

                                        else if (item === 'PARAPET JALI') {
                                            setParapertjalimenu(null);
                                        }

                                        else if (item === 'Marble Mimber & Wuzu Stand') {
                                            setMArblemimbermenu(null);
                                        }
                                    }
                                }}
                            >


                                

                                <Link to={`products/${Makeurl(item)}`}> 
                                        
                                    <div className={styles.Nestedli}>
                                        {item}
                                        {(item === 'MINAR' || item === 'MINAR GALLERY' || item === 'PARAPET JALI' || item === 'Marble Mimber & Wuzu Stand') &&

                                            (<span onClick={(e) => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                {
                                                    item === 'MINAR' ? setMinarmenu(Minarmenu == item ? null : item) :
                                                        item === 'MINAR GALLERY' ? setminargellerymenu(Minargellerymenu == item ? null : item) :
                                                            item === 'PARAPET JALI' ? setParapertjalimenu(parapetjalimenu == item ? null : item) :
                                                                item === 'Marble Mimber & Wuzu Stand' ? setMArblemimbermenu(MarbleMimbermenu == item ? null : item) :
                                                                    null
                                                }

                                            }}>
                                                {Minarmenu == item || Minargellerymenu === item || parapetjalimenu === item || MarbleMimbermenu === item ?

                                                    <ExpandLessIcon /> :
                                                    <ExpandMoreIcon />
                                                }
                                            </span>
                                            )}
                                    </div>
                                </Link>




                        
                                {item === 'MINAR' && Minarmenu === 'MINAR' && (
                                    <Minarli Makeurl={Makeurl} />
                                )}

                                {item === 'MINAR GALLERY' && Minargellerymenu === 'MINAR GALLERY' && (
                                    <Minargelleryli Makeurl={Makeurl} />
                                )}

                                {item === 'PARAPET JALI' && parapetjalimenu === 'PARAPET JALI' && (
                                    <Parapetjali Makeurl={Makeurl} />
                                )}



                                {item === 'Marble Mimber & Wuzu Stand' && MarbleMimbermenu === 'Marble Mimber & Wuzu Stand' && (
                                    <MarbleMimberWuzuStand Makeurl={Makeurl} />
                                )}
                            </li>
                        })
                    }
                </ul>
            }

        </>

    );
}

export default Productli;