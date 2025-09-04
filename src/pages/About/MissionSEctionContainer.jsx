import { useState } from "react";
import styles from "../../styles/AboutSection.module.css";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link } from 'react-router-dom'

function MissionSectionContainer() {


    const [selectedTab, setSelectedTab] = useState('reach');



    return (
        <div className={styles.missionSectionContainer}>
            <div className={styles.missionpart}>
                <ul>
                    <li className={selectedTab == 'reach' ? styles.tabActive : ''}
                        onClick={() => setSelectedTab('reach')}>Reach</li>

                    <li className={selectedTab == 'mission' ? styles.tabActive : ''}
                        onClick={() => setSelectedTab('mission')}>Mission</li>
                </ul>
                <div>
                    <div>
                        <div>
                            {selectedTab == 'reach' ? <p>Based in Mumbai, Maharashtra, we have successfully supplied our products to various regions, including Gujarat and Maharashtra, and continue to expand our footprint across India. Our efficient logistics and dedicated customer service ensure timely delivery and seamless project execution.</p> : <p>Our mission is to provide durable, aesthetically pleasing, and structurally sound RCC products that enhance the spiritual ambiance of mosques. We strive to blend traditional craftsmanship with modern techniques to meet the evolving needs of our clients.</p>}
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.harmainPart}>
                <div className={styles.harmainContent}>
                    <h1>Harmain Masjid Minar</h1>
                    <div className={styles.outline}></div>
                    <p>We have our own <Link to='/products/minar'><span style={{ color: '#2ea3f2', fontWeight: '500' }}>RCC Minar</span></Link> manufacturing unit in Vasai (EAST) MAHARASHTRA. Harmain Precast Industries. Cement Product having its presence in  <Link to='/products/minar'><span style={{ color: '#2ea3f2', fontWeight: '500' }}>RCC Minar</span></Link> construction and concrete minar product.manufacturing was established in 1983 by concrete technologists with a mission to provide.environment friendly, good quality  <Link to='/products/minar'><span style={{ color: '#2ea3f2', fontWeight: '500' }}>RCC Minar</span></Link> & RCC construction services and concrete products in.large quantity to the construction industry to ensure timely completion of project.</p>
                    <a href=''><button>Read More About Company <ChevronRightIcon /></button></a>
                </div>
            </div>
        </div>
    );
}

export default MissionSectionContainer;