import SLIDE_1 from './Images/slider/slide.png'
import SLIDE_2 from './Images/slider/slide-2.png'
import SLIDE_3 from './Images/slider/slide-3.png'
import SLIDE_4 from './Images/slider/slide-4.png'
import PRODUCT_1 from './Images/product/1.png'
import PRODUCT_2 from './Images/product/2.png'
import PRODUCT_3 from './Images/product/3.png'
import PRODUCT_4 from './Images/product/4.png'
import PRODUCT_5 from './Images/product/5.png'
import PRODUCT_6 from './Images/product/6.png'

const SLIDER_PRODUCTS = [
    {
        id: 1,
        image: SLIDE_1,
        feature: 'Durability',
        alt: 'Photo of slider product 1',
    },
    {
        id: 2,
        image: SLIDE_2,
        feature: 'Softness',
        alt: 'Photo of slider product 2',
    },
    {
        id: 3,
        image: SLIDE_3,
        feature: 'Breathability',
        alt: 'Photo of slider product 3',
    },
    {
        id: 4,
        image: SLIDE_4,
        feature: 'Colorfastness',
        alt: 'Photo of slider product 4',
    }
];

const SELLING_PRODUCTS = [
    {
        id: 1,
        name: 'Product 1',
        price: 1000,
        image: PRODUCT_1,
        detail: `Unwind in our signature t-shirt, crafted from a sumptuously soft cotton blend for 
        an unparalleled comfort experience.`,
        alt: 'Photo of selling product 1',
        features : [
            'Unique prints', 'Expressive style', 'Wardrobe standout',
        ],
    },
    {
        id: 2,
        name: 'Product 2',
        price: 2000,
        image: PRODUCT_2,
        detail: `Make a statement with our trend-setting graphic t-shirt, a unique and expressive 
        addition to your wardrobe.`,
        alt: 'Photo of selling product 2',
        features : [
            'Soft cotton blend', 'Unparalleled comfort', 'Versatile wear',
        ],
    },
    {
        id: 3,
        name: 'Product 3',
        price: 3000,
        image: PRODUCT_3,
        detail: `Elevate your ensemble with the versatility of our essential wardrobe t-shirt, 
        a seamless transition from casual outings to relaxed evenings.`,
        alt: 'Photo of selling product 3',
        features : [
            'Seamless transition', 'Versatile', 'Casual to relaxed',
        ],
    },
    {
        id: 4,
        name: 'Product 4',
        price: 4000,
        image: PRODUCT_4,
        detail: `Step into durability with our everyday wear t-shirt, designed to withstand the 
        rigors of daily life without compromising on comfort.`,
        alt: 'Photo of selling product 4',
        features : [
            'Durable construction', 'Withstands daily rigors', 'Comfort-first',
        ],
    },
    {
        id: 5,
        name: 'Product 5',
        price: 5000,
        image: PRODUCT_5,
        detail: `Embrace eco-conscious fashion in our sustainable t-shirt, a choice that blends style 
        with a commitment to environmentally friendly materials.`,
        alt: 'Photo of selling product 5',
        features : [
            'Sustainable fashion choice', 'Eco-friendly materials', 'Style with a conscience',
        ],
    },
    {
        id: 6,
        name: 'Product 6',
        price: 6000,
        image: PRODUCT_6,
        detail: `Timeless charm meets modern flair in our classic fit t-shirt, ensuring a stylish 
        and enduring look for any occasion.`,
        alt: 'Photo of selling product 6',
        features : [
            'Timeless charm', 'Enduring style', 'Suitable for any occasion',
        ],
    },
];

export { SLIDER_PRODUCTS, SELLING_PRODUCTS };