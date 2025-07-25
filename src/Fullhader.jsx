import Topbar from "./Topbar";
import Header from "./Header";
import styles from './Fullhader.module.css';

function Fullhader(){
    return (
       <header className={styles.header}>
          <Topbar></Topbar>
          <Header></Header> 
       </header>
    );
}

export default Fullhader;