import MenuIcon from '@mui/icons-material/Menu';
import styles from './Hemburgericon.module.css';
import { useState } from 'react';
import Ullist from './Ullist';
import CloseIcon from '@mui/icons-material/Close';

function Hemburgericon({toggleMenu}){
   
  
  let[iconchange,setIconChange]=useState(false);


  let changeicon=()=>{
     setIconChange(prev=>!prev);
  }

   
    return (
            <>
             {iconchange?<button className={styles.hemburgericon} onClick={()=>{toggleMenu(),changeicon()}}><CloseIcon></CloseIcon></button>:<button className={styles.hemburgericon} onClick={()=>{toggleMenu(),changeicon()}}><MenuIcon></MenuIcon></button>}
            </>
           
    );
}

export default Hemburgericon;