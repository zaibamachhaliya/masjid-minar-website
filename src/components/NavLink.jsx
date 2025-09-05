import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useEffect, useState } from "react";
import styles from "../styles/Header.module.css";
import { Link } from "react-router-dom";
import Workli from './Workli';
import Productli from './Prouctli';
import { NavLink } from "react-router-dom";


function NavbarLink({ mobileMenu }) {

    const Outerli = ['ABOUT', 'WORK', 'PRODUCTS', 'INQUIRY', 'CONTACT'];
    const [Workopenmenu, setWorkopenmenu] = useState(null);
    const [Productopenmenu, setProductopenmenu] = useState(null);


    function Makeurl(url) {
        return url.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");
    }

    useEffect(() => {

        const handleresize = () => {
            if (window.innerWidth > 1024) {
                setWorkopenmenu(null);
                setProductopenmenu(null);
            }
        };


        window.addEventListener("resize", handleresize)
        return (() => window.removeEventListener("resize", handleresize));

    }, []);


    return (
        <div className={`${styles.navLinks} ${mobileMenu ? styles.showMenu : styles.hideMenu}`}>
            <div className={styles.links}>
                <ul>
                    {
                        Outerli.map((outerli, idx) => {
                            return <li key={idx}
                                onMouseEnter={() => {
                                    if (window.innerWidth > 1024) {
                                        if (outerli === 'WORK') {
                                            setWorkopenmenu(outerli);
                                        } else if (outerli === 'PRODUCTS') {
                                            setProductopenmenu(outerli);
                                        }
                                    }
                                }}
                                onMouseLeave={() => {
                                    if (window.innerWidth > 1024) {
                                        if (outerli === 'WORK') {
                                            setWorkopenmenu(null);
                                        } else if (outerli === 'PRODUCTS') {
                                            setProductopenmenu(null);
                                        }
                                    }
                                }}
                            >

                                <NavLink to={`/${outerli.toLowerCase()}`}>

                                    {({ isActive }) => (


                                        <div className={`${styles.outerli} ${isActive ? styles.Linkactive : ''}`}>
                                            {outerli}
                                            {(outerli === 'WORK' || outerli === 'PRODUCTS') && (
                                                <span onClick={(e) => {
                                                    e.preventDefault();
                                                    e.stopPropagation();

                                                    {
                                                        outerli === 'WORK' ? setWorkopenmenu(Workopenmenu === outerli ? null : outerli) :
                                                            outerli === 'PRODUCTS' ? setProductopenmenu(Productopenmenu === outerli ? null : outerli) : null
                                                    }
                                                }}>

                                                    {
                                                        (Workopenmenu === outerli || Productopenmenu === outerli)
                                                            ? <ExpandLessIcon />
                                                            : <ExpandMoreIcon />
                                                    }
                                                </span>
                                            )}
                                        </div>
                                    )}
                                </NavLink>

                                {outerli == 'WORK' && Workopenmenu == 'WORK' && (
                                    <Workli Makeurl={Makeurl} />
                                )}

                                {outerli == 'PRODUCTS' && Productopenmenu == 'PRODUCTS' && (
                                    <Productli Makeurl={Makeurl} />
                                )}
                            </li>
                        })
                    }
                </ul>
            </div>
        </div>

    );

}
export default NavbarLink;