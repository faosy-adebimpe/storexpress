'use client';

import { Category } from '@/types';
import { ChevronRightIcon } from 'lucide-react';
import React from 'react';
import Loading from './Loading';
import { useProductsStore } from '@/store/productsStore';

const CategoriesBar = ({
    categories,
    categoriesLoading,
    categoriesError,
}: {
    categoriesLoading: boolean;
    categories: Category[] | undefined;
    categoriesError: Error | null;
}) => {
    const { setUrl } = useProductsStore();
    if (categoriesLoading) {
        return <Loading />;
    }

    if (categoriesError) {
        return <p>Error: {categoriesError.message}</p>;
    }
    return (
        <div className="sticky top-20 left-0 w-72 hidden lg:block mt-5 p-3 max-h-[calc(100vh-5rem)] overflow-y-auto">
            <div className="w-full flex gap-3 flex-col items-start overflow-auto">
                {categories?.map((category) => (
                    <button
                        key={category.slug}
                        className="w-full flex justify-between items-center font-semibold text-lg transition hover:opacity-70"
                        onClick={() => setUrl(category.slug)}
                    >
                        <span className="">{category.name}</span>
                        <ChevronRightIcon className="size-6" />
                    </button>
                ))}
            </div>
        </div>
    );
};

export default CategoriesBar;
