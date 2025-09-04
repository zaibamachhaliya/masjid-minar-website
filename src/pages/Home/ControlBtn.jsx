import { ArrowLeft } from 'lucide-react';
import { ArrowRight } from "lucide-react";
import styles from "../../styles/HeroSection.module.css";

function Controlbtn({ prevbtn, nextbtn }) {
    return (
        <div>
            <div className={styles.controlbtn}>
                <button className={styles.prevbtn} onClick={prevbtn} style={{marginLeft:'20px'}}> <ArrowLeft /></button>
                <button className={styles.nextbtn} onClick={nextbtn} style={{marginRight:'20px'}}> <ArrowRight /></button>
            </div>
        </div>
    );

}

export default Controlbtn;