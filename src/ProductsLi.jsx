import styles from './ProductsLi.module.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ProductList from './ProductList';
import { useState } from 'react';

function Products() {
   
   
   
   let [productShow,setProductShow]=useState(false);

   
   

    let productlistShow=()=>{
        setProductShow(prev=>!prev);
    }
   
   
   
    return (
        <li className={styles.li}>
            <div className={styles.productai}>
                <a href='https://masjidminar.com/products-masjid-minar/'>PRODUCTS</a>
   
                <KeyboardArrowDownIcon className={`${styles.downicon} ${productShow?styles.rotete:styles.norotet}`} onClick={productlistShow}></KeyboardArrowDownIcon>
            </div> 

            <div className={`${styles.productlist} ${productShow?styles.productlistShow:styles.productlistHide}`}> 
                <ProductList></ProductList>
            </div>
        </li>
    );
}

export default Products;