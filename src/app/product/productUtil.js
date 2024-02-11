import { SELLING_PRODUCTS } from '../../data/Product';

export const getProductByUniqueId = (productId) => {
    return new Promise((resolve, reject) => {
        const product = SELLING_PRODUCTS.find((item) => item.uniqueId === productId);
        if (product) {
            resolve(product);
        } else {
            reject(new Error('Product not found'));
        }
    });
};