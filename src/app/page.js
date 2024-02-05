'use client'
import Header from './components/header'
import Footer from './components/footer'
import Main from './components/main'
import Globals from './globals'
import CartOrWishlistToggle from './components/cartOrWishlistToggle'

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
            />
            <Footer />
            <CartOrWishlistToggle 
                cartStatus={isCartOpen} 
                wishlistStatus={isWishlistOpen} 
                toggler={toggleCartOrWishlist}
            />
        </>
    );
}
