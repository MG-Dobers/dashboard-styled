import axios from 'axios';
import { Product, Category } from './definitions';

const API_URL = process.env.NEXT_PUBLIC_WP_API_URL!;
const CONSUMER_KEY = process.env.NEXT_PUBLIC_WP_CONSUMER_KEY!;
const CONSUMER_SECRET = process.env.NEXT_PUBLIC_WP_CONSUMER_SECRET!;
const ITEMS_PER_PAGE = 24;

const axiosInstance = axios.create({
    baseURL: API_URL,
    auth: {
        username: CONSUMER_KEY,
        password: CONSUMER_SECRET,
    },
});

export async function fetchFilteredProducts(query = '', currentPage = 1, category?: string) {
    try {
        const { data, headers } = await axiosInstance.get<Product[]>('/wp-json/wc/v3/products', {
            params: {
                search: query || undefined,
                category: category || undefined,
                per_page: ITEMS_PER_PAGE,
                page: currentPage,
                status: 'publish',
            },
        });

        return {
            products: data,
            total: parseInt(headers['x-wp-total'], 10) || 0,
        };
    } catch (error: any) {
        console.error('Database Error:', error.response?.data || error.message);
        throw new Error(`Failed to fetch products: ${error.message}`);
    }
}

export async function fetchProductsPages(query = '', category?: string) {
    try {
        const { headers } = await axiosInstance.get('/wp-json/wc/v3/products', {
            params: {
                search: query || undefined,
                category: category || undefined,
                status: 'publish',
                per_page: 1,
            },
        });

        return Math.ceil((parseInt(headers['x-wp-total'], 10) || 0) / ITEMS_PER_PAGE);
    } catch (error: any) {
        console.error('Database Error:', error.response?.data || error.message);
        throw new Error(`Failed to fetch total number of products: ${error.message}`);
    }
}

/*
export async function fetchCategories() {
    try {
        const { data } = await axiosInstance.get<Category[]>('/wp-json/wc/v3/products/categories', {
            params: {
                per_page: 100,
                hide_empty: true,
            },
        });

        return data;
    } catch (error: any) {
        console.error('Error fetching product categories:', error.response?.data || error.message);
        return [];
    }
}
*/

export async function fetchProductBySlug(slug: string) {
    try {
        const { data } = await axiosInstance.get<Product[]>(`${API_URL}/wp-json/wc/v3/products`, {
            params: {
                slug: slug,
                status: 'publish'
            },
        });

        return data[0];
    } catch (error) {
        console.error('Error fetching product by slug:', error);
        throw new Error('Failed to fetch product by slug');
    }
}
