'use client';

// import { useModalStore } from '@/store/modalStore';
import classNames from 'classnames';
import React from 'react';

const ModalCover = ({
    opened,
    close,
}: {
    opened: boolean;
    close: () => void;
}) => {
    // const { sidebarOpened, closeSidebar } = useModalStore();
    return (
        <div
            className={classNames(
                'z-20 fixed w-screen h-screen bg-black/20 lg:hidden',
                {
                    hidden: !opened,
                }
            )}
            onClick={close}
        ></div>
    );
};

export default ModalCover;
