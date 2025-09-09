import styles from "../../styles/WorkPage.module.css";
import { HashLink } from "react-router-hash-link";

function WorkTopLinks() {

    const TopLinks = [
        { links: 'Minar Work', href: '#minar-work' },
        { links: 'Gumbad Work', href: '#gumbad-work' },
        { links: 'Marble Work', href: '#marble-work' },
        { links: 'Parapet Jali', href: '#parapet-jali' },
        { links: 'RCC Mimber', href: '#rcc-mimber' },
    ]


    return (
        <div className={styles.Toplinks}>
            <div className={styles.toplinksContainer}>
                <ul>
                    {TopLinks.map((ele, idx) => (
                        <li key={idx}>
                            <HashLink smooth to={ele.href}>
                                {ele.links}
                            </HashLink>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default WorkTopLinks;