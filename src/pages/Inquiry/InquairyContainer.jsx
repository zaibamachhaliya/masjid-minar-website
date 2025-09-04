
import { useState } from "react";
import styles from "../../styles/InquiryPage.module.css";
import { FaAngleLeft } from "react-icons/fa";

function InquairyContainer() {


    const [submit, setSubmit] = useState(false);


    const inquiry = [
        "Select Inquiry Purpose",
        "Minar",
        "Dealer",
        "Distributor",
        "Tender",
        "Export / Import",
        "Other",
    ];

    const countries = [
        'Select Country',"Afghanistan", "Albania", "Algeria", "Andorra", "Angola",
        "Argentina", "Australia", "Austria", "Bangladesh", "Belgium",
        "Brazil", "Canada", "China", "Denmark", "Egypt", "France",
        "Germany", "India", "Indonesia", "Italy", "Japan", "Mexico",
        "Nepal", "Netherlands", "Pakistan", "Russia", "Saudi Arabia",
        "South Africa", "Spain", "Sri Lanka", "Sweden", "Switzerland",
        "Turkey", "United Arab Emirates", "United Kingdom", "United States",
        "Vietnam", "Zimbabwe"
    ];



    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmit(!submit);
    }


    return (
        submit ? <div className={styles.messege}><button onClick={handleSubmit}> <FaAngleLeft/> Go back to form </button>  <p>Thank you for your message. We will get in touch with you shortly</p></div> : <form className={styles.form} onSubmit={handleSubmit}>
            {/* Full Name */}
            <div className={styles.formGroup}>
                <label htmlFor="name">Full Name</label>
                <input id="name" type="text" placeholder="Full Name" autoComplete="off" required />
            </div>

            {/* Email */}
            <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input id="email" type="email" placeholder="Email Address" autoComplete="off" required />
            </div>

            {/* Mobile */}
            <div className={styles.formGroup}>
                <label htmlFor="mobilenumber">Mobile Number</label>
                <input id="mobilenumber" type="number" placeholder="Mobile Number" required />
            </div>


            <div className={styles.formGroup}>
                <label htmlFor="inquiry">Inquiry Purpose</label>
                <select id="inquiry" required>
                    {inquiry.map((ele, idx) => (
                        <option key={idx}>{ele}</option>
                    ))}
                </select>
            </div>


            <div className={styles.addressCity}>
                <div className={styles.formGroup}>
                    <label htmlFor="address">Address</label>
                    <input id="address" type="text" placeholder="Address Line 1" required />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="city">City</label>
                    <input id="city" type="text" placeholder="City" required />
                </div>
            </div>


            <div className={styles.stateZip}>
                <div className={styles.formGroup}>
                    <label htmlFor="state">State</label>
                    <input id="state" type="text" placeholder="State" required />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="code">Zip Code</label>
                    <input id="code" type="text" placeholder="Zip Code" autoComplete="off" required />
                </div>
            </div>



            <div className={styles.formGroup}>
                <label htmlFor="country">Country</label>
                <select id="country" required>
                    {countries.map((ele, idx) => (
                        <option key={idx}>{ele}</option>
                    ))}
                </select>
            </div>

            <button type="submit">Submit Form</button>
        </form>

    );
}

export default InquairyContainer;