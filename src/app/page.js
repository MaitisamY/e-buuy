'use client'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Main from './components/main'
import Globals from './globals'
import CartOrWishlistToggle from './components/cart-or-wishlist/cartOrWishlistToggle'

export default function Home() {
    const { isCartOpen, isWishlistOpen, toggleCartOrWishlist } = Globals();
    return (
        <>
            <Header toggler={toggleCartOrWishlist} /> 
            <Main 
                HOME={true} 
                SHOP={false} 
                CONTACT={false} 
                ABOUT={false} 
                WISHLIST={false}
                ACCOUNT={false}
                CART={false}
                toggler={toggleCartOrWishlist}
            />
            <Footer toggler={toggleCartOrWishlist} />
            <CartOrWishlistToggle 
                cartStatus={isCartOpen} 
                wishlistStatus={isWishlistOpen} 
                toggler={toggleCartOrWishlist}
            />
        </>
    );
}
