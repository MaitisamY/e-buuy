'use client'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import Main from '../components/main'
import Content from './content'
import Globals from '../globals'
import CartOrWishlistToggle from '../components/cart-or-wishlist/cartOrWishlistToggle'

export default function Contact() {
    const { isCartOpen, isWishlistOpen, toggleCartOrWishlist } = Globals();
    return (
        <>
            <Header toggler={toggleCartOrWishlist} />
            <Main 
                HOME={false} 
                SHOP={false} 
                CONTACT={true} 
                ABOUT={false} 
                WISHLIST={false}
                ACCOUNT={false}
                CART={false}
                toggler={toggleCartOrWishlist}
            >
                <Content />
            </Main>
            <Footer toggler={toggleCartOrWishlist} />
            <CartOrWishlistToggle 
                cartStatus={isCartOpen} 
                wishlistStatus={isWishlistOpen} 
                toggler={toggleCartOrWishlist}
            />
        </>
    )
}