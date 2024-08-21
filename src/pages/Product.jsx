// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const { productId } = useParams();
  const { products, currency,addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

  const fetchProductData = async () => {
    const product = products.find(item => item._id === productId);
    if (product) {
      setProductData(product);
      setImage(product.image[0]);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  // Define the allowed sizes
  const allowedSizes = ['M', 'L', 'XL'];

  // Filter sizes to include only the allowed sizes
  const filteredSizes = productData
    ? productData.sizes.filter(size => allowedSizes.includes(size))
    : [];

  if (!productData) {
    return <div className='opacity-0'></div>;
  }

  return (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        {/* Product Image */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className='w-[70%] sm:w-[80%] sm:mb-3 flex-shrink-0 cursor-pointer'
                alt={`Product image ${index}`}
              />
            ))}
          </div>

          <div className='w-full sm:w-[80%]'>
            <img src={image} className='w-full h-auto' alt="Selected product" />
          </div>
        </div>

        {/* Product Info */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} alt="Star icon" className="w-5 h-5" />
            <img src={assets.star_icon} alt="Star icon" className="w-5 h-5" />
            <img src={assets.star_icon} alt="Star icon" className="w-5 h-5" />
            <img src={assets.star_icon} alt="Star icon" className="w-5 h-5" />
            <img src={assets.star_dull_icon} alt="Star dull icon" className="w-5 h-5" />
            <p className='pl-2'>{122}</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
          <div className='flex flex-col gap-4 my-8'>
            <p className='font-semibold'>Select Size</p>
            <div className='flex gap-2'>
              {filteredSizes.length > 0 ? (
                filteredSizes.map((item, index) => (
                  <button
                    onClick={() => setSize(item)}
                    key={index}
                    className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ''}`}
                  >
                    {item}
                  </button>
                ))
              ) : (
                <p>No sizes available</p>
              )}
            </div>
          </div>

          <button onClick={()=>addToCart(productData._id,size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700 '>

            ADD TO CART
          </button>
          <hr className='mt-8 sm:w-4/5' />


          <div  className='text-sm text-gray-500 flex flex-col gap-1'>
            <p>100% Original Product</p>
            <p>Cash on Delivery is available in this Product</p>
            <p>Easy Return and Exchange policy within 7 days</p>

          </div>
        </div>
      </div>

{/* Description and review Sectiom */}
<div className='mt-20'>
<div className='flex'>
  <b className='border px-5 py-3 text-sm'>Description</b>
  <p className='border px-5 py-3 text-sm'>Reviews (122) </p>

</div>
<div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
<p>E-commerce, or electronic commerce, refers to the buying and selling of goods and services over the internet. It encompasses various business activities that involve online transactions and interactions</p>
<p>E-commerce continues to grow rapidly, driven by advancements in technology and changing consumer preferences, making it a crucial component of modern business strategies</p>
</div>
</div>
{/* -----------------display related products -------------------------- */}


<RelatedProducts category={productData.category} subcategory={productData.subcategory} />
      
    </div>
  );
};

export default Product;
