import { ModalStore } from '@/types';
import { create } from 'zustand';

export const useModalStore = create<ModalStore>((set) => ({
    // sidebar
    sidebarOpened: false,
    openSidebar: () => {
        set({ sidebarOpened: true });
    },
    closeSidebar: () => {
        set({ sidebarOpened: false });
    },

    // scrolled
    scrolled: false,
    setScrolled: (value) => {
        set({ scrolled: value });
    },

    // search
    searchOpened: false,
    openSearch: () => {
        set({ searchOpened: true });
    },
    closeSearch: () => {
        set({ searchOpened: false });
    },
}));
