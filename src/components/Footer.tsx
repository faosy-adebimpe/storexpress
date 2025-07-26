'use client';

import { GlobeIcon } from 'lucide-react';
import Accordion from './Accordion';
import footerData from '@/data/footer.data';
import { usePathname } from 'next/navigation';

const Footer = () => {
    const pathname = usePathname();
    const addSpace = pathname === '/cart';
    return (
        <footer className="mt-20 p-3" id="footer">
            <hr className="text-gray-300 w-full" />
            <div className="container mt-12">
                <div className="flex gap-5 flex-col items-start lg:hidden">
                    {footerData.map((item) => (
                        <Accordion key={item.id} {...item} />
                    ))}
                </div>

                <div className="hidden lg:flex justify-between items-start">
                    {footerData.map((item) => (
                        <div
                            key={item.id}
                            className="flex gap-8 flex-col items-start"
                        >
                            <h3 className="font-semibold">{item.button}</h3>
                            <ul className="flex gap-2 flex-col items-start text-gray-500">
                                {item.items.map((element, index) => (
                                    <li key={index}>{element}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    <div className="text-gray-500 flex gap-1 items-center mb-7">
                        <GlobeIcon className="size-4" />
                        <span className="text-sm font-semibold ">Nigeria</span>
                    </div>
                </div>

                <div className="mt-10 lg:hidden">
                    <div className="text-gray-500 flex gap-1 items-center mb-7">
                        <GlobeIcon className="size-4" />
                        <span className="text-sm font-semibold ">Nigeria</span>
                    </div>
                </div>
                <hr className="text-gray-300 w-full lg:hidden" />
                <div className="flex gap-2 flex-col items-start text-sm text-gray-500 font-semibold mt-5 lg:flex-row lg:justify-between lg:items-center lg:my-20">
                    <p className="">&copy; 2025 StoreXpress</p>
                    <p className="">Terms of Sale</p>
                    <p className="">StoreXpress Privacy Policy</p>
                </div>
            </div>

            {addSpace && <div className="w-full h-36"></div>}
        </footer>
    );
};

export default Footer;
