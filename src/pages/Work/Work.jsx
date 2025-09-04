
import WorkTopLinks from "./WorkTopLinks";
import styles from "../../styles/WorkPage.module.css";
import WorkPhotosPage from "./WorkPhotosPage";


function Work() {

  return (

    <main>
      <WorkTopLinks />
      <div
        className={`${styles.gridContainer} ${styles.zoomWrapper}`}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <WorkPhotosPage />
      </div>
    </main>
  );
}

export default Work; 