import MinargelleryContainer from "./MinargelleryContainer";
import styles from '/src/styles/Minargellery.module.css';


function Minargellery(){
    return (
       <main>
         <section className={styles.minargellerySection}>
             <MinargelleryContainer/>
          </section>
       </main>
    );
}

export default Minargellery;