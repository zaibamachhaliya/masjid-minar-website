
import styles from "../../styles/AboutSection.module.css";


function ExploreSectionContent() {

    const ExploreDeta = [
        {
            hading: 'RCC Minar',
            P: 'Offering various sizes from 2 feet to 35 feet, our ready-made minars are designed with precision and care to suit different architectural requirements.',
        },
        {
            hading: 'Gumbads',
            P: 'Crafted to add grandeur to mosque structures, our gumbads are known for their impeccable finish and durability.',
        },
        {
            hading: 'Parapet Jali',
            P: 'We provide intricately designed parapet jalis, including small, medium, and shahi boundary designs, enhancing the aesthetic appeal of mosque boundaries',
        },
        {
            hading: 'Marble Products',
            P: 'Our marble offerings encompass mimbers, wuzu stands, mehrabs, and jalis for dargahs, each reflecting superior craftsmanship',
        },
        {
            hading: 'RCC Mimbers',
            P: 'Robust and elegantly designed, our RCC mimbers serve as essential elements within the mosque interiors.',
        },

        {
            hading: 'Musalla Tiles',
            P: 'We offer high-quality musalla tiles that provide both functionality and beauty to prayer areas.',
        },
    ]



    return (
        <div className={styles.cardContainer}>
            {
                ExploreDeta.map((item, idx) => {
                    return <div className={styles.card} key={idx}>
                        <h2>{item.hading}</h2>
                        <div className={styles.outlineCard}></div>
                        <p>{item.P}</p>
                    </div>
                })
            }
        </div>
    )
}

export default ExploreSectionContent;