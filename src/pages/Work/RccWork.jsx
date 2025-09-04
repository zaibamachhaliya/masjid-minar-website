import styles from "../../styles/WorkPage.module.css";
import { useNavigate } from "react-router-dom";


function RccWork() {


    const navigate = useNavigate();

    const rccWork = [
        {
            img: '/Rcc-mimber-2.jpeg',
            imgName: 'Rcc-mimber 2'
        },
        {
            img: '/Rcc-Mimber.jpeg',
            imgName: 'Rcc Mimber'
        },
    ]

    
    return (
        <section id="rcc-mimber" className={styles.rccWork}>
            <div className={styles.rccPhotos}>
                {rccWork.map((ele, idx) => ( 
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

export default RccWork;