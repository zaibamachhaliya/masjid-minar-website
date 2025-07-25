
import { ArrowLeft } from 'lucide-react';
import styles from './Prevbtn.module.css';


function Prevbtn({prevbtn}){
    return (
        <button className={styles.prevbtn} onClick={prevbtn}><ArrowLeft className={styles.lefticon}></ArrowLeft></button>
    );
}

export default Prevbtn;