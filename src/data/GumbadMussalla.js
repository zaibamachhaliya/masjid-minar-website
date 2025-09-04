import { slugify } from "./utils";


const GumbadMusalla = [

    {
        img: '/masjid-gumbad.jpg',
        imgName: 'Gumbad',
        P: [
            { type: "link", Content: "Harmain Traders", to: "https://www.google.com/search?output=search&q=HARMAIN+PRECAST+INDUSTRIES+-+Masjid+Minar+%26+RCC+Minar+for+Masjid&ludocid=4372215395066124072&gsas=1&client=ms-android-oneplus&lsig=AB86z5VmLQhhIC4TnCt9__ybbUe-&kgs=d982538cffd756cd&shndl=-1&source=sh/x/kp/local/2&entrypoint=sh/x/kp/local" },
            { type: "text", Content: " uses superior quality reinforced concrete cement and novel techniques in accordance with trending designs of the market. It is used for setting up over the dome of mosques to increase their religious values and impressive looks. Furthermore, " },
            { type: "link", Content: "Harmain Traders", to: "https://www.google.com/search?output=search&q=HARMAIN+PRECAST+INDUSTRIES+-+Masjid+Minar+%26+RCC+Minar+for+Masjid&ludocid=4372215395066124072&gsas=1&client=ms-android-oneplus&lsig=AB86z5VmLQhhIC4TnCt9__ybbUe-&kgs=d982538cffd756cd&shndl=-1&source=sh/x/kp/local/2&entrypoint=sh/x/kp/local" },
            { type: "text", Content: " offer this " },
            { type: "bold", Content: "Gumbad" },
            { type: "text", Content: " at the most competitive prices to the clients. We also cater different products like " },
            { type: "link", Content: "Minars", to: "/products/minar" },
            { type: "text", Content: ", " },
            { type: "link", Content: "Gumbad", to: "/products/gumbad" },
            { type: "text", Content: ", " },
            { type: "link", Content: "Marble Member Wuzu Stand", to: "/products/marble-mimber--wuzu-stand" },
            { type: "text", Content: ", " },
            { type: "link", Content: "Parapet Jali", to: "/products/parapet-jali" },
            { type: "text", Content: " And " },
            { type: "link", Content: "RCC Mimber", to: "/products/rcc-mimber" }
        ],

        categoriz: 'Uncategorized',

    },

    {
        img: '/Musalla.jpg',
        imgName: 'Musalla Tiles',
        P: [],
        categoriz: 'Uncategorized',
    },

    {
        img: '/rcc-mimber-harmain-traders.jpg',
        imgName: 'RCC Mimber',
        P: [
            { type: 'link', Content: 'Harmain Traders', to: 'https://www.google.com/search?output=search&q=HARMAIN+PRECAST+INDUSTRIES+-+Masjid+Minar+%26+RCC+Minar+for+Masjid&ludocid=4372215395066124072&gsas=1&client=ms-android-oneplus&lsig=AB86z5VmLQhhIC4TnCt9__ybbUe-&kgs=d982538cffd756cd&shndl=-1&source=sh/x/kp/local/2&entrypoint=sh/x/kp/local' },
            { type: 'bold', Content: 'have been the quickest growing, Consumer-centric, and' },
            { type: 'link', Content: 'ISO-certified company', to: 'https://en.wikipedia.org/wiki/ISO_9000_family' },
            { type: 'bold', Content: 'since 1983 in Manufacturer' },
            { type: 'link', Content: 'ready-made RCC Minars for masjids', to: '/products/minar' },
            { type: 'bold', Content: 'across India.' },
            { type: 'text', Content: 'we are providing a wide range of' },
            { type: 'bold', Content: 'Wuzu Stand ' },
            { type: 'text', Content: 'to our clients. an exclusive collection of our offered range of products is acclaimed by the clients for its traditional looks as well as outstanding finishing. Being one of the prominent' },
            { type: 'bold', Content: 'manufacturers' },
            { type: 'text', Content: 'and' },
            { type: 'bold', Content: 'suppliers,' },
            { type: 'text', Content: 'we make use of superior quality material for designing.' },
            { type: 'bold', Content: 'Wuzu Stand' },
            { type: 'text', Content: 'are also customized, according to the client’s needs at affordable rates. We also caterers different products like' },
            { type: "link", Content: "Minars", to: "/products/minar" },
            { type: "text", Content: ", " },
            { type: "link", Content: "Gumbad", to: "/products/gumbad" },
            { type: "text", Content: ", " },
            { type: "link", Content: "Marble Member Wuzu Stand", to: "/products/marble-mimber--wuzu-stand" },
            { type: "text", Content: ", " },
            { type: "link", Content: "Parapet Jali", to: "/products/parapet-jali" },
            { type: "text", Content: " And " },
            { type: "link", Content: "RCC Mimber", to: "/products/rcc-mimber" },
        ],

        categoriz: 'RCC Mimber',

    }
]



const GumbadDetawithSlug = GumbadMusalla.map(item => ({
    ...item,
    slug: slugify(item.imgName)
}));


export default GumbadDetawithSlug;