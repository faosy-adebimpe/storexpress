'use client';

import { useCartStore } from '@/store/cartStore';
import { Product } from '@/types';
import ucFirst from '@/utils/uc-first';
import { HeartIcon, MinusIcon, PlusIcon, Trash2Icon } from 'lucide-react';
import Image from 'next/image';

const CartItem = ({
    id,
    title,
    // price,
    category,
    brand,
    thumbnail,
}: Product) => {
    const { getItemCount, updateCartItem, removeItemFromCart, getItemPrice } =
        useCartStore();
    const itemCount = getItemCount(id);
    const itemPrice = getItemPrice(id);
    return (
        <div className="">
            <div className="flex gap-[13px] items-start">
                <div className="flex gap-[13px] flex-col">
                    <div className="size-[154px] bg-gray-200 relative">
                        <Image
                            src={thumbnail}
                            fill
                            title={title}
                            alt={title}
                            className="object-cover object-center"
                        />
                    </div>
                    <div className="flex gap-[8px] items-center">
                        <div className="w-[106px] h-[42px] border border-[#e5e5e5] rounded-[30px] flex gap-2 items-center">
                            {itemCount && itemCount <= 1 ? (
                                <button
                                    className="cart-icon"
                                    onClick={() => removeItemFromCart(id)}
                                >
                                    <Trash2Icon className="size-4" />
                                </button>
                            ) : (
                                <button
                                    className="cart-icon"
                                    onClick={() => updateCartItem(id, 'remove')}
                                >
                                    <MinusIcon className="size-4" />
                                </button>
                            )}
                            <p>{itemCount}</p>
                            <button
                                className="cart-icon"
                                onClick={() => updateCartItem(id, 'add')}
                            >
                                <PlusIcon className="size-4" />
                            </button>
                        </div>
                        <button className="cart-icon border border-[#e5e5e5] rounded-[30px]">
                            <HeartIcon className="size-4" />
                        </button>
                    </div>
                </div>

                <div className="flex flex-col items-start w-full">
                    <div className="flex flex-col sm:w-full sm:flex-row-reverse sm:gap-1 sm:justify-between">
                        <h5 className="font-semibold">${itemPrice}</h5>
                        <h5 className="font-semibold">{title}</h5>
                    </div>
                    <p className="">{ucFirst(category)}</p>
                    <p className="">
                        {brand}
                        {/* <span className="">
                            Size <span className="underline">M 7 / W 8</span>
                        </span> */}
                    </p>
                </div>
            </div>
            <hr className="hr my-10" />
        </div>
    );
};

export default CartItem;
