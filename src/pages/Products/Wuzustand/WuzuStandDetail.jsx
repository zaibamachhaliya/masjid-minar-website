import { useParams } from "react-router-dom";
import WuzustandDataWithSlug from "../../../data/Wuzustand";
import { FaAngleRight } from "react-icons/fa6";
import styles from '/src/styles/Wuzustand.module.css';
import { Link } from 'react-router-dom';
import { useState } from "react";


function WuzustandDetail() {

    const { slug } = useParams();
    const product = WuzustandDataWithSlug.find(item => item.slug == slug);
    const [click, setClick] = useState(false);

    if (!product) {
        <h2>Product is not defind</h2>
    }

    return (
        <main>
            {click ? (
                <div className={styles.fullscreenOverlayWrapper}>
                    <div className={styles.imageWrapper}>
                        <span className={styles.closeBtn} onClick={() => setClick(false)}>
                            ×
                        </span>
                        <div className={styles.imgP}>
                            <img src={product.img} className={styles.fullImage} alt={product.imgName} style={{height:'auto'}}/>
                        </div>
                    </div>
                </div>
            ) : (
                <section className={styles.wuzustandDetailSection}>
                    <div className={styles.wuzustandlinksSection}>
                        <div style={{ color: "#147557" }}>
                            <Link to="/">
                                <span style={{ color: "#147557" }}>Home</span>
                            </Link>{" "}
                            /{" "}
                            <Link to="/products/marble-mimber--wuzu-stand/category">
                                <span style={{ color: "#147557" }}>Marble Mimber & Wuzu Stand</span>
                            </Link>{" "}
                            / <span style={{ color: "#147557" }}>{product.imgName}</span>
                        </div>
                    </div>

                    <div className={styles.wuzustanddetailSectionPerent}>
                        <div className={styles.wuzustanddetailSection}>
                            <div
                                className={styles.wuzustanddetailImg}
                                onClick={() => setClick(true)}
                                style={{ cursor: "pointer" }}
                            >
                                <img src={product.img} alt={product.imgName} />
                            </div>

                            <div className={styles.wuzustandimgDetailContent}>
                                <h2>{product.imgName}</h2>
                                <p style={{ lineHeight: "1.4rem", letterSpacing: "0.5px" }}>
                                    {product.description.map((part, idx) => {
                                        if (part.type === "text") {
                                            return <span key={idx}>{part.Content}{" "}</span>;
                                        }
                                        if (part.type === "bold") {
                                            return <strong key={idx}>{part.Content}{" "}</strong>;
                                        }
                                        if (part.type === "link") {
                                            return (
                                                <Link key={idx} to={part.to}>
                                                    <span style={{ color: "#2ea3f2" }}>{part.Content}{" "}</span>
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
            )}
        </main>
    );
}

export default WuzustandDetail;