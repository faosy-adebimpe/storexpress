'use client';

import {
    AlignJustify,
    HeartIcon,
    SearchIcon,
    ShoppingBagIcon,
    UserRoundIcon,
} from 'lucide-react';
import React from 'react';
import Sidebar from './Sidebar';
import { useModalStore } from '@/store/modalStore';
import ModalCover from './ModalCover';
import SearchBar from './SearchBar';
import logo from '@/assets/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import LoadCart from './LoadCart';
import { useCartStore } from '@/store/cartStore';

const Navbar = () => {
    const { openSidebar, openSearch, sidebarOpened, closeSidebar } =
        useModalStore();
    const { getTotal } = useCartStore();
    const total = getTotal();
    return (
        <nav className="overflow-x-hidden" id="nav">
            <LoadCart />
            <ModalCover opened={sidebarOpened} close={closeSidebar} />
            <Sidebar />
            <SearchBar />
            <div className="container flex justify-between items-center">
                {/* <h2 className="">Logo</h2> */}
                <Link href="/" className="relative size-16 lg:size-24">
                    <Image
                        src={logo}
                        fill
                        title="logo"
                        alt="logo"
                        className="object-contain object-center"
                    />
                </Link>
                <div className="flex items-center">
                    <div className="nav-icon-wrapper" onClick={openSearch}>
                        <SearchIcon className="nav-icon" />
                    </div>
                    <Link
                        href="/account"
                        className="nav-icon-wrapper lg:hidden"
                    >
                        <UserRoundIcon className="nav-icon" />
                    </Link>
                    <Link href="/cart" className="nav-icon-wrapper relative">
                        <ShoppingBagIcon className="nav-icon" />
                        <div className="size-6 rounded-full text-white bg-black cc absolute -right-[1px] -top-[1px] border-2 border-white">
                            <span className="text-[10px] font-semibold">
                                {total > 9 ? '9+' : total}
                            </span>
                        </div>
                    </Link>
                    <div
                        className="nav-icon-wrapper lg:hidden"
                        onClick={openSidebar}
                    >
                        <AlignJustify className="nav-icon" />
                    </div>
                    <div
                        className="nav-icon-wrapper hidden lg:flex"
                        onClick={openSidebar}
                    >
                        <HeartIcon className="nav-icon" />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
