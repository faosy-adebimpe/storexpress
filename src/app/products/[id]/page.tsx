'use client';

import AddedToCartNotification from '@/components/AddedToCartNotification';
import Loading from '@/components/Loading';
import { useBookmarkStore } from '@/store/bookmarkStore';
import { useCartStore } from '@/store/cartStore';
import { useModalStore } from '@/store/modalStore';
import { fetchProduct } from '@/utils/fetchers';
import ucFirst from '@/utils/uc-first';
import { useQuery } from '@tanstack/react-query';
import { CheckIcon, HeartIcon, StarIcon } from 'lucide-react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const ProductPage = () => {
    const params = useParams();
    const { id } = params;
    const { isLoading, data, error } = useQuery({
        queryKey: ['product', id],
        queryFn: () => fetchProduct(id as string),
        enabled: !!id,
    });

    // modal store
    const { openCartNotification } = useModalStore();

    // cart store
    const { addItemToCart } = useCartStore();

    const { addBookmark, isBookmarked } = useBookmarkStore();
    const [bookmarked, setBookmarked] = useState<boolean | null>(null);

    useEffect(() => {
        setBookmarked(isBookmarked(Number(id)));
    }, [id, isBookmarked]);

    const add = () => {
        if (!data || !data.id) {
            return;
        }
        const response = addBookmark(data?.id);
        setBookmarked(response);
    };

    if (isLoading) {
        return <Loading />;
    }

    if (error) {
        return <div className="">Error: {error.message}</div>;
    }

    const addToBag = () => {
        openCartNotification();

        if (!data || !data.id) {
            return;
        }
        addItemToCart(data?.id, data?.price);
    };

    return (
        <div>
            {/* notification modal */}
            {data && <AddedToCartNotification {...data} />}
            {/* mobile */}
            <div className="lg:hidden">
                <div className="flex flex-col items-start">
                    <h2 className="text-2xl font-semibold">{data?.title}</h2>
                    <p className=" text-gray-500">
                        {data && ucFirst(data?.category)}
                    </p>
                    <h3 className="text-xl font-semibold mt-3">
                        ${data?.price}
                    </h3>
                </div>

                {data?.images && (
                    <div className="w-full h-[500px] bg-[#f5f5f5] mt-5 relative">
                        <Image
                            src={data?.images[0]}
                            fill
                            title={data?.title}
                            alt={data?.title}
                            className="object-cover object-center"
                        />
                        <div className="cc gap-1 bg-white px-5 py-3 absolute rounded-full left-4 top-4 font-semibold">
                            <StarIcon className="size-4" />
                            <span className="">Highly Rated</span>
                        </div>
                    </div>
                )}

                <div className="flex gap-3 flex-col mt-10">
                    <button
                        className="font-semibold text-white bg-black py-5 rounded-full btn"
                        onClick={addToBag}
                    >
                        Add to Bag
                    </button>
                    <button
                        className="font-semibold bg-white text-black py-5 rounded-full cc gap-1 border border-black/30 btn"
                        onClick={add}
                    >
                        <span className="">Favorite</span>
                        {bookmarked ? (
                            <CheckIcon className="size-5" />
                        ) : (
                            <HeartIcon className="size-5" />
                        )}
                    </button>
                </div>

                <div className="mt-14 flex gap-5 flex-col items-start">
                    <div className="flex flex-col items-start font-semibold">
                        <h4>Shipping</h4>
                        <p className="">{data?.shippingInformation}</p>
                    </div>

                    <div className="flex flex-col items-start ">
                        <h4 className="font-semibold">Description</h4>
                        <p className="">{data?.description}</p>
                    </div>
                </div>
            </div>

            {/* large screens */}
            <div className="hidden lg:flex items-start gap-10 max-w-10/12 mx-auto">
                {data?.images && (
                    <div className="w-full min-h-[500px] bg-[#f5f5f5] relative rounded-lg overflow-hidden">
                        <Image
                            src={data?.images[0]}
                            fill
                            title={data?.title}
                            alt={data?.title}
                            className="object-cover object-center"
                        />
                        <div className="cc gap-1 bg-white px-5 py-3 absolute rounded-full left-4 top-4 font-semibold">
                            <StarIcon className="size-4" />
                            <span className="">Highly Rated</span>
                        </div>
                    </div>
                )}

                <div className="w-4/5">
                    <div className="flex flex-col items-start">
                        <h2 className="text-2xl font-semibold">
                            {data?.title}
                        </h2>
                        <p className=" text-gray-500">
                            {data && ucFirst(data?.category)}
                        </p>
                        <h3 className="text-xl font-semibold mt-3">
                            ${data?.price}
                        </h3>
                    </div>

                    <div className="mt-14 flex gap-5 flex-col items-start">
                        <div className="flex flex-col items-start font-semibold">
                            <h4>Shipping</h4>
                            <p className="">{data?.shippingInformation}</p>
                        </div>

                        <div className="flex flex-col items-start ">
                            <h4 className="font-semibold">Description</h4>
                            <p className="">{data?.description}</p>
                        </div>
                    </div>

                    <div className="flex gap-3 flex-col mt-10">
                        <button
                            className="font-semibold text-white bg-black py-5 rounded-full btn"
                            onClick={addToBag}
                        >
                            Add to Bag
                        </button>
                        <button
                            className="font-semibold bg-white text-black py-5 rounded-full cc gap-1 border border-black/30 btn"
                            onClick={add}
                        >
                            <span className="">Favorite</span>
                            {bookmarked ? (
                                <CheckIcon className="size-5" />
                            ) : (
                                <HeartIcon className="size-5" />
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
