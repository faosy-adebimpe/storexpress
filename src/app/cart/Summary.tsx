'use client';

import classNames from 'classnames';
import { ChevronDownIcon } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const Summary = ({ totalPrice }: { totalPrice: number }) => {
    const [showPromoEntry, setShowPromoEntery] = useState(false);

    return (
        // <div className="hidden lg:flex flex-col items-start min-w-1/3">
        <div className="hidden lg:flex flex-col items-start w-1/3">
            <h2 className="font-semibold text-xl py-3">Summary</h2>

            <div className="w-full m-0 p-0 mt-6">
                <div className="flex gap-3 justify-between">
                    <h5 className="font-semibold">Do you have a Promo Code?</h5>
                    <button
                        className=""
                        onClick={() => setShowPromoEntery((prev) => !prev)}
                    >
                        <ChevronDownIcon
                            className={classNames(
                                'size-6 transition-transform',
                                { '-rotate-180': showPromoEntry }
                            )}
                        />
                    </button>
                </div>

                <div
                    className={classNames(
                        'w-full flex items-center gap-3 text-gray-500 transition-all overflow-hidden',
                        {
                            ' mb-7 mt-2 max-h-screen': showPromoEntry,
                            'max-h-0': !showPromoEntry,
                        }
                    )}
                >
                    <input
                        type="text"
                        className="px-3 py-2 rounded-lg border border-gray-300 outline-none flex-auto"
                    />
                    <button className="px-5 py-2 rounded-full border border-gray-300 font-semibold">
                        Apply
                    </button>
                </div>
            </div>

            <ul className="w-full flex gap-1 flex-col items-start mt-1 font-semibold">
                <li className="w-full flex gap-1 justify-between items-center">
                    <p>Subtotal</p>
                    <p>${totalPrice}</p>
                </li>
                <li className="w-full flex gap-1 justify-between items-center">
                    <p>Estimated Shipping & Handling</p>
                    <p>Free</p>
                </li>
                <li className="w-full flex gap-1 justify-between items-center">
                    <p>Estimated Tax</p>
                    <p>-</p>
                </li>
                <li className="w-full flex gap-1 justify-between items-center">
                    <p>Discount Total</p>
                    <p>-</p>
                </li>
                <li className="w-full flex gap-1 justify-between items-center">
                    <p className="text-green-500">0% off</p>
                    {/* <p>-</p> */}
                </li>

                {/* total */}
                <hr className="hr my-3" />
                <li className="w-full flex gap-1 justify-between items-center">
                    {/* <p className="text-green-500">Total</p> */}
                    <p className="">Total</p>
                    <p>${totalPrice}</p>
                </li>
                <hr className="hr my-3" />

                <li className="font-normal">
                    You qualify for{' '}
                    <span className="font-semibold">Free Shipping</span> as a
                    member!{' '}
                    <Link
                        href="/account"
                        className="underline underline-offset-2 font-semibold text-gray-500"
                    >
                        Join us
                    </Link>{' '}
                    or{' '}
                    <Link
                        href="/account"
                        className="underline underline-offset-2 font-semibold text-gray-500"
                    >
                        Sign-in
                    </Link>
                </li>

                <li className="w-full flex gap-2 items-center">
                    <div className="w-full h-2 flex-auto bg-green-800 rounded-full"></div>
                    <p className="">$50</p>
                </li>

                <li className="w-full mt-5 flex">
                    <Link
                        href="/account"
                        className="w-full py-5 px-1 font-bold text-white bg-black rounded-full btn cc"
                    >
                        Checkout
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Summary;
