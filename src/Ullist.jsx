import List from "./List";
import styles from './Ullist.module.css';

                   
function Ullist({showMenu}){
   
 
    
    
    
    return (
       <ul className={`${styles.ulList} ${showMenu? styles.show:styles.hide}`}> 
           <List></List>
       </ul>
    );
}


export default Ullist;
