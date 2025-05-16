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
        ]
    },
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
    tutorialLink: string;
    shopeeLink: string;
    etsyLink: string;
    carouselImages: CarouselImage[];
};

export const womensProductCategories = [
    {
        label: 'Corsets',
        value: 'corsets',
    }
]