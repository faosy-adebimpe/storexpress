import { Product } from '@/types';
import ucFirst from '@/utils/uc-first';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Item = ({
    id,
    title,
    category,
    price,
    thumbnail,
    availabilityStatus,
    stock,
    brand,
}: Product) => {
    const available = availabilityStatus === 'In Stock';
    return (
        <Link
            href={`/products/${id}`}
            className="flex gap-3 flex-col items-start"
        >
            <div className="w-full aspect-square bg-[#f5f5f5] relative">
                <Image
                    src={thumbnail}
                    fill
                    title={title}
                    alt={title}
                    className="object-cover object-center"
                />
            </div>
            <div className="flex flex-col items-start w-full">
                <p className="font-semibold truncate max-w-full text-wrap">
                    {title}
                </p>
                <p className="text-page-gray">{ucFirst(category)}</p>
                <p className="text-pgae-gray">{brand}</p>
            </div>
            <div className="flex flex-col items-start font-semibold">
                <p className="">${price}</p>
                <p
                    className={classNames('font-semibold', {
                        'text-green-500': available,
                        'text-red-500': !available,
                    })}
                >
                    {availabilityStatus} ({stock})
                </p>
            </div>
        </Link>
    );
};

export default Item;

// <div className="w-full aspect-square bg-red-200"></div>
//     <div className="flex flex-col items-start">
//         <p className="font-semibold text-red-500">Best Seller</p>
//         <p className="font-semibold">Nike Dunk Low Retro</p>
//         <p className="text-page-gray">Men&apos;s Shoes</p>
//         <p className="text-pgae-gray">9 Colors</p>
//     </div>
//     <div className="flex flex-col items-start font-semibold">
//         <p className="">$120</p>
//         <p className="text-green-500">Extra 20% w/ SPORT</p>
//     </div>
// </div>
