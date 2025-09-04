import styles from "../../styles/WorkPage.module.css";
import { useNavigate } from "react-router-dom";



function ParapetJali() {

    const navigate = useNavigate();

    const ParapetJaliPhotos = [
        {
            img: '/perapet-jali.jpeg',
            imgName: 'perapet-jali',
        },
        {
            img: '/shahi-boundary-jali.jpeg',
            imgName: 'shahi-boundary-jali',
        },
        {
            img: '/small-big-jali.jpeg',
            imgName: 'small-big-jali',
        },
        {
            img: '/boundary.png',
            imgName: 'boundary',
        },
        {
            img: '/boundarywall.png',
            imgName: 'boundarywall',
        },
        {
            img: '/dargah-jali.png',
            imgName: 'dargah-jali',
        },
        {
            img: '/minarparapetjali-1.png',
            imgName: 'minar&petjali',
        },
        {
            img: '/parapet-jali.png',
            imgName: 'parapet-jali',
        },
        {
            img: '/img3.png',
            imgName: 'parapet-jali-medium',
        },
        {
            img: '/quberImg.png',
            imgName: 'qubar-boundary-wall',
        },
        {
            img: '/sahiboundary.png',
            imgName: 'shahi-boundary',
        },

    ]

    
    return (
        <section id="parapet-jali" className={styles.ParapetJaliWork}>
            <div className={styles.ParapetJaliWorkPhotos}>
                {ParapetJaliPhotos.map((ele, idx) => (
                    <div key={idx}>
                        <img
                            src={ele.img}
                            onClick={() =>
                                navigate("/img/preview", { state: { img: ele.img, imgName: ele.imgName } })
                            }
                        />
                        <p>{ele.imgName}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ParapetJali;