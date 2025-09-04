
import { useNavigate, useLocation } from "react-router-dom";
import styles from "../../styles/WorkPage.module.css";

function ImagePreview() {
    const navigate = useNavigate();
    const location = useLocation();
    const { img, imgName } = location.state || {};


    if (!img) {
        return <p>No Image Selected</p>;
    }

    return (
        <div className={styles.fullscreenOverlayWrapper}>
            <div className={styles.imageWrapper}>
                <span className={styles.closeBtn} onClick={() => navigate(-1)}>×</span> 
                <div className={styles.imgP}>
                    <img src={img} className={styles.fullImage} />
                    <p>{imgName}</p>
                </div>
            </div>
        </div>
    );
}

export default ImagePreview; 