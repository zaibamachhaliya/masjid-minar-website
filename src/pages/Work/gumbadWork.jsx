import styles from "../../styles/WorkPage.module.css";
import { useNavigate } from "react-router-dom";


function GumbadWork() {

    const navigate = useNavigate();


    const GumbadPhotos = [
        {
            img: `${import.meta.env.BASE_URL}1.jpeg`,
            imgName: '',
        },
        {
            img: `${import.meta.env.BASE_URL}2.jpeg`,
            imgName: '',
        },
        {
            img: `${import.meta.env.BASE_URL}3.jpeg`,
            imgName: '',
        },
        {
            img: `${import.meta.env.BASE_URL}4.jpeg`,
            imgName: '',
        },
        {
            img: `${import.meta.env.BASE_URL}big-gumbad.png`,
            imgName: 'big-gumbad',
        },
        {
            img: `${import.meta.env.BASE_URL}entry-gumbad.png`,
            imgName: 'entry-gumbad',
        },
        {
            img: `${import.meta.env.BASE_URL}gumbadminar-1.png`,
            imgName: 'gumbad&minar',
        },
        {
            img: `${import.meta.env.BASE_URL}gumbad (1).png`,
            imgName: 'gumbad',
        },
        {
            img: `${import.meta.env.BASE_URL}gumbad-minar-1 (1).png`,
            imgName: 'gumbad-minar',
        },
        {
            img: `${import.meta.env.BASE_URL}masjid-minar-1.png`,
            imgName: 'masjid-minar-1',
        },
        {
            img: `${import.meta.env.BASE_URL}minargumbad-1.png`,
            imgName: 'minar&gumbad',
        },
        {
            img: `${import.meta.env.BASE_URL}minarandgumbad.png`,
            imgName: 'minarandgumbad',
        },
        {
            img: `${import.meta.env.BASE_URL}big-gumbad.png`,
            imgName: 'only-gumbad',
        },
        {
            img: `${import.meta.env.BASE_URL}simpl-gumbad.png`,
            imgName: 'simpl-gumbad',
        },
        {
            img: `${import.meta.env.BASE_URL}strong-minar.png`,
            imgName: 'strong-minar',
        },
    ];



    return (
        <section id="gumbad-work" className={styles.gumbadWork}>
            <div className={styles.gumbadphotos}>
                {GumbadPhotos.map((ele, idx) => (
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

export default GumbadWork;