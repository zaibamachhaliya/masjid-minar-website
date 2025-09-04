import styles from '/src/styles/Minargellery.module.css';
import { Link } from 'react-router-dom';
import minarGelleryDataWithSlug from '../../../data/minarGellery';
import { useEffect, useState } from 'react';
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { slugify } from '../../../data/utils';


function MinargelleryContainer() {




    const slelectArray = ['Default sorting', 'Sort by popularity', 'Sort by average rating', 'Sort by latest', 'Sort by price:low to high', 'Sort by price:high to low'];
    const [selected, setSelected] = useState('Default sorting');
    const [filterDeta, setFilterDeta] = useState(minarGelleryDataWithSlug);
    const [page, setPage] = useState(1);

    const cardsPerpage = 6;

    const totalPage = Math.ceil(filterDeta.length / cardsPerpage);


    const indexOflast = page * cardsPerpage;
    const indexofFirst = indexOflast - cardsPerpage;
    const finalDeta = filterDeta.slice(indexofFirst, indexOflast);

    const filterArray = {
        'Sort by popularity': [
            "Makki Minar",
            "Madni Minar",
            "Shandar-Minar",
            "khubsurat-Minar",
            "Lighting Minar",
            "All Masjid Product",
            "Minar Block",
            "Strong Minar",
            "High Quality Minar",
            "Mosque Minar – Masjid ke Minar",
        ],

        'Sort by average rating': [
            'All Masjid Product',
            'Makki Minar',
            'Madni Minar',
            'Shandar-Minar',
            'khubsurat-Minar',
            'Lighting Minar',
            'Minar Block',
            'Strong Minar',
            'High Quality Minar',
            'Mosque Minar – Masjid ke Minar',
        ],

        'Sort by latest': [
            'Makki Minar',
            "Madni Minar",
            'Shandar-Minar',
            'khubsurat-Minar',
            'Lighting Minar',
            'All Masjid Product',
            'Minar Block',
            'Strong Minar',
            'High Quality Minar',
            'Mosque Minar – Masjid ke Minar',
        ],

        'Sort by price:low to high': [
            'Mosque Minar – Masjid ke Minar',
            'High Quality Minar',
            'Strong Minar',
            'Minar Block',
            'All Masjid Product',
            'Lighting Minar',
            'khubsurat-Minar',
            'Shandar-Minar',
            'Madni Minar',
            'Makki Minar',
        ],

        'Sort by price:high to low': [
            'Makki Minar',
            'Madni Minar',
            'Shandar-Minar',
            'khubsurat-Minar',
            'Lighting Minar',
            'All Masjid Product',
            'Minar Block',
            'Strong Minar',
            'High Quality Minar',
            'Mosque Minar – Masjid ke Minar',
        ],
    }


    const ChnagHandle = (e) => {
        setSelected(e.target.value);
    }


    useEffect(() => {
        if (selected == 'Default sorting') {
            setFilterDeta(minarGelleryDataWithSlug);
        }

        else {
            const sortedNames = filterArray[selected] || [];
            const sortedDeta = sortedNames.map((name) => minarGelleryDataWithSlug.find((item) => item.imgName == name))
                .filter(Boolean);

            setFilterDeta(sortedDeta);
        }

        setPage(1);
    }, [selected])




    return (
        <>
            <div className={styles.minarGelleryContainer}>
                <div className={styles.minargelleryPerent}>
                    <div className={styles.minarGelleryCardPart}>
                        <div className={styles.minargelleryContent}>
                            <div className={styles.topPart}>
                                <div className={styles.topPartContent}>
                                    <div>
                                        <Link to={'/'}><span style={{ color: 'black' }}>Home</span></Link> /
                                        <span>Minar Gallery</span>
                                    </div>
                                    <h2>Minar Gallery</h2>
                                    <p>Showing {indexofFirst + 1}-{Math.min(indexOflast, filterDeta.length)} of {filterDeta.length} results</p>
                                </div>
                                <div className={styles.selectFilter}>
                                    <select onChange={ChnagHandle}>
                                        {
                                            slelectArray.map((option, idx) => {
                                                return <option value={option} key={idx}>{option}</option>
                                            })
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className={styles.bootemPart}>
                                {
                                    finalDeta.map((item, idx) => {
                                        return <Link to={`/products/minar-gallery/${slugify(item.imgName)}`} key={idx}>
                                            <div className={styles.minargelleryCard}>
                                                <img src={item.img} />
                                                <p>{item.imgName}</p>
                                            </div>
                                        </Link> 
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className={styles.minargelleryblogPart}> 
                        <Link to='/category/blog'><p>Blog</p></Link>
                    </div>
                </div>
            </div>




            <Stack spacing={2} alignItems="center" style={{ margin: "0", marginTop: '-2rem', paddingBottom: '2rem' }}>
                <Pagination
                    count={totalPage}
                    page={page}
                    onChange={(event, value) => setPage(value)}
                    renderItem={(item) => (
                        <PaginationItem
                            slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                            {...item}
                            sx={{
                                border: "1px solid #147557",
                                borderRadius: 0,
                                color: "#147557",
                                "&.Mui-selected": {
                                    backgroundColor: "#eee",
                                    color: "#000",
                                    border: "1px solid #ccc",
                                },
                                "&:hover": {
                                    backgroundColor: "#f9f9f9",
                                },
                                minWidth: "35px",
                                height: "35px",
                                fontSize: "1rem",
                            }}
                        />
                    )}
                />
            </Stack>
        </>
    );
}

export default MinargelleryContainer;



