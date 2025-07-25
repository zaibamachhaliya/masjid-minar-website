import styles from './Topbar.module.css';

function Topbar(){
    return (
       <div className={styles.topBar}>
           <div className={styles.marqueeContainer}>
                <marquee>Masjid Minar Manufacturer | Masjid Gumbad | Masjid Marble Products | Wuzu Stand | RCC Minar | Readymade Masjid Minar</marquee>
           </div>
       </div>
    );
}

export default Topbar;