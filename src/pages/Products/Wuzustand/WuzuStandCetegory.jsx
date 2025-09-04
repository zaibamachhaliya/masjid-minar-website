import styles from '/src/styles/WuzuStandCetegory.module.css';
import { Link } from 'react-router-dom';
import WuzustandDataWithSlug from '../../../data/Wuzustand';
import { slugify } from '../../../data/utils';
import { useEffect, useState } from 'react';

function WuzustandCetegory() {

    const slelectArray = ['Default sorting', 'Sort by popularity', 'Sort by average rating', 'Sort by latest', 'Sort by price:low to high', 'Sort by price:high to low'];
    const [selected, setSelected] = useState('Default sorting');
    const [filterDeta, setFilterDeta] = useState(WuzustandDataWithSlug);



    const FilterArray = {
        'Common': [
            'Marble Qibla and Mimber',
            'MARBLE JALI FOR DARGAH',
            'Masjid-Marble-Mehrab',
            'Wuzu Stand',
            'Marble Mimber',
        ],

        'LowtoHigh': [
            'Marble Mimber',
            'Wuzu Stand',
            'Masjid-Marble-Mehrab',
            'MARBLE JALI FOR DARGAH',
            'Marble Qibla and Mimber',
        ]
    }


    const ChangeHandle = (e) => {
        setSelected(e.target.value);
    }




    useEffect(() => {

        let OrderList = [];

        if (selected === 'Sort by popularity' || selected == 'Sort by average rating' || selected == 'Sort by latest' || selected == 'Sort by price:high to low') {
            OrderList = FilterArray['Common'];
        }



        else if (selected === 'Sort by price:low to high') {
            OrderList = FilterArray['LowtoHigh'];
        }

        else if (selected == 'Default sorting') {
            setFilterDeta(WuzustandDataWithSlug);
            return;
        }


        const sortedDeta = OrderList.map((name) => WuzustandDataWithSlug.find((item) => item.imgName == name)).filter(Boolean);
        setFilterDeta(sortedDeta);


    }, [selected])





    return (
        <main>
            <section className={styles.wuzustandCetegorySection}>
                <div className={styles.wuzustandCetegoryContainer}>
                    <div className={styles.wuzustandWrapper}>
                        <div className={styles.wuzustandCardPart}>
                            <div className={styles.wuzuStandContent}>
                                <div>
                                    <Link to={'/'}><span style={{ color: 'black' }}>Home</span></Link>
                                    / <span>Marble Mimber & Wuzu Stand</span>
                                </div>
                                <h2 className={styles.wuzustandCetegoryHading}>Marble Mimber & Wuzu Stand</h2>
                                <div className={styles.wuzustandresult}>
                                    <p>Showing all 5 results</p>
                                    <div>
                                        <select onChange={ChangeHandle}>
                                            {
                                                slelectArray.map((ele, idx) => {
                                                    return <option value={ele} key={idx}>{ele}</option>
                                                })
                                            }
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.wuzuStandCard}>
                                {
                                    filterDeta.map((item, idx) => {
                                        return <Link to={`/products/marble-mimber--wuzu-stand/${slugify(item.imgName)}`} key={idx}>
                                            <div className={styles.WuzuStanditem}>
                                                <img src={item.img} />
                                                <p>{item.imgName}</p>
                                            </div>
                                        </Link>
                                    })
                                }
                            </div>
                        </div>
                        <div className={styles.wuzustandBlogPart}>
                            <div className={styles.WuzustandBlogContainer}>
                                <Link to='/category/blog'><p>Blog</p></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default WuzustandCetegory;

