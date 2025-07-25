import { BookmarkStore } from '@/types';
import { create } from 'zustand';

export const useBookmarkStore = create<BookmarkStore>(() => ({
    addBookmark: (id) => {
        const bookmarksString = localStorage.getItem('bookmarks');

        let bookmarks: string[];
        if (bookmarksString) {
            bookmarks = JSON.parse(bookmarksString);
        } else {
            bookmarks = [];
        }

        if (bookmarks.includes(id)) {
            return true;
        }

        if (!bookmarks.push(id)) {
            return false;
        }

        console.log({ bookmarks });

        // save to local storage
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
        return true;
    },

    isBookmarked: (id) => {
        const bookmarksString = localStorage.getItem('bookmarks');
        if (!bookmarksString) return false;

        const bookmarks = JSON.parse(bookmarksString) as string[];

        if (bookmarks.includes(id)) {
            return true;
        }
        return false;
    },
}));
