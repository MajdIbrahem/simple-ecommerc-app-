import {useContext} from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { ProductContext } from '../contexts/ProductContext';
const ProductDetails = () => {
  const { id } = useParams()
  const {addToCart }=useContext(CartContext)
  const products = useContext(ProductContext)

  const product = products.find((item) => {
  return item.id=== +id
  })
  const { title, image, category, price,description } = product
  return <section className='py-32 h-screen flex items-center'>
    <div className='container mx-auto'>
      <div className='flex flex-col justify-center gap-7 lg:flex-row items-center '>
        <div className='m-4'><img className='max-w-[200px] lg:max-w-[350px]' src={image} alt={title}></img></div>
        <div className='m-4'>
          <h1 className='text-[26px] mx-auto font-semibold max-w-md mb-2'>{title}</h1>
          <h2 className='text-xl font-semibold mb-6 text-red-500 '>${price}</h2>
          <p className='mb-4'>{category }</p>
          <p className='mb-4 text-gray-600'>{description}</p>
          <button onClick={()=>{addToCart(product,product.id)}} className='bg-primary text-white py-2 px-4 rounded hover:bg-red-400 '> add to cart </button>
        </div>
      </div>
      
    </div>
  </section>;
};

export default ProductDetails;
