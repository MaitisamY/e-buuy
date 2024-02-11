import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import './home.css'
import { SLIDER_PRODUCTS, SELLING_PRODUCTS } from '../data/Product.js'

export default function Content() {
    const [sliderProducts, setSliderProducts] = useState(SLIDER_PRODUCTS);
    const [sliderIndex, setSliderIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
        setIsVisible(false);

        setTimeout(() => {
            setSliderIndex((prevIndex) => (prevIndex + 1) % sliderProducts.length);
            setIsVisible(true);
        }, 500); 
        }, 3000);

        return () => clearInterval(interval);
    }, [sliderProducts.length, sliderIndex]);

    return (
        <>
            <div className="row">
                <div className="banner">
                    <div className="intro">
                        <h1>Welcome to the new era of premium T-Shirts.</h1>
                        <Link className="link" href="/shop">
                            Shop Now
                        </Link>
                    </div>
                    <div className="slider">
                        <Image
                            className={`Img ${isVisible ? 'visible' : 'hidden'}`}
                            src={sliderProducts[sliderIndex].image}
                            alt={sliderProducts[sliderIndex].alt}
                            priority
                        />
                        <h2 
                            className={`feature ${isVisible ? 'visible' : 'hidden'}`}
                        >
                            {sliderProducts[sliderIndex].feature}
                        </h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="heroes">
                    <div className="hero-multiple">
                        {
                            SELLING_PRODUCTS.filter((_, index) => index !== 0 && index !== 1).map((product, index) => (
                                <div key={index} className="column-5 bg-theme border-rounded-20">
                                    <Image
                                        className="Img"
                                        src={product.image}
                                        alt={product.alt}
                                        priority
                                    />
                                    <h3>{product.name}</h3>
                                    <Link className="shop-now-btn" href={`/product/${product.uniqueId}`}>
                                        Shop Now
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                    <div className="hero-single">
                        <div className="tags-hero-single">Sale</div>
                        <div className="column-12">
                            <Image
                                className="Img"
                                src={SELLING_PRODUCTS[1].image}
                                alt={SELLING_PRODUCTS[1].alt}
                                priority
                            />
                            <h3>{SELLING_PRODUCTS[1].name}</h3>
                            <h3>PRK. {SELLING_PRODUCTS[1].price}/-</h3>
                            <div className="cart-wishlist-holder">
                                <button className="add-to-cart-btn">
                                    Add to Cart
                                </button>
                                <button className="add-to-wishlist-btn">
                                    Add to Wishlist
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
