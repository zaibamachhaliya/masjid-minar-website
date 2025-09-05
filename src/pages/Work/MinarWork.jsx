
import styles from "../../styles/WorkPage.module.css";
import { useNavigate } from "react-router-dom";


function MinarWork() {

  const navigate = useNavigate();


  const MinarWorkImges = [
    {
      img: `${import.meta.env.BASE_URL}firstImg.jpeg`,
      imgName: 'minar',
    },
    {
      img: `${import.meta.env.BASE_URL}SecondImg.png`,
      imgName: '5 minar',
    },
    {
      img: `${import.meta.env.BASE_URL}ThirdeImg.png`,
      imgName: 'beautiful minar',
    },
    {
      img: `${import.meta.env.BASE_URL}gumbadminar-1.png`,
      imgName: 'gumbad&minar',
    },
    {
      img: `${import.meta.env.BASE_URL}FiveImg.png`,
      imgName: 'led-minar',
    },
    {
      img: `${import.meta.env.BASE_URL}SixImg.png`,
      imgName: 'light-minar',
    },
    {
      img: `${import.meta.env.BASE_URL}SevenImg.png`,
      imgName: 'masjid-minar-3',
    },
    {
      img: `${import.meta.env.BASE_URL}EheightImg.png`,
      imgName: 'minar And Gumbad',
    },
    {
      img: `${import.meta.env.BASE_URL}masjid-minar-1.png`,
      imgName: 'masjid-minar-1',
    },
    {
      img: `${import.meta.env.BASE_URL}minargumbad-1.png`,
      imgName: 'minar&gumbad',
    },
    {
      img: `${import.meta.env.BASE_URL}minarparapetjali-1.png`,
      imgName: 'minar&parapetjali',
    },
    {
      img: `${import.meta.env.BASE_URL}minar.png`,
      imgName: 'minar',
    },
    {
      img: `${import.meta.env.BASE_URL}minar-6.png`,
      imgName: 'minar-6',
    },
    {
      img: `${import.meta.env.BASE_URL}minar-7.png`,
      imgName: 'minar-7',
    },
    {
      img: `${import.meta.env.BASE_URL}minar-8.png`,
      imgName: 'minar-8',
    },
    {
      img: `${import.meta.env.BASE_URL}minar-11.png`,
      imgName: 'minar-11',
    },
    {
      img: `${import.meta.env.BASE_URL}minar12.png`,
      imgName: 'minar12',
    },
    {
      img: `${import.meta.env.BASE_URL}minar-13.png`,
      imgName: 'minar-13',
    },
    {
      img: `${import.meta.env.BASE_URL}minar14.png`,
      imgName: 'minar14',
    },
    {
      img: `${import.meta.env.BASE_URL}minar15.png`,
      imgName: 'minar15',
    },
    {
      img: `${import.meta.env.BASE_URL}minar16.png`,
      imgName: 'minar16',
    },
    {
      img: `${import.meta.env.BASE_URL}minar17.png`,
      imgName: 'minar17',
    },
    {
      img: `${import.meta.env.BASE_URL}minar18.png`,
      imgName: 'minar18',
    },
    {
      img: `${import.meta.env.BASE_URL}minar20.png`,
      imgName: 'minar20',
    },
    {
      img: `${import.meta.env.BASE_URL}minar21.png`,
      imgName: 'minar21',
    },
    {
      img: `${import.meta.env.BASE_URL}minars.png`,
      imgName: 'minars',
    },
    {
      img: `${import.meta.env.BASE_URL}minares.png`,
      imgName: 'minares',
    },
    {
      img: `${import.meta.env.BASE_URL}very-beautiful-minars.png`,
      imgName: 'very-beautiful-minars',
    },
    {
      img: `${import.meta.env.BASE_URL}very-beautiful-minar.png`,
      imgName: 'very-beautiful-minar',
    },
    {
      img: `${import.meta.env.BASE_URL}strong-minar-1.png`,
      imgName: 'strong-minar',
    },
    {
      img: `${import.meta.env.BASE_URL}small-minar.png`,
      imgName: 'small-minar',
    },
    {
      img: `${import.meta.env.BASE_URL}smal-gumbad.png`,
      imgName: 'smal-gumbad',
    },
    {
      img: `${import.meta.env.BASE_URL}shandar-minars.png`,
      imgName: 'shandar-minars',
    },
    {
      img: `${import.meta.env.BASE_URL}shandar-minar.png`,
      imgName: 'shandar-minar',
    },
    {
      img: `${import.meta.env.BASE_URL}simple-minar.png`,
      imgName: 'simple-minar',
    },
    {
      img: `${import.meta.env.BASE_URL}big-minar-1.png`,
      imgName: 'big-minar',
    },
    {
      img: `${import.meta.env.BASE_URL}gumbad-minar.png`,
      imgName: 'gumbad-minar',
    },
  ];




  return (
    <section id="minar-work" className={styles.minarWork}>
      <div className={styles.minarPhotos}>
        {MinarWorkImges.map((ele, idx) => (
          <div key={idx}>
            <img
              src={ele.img}
              onClick={() =>
                navigate("/img/preview", { state: { img: ele.img, imgName: ele.imgName } })
              }
            />
            <p>{ele.imgName}</p>
          </div>
        ))}
      </div>
    </section>
  );

}

export default MinarWork;