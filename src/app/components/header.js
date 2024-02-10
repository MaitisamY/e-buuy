import { useState, useEffect } from 'react';
import headerStyles from './header.css'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { BsCart, BsList, BsPersonCircle, BsSuitHeart, BsXLg } from 'react-icons/bs'

export default function Header({ toggler }) {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    return (
        <header>
            <div className="header-container">
                <Link href={pathname === '/' ? '#' : "/"}>
                    <h1>
                        <span>E</span>-BUUY
                    </h1>
                </Link>
                <Link className="responsive-toggler" href="#" onClick={toggleMenu}>
                    <BsList />
                </Link>
                <nav>
                    <ul>
                        <li>
                            <Link 
                                title="Home" 
                                className={`link ${pathname === '/' ? 'active' : ''}`} 
                                href={pathname === '/' ? '#' : "/"}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link 
                                title="Shop" 
                                className={`link ${pathname === '/shop' ? 'active' : ''}`} 
                                href="/shop"
                            >
                                Shop
                            </Link>
                        </li>
                        <li>
                            <Link 
                                title="Contact" 
                                className={`link ${pathname === '/contact' ? 'active' : ''}`} 
                                href="/contact"
                            >
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link 
                                title="About" 
                                className={`link ${pathname === '/about' ? 'active' : ''}`} 
                                href="/about"
                            >
                                About
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="util-container">
                    <Link
                        title="Wishlist"
                        className="link" 
                        onClick={() => toggler('wishlist')}
                        href="#"
                    >
                        <BsSuitHeart size={25} />
                    </Link>
                    <Link
                        title="Cart" 
                        className="link"
                        onClick={() => toggler('cart')}
                        href="#"
                    >
                        <BsCart size={25} />
                    </Link>
                    <Link 
                        title="Account"
                        className={`link ${pathname === '/account' ? 'active' : ''}`} 
                        href="/account"
                    >
                        <BsPersonCircle size={35} />
                    </Link>
                </div>
            </div>
            <div className={`responsive-menu ${isMenuOpen ? 'open' : ''}`}>
                <button className="close" onClick={toggleMenu}>
                    <BsXLg />
                </button>
                <Link className="link" href="#" onClick={() => toggler('wishlist')}>
                    <BsSuitHeart size={25} /> Wishlist
                </Link>
                <Link className="link" href="/cart">
                    <BsCart size={25} /> Cart
                </Link>
                <Link className="link" href="/account">
                    <BsPersonCircle size={25} /> Account
                </Link>
            </div>
        </header>
    );
}