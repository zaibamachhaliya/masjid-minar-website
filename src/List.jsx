import ListUl from "./ListUl";
import styles from './List.module.css';

function List(){
    return (
        <div className={styles.list}>
            <ListUl></ListUl>
        </div>
    );
}

export default List;