import { CartItem, CartStore } from '@/types';
import formatLocalStorage from '@/utils/format-local-storage';
import round from '@/utils/round';
import { create } from 'zustand';

export const useCartStore = create<CartStore>((set, get) => ({
    cart: [],
    fetchCart: () => {
        const cart = formatLocalStorage<CartItem>(localStorage.getItem('cart'));

        // update cart state
        set({ cart });
    },

    addItemToCart: (id, price, amount = 1) => {
        // import update
        const { update } = get();

        let cart = formatLocalStorage<CartItem>(localStorage.getItem('cart'));

        const itemAvailable = cart.find((item) => item.id === id);
        if (itemAvailable) {
            cart = cart.map((item) =>
                item.id === id ? { ...item, amount: item.amount + 1 } : item
            );
        } else {
            const newItem = { id, price, amount };
            cart.push(newItem);
        }

        // update cart
        update(cart);
    },

    updateCartItem: (id, action, amount = 1) => {
        // import update
        const { update } = get();

        const cart = formatLocalStorage<CartItem>(localStorage.getItem('cart'));

        switch (action) {
            case 'add': {
                const newCart = cart.map((item) =>
                    item.id === id
                        ? { ...item, amount: item.amount + amount }
                        : item
                );

                // update cart
                update(newCart);
                return;
            }
            case 'remove': {
                const newCart = cart.map((item) =>
                    item.id === id
                        ? { ...item, amount: item.amount - amount }
                        : item
                );

                // update cart
                update(newCart);
                return;
            }
            default: {
                console.log(`action <${action}> is not a valid action`);
            }
        }
    },

    removeItemFromCart: (id) => {
        // import update
        const { update } = get();

        const cart = formatLocalStorage<CartItem>(localStorage.getItem('cart'));
        const newCart = cart.filter((item) => item.id !== id);

        // update cart
        update(newCart);
    },

    update: (cart) => {
        // update cart start
        set({ cart });

        // update local storage
        localStorage.setItem('cart', JSON.stringify(cart));
    },

    // total
    getTotal: () => {
        const { cart } = get();
        const total = cart.reduce((acc, curr) => acc + curr.amount, 0);
        return total;
    },

    getCartItemIds: () => {
        const { cart } = get();
        const ids = cart.map((item) => item.id);
        return ids;
    },

    getItemCount: (id) => {
        const { cart } = get();
        return cart.find((item) => item.id === id)?.amount;
    },

    getItemPrice: (id) => {
        const { cart } = get();
        const cartItem = cart.find((item) => item.id === id);
        if (!cartItem) {
            return;
        }

        // todo: round to 2 decimals
        return round(cartItem.price * cartItem.amount);
    },

    getTotalPrice: () => {
        const { cart } = get();
        const totalPrice = cart.reduce(
            (total, item) => total + item.price * item.amount,
            0
        );

        // todo: round to 2 decimals
        return round(totalPrice);
    },
}));
