'use client';

import { useCartStore } from '@/store/cartStore';
import { useEffect } from 'react';

const LoadCart = () => {
    const { fetchCart } = useCartStore();

    useEffect(() => {
        fetchCart();
    }, [fetchCart]);
    return null;
};

export default LoadCart;
