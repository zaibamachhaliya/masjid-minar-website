

// Blog

import BlogPage from './components/BlogPage.jsx';
import BestMasjidminarPage from './components/BestMasjidminarPage.jsx';


// Outer routes
import Home from './pages/Home/home.jsx';
import About from './pages/About/about.jsx';
import Work from './pages/Work/Work.jsx';
import Products from './pages/Products/Products.jsx';
import Inquiry from './pages/Inquiry/inquiry.jsx';
import Contact from './pages/Contact/contact.jsx';
import WorkVideos from './pages/Work/WorkVideos.jsx';
import ImagePreview from './pages/Work/ImgPreview.jsx';


import Minar from './pages/Products/Minar/Minar.jsx';
import MinarDetail from './pages/Products/Minar/MinarDetail.jsx';
import MinarCetegory from './pages/Products/Minar/MinarCetegory.jsx';
import GumbadMusallaDetail from './pages/Products/GumbadMusallaRcc/GumbadMusallaDetail.jsx';
import UnCategoryzPage from './pages/Products/GumbadMusallaRcc/UncategorizedPage.jsx';
import RccCetegorizPage from './pages/Products/GumbadMusallaRcc/rccCetegorizPage.jsx';
import Minargellery from './pages/Products/Minargellery/Minargellery.jsx';
import MinargelleryDetail from './pages/Products/Minargellery/MinargelleryDetail.jsx';
import ParapetJaliPage from './pages/Products/ParapetJali/ParapetjaliPage.jsx';
import ParapetJaliDetail from './pages/Products/ParapetJali/ParapetJaliDetail.jsx';
import ParapetJaliCetegory from './pages/Products/ParapetJali/ParapetjaliCetegory.jsx';
import WuzuStand from './pages/Products/Wuzustand/WuzuStand.jsx';
import WuzustandDetail from './pages/Products/Wuzustand/WuzuStandDetail.jsx';
import WuzustandCetegory from './pages/Products/Wuzustand/WuzuStandCetegory.jsx';


const routes = [
    { path: '/', element: <Home /> },
    { path: '/about', element: <About /> },
    { path: '/work', element: <Work />, },
    { path: '/work-photos', element: <Work /> },
    { path: '/work-videos', element: <WorkVideos /> },
    { path: "/img/preview", element: <ImagePreview /> },
    { path: '/products', element: <Products /> },
    { path: 'products/minar', element: <Minar /> },
    { path: '/products/minar/:slug', element: <MinarDetail /> },
    { path: '/products/minar-category', element: <MinarCetegory /> },
    { path: '/inquiry', element: <Inquiry /> },
    { path: '/contact', element: <Contact /> },
    { path: '/category/blog', element: <BlogPage /> },
    { path: '/best-masjid-minar-manufacturer', element: <BestMasjidminarPage /> },
    { path: '/products/:slug', element: <GumbadMusallaDetail /> },
    { path: '/products-category/:slug', element: <UnCategoryzPage /> },
    { path: '/products-category/rcc-mimber', element: <RccCetegorizPage /> },
    { path: '/products/minar-gallery', element: <Minargellery /> },
    { path: '/products/minar-gallery/:slug', element: <MinargelleryDetail /> },
    { path: '/products/parapet-jali', element: <ParapetJaliPage /> },
    { path: '/products/parapet-jali/:slug', element: <ParapetJaliDetail /> },
    { path: '/products/parapet-jali-category', element: <ParapetJaliCetegory /> },
    { path: '/products/marble-mimber--wuzu-stand', element: <WuzuStand /> },
    { path: '/products/marble-mimber--wuzu-stand/:slug', element: <WuzustandDetail /> },
    { path: '/products/marble-mimber--wuzu-stand/category', element: <WuzustandCetegory/> }

]


export default routes;

