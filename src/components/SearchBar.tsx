'use client';

import { useModalStore } from '@/store/modalStore';
import classNames from 'classnames';
import { SearchIcon } from 'lucide-react';
import React from 'react';

const SearchBar = () => {
    const { searchOpened, closeSearch } = useModalStore();
    return (
        <aside
            className={classNames(
                'w-screen h-screen bg-white text-black fixed z-30 transition duration-200',
                { 'translate-x-full': !searchOpened }
            )}
        >
            <div className="container flex gap-9 items-center pr-7">
                <div className="cc relative flex-auto">
                    <SearchIcon className="size-5 text-gray-500 absolute left-2" />
                    <input
                        type="text"
                        className="w-full h-10 bg-gray-100 rounded-full outline-none border-none pl-10 transition hover:bg-gray-200/70 text-gray-500"
                        placeholder="Search"
                    />
                </div>
                <button className="font-semibold" onClick={closeSearch}>
                    Cancel
                </button>
            </div>

            <div className="p-5 mt-10">
                <h5 className="font-semibold text-gray-500">
                    Popular Search Terms
                </h5>

                <ul className="flex gap-5 flex-wrap items-center mt-3">
                    {[
                        'groceries',
                        'furniture',
                        'decoration',
                        'laptop',
                        'shirt',
                        'shoe',
                        'tops',
                        'watches',
                        'dresses',
                    ].map((term, index) => (
                        <li
                            key={index}
                            className="px-5 py-2 rounded-full font-semibold text-black bg-gray-100"
                        >
                            {term}
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
};

export default SearchBar;
