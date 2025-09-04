import styles from "../../styles/WorkPage.module.css";

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
                    {TopLinks.map((ele, idx) => {
                        return <li key={idx}><a href={ele.href}>{ele.links}</a></li>
                    })}
                </ul>
            </div>
        </div>
    );
}

export default WorkTopLinks;