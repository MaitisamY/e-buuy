import SLIDE_1 from '../assets/slider/slide.png'
import SLIDE_2 from '../assets/slider/slide-2.png'
import SLIDE_3 from '../assets/slider/slide-3.png'
import SLIDE_4 from '../assets/slider/slide-4.png'
import PRODUCT_1 from '../assets/1.png'
import PRODUCT_2 from '../assets/2.png'
import PRODUCT_3 from '../assets/3.png'
import PRODUCT_4 from '../assets/4.png'
import PRODUCT_5 from '../assets/5.png'
import PRODUCT_6 from '../assets/6.png'

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
        uniqueId: 10254856,
        name: 'Signature T-Shirt',
        price: 999,
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
        uniqueId: 52635478,
        name: 'Graphic T',
        price: 1999,
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
        uniqueId: 12004580,
        name: 'Casual T',
        price: 2499,
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
        uniqueId: 91245633,
        name: 'Comfort T',
        price: 2999,
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
        uniqueId: 22547811,
        name: 'Blending Style T',
        price: 4999,
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
        uniqueId: 75255891,
        name: 'Flair T',
        price: 5999,
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