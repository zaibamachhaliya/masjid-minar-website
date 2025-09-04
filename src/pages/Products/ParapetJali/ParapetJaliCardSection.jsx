import styles from '/src/styles/ParapetJali.module.css';
import ParapatJaliDataWithSlug from '../../../data/Parapetjali';
import { FaPlus } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { slugify } from '../../../data/utils';

function ParapetJaliCardSection() {
    return (
        <section className={styles.parapetjaliCardSection}>
            <div className={styles.parapetJaliCardeContainer}>
                <div className={styles.parapetjaligridContainer}>
                    {
                        ParapatJaliDataWithSlug.map((item, idx) => {
                            return <Link to={`/products/parapet-jali/${slugify(item.imgName)}`}>
                                <div className={styles.parapetJaliCard} key={idx}
                                    data-aos="zoom-in"
                                    data-aos-duration="3000">
                                    <span><FaPlus /></span>
                                    <img src={item.img} />
                                    <p>{item.imgName}</p>
                                </div>
                            </Link>
                        })
                    }
                </div>
            </div>
        </section>
    );
}

export default ParapetJaliCardSection;