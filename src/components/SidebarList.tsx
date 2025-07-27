'use client';

import { useModalStore } from '@/store/modalStore';
import { ChevronRightIcon, XIcon } from 'lucide-react';
import Link from 'next/link';

const SidebarList = () => {
    const { closeSidebar } = useModalStore();
    return (
        // <ul className="text-xl flex flex-col gap-3">
        //     <li className="absolute top-5 right-5">
        //         <button
        //             className="size-10 rounded-full transitoin hover:bg-gray-100 cc"
        //             onClick={closeSidebar}
        //         >
        //             <XIcon className="size-6" />
        //         </button>
        //     </li>
        //     <li>
        //         <Link
        //             href="#"
        //             className="w-full flex justify-between items-center"
        //         >
        //             <p className="font-semibold">New</p>
        //             <ChevronRightIcon className="size-5" />
        //         </Link>
        //     </li>
        //     <li>
        //         <Link
        //             href="#"
        //             className="w-full flex justify-between items-center"
        //         >
        //             <p className="font-semibold">Men</p>
        //             <ChevronRightIcon className="size-5" />
        //         </Link>
        //     </li>
        //     <li>
        //         <Link
        //             href="#"
        //             className="w-full flex justify-between items-center"
        //         >
        //             <p className="font-semibold">Women</p>
        //             <ChevronRightIcon className="size-5" />
        //         </Link>
        //     </li>
        // </ul>
        <ul className="text-xl flex flex-col gap-3">
            <li className="absolute top-5 right-5">
                <button
                    className="size-10 rounded-full transitoin hover:bg-gray-100 cc"
                    onClick={closeSidebar}
                >
                    <XIcon className="size-6" />
                </button>
            </li>

            <li className="w-full cc">
                <Link
                    href="/account"
                    className="w-full py-4 px-2 rounded-full text-black font-semibold btn border border-gray-300 cc"
                >
                    <span>Sign In</span>
                </Link>
            </li>
            <li className="w-full cc">
                <Link
                    href="/account"
                    className="w-full py-4 px-2 rounded-full text-white bg-black font-semibold btn cc"
                >
                    <span>Join Us</span>
                </Link>
            </li>
        </ul>
    );
};

export default SidebarList;
