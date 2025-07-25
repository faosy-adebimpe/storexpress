'use client';

import classNames from 'classnames';
import SidebarList from './SidebarList';
import { useModalStore } from '@/store/modalStore';

const Sidebar = () => {
    const { sidebarOpened } = useModalStore();
    return (
        <aside
            className={classNames(
                'h-screen fixed bg- w-72 z-20 transition-transform duration-300 right-0 lg:hidden',
                {
                    'translate-x-[100vw]': !sidebarOpened,
                }
            )}
        >
            <div className="bg-white text-black w-full h-full ml-auto p-5 pt-36">
                <SidebarList />
            </div>
        </aside>
    );
};

export default Sidebar;
