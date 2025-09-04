import styles from '/src/styles/Wuzustand.module.css';
import WuzustandDataWithSlug from '../../../data/Wuzustand';
import { FaPlus } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { slugify } from '../../../data/utils';

function WuzustandCardContainer() {
  return (
    <div className={styles.wuzustandCardContainer}>
      <div className={styles.wuzustandCardContent}>
        {
          WuzustandDataWithSlug.map((item, idx) => {
            return <Link to={`/products/marble-mimber--wuzu-stand/${slugify(item.imgName)}`}>
              <div className={styles.wuzuStandCard} key={idx}
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
  );
}

export default WuzustandCardContainer;