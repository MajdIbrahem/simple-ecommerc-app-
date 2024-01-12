import {useContext} from 'react';
import { AiOutlinePlus, AiOutlineEye } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import {CartContext} from '../contexts/CartContext'
const Product = ({ product }) => {
  const { id, image, category, title, price } = product
  const {addToCart}=useContext(CartContext)
  return <div className='w-[200px] h-[300px]  flex flex-col justify-between '>
    <div className='border border-gray-400 w-3/4 mb-4 relative overflow-hidden group transition h-3/4 rounded'>
      <div className='w-full h-full flex justify-center items-center mx-auto'>
        <img className='max-w-[120px] max-h-[120px] group-hover:scale-110 transition duration-300' src={image} alt=''></img>
      </div>
      <button onClick={()=>{addToCart(product,id)}} >
      <div className='absolute top-0 right-0 p-2  w-10 h-10 bg-red-500 flex justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 rounded'>
      <AiOutlinePlus/>
        </div>
      </button>
      <Link to={`product/${id}`}>
      <button >
      <div className='absolute top-0 left-0 p-2  w-10 h-10 bg-gray-500 flex justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 rounded'>
      <AiOutlineEye/> 
        </div>
      </button>
      </Link>
      
    </div>
    <div className=' max-h-[150px] flex flex-col mb-5' >
      <div className='text-sm text-gray-400'>{category}</div>
      <Link to={`product/${id}`}>
      <h2 className='cursor-pointer'>{title}</h2>
      </Link>
      <div className='text-red-500'>{price } $</div>
    </div>
  </div>;
};

export default Product;
