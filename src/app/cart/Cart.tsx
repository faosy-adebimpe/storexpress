'use client';

import { useCartStore } from '@/store/cartStore';
import CartItem from './CartItem';
import { useQuery } from '@tanstack/react-query';
import { fetchCartProducts } from '@/utils/fetchers';
import Loading from '@/components/Loading';

const Cart = () => {
    const { getCartItemIds } = useCartStore();
    const ids = getCartItemIds();

    const { isLoading, data, error } = useQuery({
        queryKey: ['cartProducts', ids],
        queryFn: () => fetchCartProducts(ids),
        enabled: ids.length > 0,
    });

    if (isLoading) {
        return <Loading />;
    }

    if (error) {
        return <p className="">Error: {error.message}</p>;
    }

    return (
        <div className="">
            {data?.map((item) => (
                <CartItem key={item.id} {...item} />
            ))}
        </div>
    );
};

export default Cart;
