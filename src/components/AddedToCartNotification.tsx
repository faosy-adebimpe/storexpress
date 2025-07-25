'use client';

import { useCartStore } from '@/store/cartStore';
import { useModalStore } from '@/store/modalStore';
import { Product } from '@/types';
import ucFirst from '@/utils/uc-first';
import classNames from 'classnames';
import { CircleCheckBigIcon, XIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AddedToCartNotification = ({
    title,
    thumbnail,
    category,
    price,
    brand,
}: Product) => {
    const { cartNotificationOpened, closeCartNotification } = useModalStore();
    const { getTotal } = useCartStore();
    return (
        <div
            className={classNames(
                'w-screen h-screen fixed z-20 top-0 left-0 flex justify-center items-end',
                { hidden: !cartNotificationOpened }
            )}
        >
            <div
                className="absolute w-full h-full bg-black/30"
                onClick={closeCartNotification}
            ></div>
            <div
                className={classNames(
                    'flex gap-5 flex-col relative border border-blue-100 p-5 rounded-[15px_15px_0_0] bg-white w-md transition-transform duration-300',
                    { 'translate-y-full': !cartNotificationOpened }
                )}
            >
                <button
                    className="size-10 bg-gray-100 rounded-full cc transition absolute  right-3 top-5"
                    onClick={closeCartNotification}
                >
                    <XIcon className="size-6 text-black/70" />
                </button>

                <div className="flex gap-3 items-center">
                    <CircleCheckBigIcon className="size-5" />
                    <h3 className="font-semibold">Added to Bag</h3>
                </div>

                <div className="flex gap-2 items-start">
                    <div className="size-[120px] bg-gray-200 relative">
                        <Image
                            src={thumbnail}
                            fill
                            title={title}
                            alt={title}
                            className="object-cover object-center"
                        />
                    </div>

                    <div className="text-gray-500">
                        <h5 className="font-semibold text-black">{title}</h5>
                        <p className="">{ucFirst(category)}</p>
                        {/* <p className="">Size M6 / W7</p> */}
                        <p className="">{brand}</p>
                        <p className="font-semibold text-black">${price}</p>
                    </div>
                </div>

                <div className="font-semibold flex gap-2 flex-col">
                    <Link
                        href="/cart"
                        className="btn w-full border border-gray-300 text-black bg-transparent rounded-full py-4 cc"
                    >
                        View Bag ({getTotal()})
                    </Link>
                    <button className="btn w-full text-white bg-black rounded-full py-4">
                        Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddedToCartNotification;
