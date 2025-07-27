'use client';

import { useModalStore } from '@/store/modalStore';
import { XIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const SidebarList = () => {
    const { closeSidebar } = useModalStore();
    return (
        <ul className="text-xl flex flex-col gap-3 items-center">
            <li className="absolute top-5 right-5">
                <button
                    className="size-10 rounded-full transitoin hover:bg-gray-100 cc"
                    onClick={closeSidebar}
                >
                    <XIcon className="size-6" />
                </button>
            </li>

            <li className="size-20 relative mb-7">
                <Image
                    src="/logo.png"
                    fill
                    title="logo"
                    alt="logo"
                    className="object-center object-contain"
                />
            </li>

            <li className="w-full cc">
                <Link
                    href="/account"
                    className="w-full py-4 px-2 rounded-full text-black font-semibold btn border border-gray-300 cc"
                >
                    <span className="text-sm">Sign In</span>
                </Link>
            </li>
            <li className="w-full cc">
                <Link
                    href="/account"
                    className="w-full py-4 px-2 rounded-full text-white bg-black font-semibold btn cc"
                >
                    <span className="text-sm">Join Us</span>
                </Link>
            </li>
        </ul>
    );
};

export default SidebarList;
