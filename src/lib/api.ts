import axios from 'axios';

// https://dummyjson.com/products/1

export const productsApi = axios.create({
    baseURL: 'https://dummyjson.com',
});
