import styles from "../../styles/ProductPage.module.css";


function ImgSectionContainer() {


    const ProductPageDeta = [
        {
            img: '/img1.png',
            hading: 'Readymade RCC Masjid Minar',
            description: [
                { type: "text", value: "Offering various sizes of " },
                { type: "bold", value: "RCC minars for mosque " },
                { type: "text", value: "from 2 feet to 35 feet, our " },
                { type: "bold", value: "ready made minars " },
                { type: "text", value: "are designed with Strong build and long life for all weather conditions." }
            ],
        },

        {
            img: '/img3.png',
            hading: 'Parapet Boundary Wall',
            description: [
                { type: "text", value: "We provide beautifully designed " },
                { type: "bold", value: "parapet jali (Parapet Boundry Wall for Masjid ), " },
                { type: "text", value: "including small, medium, and shahi styles, that enhance the look of " },
                { type: "bold", value: "mosque boundaries " },
                { type: "text", value: "with style and strength." }
            ],
        },

        {
            img: '/img2.png',
            hading: 'Gumbad (Doms',
            description: [
                { type: 'text', value: 'At Harmain Minar' },
                { type: 'bold', value: 'Masjid domes (Gumbads)' },
                { type: 'text', value: 'are carefully made to add beauty and height to any mosque. Our gumbads are known for their Quality finish and durability. ' },
            ]
        },
        {
            img: '/card4.jpg',
            hading: 'Wuzu Stand',
            description: [
                { type: 'text', value: 'We Have' },
                { type: 'bold', value: 'Readymade Marble and RCC Wuzu stands' },
                { type: 'text', value: 'are made for comfortable and clean ablution, with strong material and easy-to-use design for daily use in mosques' },
            ]
        },
        {
            img: '/marble-jali-1-480x360.jpeg',
            hading: 'Marble Jali for Dargah',
            description: [
                { type: 'text', value: 'We provide high-quality' },
                { type: 'bold', value: "marble jalis specially designed for Dargahs," },
                { type: 'text', value: 'which adding beauty, strength, and a traditional look to the holy space.' },
            ]
        },
        {
            img: '/Musalla.jpg',
            hading: 'Musalla Tiles',
            description: [
                { type: 'text', value: 'Provides' },
                { type: 'bold', value: 'Musalla tiles ( Prayer Tiles )' },
                { type: 'text', value: 'are designed for clean, soft, and slip-free prayer spaces, perfect for mosques and namaz areas.' },
            ]
        },
        {
            img: '/Rcc-Mimber.jpeg',
            hading: 'Mimber For Masjid',
            description: [
                { type: 'text', value: 'Our' },
                { type: 'bold', value: 'Masjid mimbers' },
                { type: 'text', value: 'are made strong and safe for giving Khutbahs (sermons). They are designed to match any mosque’s look with a traditional style.' },
            ]
        },
        {
            img: '/harmain-minar-marble-product (1).png',
            hading: 'Mehrab (Qibla)',
            description: [
                { type: 'text', value: 'We make nice and strong' },
                { type: 'bold', value: 'Masjid Mehrabs' },
                { type: 'text', value: 'to' },
                { type: 'bold', value: 'show the Qibla direction' },
                { type: 'text', value: 'They look simple, clean, and add beauty to any mosque.' },
            ]
        },
        {
            img: '/secondpartImg.jpg',
            hading: 'RCC Products for Masjid',
            description: [
                { type: 'text', value: 'Offering various sizes from 2 feet to 35 feet, our ready-made minars are designed with precision and care to suit different architectural requirements.' },
            ]
        },
        {
            img: '/harmain-minar-marble-product (1).png',
            hading: 'Marble Products For Masjid',
            description: [
                { type: 'text', value: 'Crafted to add grandeur to mosque structures, our gumbads are known for their impeccable finish and durability.' },
            ]
        },
    ]




    return (
        <>
            <div className={styles.imgSectionContainer}>
                {
                    ProductPageDeta.map((item, idx) => {
                        return <div className={styles.imgCard} key={idx}>
                            <img
                                src={item.img}
                                alt="Masjid Minar 1"
                                data-aos="zoom-in"
                                data-aos-duration="3000"
                            />
                            <div className={styles.cardContent}>
                                <h1>{item.hading}</h1>
                                <div className={styles.outline}></div>
                                <p>
                                    {item.description.map((part, idx) => {
                                        if (part.type === "text") {
                                            return <span key={idx} style={{fontWeight:'300'}}>{part.value}{"  "}</span>;
                                        }
                                        if (part.type === "bold") {
                                            return <strong key={idx} style={{fontWeight:'bold'}}>{part.value}{"  "}</strong>
                                        }
                                        
                                        return null;
                                    })}
                                </p>
                            </div>
                        </div>
                    })
                }
            </div>

        </>
    );
}

export default ImgSectionContainer;