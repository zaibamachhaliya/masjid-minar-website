import styles from './WorkLi.module.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Worklist from './Worklist';
import { useState } from 'react';

function Work() {
   
   
   let [workopen,setWorkOpen]=useState(false);

   
    let worklistShow=()=>{
       setWorkOpen(prev=>!prev);
    }
   
   
   
    return (
        <li className={styles.li}>

            <div className={styles.workai}>
                <a href='https://masjidminar.com/minar-design-gallery/'>WORK</a>
                <KeyboardArrowDownIcon className={`${styles.downicon} ${workopen?styles.rotete:styles.norotet}`} onClick={worklistShow}></KeyboardArrowDownIcon>
            </div> 

            <div className={`${styles.workList} ${workopen?styles.worklistShow:styles.worklistHide}`}>
               <Worklist></Worklist>
            </div> 
        </li>
    ); 
}

export default Work;

