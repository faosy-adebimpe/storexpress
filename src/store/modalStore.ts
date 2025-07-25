import { ModalStore } from '@/types';
import { create } from 'zustand';

export const useModalStore = create<ModalStore>((set, get) => ({
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

    // cart notification
    cartNotificationOpened: false,
    openCartNotification: () => {
        const { cartNotificationOpened } = get();
        if (cartNotificationOpened) {
            return;
        }
        set({ cartNotificationOpened: true });
    },
    closeCartNotification: () => {
        const { cartNotificationOpened } = get();
        if (!cartNotificationOpened) {
            return;
        }
        set({ cartNotificationOpened: false });
    },
}));
