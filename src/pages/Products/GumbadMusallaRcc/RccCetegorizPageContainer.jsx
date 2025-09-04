
import styles from '/src/styles/RccCetegoriz.module.css';
import { Link, useParams } from 'react-router-dom'
import GumbadDetawithSlug from '../../../data/GumbadMussalla';
import { slugify } from '../../../data/utils';


function RccCetegorizPageContainer() {
    const items = GumbadDetawithSlug.find(item => '/rcc-mimber-harmain-traders.jpg'.includes(item.img));


    return (

        <div className={styles.rcccetegorizContainer}>
            <div style={{ height: '100%' }}>
                <div className={styles.rccCetegorizContent}>
                    <div>
                        <Link to='/'><span>Home</span></Link> /
                        <span>{items.imgName}</span>
                    </div>
                    <h2>{items.imgName}</h2>
                    <p>Showing the single result</p>
                </div>

                <div className={styles.rcccetegorizCard}>
                    <div className={styles.rcccardContainer}>

                        <Link to={`/products/${slugify(items.imgName)}`}>
                            <div className={styles.card}>
                                <img src={items.img} />
                                <p>{items.imgName}</p>
                            </div>
                        </Link>

                    </div>
                </div>
            </div>

            <div className={styles.blogPartContainer}>
                <Link to='/category/blog'><p>Blog</p></Link>
            </div>
        </div>
    );
}


export default RccCetegorizPageContainer;