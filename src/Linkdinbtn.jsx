import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import styles from './Linkdinbtn.module.css';


function Linkdinbtn(){
    return (
       <div className={styles.linkdinbtnPerent}> 
           <a href='' className={styles.linkdinbtn}>
              <span>CONNECT US ON LINKEDIN</span>
               <ChevronRightIcon className={styles.icon}></ChevronRightIcon>
           </a>
       </div>
    );
}


export default Linkdinbtn;