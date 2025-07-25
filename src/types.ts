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
}

export interface BookmarkStore {
    addBookmark: (id: string) => boolean;
    isBookmarked: (id: string) => boolean;
}

export interface ProductsStore {
    url: string | undefined;
    setUrl: (url: string) => void;
}

export interface AccordionType {
    id: number;
    button: string;
    items: string[];
}
