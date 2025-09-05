import { slugify } from "./utils";



const ParapetJali = [
    {
        img: `${import.meta.env.BASE_URL}parapet-boundry-wall-harmain-traders-3.jpg`,
        imgName: 'Parapet Boundary Wall',
        description: [
            { type: "link", Content: "Harmain Traders", to: "https://www.google.com/search?output=search&q=HARMAIN+PRECAST+INDUSTRIES+-+Masjid+Minar+%26+RCC+Minar+for+Masjid&ludocid=4372215395066124072" },
            { type: "text", Content: " is one of the renowned " },
            { type: "bold", Content: "manufacturers" },
            { type: "text", Content: " quickest growing " },
            { type: "link", Content: "ISO-certified", to: "https://en.wikipedia.org/wiki/ISO_9000_family" },
            { type: "text", Content: " " },
            { type: "bold", Content: "company" },
            { type: "text", Content: ". Establishment in " },
            { type: "bold", Content: "1983" },
            { type: "text", Content: ", we are engaged in " },
            { type: "bold", Content: "manufacturing" },
            { type: "text", Content: " and " },
            { type: "bold", Content: "supplying Parapet Boundary Wall." },
            { type: "text", Content: " Available in several designs, finishes, and sizes. This " },
            { type: "bold", Content: "Parapet Jali" },
            { type: "text", Content: " is ideal for fencing the areas around the structures to provide them with stunning looks. Our proficient professionals have designed and constructed this wall with quality assurance cement concrete and creative designs in conformance with overall processes. At " },
            { type: "link", Content: "Harmain Traders", to: "https://www.google.com/search?output=search&q=HARMAIN+PRECAST+INDUSTRIES+-+Masjid+Minar+%26+RCC+Minar+for+Masjid&ludocid=4372215395066124072" },
            { type: "text", Content: ", customers can purchase this " },
            { type: "bold", Content: "Parapet Jali" },
            { type: "text", Content: " at the most affordable rates. We also caterers different products like " },
            { type: "link", Content: "Minars", to: "/products/minar" },
            { type: "text", Content: ", " },
            { type: "link", Content: "Gumbad", to: "/products/gumbad" },
            { type: "text", Content: ", " },
            { type: "link", Content: "Marble Member Wuzu Stand", to: "/products/marble-mimber--wuzu-stand" },
            { type: "text", Content: ", " },
            { type: "link", Content: "Parapet Jali", to: "/products/parapet-jali" },
            { type: "text", Content: " and " },
            { type: "link", Content: "RCC Mimber", to: "/products/rcc-mimber" },
        ],
    },


    {
        img: `${import.meta.env.BASE_URL}parapet-jali-for-masjid.jpg`,
        imgName: 'Medium Size Paraper Jali',
        description: [
            { type: "text", Content: "Since our establishment in " },
            { type: "bold", Content: "1983" },
            { type: "text", Content: ", we have offered " },
            { type: "bold", Content: "Medium Size Parapet Boundary Wall." },
            { type: "text", Content: " Available in several designs, finishes, and sizes, this " },
            { type: "bold", Content: "boundary wall" },
            { type: "text", Content: " is ideal for fencing the areas around the structures to provide them with stunning looks. Our talented professionals have designed and constructed this wall with quality assurance cement concrete and creative designs in conformance with overall processes. Additionally, customers can avail this " },
            { type: "bold", Content: "Medium Size Parapet Boundary Wall" },
            { type: "text", Content: " from us at the most affordable rates." },
        ],
    },


    {
        img: `${import.meta.env.BASE_URL}masjid-shahi-boundry-jali.jpg`,
        imgName: 'Shahi Boundary',
        description: [
            { type: "link", Content: "Harmain Traders", to: "https://www.google.com/search?output=search&q=HARMAIN+PRECAST+INDUSTRIES+-+Masjid+Minar+%26+RCC+Minar+for+Masjid&ludocid=4372215395066124072" },
            { type: "text", Content: " is one of the renowned " },
            { type: "bold", Content: "manufacturers" },
            { type: "text", Content: " quickest growing " },
            { type: "link", Content: "ISO-certified", to: "https://en.wikipedia.org/wiki/ISO_9000_family" },
            { type: "text", Content: " " },
            { type: "bold", Content: "company" },
            { type: "text", Content: ". We are professional in " },
            { type: "bold", Content: "manufacturing" },
            { type: "text", Content: " and " },
            { type: "bold", Content: "supplying" },
            { type: "text", Content: " premium quality " },
            { type: "bold", Content: "Shahi Boundary 1" },
            { type: "text", Content: ". Available in several designs, finishes, and sizes. We assure quality guaranteeing cement concrete and creative designs in conformance with overall processes. " },
            { type: "link", Content: "Harmain Traders", to: "https://www.google.com/search?output=search&q=HARMAIN+PRECAST+INDUSTRIES+-+Masjid+Minar+%26+RCC+Minar+for+Masjid&ludocid=4372215395066124072" },
            { type: "text", Content: " offers this " },
            { type: "bold", Content: "Shahi Boundary 1" },
            { type: "text", Content: " to the client in several designs and finishes at reasonable prices. We also caterers different products like " },
            { type: "link", Content: "Minars", to: "/products/minar" },
            { type: "text", Content: ", " },
            { type: "link", Content: "Gumbad", to: "/products/gumbad" },
            { type: "text", Content: ", " },
            { type: "link", Content: "Marble Member Wuzu Stand", to: "/products/marble-mimber--wuzu-stand" },
            { type: "text", Content: ", " },
            { type: "link", Content: "Parapet Jali", to: "/products/parapet-jali" },
            { type: "text", Content: " and " },
            { type: "link", Content: "RCC Mimber", to: "/products/rcc-mimber" },
        ],
    },


    {
        img: `${import.meta.env.BASE_URL}parapet-jali.jpg`,
        imgName: 'small paraper-jali',
        description: [
            { type: "link", Content: "Harmain Traders", to: "https://www.google.com/search?output=search&q=HARMAIN+PRECAST+INDUSTRIES+-+Masjid+Minar+%26+RCC+Minar+for+Masjid&ludocid=4372215395066124072" },
            { type: "text", Content: " Being a " },
            { type: "bold", Content: "client-centric organization" },
            { type: "text", Content: ", we are engaged in offering an excellent quality of " },
            { type: "link", Content: "Small parapet-Jali", to: "/products/parapet-jali/small-paraperjali" },
            { type: "text", Content: ". A " },
            { type: "bold", Content: "parapet" },
            { type: "text", Content: " is a barrier that is an extension of the wall at the edge of a roof, terrace, balcony, walkway or other structure. Where extending above a roof, a " },
            { type: "bold", Content: "parapet" },
            { type: "text", Content: " may simply be the portion of an exterior wall that continues above the line of the roof surface, or maybe a continuation of a vertical feature beneath the roof. We have " },
            { type: "bold", Content: "manufactured" },
            { type: "text", Content: " and tested the " },
            { type: "bold", Content: "Small parapet-Jali" },
            { type: "text", Content: " to meet the containment standards specified in the codes. Much of the earlier testing work was involved with achieving a Small parapet-Jali which would absorb the impact load. We also caterers different products like " },
            { type: "link", Content: "Minars", to: "/products/minar" },
            { type: "text", Content: ", " },
            { type: "link", Content: "Gumbad", to: "/products/gumbad" },
            { type: "text", Content: ", " },
            { type: "link", Content: "Marble Member Wuzu Stand", to: "/products/marble-mimber--wuzu-stand" },
            { type: "text", Content: ", " },
            { type: "link", Content: "Parapet Jali", to: "/products/parapet-jali" },
            { type: "text", Content: " and " },
            { type: "link", Content: "RCC Mimber", to: "/products/rcc-mimber" },
        ],
    },


    {
        img: `${import.meta.env.BASE_URL}Parapet-jali-Design-01.jpg`,
        imgName: 'Paraper-Jali Design:1',
        description: [
            { type: "link", Content: "Harmain Traders", to: "https://www.google.com/search?output=search&q=HARMAIN+PRECAST+INDUSTRIES+-+Masjid+Minar+%26+RCC+Minar+for+Masjid&ludocid=4372215395066124072" },
            { type: "text", Content: " is one of the fastest-growing " },
            { type: "link", Content: "ISO-certified", to: "https://en.wikipedia.org/wiki/ISO_9000_family" },
            { type: "text", Content: " companies in the industry. We were established in 1983 and We are professional in " },
            { type: "bold", Content: "manufacturing" },
            { type: "text", Content: " and " },
            { type: "bold", Content: "supplying premium quality Shahi Boundary." },
            { type: "text", Content: " We offer a variety of designs, finishes, and sizes. The " },
            { type: "link", Content: "Parapet Jali", to: "/products/parapet-jali" },
            { type: "text", Content: " is ideal for fencing the areas surrounding structures so they have a stunning appearance. Professionals from our organization designed and built this wall using quality cement concrete and creative designs in accordance with overall processes. This " },
            { type: "bold", Content: "Shahi Boundary" },
            { type: "text", Content: " is available for purchase at " },
            { type: "link", Content: "Harmain Traders", to: "https://www.google.com/search?output=search&q=HARMAIN+PRECAST+INDUSTRIES+-+Masjid+Minar+%26+RCC+Minar+for+Masjid&ludocid=4372215395066124072" },
            { type: "text", Content: " at the most competitive prices. We also caterers different products like " },
            { type: "link", Content: "Minars", to: "/products/minar" },
            { type: "text", Content: ", " },
            { type: "link", Content: "Gumbad", to: "/products/gumbad" },
            { type: "text", Content: ", " },
            { type: "link", Content: "Marble Member Wuzu Stand", to: "/products/marble-mimber--wuzu-stand" },
            { type: "text", Content: ", " },
            { type: "link", Content: "Parapet Jali", to: "/products/parapet-jali" },
            { type: "text", Content: " and " },
            { type: "link", Content: "RCC Mimber", to: "/products/rcc-mimber" },
        ],
    },

    {
        img: `${import.meta.env.BASE_URL}Parapet-jali-Design-02.jpg`,
        imgName: 'Parapet-Jali Design:2',
        description: [
            { type: "link", Content: "Harmain Traders", to: "https://www.google.com/search?output=search&q=HARMAIN+PRECAST+INDUSTRIES+-+Masjid+Minar+%26+RCC+Minar+for+Masjid&ludocid=4372215395066124072" },
            { type: "text", Content: " is established in " },
            { type: "bold", Content: "1983" },
            { type: "text", Content: ", we have offered " },
            { type: "bold", Content: "Medium Size Parapet Boundary Wall." },
            { type: "text", Content: " Available in several designs, finishes, and sizes, this " },
            { type: "bold", Content: "boundary wall" },
            { type: "text", Content: " is ideal for fencing the areas around the structures to provide them with stunning looks. Our talented professionals have designed and constructed this wall with " },
            { type: "bold", Content: "Quality assurance" },
            { type: "text", Content: " cement concrete and creative designs in conformance with overall processes. Additionally, customers can avail this " },
            { type: "bold", Content: "Medium Size Parapet Boundary Wall" },
            { type: "text", Content: " from us at the most affordable rates. We also caterers different products like " },
            { type: "link", Content: "Minars", to: "/products/minar" },
            { type: "text", Content: ", " },
            { type: "link", Content: "Gumbad", to: "/products/gumbad" },
            { type: "text", Content: ", " },
            { type: "link", Content: "Marble Member Wuzu Stand", to: "/products/marble-mimber--wuzu-stand" },
            { type: "text", Content: ", " },
            { type: "link", Content: "Parapet Jali", to: "/products/parapet-jali" },
            { type: "text", Content: " and " },
            { type: "link", Content: "RCC Mimber", to: "/products/rcc-mimber" },
        ],

    },


    {
        img: `${import.meta.env.BASE_URL}Parapet-jali-Design-03.jpg`,
        imgName: 'Parapet-Jali Design:3',
        description: [
            { type: "link", Content: "Harmain Traders", to: "https://www.google.com/search?output=search&q=HARMAIN+PRECAST+INDUSTRIES+-+Masjid+Minar+%26+RCC+Minar+for+Masjid&ludocid=4372215395066124072" },
            { type: "text", Content: " is one of the fastest-growing " },
            { type: "link", Content: "ISO-certified", to: "https://en.wikipedia.org/wiki/ISO_9000_family" },
            { type: "text", Content: " companies in the industry. We were established in 1983 and are engaged in " },
            { type: "link", Content: "manufacturing and supplying Parapet Boundary Walls", to: "/products/parapet-jali/parapet-boundary-wall" },
            { type: "text", Content: ". We offer a variety of designs, finishes, and sizes. The " },
            { type: "link", Content: "Parapet Jali", to: "/products/parapet-jali" },
            { type: "text", Content: " is ideal for fencing the areas surrounding structures so they have a stunning appearance. Professionals from our organization designed and built this wall using quality cement concrete and creative designs in accordance with overall processes. This " },
            { type: "link", Content: "Parapet Jali", to: "/products/parapet-jali" },
            { type: "text", Content: " is available for purchase at " },
            { type: "link", Content: "Harmain Traders", to: "https://www.google.com/search?output=search&q=HARMAIN+PRECAST+INDUSTRIES+-+Masjid+Minar+%26+RCC+Minar+for+Masjid&ludocid=4372215395066124072" },
            { type: "text", Content: " at the most competitive prices." },
        ],
    },


    {
        img: `${import.meta.env.BASE_URL}Parapet-jali-Design-04 (1).jpg`,
        imgName: 'Paraper-Jali Design-4',
        description: [
            { type: "link", Content: "Harmain Traders", to: "https://www.google.com/search?output=search&q=HARMAIN+PRECAST+INDUSTRIES+-+Masjid+Minar+%26+RCC+Minar+for+Masjid&ludocid=4372215395066124072" },
            { type: "text", Content: " is established in " },
            { type: "bold", Content: "1983" },
            { type: "text", Content: ", we have offered " },
            { type: "link", Content: "Medium Size Parapet Boundary Wall.", to: '/products/parapet-jali/parapet-boundary-wall' },
            { type: "text", Content: " Available in several designs, finishes, and sizes, this " },
            { type: "bold", Content: "boundary wall" },
            { type: "text", Content: " is ideal for fencing the areas around the structures to provide them with stunning looks. Our talented professionals have designed and constructed this wall with " },
            { type: "bold", Content: "Quality assurance" },
            { type: "text", Content: " cement concrete and creative designs in conformance with overall processes. Additionally, customers can avail this " },
            { type: "bold", Content: "Medium Size Parapet Boundary Wall" },
            { type: "text", Content: " from us at the most affordable rates. We also caterers different products like " },
            { type: "link", Content: "Minars", to: "/products/minar" },
            { type: "text", Content: ", " },
            { type: "link", Content: "Gumbad", to: "/products/gumbad" },
            { type: "text", Content: ", " },
            { type: "link", Content: "Marble Member Wuzu Stand", to: "/products/marble-mimber--wuzu-stand" },
            { type: "text", Content: ", " },
            { type: "link", Content: "Parapet Jali", to: "/products/parapet-jali" },
            { type: "text", Content: " and " },
            { type: "link", Content: "RCC Mimber", to: "/products/rcc-mimber" },
        ],

    },
    {
        img: `${import.meta.env.BASE_URL}Parapet-jali-Design-05.jpg`,
        imgName: 'Parapet-Jali Design-5',
        description: [
            { type: 'text', Content: 'Harmain Traders is one of India’s fastest growing ISO-certified manufacturers. Since 1983, we have been manufacturing and supplying Parapet Boundary Walls which is. Available in a variety of designs, finishes, and sizes. This Parapet Jali is ideal for fencing the areas around structures to give them a stunning appearance. Using cement concrete and creative designs, our professional team designed and built the wall in accordance with all processes. Parapet Jali can be purchased at Harmain Traders for the most affordable prices' },
        ]
    },

];



const ParapatJaliDataWithSlug = ParapetJali.map(item => ({
    ...item,
    slug: slugify(item.imgName)
}));


export default ParapatJaliDataWithSlug;