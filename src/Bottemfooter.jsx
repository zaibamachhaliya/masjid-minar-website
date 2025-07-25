import styles from './Bottemfooter.module.css';


function Bottemfooter() {
    return (
        <div className={styles.bottemfooter}>
            <div className={styles.bottemcontainer}>
                <p>© Copyright 2022 Harmain Precast Industries. All Rights Reserved</p>
                <p><a href='https://valudas.com/'>Developed by – Valuda’s Tech </a></p>
            </div>
        </div>
    );
}

export default Bottemfooter;