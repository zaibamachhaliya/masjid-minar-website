
import ParapatJaliDataWithSlug from "../../../data/Parapetjali";
import { Link, useParams } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";
import styles from '/src/styles/ParapetJali.module.css';
import { useState } from "react";



function ParapetJaliDetail() {

    const { slug } = useParams();

    const product = ParapatJaliDataWithSlug.find(item => item.slug == slug);


    const [click, setClick] = useState(false);


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
                </div>
                    :
                    <section className={styles.parapetjaliDetailSection}>
                        <div className={styles.parapetjalilinksSection}>
                            <div style={{ color: '#147557' }}>
                                <Link to='/'><span style={{ color: '#147557' }}>Home</span></Link> /
                                <Link to='/products/parapet-jali-category'><span style={{ color: '#147557' }}> Parapet Jali </span></Link> /
                                <span style={{ color: '#147557' }}>{product.imgName}</span>
                            </div>
                        </div>
                        <div className={styles.parapetjalidetailSectionPerent}>
                            <div className={styles.parapetjalidetailSection}>
                                <div className={styles.parpetjalidetailImg} onClick={() => setClick(!click)}>
                                    <img src={product.img} />
                                </div>
                                <div className={styles.parapetjaliimgDetailContent} style={{ display: 'flex', gap: '1.1rem', flexDirection: 'column' }}>
                                    <h2>{product.imgName}</h2>
                                    <p style={{ lineHeight: '1.4rem', letterSpacing: '0.5px' }}>
                                        {product.description.map((part, idx) => {
                                            if (part.type === "text") {
                                                return <span key={idx}>{part.Content}{"  "}</span>;
                                            }
                                            if (part.type === "bold") {
                                                return <strong key={idx}>{part.Content}{"  "}</strong>
                                            }
                                            if (part.type === "link") {
                                                return (
                                                    <Link key={idx} to={part.to}>
                                                        <span style={{ color: '#2ea3f2' }}>{part.Content}{"  "}</span>
                                                    </Link>
                                                );
                                            }
                                            return null;
                                        })}
                                    </p>
                                    <Link to='/inquiry'><button>Send Inquiry <FaAngleRight /> </button></Link>
                                </div>
                            </div>
                        </div>
                    </section>
            }
        </main>
    );
}


export default ParapetJaliDetail;