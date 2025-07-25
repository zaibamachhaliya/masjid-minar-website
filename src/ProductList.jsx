import styles from './ProductList.module.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Minarlist from './Minarlist';
import Minargellerylist from './Minargellerylist';
import Parapetjalilist from './Parapetjalilist';
import Wuzustandlist from './Wuzustandlist';
import { useState } from 'react';

function ProductList() {
   
   
   
   let [minarlistopen,setMinarListOpen]=useState(false);
   let [minargellerylistOpen,setminargellerylistOpen]=useState(false);
   let [parpetjalilistOpen,setParpetjalilistOpen]=useState(false);
   let [wuzustandlistOpen,setWuzuStandListOpen]=useState(false);

  


   let minarlistShow=()=>{
        setMinarListOpen(prev=>!prev);
   }
   

   let minargellerylistShow=()=>{
         setminargellerylistOpen(prev=>!prev);
   }

   let parapetjalilistShow=()=>{
       setParpetjalilistOpen(prev=>!prev);
   }
   
   let wuzustandlistShow=()=>{
      setWuzuStandListOpen(prev=>!prev);
   }


    return (
    //    product-listUL
      
      <ul className={styles.productlistUl}>

                {/* minar */}


            <li className={styles.minarli}>  
                <div className={styles.minarai}>
                    <a href='https://masjidminar.com/masjid-rcc-minar/'>MINAR</a>
                    <KeyboardArrowDownIcon className={`${styles.minaricon} ${minarlistopen?styles.rotete:styles.norotet}`} onClick={minarlistShow}></KeyboardArrowDownIcon>
                </div>

                <div className={`${styles.minarList} ${minarlistopen?styles.minarlistShow:styles.minarlistHide}`}> 
                      <Minarlist></Minarlist> 
                </div>
            </li> 



           {/* gumbad */}

            <li><a href='https://masjidminar.com/product/gumbad/'>GUMBAD</a></li>






           {/* minar-gellery */}


            <li className={styles.minargelleryli}>

                <div className={styles.minargelleryai}>
                    <a href='https://masjidminar.com/product-category/minar-gallery/'>MINAR GALLERY</a>
                    <KeyboardArrowDownIcon  className={`${styles.minargelleryicon} ${minargellerylistOpen?styles.rotete:styles.norotet}`} onClick={minargellerylistShow}></KeyboardArrowDownIcon> 
                </div>

                <div className={`${styles.minargellerylist} ${minargellerylistOpen?styles.minarGelleryShow:styles.minarGelleryHide}`}>       
                    <Minargellerylist></Minargellerylist>
                </div>

            </li>







            {/* parapet jali */}


            <li className={styles.parapetjaliLi}>
                <div className={styles.parpatjaliai}>
                    <a href='https://masjidminar.com/parapet-jali-at-aman-minar/'>PARAPET JALI</a>
                    <KeyboardArrowDownIcon  className={`${styles.parapetjaliicon} ${parpetjalilistOpen?styles.rotete:styles.norotet}`} onClick={parapetjalilistShow}></KeyboardArrowDownIcon>
                </div>

                <div className={`${styles.parapetjaliList} ${parpetjalilistOpen?styles.parpetjalislistShow:styles.parapetjalilistHide}`}> 
                    <Parapetjalilist></Parapetjalilist>
                </div>
            </li>






            {/* wuzustand */} 

            <li className={styles.workstandLi}>
                <div className={styles.wuzustandai}> 
                    <a href='https://masjidminar.com/marble-mimber-wuzu-stand/'>Marble Mimber & Wuzu Stand</a>
                    <KeyboardArrowDownIcon  className={`${styles.wuzustandicon} ${wuzustandlistOpen?styles.rotete:styles.norotet}`} onClick={wuzustandlistShow}></KeyboardArrowDownIcon>
                </div>

                 <div className={`${styles.wuzustandlist} ${wuzustandlistOpen?styles.wuzustandlistShow:styles.wuzustandlistHide}`}>
                      <Wuzustandlist></Wuzustandlist>
                 </div>

            </li> 




             {/* rcc mimber */}
            <li><a href='https://masjidminar.com/product/rcc-mimber/'>RCC Mimber</a></li>

            {/* musalla tiles */} 
            <li><a href='https://masjidminar.com/product/musalla-tiles/'>Musalla Tiles</a></li> 
        </ul>
    );
}

export default ProductList;