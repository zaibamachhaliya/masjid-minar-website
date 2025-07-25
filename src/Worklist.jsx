import styles from './Worklist.module.css';

function Worklist(){
 
  

    return (
   
       <ul className={styles.workListUl}>
         <li><a href='https://masjidminar.com/minar-design-gallery/'>WORK PHOTOS</a></li>
         <li><a href='https://masjidminar.com/video-gallery/'>WORK VIDEOS</a></li> 
       </ul>
    );
}  

export default Worklist;