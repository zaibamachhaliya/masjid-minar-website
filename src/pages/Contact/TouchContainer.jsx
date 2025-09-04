import styles from "../../styles/ConnectPage.module.css";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useRef, useState } from "react";
import { FaAngleLeft } from "react-icons/fa";

function TouchContainer() {

    const inputValue = useRef(null);
    const [submited, setSubmited] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.current && inputValue.current.value == '16') {
            inputValue.current.value = '';
            setSubmited(true);
        }

        else {
            alert("Verification failed. Please enter the correct answer (6 + 10).");
        }
    }



    return (
        <div className={styles.thouchContainer}>
            <div className={styles.thoughContent}>
                {submited ? <form className={styles.touchPart} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} onSubmit={(e) => {e.preventDefault(); setSubmited(false); }}>
                    <h2>Get in Touch</h2>
                    <p>
                        Please fill out and submit the form below. Our team will be in touch with you promptly.
                    </p>
                    <p>Thank you for reaching out to us. We will get back to you shortly.</p>
                    <button className={styles.backButoon} type='submit' ><FaAngleLeft />Go back to form</button>
                </form> : <div className={styles.touchPart}>

                    <span>Get in Touch</span>
                    <p>Please fill out and submit the form below. Our team will be in touch with you promptly.</p>
                    <form onSubmit={handleSubmit}>
                        <input placeholder="First Name" required type="text"></input>
                        <input placeholder="Last Name" required type="text"></input>


                        <input placeholder="Contact Number" required type="number"></input>
                        <input placeholder="Email" required type="email"></input>

                        <textarea placeholder="Message" required type='text'></textarea>


                        <div className={styles.spanInput}>
                            <span>6+10=</span>
                            <input ref={inputValue} required></input>
                        </div>
                        <button className={styles.sandButton} type="submit">SEND INQUIRY <KeyboardArrowRightIcon /></button>
                    </form>

                </div>}
                <div className={styles.harmainPart}>
                    <div className={styles.harmainContent}>
                        <h1>Harmain Minar</h1>
                        <div className={styles.outline}></div>
                        <p>Specialize in high-quality masjid minar manufacturing with a commitment to traditional design and lasting durability.</p>
                        <div className={styles.Locationpart}>
                            <div className={styles.harmainaddress}>
                                <span>Address:</span>
                                <p>Western Express Highway Vasai East – 401208 Mumbai (Maharashtra-India)</p>
                            </div>
                            <div className={styles.harmainContacts}>
                                <span>Contacts:</span>
                                <p>98812 90998/  98608 36033 /   99605 77866</p>
                            </div>
                            <div className={styles.harmainemail}>
                                <span>Email :</span>
                                <p>dauvahanif786@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TouchContainer;