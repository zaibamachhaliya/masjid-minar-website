
import styles from '/src/styles/MinarPage.module.css';
import { Link } from 'react-router-dom'


function MinarpagHeroSection() {
    return (
        <section className={styles.minarHeroSection}>
            <div className={styles.minarHeroSectionContainer}>
                <div className={styles.heroContent}>
                    <div className={styles.imgPart}>
                        <img
                            src={`${import.meta.env.BASE_URL}img2.png`} alt="description"
                            data-aos="zoom-in"
                            data-aos-duration="3000"
                        />
                    </div>
                    <div className={styles.minarheroText}>
                        <h3>High Quality Minar</h3>
                        <p>At Aman Minar <a href='https://www.google.com/search?output=search&q=HARMAIN+PRECAST+INDUSTRIES+-+Masjid+Minar+%26+RCC+Minar+for+Masjid&ludocid=4372215395066124072&gsas=1&client=ms-android-oneplus&lsig=AB86z5VmLQhhIC4TnCt9__ybbUe-&kgs=d982538cffd756cd&shndl=-1&source=sh/x/kp/local/2&entrypoint=sh/x/kp/local'><span>Harmain Traders</span></a> are offering here the various types of Minar for use in various places as a decoration piece. It is available with us in a plethora of designs, colors, and finishes. Our adroit team of professionals design and</p>
                        <p> <Link to='/category/blog'><span>construct these minars</span></Link> using excellent quality reinforced concrete cement and pioneering techniques in adherence with trending designs of the market. It has Sturdy construction for long-lasting life; Resistance from all kinds of weather-able impacts. The minar is very effective and useful.</p>
                        <Link to='/contact'><div><button>Contact-Us</button></div></Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MinarpagHeroSection;





