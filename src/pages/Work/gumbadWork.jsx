import styles from "../../styles/WorkPage.module.css";
import { useNavigate } from "react-router-dom";


function GumbadWork() {

      const navigate = useNavigate();


    const GumbadPhotos = [
        {
            img: '/1.jpeg',
            imgName: '',
        },
        {
            img: '/2.jpeg',
            imgName: '',
        },
        {
            img: '/3.jpeg',
            imgName: '',
        },
        {
            img: '/4.jpeg',
            imgName: '',
        },
        {
            img: '/big-gumbad.png',
            imgName: 'big-gumbad',
        },
        {
            img: '/entry-gumbad.png',
            imgName: 'entry-gumbad',
        },
        {
            img: '/gumbadminar-1.png',
            imgName: 'gumbad&minar',
        },
        {
            img: '/gumbad (1).png',
            imgName: 'gumbad',
        },
        {
            img: '/gumbad-minar-1 (1).png',
            imgName: 'gumbad-minar',
        },
        {
            img: '/masjid-minar-1.png',
            imgName: 'masjid-minar-1',
        },
        {
            img: '/minargumbad-1.png',
            imgName: 'minar&gumbad',
        },
        {
            img: '/minarandgumbad.png',
            imgName: 'minarandgumbad',
        },
        {
            img: '/big-gumbad.png',
            imgName: 'only-gumbad',
        },
        {
            img: '/simpl-gumbad.png',
            imgName: 'simpl-gumbad',
        },
        {
            img: '/strong-minar.png',
            imgName: 'strong-minar',
        },

    ]


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