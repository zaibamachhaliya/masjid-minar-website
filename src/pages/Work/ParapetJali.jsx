import styles from "../../styles/WorkPage.module.css";
import { useNavigate } from "react-router-dom";



function ParapetJali() {

    const navigate = useNavigate();

    const ParapetJaliPhotos = [
        {
            img: `${import.meta.env.BASE_URL}perapet-jali.jpeg`,
            imgName: 'perapet-jali',
        },
        {
            img: `${import.meta.env.BASE_URL}shahi-boundary-jali.jpeg`,
            imgName: 'shahi-boundary-jali',
        },
        {
            img: `${import.meta.env.BASE_URL}small-big-jali.jpeg`,
            imgName: 'small-big-jali',
        },
        {
            img: `${import.meta.env.BASE_URL}boundary.png`,
            imgName: 'boundary',
        },
        {
            img: `${import.meta.env.BASE_URL}boundarywall.png`,
            imgName: 'boundarywall',
        },
        {
            img: `${import.meta.env.BASE_URL}dargah-jali.png`,
            imgName: 'dargah-jali',
        },
        {
            img: `${import.meta.env.BASE_URL}minarparapetjali-1.png`,
            imgName: 'minar&petjali',
        },
        {
            img: `${import.meta.env.BASE_URL}parapet-jali.png`,
            imgName: 'parapet-jali',
        },
        {
            img: `${import.meta.env.BASE_URL}img3.png`,
            imgName: 'parapet-jali-medium',
        },
        {
            img: `${import.meta.env.BASE_URL}quberImg.png`,
            imgName: 'qubar-boundary-wall',
        },
        {
            img: `${import.meta.env.BASE_URL}sahiboundary.png`,
            imgName: 'shahi-boundary',
        },
    ];




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