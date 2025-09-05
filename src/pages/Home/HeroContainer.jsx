import HeroContent from "./HeroContent";
import styles from "../../styles/HeroSection.module.css";
import Controlbtn from "./ControlBtn";
import { useState } from "react";



const silderArray = [
  {
    img: `${import.meta.env.BASE_URL}img1.png`,
    h1: 'Masjid Minar Manufacturer',
    P: 'All Type Of RCC Minar | ReadyMade Minar | Long and Strong Minar | Lighting Minar All Type Minar and Sizes are ready to Supply All Over India',
  },
  {
    img: `${import.meta.env.BASE_URL}img2.png`,
    h1: 'Aman Gumbad',
    P: 'Good quality RCC Gumbad & RCC construction services and concrete product in large quantity to the construction industry to ensure timely completion of the project.'
  },
  {
    img: `${import.meta.env.BASE_URL}img3.png`,
    h1: 'Aman Parapate Jali',
    P: 'Good quality of Parapet Jali Available,Small Parapet | Big Parapet | Shahi Boundary | Parapet Boundary Wall,etc. Available in Large Quantity.',
  },
  {
    img: `${import.meta.env.BASE_URL}img4.png`,
    h1: 'Marble Products',
    P: 'All Kind of Marble Product used in Masjid like Marble Wuzu Stand,Marble Mimber,Marble Mehrab,Marble Jali for Dargah,Marble Parapet Jali,etc.All Over India Delivery Available.',
  }
]




function HeroContainer() {

  let [currentidx, setCurrentidx] = useState(0);

  let prevbtn = () => {
    setCurrentidx((prev) => prev == 0 ? silderArray.length - 1 : prev - 1);
  };

  let nextbtn = () => {
    setCurrentidx((prev) => (prev + 1) % silderArray.length);
  }


  return (
    <div className={styles.heroContainer}>
      <Controlbtn prevbtn={prevbtn} nextbtn={nextbtn} />
      <HeroContent silderArray={silderArray} currentidx={currentidx} />
    </div>
  );
}

export default HeroContainer;