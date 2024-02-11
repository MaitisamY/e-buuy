import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getProductByUniqueId } from './productUtil';
export default function ProductPage() {
    const router = useRouter();
    const { productId } = router.query;
    const [product, setProduct] = useState(null);
  
    useEffect(() => {
        if (productId) {
            getProductByUniqueId(productId)
            .then((productData) => {
                setProduct(productData);
            })
            .catch((error) => {
                console.error('Error fetching product:', error);
            });
        }
    }, [productId]);
  
    if (!product) {
        return <div>Loading...</div>;
    }
  
    return (
      <div>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            {/* Render other product details */}
      </div>
    );   
}