import About from "./AboutLi";
import Work from "./WorkLi";
import Products from "./ProductsLi";
import Inquiry from "./Inquiry";
import Contact from "./Contact";
import styles from './ListUl.module.css';

function ListUl(){
    return (
        <ul className={styles.ListUL}>
             <About></About>
             <Work></Work>
             <Products></Products>
             <Inquiry></Inquiry>
             <Contact></Contact>
        </ul> 
    );
}

export default ListUl;