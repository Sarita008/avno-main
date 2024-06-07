import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem('cartItems');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    const addItemToCart = (item) => {
        setCartItems((prevItems) => {
            const updatedItems = [...prevItems, item];
            localStorage.setItem('cartItems', JSON.stringify(updatedItems));
            return updatedItems;
        });
    };

    const updateItemQuantity = (itemId, quantity) => {
        setCartItems((prevItems) => {
            const updatedItems = prevItems.map(item => {
                if (item.id === itemId) {
                    const updatedQuantity = parseInt(quantity, 10);
                    const updatedTotalPrice = (parseFloat(item.price) * updatedQuantity).toFixed(2);
                    return { ...item, quantity: updatedQuantity, totalPrice: updatedTotalPrice };
                }
                return item;
            });
            localStorage.setItem('cartItems', JSON.stringify(updatedItems));
            return updatedItems;
        });
    };

    const removeItemFromCart = (itemId) => {
        setCartItems((prevItems) => {
            const updatedItems = prevItems.filter(item => item.id !== itemId);
            localStorage.setItem('cartItems', JSON.stringify(updatedItems));
            return updatedItems;
        });
    };

    const clearCart = () => {
        setCartItems([]);
        localStorage.removeItem('cartItems');
    };

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + (parseFloat(item.totalPrice) * item.quantity), 0);
    };

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    return (
        <CartContext.Provider value={{ cartItems, addItemToCart, updateItemQuantity, removeItemFromCart, clearCart, getTotalPrice }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
