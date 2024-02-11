import { useState } from 'react'

export default function Globals() {
    const [cartItems, setCartItems] = useState([]);
    const [wishlistItems, setWishlistItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isWishlistOpen, setIsWishlistOpen] = useState(false);

    const toggleCartOrWishlist = (name) => {
        if (name === 'cart') {
            setIsCartOpen(!isCartOpen);
            setIsWishlistOpen(false);
        } else if (name === 'wishlist') {
            setIsWishlistOpen(!isWishlistOpen);
            setIsCartOpen(false);
        } else if (name === 'close') {
            setIsCartOpen(false);
            setIsWishlistOpen(false);
        } else if (name === 'open') {
            if (isCartOpen) {
                setIsCartOpen(true);
            } else {
                setIsWishlistOpen(true);
            }
        }
    }

    return {
        cartItems,
        wishlistItems,
        isCartOpen,
        isWishlistOpen,
        toggleCartOrWishlist,
    };
}