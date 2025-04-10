export type Product = {
    id: number;
    name: string;
    slug: string;
    permalink: string;
    description: string;
    price: string;
    short_description: string;
    currency: string;
    date_created: string;
    date_modified: string;
    images: { src: string; alt?: string }[];
    categories: { id: number; name: string }[];
}

export type Category = {
    id: number;
    name: string;
    slug: string;
}

export type WPUser = {
    id: string;
    name?: string;
    email?: string;
    token?: string;
    nicename?: string;
    firstName?: string;
    lastName?: string;
    displayName?: string;
}