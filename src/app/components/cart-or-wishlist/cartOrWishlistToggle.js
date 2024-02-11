import './cartOrWishlistToggle.css'
import { BsXLg } from 'react-icons/bs'
export default function Cart({ cartStatus, wishlistStatus, toggler }) {
    return (
        <>
            {
                cartStatus ? (
                    <div id="sider-cart" className={`sider ${cartStatus ? 'open' : ''}`}>
                        <button className="close" onClick={() => toggler('close')}>
                            <BsXLg />
                        </button>
                        <h3>Cart</h3>
                        <div className="item-container">
                            <p>Your cart is empty</p>
                        </div>
                    </div>
                ) 
                : wishlistStatus ? (
                    <div id="sider-wishlist" className={`sider ${wishlistStatus ? 'open' : ''}`}>
                        <button className="close" onClick={() => toggler('close')}>
                            <BsXLg />
                        </button>
                        <h3>Wishlist</h3>
                        <div className="item-container">
                            <p>Your wishlist is empty</p>
                        </div>
                    </div>
                ) : null
            }
        </>
    )
}

