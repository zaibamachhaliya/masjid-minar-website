import styles from "../../styles/WorkPage.module.css";
import { useNavigate } from "react-router-dom";



function MarbleWork() {
    const navigate = useNavigate();

    const MarblePhotos = [
        {
            img: '/Gallery-photo.jpeg',
            imgName: 'Gellery-photo',

        },
        {
            img: '/marble-jali-1 (1).jpeg',
            imgName: 'marble-jali-1',

        },
        {
            img: '/marble-jali-2.jpeg',
            imgName: 'marble-jali-2',

        },
        {
            img: '/marble-mehrab-design-1.jpeg',
            imgName: 'marble-mehrab-design-1',

        },
        {
            img: '/marble-mehrab-design-2.jpeg',
            imgName: 'marble-mehrab-design-2',

        },
        {
            img: '/marble-mehrabmarble-mimber.png',
            imgName: 'marble-mehrab&marble-mimber',

        },
        {
            img: '/marble-mehrab-1.png',
            imgName: 'marble-mehrab-1',

        },
        {
            img: '/marblemehrab-mimber.png',
            imgName: 'marblemehrab-mimber',

        },
    ]


    return (
        <section id="marble-work" className={styles.marbleWork}>
            <div className={styles.marbleworkphotos}>
                {MarblePhotos.map((ele, idx) => (
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

export default MarbleWork;