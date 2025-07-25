'use client';

import { useCartStore } from '@/store/cartStore';
import Cart from './Cart';

const CartPage = () => {
    const { getTotal, getTotalPrice } = useCartStore();
    const totalItems = getTotal();
    const totalPrice = getTotalPrice();
    return (
        <div>
            <div className="text-center mb-5 p-3">
                <h2 className="text-2xl">Bag</h2>
                <p className="text-gray-600">
                    {totalItems} Items | ${totalPrice}
                </p>
            </div>

            <hr className="w-full text-gray-300 mb-10" />

            {/* empty cart */}
            {totalItems <= 0 && (
                <p className="mt-2">There are not items in your bag.</p>
            )}

            <Cart />
        </div>
    );
};

export default CartPage;
