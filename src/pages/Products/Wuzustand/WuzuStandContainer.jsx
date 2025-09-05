import styles from '/src/styles/Wuzustand.module.css';
import { Link } from 'react-router-dom';

function WuzuStandContainer() {
    return (
        <div className={styles.wuzustandContainer}>
            <div className={styles.wuzuStandHeroContent}>
                <div className={styles.wusuStnadImgPart}>
                    <img
                        src={`${import.meta.env.BASE_URL}marblemimber.jpeg`}
                        data-aos="zoom-in"
                        data-aos-duration="3000"
                    />
                </div>
                <div className={styles.wuzustandherocontentPart}>
                    <h1>Marble Mimber</h1>
                    <p><a href={'https://www.google.com/search?output=search&q=HARMAIN+PRECAST+INDUSTRIES+-+Masjid+Minar+%26+RCC+Minar+for+Masjid&ludocid=4372215395066124'} target='_blank'><span>Harmain Traders </span></a>are making All Type Marble Mimber & Wuzu Stand. Wuzu is the Islamic procedure for washing parts of body using water, typically in preparation for formal prayers .It follows a process to wash hands, mouth, nostrils, arms, face, hair, ears and feet.  The Marble Mimber & Wuzu Stand is made in various designs for use in the mosque and other Islamic places.</p>
                    <Link to='/contact'><button>Contact-Us</button></Link>
                </div>
            </div>
        </div>
    );
}

export default WuzuStandContainer;