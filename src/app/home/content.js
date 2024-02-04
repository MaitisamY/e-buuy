import { useState, useEffect } from 'react'
import Image from 'next/image'
import SLIDER_PRODUCTS from '../data/Product.js'

export default function Content() {
    const [sliderProducts, setSliderProducts] = useState(SLIDER_PRODUCTS);
    return (
        <div className="row">
            <div className="banner">
                <h1>Welcome to the new era of T-Shirts.</h1>
                <button>Shop Now</button>
            </div>
            <div className="slider">
                <Image
                    className="Img"
                    src={sliderProducts[0].image}
                    alt={sliderProducts[0].alt}
                    priority
                />
            </div>
        </div>
    )
}