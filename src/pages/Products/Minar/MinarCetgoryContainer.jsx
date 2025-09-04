
import styles from '/src/styles/MinarCetegorypage.module.css';
import { Link } from 'react-router-dom';
import minarDataWithSlug from '../../../data/minar';
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useRef, useState } from 'react';
import { slugify } from '../../../data/utils';



function MinarcetegoryContainer() {
    const [page, setPage] = useState(1);
    const cardsPerPage = 6;
    const [sortType, setSortType] = useState("default");



    const Popularrity = [
        {
            img: '/90-feet-300x452.jpg',
            ImgName: '90 FEET MINAR',
        },
        {
            img: '/70-feet-300x451.jpg',
            ImgName: '70 FEET MINAR',
        },
        {
            img: '/60-feet-300x458.jpg',
            ImgName: '60 FEET MINAR',
        },
        {
            img: '/42-feet-300x452.jpg',
            ImgName: '42 FEET MINAR',
        },
        {
            img: '/40-feet-300x454.jpg',
            ImgName: '40 FEET MINAR',
        },
        {
            img: '/35-feet-300x449.jpg',
            ImgName: '35 FEET MINAR',
        },
        {
            img: '/32-feet-300x452.jpg',
            ImgName: '32 FEET MINAR',
        },
        {
            img: '/23-feet-300x451.jpg',
            ImgName: '23 FEET MINAR',
        },

        {
            img: '/18-feet-masjid-minar-300x454.jpg',
            ImgName: '18 FEET MINAR',
        },
    ];

    
    const avrageRating = [
        {
            img: '/90-feet-300x452.jpg',
            ImgName: '90 FEET MINAR',
        },
        {
            img: '/5-feet-masjid-minar-300x455.jpg',
            ImgName: '5 FEET MINAR',
        },
        {
            img: '/70-feet-300x451.jpg',
            ImgName: '70 FEET MINAR',
        },
        {
            img: '/60-feet-300x458.jpg',
            ImgName: '60 FEET MINAR',
        },
        {
            img: '/42-feet-300x452.jpg',
            ImgName: '42 FEET MINAR',
        },
        {
            img: '/40-feet-300x454.jpg',
            ImgName: '40 FEET MINAR',
        },
        {
            img: '/35-feet-300x449.jpg',
            ImgName: '35 FEET MINAR',
        },
        {
            img: '/32-feet-300x452.jpg',
            ImgName: '32 FEET MINAR',
        },
        {
            img: '/23-feet-300x451.jpg',
            ImgName: '23 FEET MINAR',
        },
    ];


    const latest = [
        {
            img: '/90-feet-300x452.jpg',
            ImgName: '90 FEET MINAR',
        },
        {
            img: '/70-feet-300x451.jpg',
            ImgName: '70 FEET MINAR',
        },
        {
            img: '/60-feet-300x458.jpg',
            ImgName: '60 FEET MINAR',

        },
        {
            img: '/42-feet-300x452.jpg',
            ImgName: '42 FEET MINAR',
        },
        {
            img: '/40-feet-300x454.jpg',
            ImgName: '40 FEET MINAR',
        },
        {
            img: '/35-feet-300x449.jpg',
            ImgName: '35 FEET MINAR',
        },
        {
            img: '/32-feet-300x452.jpg',
            ImgName: '32 FEET MINAR',
        },
        {
            img: '/23-feet-300x451.jpg',
            ImgName: '23 FEET MINAR',
        },
        {
            img: '/18-feet-masjid-minar-300x454.jpg',
            ImgName: '18 FEET MINAR',
        },
    ]

    const lowToHigh = [
        {
            img: '/50-feet-masjid-minar-300x452.jpg',
            ImgName: '50 FEET MINAR',
        },
        {
            img: '/44-feet-aman-masjid-minar-300x454.jpg',
            ImgName: '44 FEET MINAR',

        },
        {
            img: '/30-feet-aman-masjid-minar-300x454.jpg',
            ImgName: '30 FEET MINAR',
        },
        {
            img: '/28-feet-aman-masjid-minar-300x452.jpg',
            ImgName: '28 FEET MINAR',
        },
        {
            img: '/25-feet-aman-masjid-minar-300x453.jpg',
            ImgName: '25 FEET MINAR',
        },
        {
            img: '/22-feet-masjid-minar-300x454.jpg',
            ImgName: '22 FEET MINAR',
        },
        {
            img: '/20-feet-masjid-minar-300x452.jpg',
            ImgName: '20 FEET MINAR',
        },
        {
            img: '/17-feet-masjid-minar-300x451.jpg',
            ImgName: '17 FEET MINAR',
        },
        {
            img: '/6-feet-masjid-minar-300x456.jpg',
            ImgName: '6 FEET MINAR',
        },

    ]


    const HightoLow = [
        {
            img: '/90-feet-300x452.jpg',
            ImgName: '90 FEET MINAR',
        },
        {
            img: '/70-feet-300x451.jpg',
            ImgName: '70 FEET MINAR',
        },
        {
            img: '/60-feet-300x458.jpg',
            ImgName: '60 FEET MINAR',
        },
        {
            img: '/42-feet-300x452.jpg',
            ImgName: '42 FEET MINAR',
        },
        {
            img: '/40-feet-300x454.jpg',
            ImgName: '40 FEET MINAR',
        },
        {
            img: '/35-feet-300x449.jpg',
            ImgName: '35 FEET MINAR',
        },
        {
            img: '/32-feet-300x452.jpg',
            ImgName: '32 FEET MINAR',
        },
        {
            img: '/23-feet-300x451.jpg',
            ImgName: '23 FEET MINAR',
        },
        {
            img: '/18-feet-masjid-minar-300x454.jpg',
            ImgName: '18 FEET MINAR',
        },

    ]



    let allProducts = minarDataWithSlug;
    if (sortType === "popularity") allProducts = Popularrity;
    else if (sortType === "average") allProducts = avrageRating;
    else if (sortType === "latest") allProducts = latest;
    else if (sortType === "lowToHigh") allProducts = lowToHigh;
    else if (sortType === "highToLow") allProducts = HightoLow;


    const totalPages = Math.ceil(allProducts.length / cardsPerPage);



    const indexOfLast = page * cardsPerPage;
    const indexOfFirst = indexOfLast - cardsPerPage;
    const displayedCards = allProducts.slice(indexOfFirst, indexOfLast);


    const changHandle = (e) => {
        const value = e.target.value;
        if (value === "Default sorting") setSortType("default");
        else if (value === "Sort by popularity") setSortType("popularity");
        else if (value === "Sort by average rating") setSortType("average");
        else if (value === "Sort by latest") setSortType("latest");
        else if (value === "Sort by price:low to high") setSortType("lowToHigh");
        else if (value === "Sort by price:high to low") setSortType("highToLow");

        setPage(1);
    };


    return (
        <div className={styles.minarCetegoryContainer}>
            <div className={styles.minarPart}>
                <div className={styles.minarPartcontent}>

                    <div className={styles.topPart}>
                        <div className={styles.hintPart}>
                            <div>
                                <Link to='/'><span style={{ color: 'black' }}>Home / </span></Link>
                                <span>Minar</span>
                            </div>
                            <h2>Minar</h2>
                            <p>Showing {indexOfFirst + 1}–{Math.min(indexOfLast, allProducts.length)} of {allProducts.length} results</p>
                        </div>
                        <div>
                            <select onChange={changHandle}>
                                <option value="Default sorting">Default sorting</option>
                                <option value="Sort by popularity">Sort by popularity</option>
                                <option value="Sort by average rating">Sort by average rating</option>
                                <option value="Sort by latest">Sort by latest</option>
                                <option value="Sort by price:low to high">Sort by price:low to high</option>
                                <option value="Sort by price:high to low">Sort by price:high to low</option>
                            </select>
                        </div>
                    </div>


                    <div className={styles.bootemPart}>
                        <div className={styles.bootemPartContainer}>
                            {displayedCards.map((ele, idx) => (
                                <Link to={`/products/minar/${slugify(ele.ImgName)}`} key={idx}>
                                    <div className={styles.card}>
                                        <img src={ele.img} alt={ele.ImgName} />
                                        <p>{ele.ImgName}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>


                    <Stack spacing={2} alignItems="center" style={{ margin: "3rem" }}>
                        <Pagination
                            count={totalPages}
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
            </div>

            <div className={styles.blogPart}>
                <Link to='/category/blog'><p>Blog</p></Link>
            </div>
        </div>
    );
}


export default MinarcetegoryContainer;


