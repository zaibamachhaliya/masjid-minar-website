import styles from '/src/styles/Uncetegoriz.module.css';
import { Link, useParams } from 'react-router-dom'
import GumbadDetawithSlug from '../../../data/GumbadMussalla';
import { slugify } from '../../../data/utils';


function UnCetegorizeContainer() {



    const items = GumbadDetawithSlug.filter(item => ["/masjid-gumbad.jpg", "/Musalla.jpg"].includes(item.img));
   

    return (

        <div className={styles.uncetegorizContainer}>
            <div style={{height:'100%'}}>
                <div className={styles.unCetegorizContent}>
                    <div>
                        <Link to='/'><span>Home</span></Link> /
                        <span>Uncategorized</span>
                    </div>
                    <h2>Uncategorized</h2>
                    <p>Showing all 2 results</p>
                </div>

                <div className={styles.uncetegorizCard}>
                    <div className={styles.uncardContainer}>
                        {
                            items.map((ele, idx) => {
                                return (
                                    <Link to={`/products/${slugify(ele.imgName)}`} key={idx}>
                                        <div className={styles.card}>
                                            <img src={ele.img} />
                                            <p>{ele.imgName}</p>
                                        </div>
                                    </Link>
                                );
                            })
                        }
                    </div>
                </div>
            </div>

            <div className={styles.blogPartContainer}>
                <Link to='/category/blog'><p>Blog</p></Link>
            </div>
        </div>
    );
}

export default UnCetegorizeContainer;

