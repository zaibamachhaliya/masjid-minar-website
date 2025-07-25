

import Logo from "./Logo";
import Ullist from "./Ullist";
import Hemburgericon from "./Hemburgericon";
import Linkdinbtn from "./Linkdinbtn";
import styles from './Navtag.module.css';

function Navtag({ showMenu, toggleMenu }) {
  return (
    <nav className={styles.nav}>
      <Logo />
      <Ullist showMenu={showMenu} />
      <Hemburgericon toggleMenu={toggleMenu} />
      <Linkdinbtn />
    </nav>
  );
}

export default Navtag;
