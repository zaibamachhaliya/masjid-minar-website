
import { Link, useParams } from "react-router-dom";
import minarDataWithSlug from "../../../data/minar";
import styles from '/src/styles/MinarPage.module.css';
import { FaAngleRight } from "react-icons/fa6";
import {useState } from "react";




function MinarDetail() {

    const [click, setClick] = useState(false);

    const { slug } = useParams();
    const product = minarDataWithSlug.find(item => item.slug == slug);

    if (!product) {
        return <h2>Product not found</h2>
    }


    return (
        <main>
            {
                click ? <div className={styles.fullscreenOverlayWrapper}>
                    <div className={styles.imageWrapper}>
                        <span className={styles.closeBtn} onClick={() => setClick(!click)}>×</span>
                        <div className={styles.imgP}>
                            <img src={product.img} className={styles.fullImage} />
                        </div>
                    </div>
                </div> : <section className={styles.minarDetailSection}>
                    <div className={styles.linksSection}>
                        <div>
                            <Link to='/'><span>Home</span></Link> /
                            <Link to='/products/minar-category'><span> Minar</span></Link>/
                            <span> {product.ImgName}</span>
                        </div>
                    </div>
                    <div className={styles.detailSection}>
                          <div className={styles.detailImg} onClick={() => setClick(!click)}>
                            
                                <img src={product.img} />
                           
                        </div> 
                       
                        <div className={styles.imgDetailContent}>
                            <div style={{ display: 'flex', gap: '1.1rem', flexDirection: 'column' }}>
                                <h2>{product.ImgName}</h2>

                                <p>
                                    {product.P.map((part, idx) => {
                                        if (part.type === "text") {
                                            return <span key={idx}>{part.Content}</span>;
                                        }
                                        if (part.type === "bold") {
                                            return <strong key={idx}>{part.Content}</strong>
                                        }
                                        if (part.type === "link") {
                                            return (
                                                <Link key={idx} to={part.to}>
                                                    <span style={{ color: '#2ea3f2' }}>{part.Content}</span>
                                                </Link>
                                            );
                                        }
                                        return null;
                                    })}
                                </p>

                                <Link to="/inquiry">
                                    <button>
                                        Send Inquiry <FaAngleRight />
                                    </button>
                                </Link>
                            </div>

                        </div>
                    </div>
                </section>
            }

        </main>
    );
}

export default MinarDetail;



