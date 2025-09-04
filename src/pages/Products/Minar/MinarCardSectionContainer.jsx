import styles from '/src/styles/MinarPage.module.css';
import { FaPlus } from "react-icons/fa6";
import minarDataWithSlug from '../../../data/minar';
import { Link } from "react-router-dom";

function MinarCardSectionContainer() {
   return (
      <div className={styles.MinarCardSectionContainer}>
         {
            minarDataWithSlug.map((item, idx) => {
               return (
                  <Link to={`/products/minar/${item.slug}`}>
                     <div className={styles.card} key={idx}>
                        <span><FaPlus /></span>
                        <img src={item.img} />
                        <p>{item.ImgName}</p>
                     </div>
                  </Link>
               );
            })
         }
      </div>
   );
}

export default MinarCardSectionContainer;