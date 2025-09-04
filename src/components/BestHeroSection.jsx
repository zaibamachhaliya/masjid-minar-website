import styles from "../styles/Bestmasjidminar.module.css";
import { Link } from 'react-router-dom'

function BestHeroSection() {
    return (
        <section className={styles.basminarHeroSection}>
            <div className={styles.bastminarHeroSectionContainer}>
                <div className={styles.bastminarHeroSectionContainercontent}>
                    <div className={styles.h1pPerent}>
                        <h1>Haramain Minar – Best Masjid Minar Manufacturer.</h1>
                        <p className={styles.lightp}>by <Link to='/category/blog'><span>valuda</span></Link> | Feb 17, 2022 | Blog | 0 comments</p>
                    </div>
                     <div className={styles.imgContainer}>
                         <img src='mosque-minar-all2.jpg'/>
                     </div>
                    <p style={{ textAlign: 'center', fontSize: '0.9rem' }}>Aman minar-mosque-minar-all2</p>
                    <div className={styles.multiplePperent}>
                        <p className={styles.multipleP}><span>Harmain Traders</span> is a Leading Manufacturer of <span>All types of RCC Readymade masjid Minar, Masjid Gumbad, Masjid Mimbar, Mehrab (Qibla)</span> and <span> Masjid Elevation Items,</span> Etc. they combined Persian and Arabic architectural ideas based on an arcuate system of construction with Indian craft they are skilled in manufacturing and supplying premium quality <span>Gumbad</span> that is available in many designs, colors, and finishes.</p>
                        <p className={styles.multipleP}><span>Aman Minar</span> uses superior quality reinforced concrete cement and novel techniques by the trending designs of the market. It is used for setting up over the dome of mosques to increase their religious values and impressive looks. Furthermore, we offer them at the most competitive prices to the clients.</p>
                        <p className={styles.uniqP} >All Masjid Products Provided by Harmain Traders.</p>
                        <p className={styles.multipleP}>Aman Minar ( Product of Harmain Traders) offers Variety of All Type of masjid Products including MasJid Minar, Masjid Gumbad, All Type of Marble Products, RCC Products , Parapet Jali ( Parapet Boundary Wall ), Etc. Provides Strong and Quality Material with Best Price. provide Service All Over India.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BestHeroSection;