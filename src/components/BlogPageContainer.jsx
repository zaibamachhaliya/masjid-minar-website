import styles from "../styles/BlogPage.module.css";
import {Link} from 'react-router-dom'

function BlogPageContainer() {
    return (
        <section className={styles.blogSection}>
            <div className={styles.blogSectionContainer}>
                <div className={styles.blogContent}>
                    <div>
                        <Link to='/best-masjid-minar-manufacturer'><h1>Haramain Minar – Best Masjid Minar Manufacturer.</h1></Link>
                        <p style={{ marginTop: '1rem' }}>by valuda | Feb 17, 2022 | Blog</p>
                    </div>
                    <p>Aman minar-mosque-minar-all2 Harmain Traders is a Leading Manufacturer of All types of RCC Readymade masjid Minar, Masjid Gumbad, Masjid Mimbar, Mehrab (Qibla) and Masjid Elevation Items, Etc. they combined Persian and Arabic architectural ideas based on an arcuate...</p>
                </div>
            </div>
        </section>
    );
}

export default BlogPageContainer;