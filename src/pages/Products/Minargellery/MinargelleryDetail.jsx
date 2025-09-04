
import minarGelleryDataWithSlug from "../../../data/minarGellery";
import { Link, useParams } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";
import styles from '/src/styles/Minargellery.module.css';
import { useState } from "react";


function MinargelleryDetail() {


    const { slug } = useParams();
    const product = minarGelleryDataWithSlug.find(item => item.slug == slug);
    const [click, setClick] = useState(false);

    if (!product) {
        return <h2>Product is not defined</h2>
    }


    return (
        <main>

            {
                click ? <div className={styles.fullscreenOverlayWrapper}>
                    <div className={styles.imageWrapper}>
                        <span className={styles.closeBtn} onClick={() => setClick(!click)}>×</span>
                        <div className={styles.imgP}>
                            <img src={product.img} className={styles.fullImage} style={{height:'auto',width:'auto'}}/>
                        </div>
                    </div>
                </div> :
                    <section className={styles.minargelleryDetailSection}>
                        <div className={styles.minargellerylinksSection}>
                            <div style={{ color: '#147557' }}>
                                <Link to='/'><span style={{ color: '#147557' }}>Home</span></Link> /
                                <Link to='/products/minar-gallery'><span style={{ color: '#147557' }}> Minar Gallery</span></Link> /
                                <span style={{ color: '#147557' }}> {product.imgName}</span>
                            </div>
                        </div>
                        <div className={styles.minargellerydetailSectionPerent}>
                            <div className={styles.minargellerydetailSection}>
                                <div className={styles.minargellerydetailImg} onClick={() => setClick(!click)}>
                                    <img src={product.img} />
                                </div>
                               
                                <div className={styles.minargelleryimgDetailContent} style={{ display: 'flex', gap: '1.1rem', flexDirection: 'column' }}>
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

export default MinargelleryDetail;

