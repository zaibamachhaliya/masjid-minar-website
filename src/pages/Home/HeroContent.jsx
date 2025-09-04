import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import styles from "../../styles/HeroSection.module.css";
import { Link, useNavigate } from 'react-router-dom';

function HeroContent({ silderArray, currentidx }) {

    const element = silderArray[currentidx];


    return <div className={styles.heroContent}>
        <div className={`${styles.heroImg}`}>
            <img src={element.img} alt="hero" className={styles.fadeInLeftZoom} key={currentidx} />
        </div>
        <div className={`${styles.heroText} ${styles.floatFromBottom}`} key={currentidx}>
            <Link to='/products'><h1>{element.h1}</h1></Link>
            <p>{element.P}</p>
            <Link to='/products'> <div><button>View Product<ChevronRightIcon /></button></div></Link>
        </div>
    </div>
}

export default HeroContent;