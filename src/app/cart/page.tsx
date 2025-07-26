'use client';

import { useCartStore } from '@/store/cartStore';
import Cart from './Cart';
import Summary from './Summary';
import Link from 'next/link';

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

                <div className="fixed w-full left-0 bottom-0 bg-white p-3 flex gap-1 flex-col h-36 border-t border-gray-200 lg:hidden">
                    <p className="">
                        You qualify for{' '}
                        <span className="font-semibold">Free Shipping</span> as
                        a Member!{' '}
                        <Link
                            className="underline underline-offset-2 font-semibold text-gray-500"
                            href="/account"
                        >
                            Join us
                        </Link>{' '}
                        or{' '}
                        <Link
                            className="underline underline-offset-2 font-semibold text-gray-500"
                            href="/account"
                        >
                            Sign-in
                        </Link>
                    </p>

                    <div className="flex gap-2 items-center">
                        <div className="h-2 rounded-full w-full flex-auto bg-green-800"></div>
                        <p className="font-semibold">$50</p>
                    </div>

                    <Link
                        href="/acount"
                        className="cc mt-1 w-full px-1 py-5 rounded-full bg-black text-white btn"
                    >
                        <span className="font-semibold">Go to Checkout</span>
                    </Link>
                </div>
            </div>
            <Summary totalPrice={totalPrice} />
        </div>
    );
};

export default CartPage;
