import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import React from 'react';

const Hero = () => {
    return (
        <section
            className="cc bg-[#f7f7f7] border-b border-gray-200/70 py-2"
            id="hero"
        >
            <div className="container cc sm:gap-40">
                <ChevronLeftIcon className="size-4 hidden sm:block" />
                <p className="font-semibold underline text-sm">
                    Look for Store Pickup at Checkout
                </p>
                <ChevronRightIcon className="size-4 hidden sm:block" />
            </div>
        </section>
    );
};

export default Hero;
