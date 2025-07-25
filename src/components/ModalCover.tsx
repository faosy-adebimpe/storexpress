'use client';

import { useModalStore } from '@/store/modalStore';
import classNames from 'classnames';
import React from 'react';

const ModalCover = () => {
    const { sidebarOpened, closeSidebar } = useModalStore();
    return (
        <div
            className={classNames(
                'z-10 fixed w-screen h-screen bg-black/20 lg:hidden',
                {
                    hidden: !sidebarOpened,
                }
            )}
            onClick={closeSidebar}
        ></div>
    );
};

export default ModalCover;
