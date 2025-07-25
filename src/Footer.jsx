import FooterContainer from "./FooterContainer";
import styles from './Footer.module.css';
import Bottemfooter from "./Bottemfooter";
function Footer(){
    return (
        <footer className={styles.footer}>
            <FooterContainer></FooterContainer>
            <Bottemfooter></Bottemfooter>
        </footer>
    )
}

export default Footer;