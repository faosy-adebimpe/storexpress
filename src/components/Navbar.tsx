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

const Navbar = () => {
    const { openSidebar, openSearch } = useModalStore();
    return (
        <nav className="overflow-x-hidden" id="nav">
            <ModalCover />
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
                    <div className="nav-icon-wrapper">
                        <ShoppingBagIcon className="nav-icon" />
                    </div>
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
