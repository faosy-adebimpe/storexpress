'use client';

import { useCartStore } from '@/store/cartStore';
import Cart from './Cart';
import Summary from './Summary';

const CartPage = () => {
    const { getTotal, getTotalPrice } = useCartStore();
    const totalItems = getTotal();
    const totalPrice = getTotalPrice();
    return (
        <div className="flex gap-7 p-3 max-w-[1094px] mx-auto">
            <div className="flex-auto">
                <div className="text-center mb-5 p-3 lg:px-0">
                    <h2 className="text-2xl font-semibold text-gray-800 lg:text-left">
                        Bag
                    </h2>
                    <p className="text-gray-600 lg:hidden font-semibold">
                        <span className="">{totalItems}</span> Items | ${' '}
                        <span className="text-gray-700">{totalPrice}</span>
                    </p>
                </div>

                <hr className="w-full text-gray-300 mb-10 lg:hidden" />

                {/* empty cart */}
                {totalItems <= 0 && (
                    <p className="mt-2">There are not items in your bag.</p>
                )}

                <Cart />
            </div>
            <Summary totalPrice={totalPrice} />
        </div>
    );
};

export default CartPage;
