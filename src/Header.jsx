import Navtag from "./Navtag";
import styles from './Header.module.css';
import Hemburgericon from "./Hemburgericon";
import Ullist from "./Ullist";
import { useState } from "react";



function Header() {
  const [showMenu, setShowMenu] = useState(false);
  
 
  let ullistOpen=()=>{
    setShowMenu(prev=>{
      let next=!prev;

      if (next)
      {
        {document.body.classList.add("noscroll");}
      }

      else{
        {document.body.classList.remove("noscroll");}
      }

      return next;
    });
  }
 

  return (
    <div className={styles.header}>
        <Navtag showMenu={showMenu} toggleMenu={ullistOpen} /> 
      {/* <Navtag showMenu={showMenu} toggleMenu={() => setShowMenu(prev => !prev)} /> */}
    </div>
  );
}

export default Header;