import MinarWork from "./MinarWork";
import GumbadWork from "./gumbadWork";
import MarbleWork from "./MarbleWork";
import ParapetJali from "./ParapetJali";
import RccWork from "./RccWork";
import styles from "../../styles/WorkPage.module.css";


function WorkPhotosPage() {
    
  return (
    <div className={styles.workphotospage}>
      <MinarWork />
      <GumbadWork />
      <MarbleWork />
      <ParapetJali />
      <RccWork />
    </div>
  );
}

export default WorkPhotosPage;