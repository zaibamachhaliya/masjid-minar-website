
import styles from "../../styles/WorkPage.module.css";
import { useNavigate } from "react-router-dom";


function MinarWork() {

  const navigate = useNavigate();


  const MinarWorkImges = [
    {
      img: '/firstImg.jpeg',
      imgName: 'minar',
    },
    {
      img: '/SecondImg.png',
      imgName: '5 minar',
    },
    {
      img: '/ThirdeImg.png',
      imgName: 'beautiful minar',
    },
    {
      img: '/gumbadminar-1.png',
      imgName: 'gumbad&minar',
    },
    {
      img: '/FiveImg.png',
      imgName: 'led-minar',
    },
    {
      img: '/SixImg.png',
      imgName: 'light-minar',
    },
    {
      img: '/SevenImg.png',
      imgName: 'masjid-minar-3',
    },
    {
      img: '/EheightImg.png',
      imgName: 'minar And Gumbad',
    },
    {
      img: '/masjid-minar-1.png',
      imgName: 'masjid-minar-1',
    },
    {
      img: '/minargumbad-1.png',
      imgName: 'minar&gumbad',
    },
    {
      img: '/minarparapetjali-1.png',
      imgName: 'minar&parapetjali',
    },
    {
      img: '/minar.png',
      imgName: 'minar',
    },
    {
      img: '/minar-6.png',
      imgName: 'minar-6',
    },
    {
      img: '/minar-7.png',
      imgName: 'minar-7',
    },
    {
      img: '/minar-8.png',
      imgName: 'minar-8',
    },
    {
      img: '/minar-11.png',
      imgName: 'minar-11',
    },
    {
      img: '/minar12.png',
      imgName: 'minar12',
    },
    {
      img: '/minar-13.png',
      imgName: 'minar-13',
    },
    {
      img: '/minar14.png',
      imgName: 'minar14',
    },
    {
      img: '/minar15.png',
      imgName: 'minar15',
    },
    {
      img: '/minar16.png',
      imgName: 'minar16',
    },
    {
      img: '/minar17.png',
      imgName: 'minar17',
    },
    {
      img: '/minar18.png',
      imgName: 'minar18',
    },
    {
      img: '/minar20.png',
      imgName: 'minar20',
    },
    {
      img: '/minar21.png',
      imgName: 'minar21',
    },
    {
      img: '/minars.png',
      imgName: 'minars',
    },
    {
      img: '/minares.png',
      imgName: 'minares',
    },

    {
      img: '/very-beautiful-minars.png',
      imgName: 'very-beautiful-minars',
    },

    {
      img: '/very-beautiful-minar.png',
      imgName: 'very-beautiful-minar',
    },

    {
      img: '/strong-minar-1.png',
      imgName: 'strong-minar',
    },

    {
      img: '/small-minar.png',
      imgName: 'small-minar',
    },

    {
      img: '/smal-gumbad.png',
      imgName: 'smal-gumbad',
    },

    {
      img: '/shandar-minars.png',
      imgName: 'shandar-minars',
    },
    {
      img: '/shandar-minar.png',
      imgName: 'shandar-minar',
    },
    {
      img: '/simple-minar.png',
      imgName: 'simple-minar',
    },

    {
      img: '/big-minar-1.png',
      imgName: 'big-minar',
    },

    {
      img: '/gumbad-minar.png',
      imgName: 'gumbad-minar',
    },
  ]



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