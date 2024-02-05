'use client'
import Header from '../components/header'
import Footer from '../components/footer'
import Main from '../components/main'
import Content from './content'
import Globals from '../globals'
import CartOrWishlistToggle from '../components/cartOrWishlistToggle'

export default function Wishlist() {
    const { isCartOpen, isWishlistOpen, toggleCartOrWishlist } = Globals();
    return (
        <>
            <Header toggler={toggleCartOrWishlist} /> 
            <Main 
                HOME={false} 
                SHOP={false} 
                CONTACT={false} 
                ABOUT={false} 
                WISHLIST={true}
                ACCOUNT={false}
                CART={false}
            >
                <Content />
            </Main>
            <Footer />
            <CartOrWishlistToggle 
                cartStatus={isCartOpen} 
                wishlistStatus={isWishlistOpen} 
                toggler={toggleCartOrWishlist}
            />
        </>
    );
}
