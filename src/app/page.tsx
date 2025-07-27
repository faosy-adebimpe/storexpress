'use client';

import CategoriesBar from '@/components/CategoriesBar';
import Item from '@/components/Item';
import Loading from '@/components/Loading';
import { useProductsStore } from '@/store/productsStore';
import { fetchCategories, fetchDynaicProducts } from '@/utils/fetchers';
import { useQuery } from '@tanstack/react-query';
import classNames from 'classnames';
import { Settings2Icon } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
    const { url, setUrl } = useProductsStore();
    const {
        isLoading: productsLoading,
        data: products,
        error: productsError,
    } = useQuery({
        queryKey: ['products', url],
        queryFn: () => fetchDynaicProducts(url),
    });

    const {
        isLoading: categoriesLoading,
        data: categories,
        error: categoriesError,
    } = useQuery({
        queryKey: ['categories'],
        queryFn: fetchCategories,
    });

    const [openCategories, setOpenCategories] = useState(true);
    const [openCategoriesBar, setOpenCategoriesBar] = useState(true);

    return (
        <div>
            {/* <Hero /> */}
            <div className="">
                <div
                    className={classNames(
                        'w-full h-20 lg:p-3 bg-white transition-all duration-500 flex justify-between items-center sticky top-0 z-10'
                    )}
                >
                    <h2 className="text-lg lg:text-2xl font-semibold flex gap-1 items-center">
                        <span className="">All Products</span>
                        <span className="hidden lg:block">
                            ({products?.total})
                        </span>
                    </h2>

                    <div className="hidden lg:flex items-center gap-5">
                        <button
                            className="px-5 py-1 cc gap-1 font-semibold"
                            onClick={() =>
                                setOpenCategoriesBar((prev) => !prev)
                            }
                        >
                            <span className="">
                                {openCategoriesBar
                                    ? 'Hide Filters'
                                    : 'Show Filters'}
                            </span>
                            <Settings2Icon className="size-4" />
                        </button>
                    </div>
                </div>

                {/* categories */}
                <div
                    className={classNames(
                        'lg:hidden overflow-hidden transition-all duration-200',
                        {
                            'mt-9 max-h-screen': openCategories,
                            'max-h-0': !openCategories,
                        }
                    )}
                >
                    {categoriesLoading && <Loading />}
                    {categoriesError && (
                        <p>
                            Failed to fetch categories:{' '}
                            {categoriesError.message}
                        </p>
                    )}
                    <div className="flex gap-5 items-center overflow-auto scrollbar-hide">
                        {categories?.map((category) => (
                            <button
                                key={category.slug}
                                className="font-semibold whitespace-nowrap"
                                onClick={() => setUrl(category.slug)}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>
                </div>

                <hr className="w-full text-page-gray opacity-50 my-7 lg:hidden" />
                {/* results */}
                <div className="flex justify-between items-center lg:hidden">
                    <p className="text-page-gray font-semibold">
                        {products?.total && `${products.total} Results`}
                    </p>
                    <button
                        className="px-5 py-1 cc gap-1 border border-page-gray rounded-full font-semibold"
                        onClick={() => setOpenCategories((prev) => !prev)}
                    >
                        <span className="">Filter</span>
                        <Settings2Icon className="size-4" />
                    </button>
                </div>

                {/* fetch states */}
                {/* {productsLoading && <p>Loading products...</p>} */}
                {productsLoading && <Loading />}
                {productsError && (
                    <p>Error fetching products: {productsError.message}</p>
                )}

                {/* display products & categories */}
                <div className={classNames('flex gap-10')}>
                    {/* display categories */}
                    <div
                        className={classNames(
                            'gap-10 overflow-hidden transition-all duration-200   sticky top-20 left-0 w-72 hidden lg:block mt-5 p-3 max-h-[calc(100vh-5rem)] overflow-y-auto ',
                            {
                                'max-w-screen': openCategoriesBar,
                                'max-w-0': !openCategoriesBar,
                            }
                        )}
                    >
                        <CategoriesBar
                            categoriesLoading={categoriesLoading}
                            categories={categories}
                            categoriesError={categoriesError}
                        />
                    </div>

                    {/* display products */}
                    <div className="w-full mt-5 lg:mt-0 grid gap-x-2 lg:gap-x-4 gap-y-9 grid-cols-2 lg:grid-cols-3 lg:gap-y-12">
                        {products?.products.slice(0, 20).map((item) => (
                            <Item key={item.id} {...item} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
