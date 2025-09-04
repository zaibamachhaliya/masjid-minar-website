import ConnectContent from "./ConnectContent";
import styles from "../../styles/ConnectSection.module.css";


function ConnectContainer(){
    return (
       <div className={styles.connectContainer}>
           <ConnectContent/>
       </div>
    );
}

export default ConnectContainer;