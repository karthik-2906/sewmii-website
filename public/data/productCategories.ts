// Navigation Links
export interface Product {
    id: number;
    name: string;
    link: string;
    query: string;
}

export interface ProductCategory {
    name: string;
    link: string;
    products: Product[];
}

export const productCategories = [
    {
        name: "Women",
        link: "/products/women",
        products: [
            { id: 1, name: "Corsets", link: "/products/women", query: "corsets" },
            // { id: 2, name: "Shirts", link: "#", query: "" },
            // { id: 3, name: "Pants", link: "#", query: "" },
            // { id: 4, name: "Corsets", link: "#", query: "" },
            // { id: 5, name: "Skirts", link: "#", query: "" },
            // { id: 6, name: "Dresses", link: "#", query: "" },
        ]
    },
    // {
    //     name: "Men",
    //     link: "/products/men",
    //     products: [
    //         { id: 1, name: "Basic Blocks", link: "/products/men", query: "blocks" },
    //         { id: 2, name: "Shirts", link: "/products/men", query: "shirts" },
    //         { id: 3, name: "Pants", link: "/products/men", query: "pants" },
    //     ]
    // },
];

// Tabs for products
export type CarouselImage = {
    src: string;
    alt: string;
};

export type ProductCardInfo = {
    id: string;
    title: string;
    desc: string;
    shopeeLink: string;
    etsyLink: string;
    carouselImages: CarouselImage[];
};

export const mensProductCategories = [
    {
        label: 'Basic Blocks',
        value: 'blocks',
    }, {
        label: 'Shirts',
        value: 'shirts',
    }, {
        label: 'Pants',
        value: 'pants',
    }
]

export const womensProductCategories = [
    {
        label: 'Corsets',
        value: 'corsets',
    }
]