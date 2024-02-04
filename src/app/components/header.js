import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { BsCart, BsPersonCircle, BsSuitHeart } from 'react-icons/bs'
export default function Header() {
    const pathname = usePathname();
    return (
        <header>
            <div className="header-container">
                <Link href="/">
                    <h1>
                        <span>E</span>-BUUY
                    </h1>
                </Link>
                <nav>
                    <ul>
                        <li>
                            <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link className={`link ${pathname === '/shop' ? 'active' : ''}`} href="/shop">
                                Shop
                            </Link>
                        </li>
                        <li>
                            <Link className={`link ${pathname === '/contact' ? 'active' : ''}`} href="/contact">
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link className={`link ${pathname === '/about' ? 'active' : ''}`} href="/about">
                                About
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="util-container">
                    <Link
                        title="Wishlist"
                        className={`link ${pathname === '/login' ? 'active' : ''}`} 
                        href="/wishlist"
                    >
                        <BsSuitHeart size={25} />
                    </Link>
                    <Link
                        title="Cart" 
                        className={`link ${pathname === '/cart' ? 'active' : ''}`} 
                        href="/cart"
                    >
                        <BsCart size={25} />
                    </Link>
                    <Link 
                        title="Login"
                        className={`link ${pathname === '/login' ? 'active' : ''}`} 
                        href="/login"
                    >
                        <BsPersonCircle size={35} />
                    </Link>
                </div>
            </div>
        </header>
    );
}