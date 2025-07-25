
import {ArrowRight } from "lucide-react";
import styles from './Nextbtn.module.css';

function Nextbtn({nextbtn}){
    return (
        <button className={styles.nextbtn} onClick={nextbtn}><ArrowRight className={styles.righticon}></ArrowRight></button>
    );
}

export default Nextbtn;