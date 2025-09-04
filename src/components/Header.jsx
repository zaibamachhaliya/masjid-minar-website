
import styles from "../styles/Header.module.css";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import NavbarLink from "./NavLink";
import LinkdinButton from "./LinkdinButton";
import Logo from "./Logo";


function Header() {

    const [mobileMenu, setMobileMenu] = useState(false);

    return (
        <header>
            <div className={styles.headerWrapper}>
                {/* <Topbar /> */}

                <div className={styles.topbar}>
                    <div className={styles.topbarContent}>
                        <div className={styles.topbarText}>
                            <marquee>Masjid Minar Manufacturer | Masjid Gumbad | Masjid Marble Products | Wuzu Stand | RCC Minar | Readymade Masjid Minar</marquee>
                        </div>
                    </div>
                </div>


                <div className={styles.header}>
                    <nav className={styles.nav}>
                        <div className={styles.headerContent}>


                          

                            <div>
                                <Logo />
                            </div>

                           
                            <div>
                                <NavbarLink mobileMenu={mobileMenu} />
                            </div>


                         
                            <div>
                                <LinkdinButton />
                            </div>


                           

                            <div className={styles.hemburgerIcon}>
                                <button onClick={() => setMobileMenu(!mobileMenu)}>
                                    {mobileMenu ? <CloseIcon /> : <MenuIcon />}
                                </button>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;