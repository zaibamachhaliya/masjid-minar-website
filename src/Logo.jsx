import logo from './logo.jpeg';
import styles from './Logo.module.css';

function Logo(){
    return (
       <a href='http://localhost:5173/' className={styles.logo}><img src={logo}/></a> 
    );
}

export default Logo;
