import HeroSectionContainer from "./HeroSectionContainer";
import styles from './HeroSection.module.css';
import Prevbtn from "./Prevbtn";
import Nextbtn from "./Nextbtn";
import { useState } from "react";
import Img1 from './harmain-masjid-minar-slider.png';
import Img2 from './about-harmain-best-masjid-minar.png'
import Img3 from './parapet-jali-aman-minar (2).png'
import Img4 from './harmain-minar-marble-product.png';



let silderArray = [
  {
    Img: Img1,
    h1: 'Masjid Minar Manufacturer',
    p: 'All Type Of RCC Minar | ReadyMade Minar | Long and Strong Minar | Lighting Minar All Type Minar and Sizes are ready to Supply All Over India'
  },
  {
    Img: Img2,
    h1: 'Aman Gumbad',
    p: 'Good quality RCC Gumbad & RCC construction services and concrete product in large quantity to the construction industry to ensure timely completion of the project.'
  },
  {
    Img: Img3,
    h1: 'Aman Parapate Jali',
    p: 'Good quality of Parapet Jali Available,Small Parapet | Big Parapet | Shahi Boundary | Parapet Boundary Wall,etc. Available in Large Quantity.'
  },
  {
    Img: Img4,
    h1: 'Marble Products',
    p: 'All Kind of Marble Product used in Masjid like Marble Wuzu Stand,Marble Mimber,Marble Mehrab,Marble Jali for Dargah,Marble Parapet Jali,etc.All Over India Delivery Available.'
  }
]





function HeroSection() {


  let [currentidx, setCurrentidx] = useState(0);

  let prevbtn = () => {
    setCurrentidx((prev) => prev == 0 ? silderArray.length - 1 : prev - 1);
  };

  let nextbtn = () => {
    setCurrentidx((prev) => (prev + 1) % silderArray.length);
  }



  return (
    <section className={styles.heroSection}>
      <HeroSectionContainer silderArray={silderArray} currentidx={currentidx}></HeroSectionContainer>

      <div className={styles.btncontainer}>
        <Prevbtn prevbtn={prevbtn}></Prevbtn>
        <Nextbtn nextbtn={nextbtn}></Nextbtn>
      </div>
    </section> 
  );

}

export default HeroSection;