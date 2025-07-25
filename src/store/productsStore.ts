import { ProductsStore } from '@/types';
import { create } from 'zustand';

export const useProductsStore = create<ProductsStore>((set) => ({
    url: undefined,
    setUrl: (url) => {
        set({ url });
    },
}));
