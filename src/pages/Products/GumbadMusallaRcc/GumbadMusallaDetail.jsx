
import { Link, useParams } from "react-router-dom";
import GumbadDetawithSlug from "../../../data/GumbadMussalla";
import { FaAngleRight } from "react-icons/fa6";
import { slugify } from "../../../data/utils";
import styles from '/src/styles/GumbadMussallaDetail.module.css';
import { useState } from "react";



function GumbadMusallaDetail() {
    const [click, setClick] = useState(false);
    const { slug } = useParams();
    const product = GumbadDetawithSlug.find((item) => item.slug === slug);

    if (!product) {
        return <h2>Product not defined</h2>;
    }

    return (
        <main>
            {
                click ? (
                    <div className={styles.fullscreenOverlayWrapper} >
                        <div className={styles.imageWrapper}>
                            <span
                                className={styles.closeBtn}
                                onClick={() => setClick(false)}
                            >
                                ×
                            </span>
                            <div className={styles.imgP}>
                                <img src={product.img} alt={product.imgName} className={styles.fullImage} />
                            </div>
                        </div>
                    </div>
                ) :
                    <section className={styles.gumbadDetailSection}>
                        {/* Breadcrumb */}
                        <div className={styles.gumbadlinksSection}>
                            <div>
                                <Link to="/"><span>Home</span></Link> /
                                <Link to={`/products-category/${slugify(product.categoriz)}/`}>
                                    <span> {product.categoriz}</span>
                                </Link> /
                                <span> {product.imgName}</span>
                            </div>
                        </div>

                        {/* Details */}
                        <div className={styles.gumbaddetailSection}>
                            {/* Image */}
                            <div
                                className={styles.gumbaddetailImg}
                                onClick={() => setClick(true)}
                                style={{ cursor: "pointer" }}
                            >
                                <img src={product.img} alt={product.imgName} />
                            </div>

                            {/* Content */}
                            <div className={styles.gumbadimgDetailContent}>
                                <h2>{product.imgName}</h2>
                                <p style={{ lineHeight: "1.4rem", letterSpacing: "0.5px" }}>
                                    {product.P.map((part, idx) => {
                                        if (part.type === "text") {
                                            return <span key={idx}>{part.Content}{" "}</span>;
                                        }
                                        if (part.type === "bold") {
                                            return <strong key={idx}>{part.Content}{" "}</strong>;
                                        }
                                        if (part.type === "link") {
                                            return (
                                                <Link key={idx} to={part.to}>
                                                    <span style={{ color: "#2ea3f2" }}>
                                                        {part.Content}{" "}
                                                    </span>
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
                    </section>
            }
        </main >
    );
}

export default GumbadMusallaDetail;
