// https://dummyjson.com/products/1

import { productsApi } from '@/lib/api';
import { Category, Product, ProductResponse } from '@/types';

export const fetchProducts = async (): Promise<ProductResponse> => {
    const response = await productsApi.get('/products');
    return response.data;
};

export const fetchDynaicProducts = async (
    slug?: string
): Promise<ProductResponse> => {
    const url =
        slug && slug !== '/products'
            ? `/products/category/${slug}`
            : '/products';
    const response = await productsApi.get(url);
    return response.data;
};

export const fetchProduct = async (id: string): Promise<Product> => {
    const response = await productsApi.get(`/products/${id}`);
    return response.data;
};

export const fetchCategories = async (): Promise<Category[]> => {
    const response = await productsApi.get('/products/categories');
    return response.data;
};
