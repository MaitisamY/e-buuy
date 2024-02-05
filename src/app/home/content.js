import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { SLIDER_PRODUCTS } from '../data/Product.js';

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
        }, 5000);

        return () => clearInterval(interval);
    }, [sliderProducts.length, sliderIndex]);

    return (
        <div className="row">
            <div className="banner">
                <div className="intro">
                    <h1>Welcome to the new era of premium fabric T-Shirts.</h1>
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
                    <h2 className={`feature ${isVisible ? 'visible' : 'hidden'}`}>{sliderProducts[sliderIndex].feature}</h2>
                </div>
            </div>
        </div>
    );
}
