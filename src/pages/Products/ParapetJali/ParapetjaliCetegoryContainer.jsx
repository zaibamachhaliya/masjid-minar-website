import styles from '/src/styles/ParapetjaliCetegory.module.css';
import { Link } from 'react-router-dom';
import ParapatJaliDataWithSlug from '../../../data/Parapetjali';
import { useEffect, useState } from 'react';
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { slugify } from '../../../data/utils';


function ParapetJaliCetegoryContainer() {

    const slelectArray = ['Default sorting', 'Sort by popularity', 'Sort by average rating', 'Sort by latest', 'Sort by price:low to high', 'Sort by price:high to low'];

    const [selected, setSelected] = useState('Default sorting');
    const [filterDeta, setFilterDeta] = useState(ParapatJaliDataWithSlug);


    const [page, setPage] = useState(1);
    const cardsPerpage = 5;
    const totalPage = Math.ceil(filterDeta.length / cardsPerpage);
    const indexOflast = page * cardsPerpage;
    const indexofFirst = indexOflast - cardsPerpage;
    const finalDeta = filterDeta.slice(indexofFirst, indexOflast);



    const FilterArray = {
        common: [
            'Parapet-Jali Design-5',
            'Paraper-Jali Design-4',
            'Parapet-Jali Design:3',
            'Parapet-Jali Design:2',
            'Paraper-Jali Design:1',
            'small paraper-jali',
            'Shahi Boundary',
            'Medium Size Paraper Jali',
            'Parapet Boundary Wall',
        ],

        'Sort by price:low to high': [
            'Parapet Boundary Wall',
            'Medium Size Paraper Jali',
            'Shahi Boundary',
            'small paraper-jali',
            'Parapet-Jali Design:1',
            'Parapet-Jali Design:2',
            'Parapet-Jali Design:3',
            'Parapet-Jali Design-4',
            'PArapet-Jali Design-5',
        ],
    }

    const changeHandle = (e) => {
        setSelected(e.target.value);
    }



    useEffect(() => {

        let OrderList = [];

        if (selected === 'Sort by price:low to high') {
            OrderList = FilterArray['Sort by price:low to high'];
        }

        else if (selected === 'Sort by popularity' || selected === 'Sort by average rating' || selected === 'Sort by latest' || selected === 'Sort by price:high to low') {
            OrderList = FilterArray.common;
        }

        else if (selected === 'Default sorting') {
            setFilterDeta(ParapatJaliDataWithSlug);
            return;
        }


        const sortedDeta = OrderList.map((name) => ParapatJaliDataWithSlug.find((item) => item.imgName == name)).filter(Boolean);
        setFilterDeta(sortedDeta);

        setPage(1);

    }, [selected])




    return (
        <div className={styles.ParapetJaliCetegoryContainer}>
            <div className={styles.cetegoryContentPerent}>
                <div className={styles.cetegoryContent}>
                    <div className={styles.parapetjalicetegorycardPart}>
                        <div className={styles.parapetjalicetegoryContent}>
                            <div className={styles.parapetjalitxtPart}>
                                <Link to='/'> <span>Home</span></Link> /
                                <span> Parapet Jali</span>
                                <h2>Parapet Jali</h2>
                                <p>Showing {indexofFirst + 1}-{Math.min(indexOflast, filterDeta.length)} of {filterDeta.length} results</p>
                            </div>

                            <div className={styles.selectarea}>
                                <select onChange={changeHandle} value={selected}>
                                    {
                                        slelectArray.map((option, idx) => {
                                            return <option value={option} key={idx}>{option}</option>
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                        <div className={styles.parapetjalicetegoryCard}>
                            <div className={styles.parapetjaliCardContainer}>
                                {
                                    finalDeta.map((item, idx) => {
                                        return <Link to={`/products/parapet-jali/${slugify(item.imgName)}`}>
                                            <div key={idx}>
                                                <img src={item.img} />
                                                <p>{item.imgName}</p>
                                            </div>
                                        </Link>

                                    }) 
                                }
                            </div> 
                        </div>
                    </div>
                </div>
                <div className={styles.parapetjalicetegoryblogPart}>
                    <div className={styles.parapetjaliblogContainer}>
                        <Link to='/category/blog'><p>Blog</p></Link>
                    </div>
                </div>
            </div>

            <Stack spacing={2} alignItems="center" style={{ margin: "0", marginTop: '4rem', paddingBottom: '2rem' }}>
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
        </div>
    );
}

export default ParapetJaliCetegoryContainer;
