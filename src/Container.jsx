import styles from './Container.module.css';
import Fullhader from './Fullhader';
import Mantag from './Maintag';
import Footer from './Footer';

function Container(){
    return (
        <div className={styles.Container}>
           <Fullhader></Fullhader>
           <Mantag></Mantag>
           <Footer></Footer>
        </div>
    );
}

export default Container;