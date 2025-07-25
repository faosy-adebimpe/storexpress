export interface Product {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand: string;
    sku: string;
    weight: number;
    dimensions: {
        width: number;
        height: number;
        depth: number;
    };
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    reviews: Review[];
    returnPolicy: string;
    minimumOrderQuantity: number;
    meta: Meta;
    images: string[];
    thumbnail: string;
}

export interface Review {
    rating: number;
    comment: string;
    date: string; // ISO date string
    reviewerName: string;
    reviewerEmail: string;
}

export interface Meta {
    createdAt: string; // ISO date string
    updatedAt: string; // ISO date string
    barcode: string;
    qrCode: string;
}

export interface Category {
    slug: string;
    name: string;
    url: string;
}

export interface ProductResponse {
    limit: number;
    products: Product[];
    skip: number;
    total: number;
}

// modal store
export interface ModalStore {
    // sidebar
    sidebarOpened: boolean;
    openSidebar: () => void;
    closeSidebar: () => void;

    // scrolled
    scrolled: boolean;
    setScrolled: (value: boolean) => void;

    // search
    searchOpened: boolean;
    openSearch: () => void;
    closeSearch: () => void;

    // cart notification
    cartNotificationOpened: boolean;
    openCartNotification: () => void;
    closeCartNotification: () => void;
}

export interface BookmarkStore {
    addBookmark: (id: number) => boolean;
    isBookmarked: (id: number) => boolean;
}

export interface ProductsStore {
    url: string | undefined;
    setUrl: (url: string) => void;
}

export interface CartItem {
    id: number;
    price: number;
    amount: number;
}

export interface CartStore {
    cart: CartItem[];
    fetchCart: () => void;
    addItemToCart: (id: number, price: number, amount?: number) => void;
    updateCartItem: (
        id: number,
        action: 'add' | 'remove',
        amount?: number
    ) => void;
    removeItemFromCart: (id: number) => void;
    update: (cart: CartItem[]) => void;
    getTotal: () => number;

    getCartItemIds: () => number[];
    getItemCount: (id: number) => number | undefined;

    getItemPrice: (id: number) => number | undefined;
    getTotalPrice: () => number;
}

export interface AccordionType {
    id: number;
    button: string;
    items: string[];
}
