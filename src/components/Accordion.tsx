'use client';

import { AccordionType } from '@/types';
import classNames from 'classnames';
import { ChevronDownIcon } from 'lucide-react';
import React, { useState } from 'react';
const Accordion = ({ button, items }: AccordionType) => {
    const [open, setOpen] = useState(false);
    return (
        <div className="w-full overflow-hidden">
            <button
                onClick={() => setOpen((prev) => !prev)}
                className="w-full flex gap-3 justify-between items-center"
            >
                <span className="font-semibold">{button}</span>
                <ChevronDownIcon
                    className={classNames(
                        'size-5 transition-transform duration-300',
                        { '-rotate-180': open }
                    )}
                />
            </button>
            <ul
                className={classNames(
                    'transition-all duration-300 mt-5 flex gap-2 flex-col text-sm overflow-hidden',
                    {
                        'max-h-screen mb-10': open,
                        'max-h-0': !open,
                    }
                )}
            >
                {items.map((item, index) => (
                    <li key={index} className="font-semibold text-gray-500">
                        {item}
                    </li>
                ))}
            </ul>

            <hr className="text-gray-300 w-full" />
        </div>
    );
};

export default Accordion;
