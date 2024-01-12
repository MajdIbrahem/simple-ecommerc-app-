import {useContext} from 'react';
import { Link } from 'react-router-dom'
import { IoIosClose } from "react-icons/io"
import { FaMinus,FaPlus  } from "react-icons/fa";
import { CartContext } from '../contexts/CartContext';
const CartItem = ({ item }) => {
  const {removeItem,increaseAmount,decreaseAmount}=useContext(CartContext)
  const {id, image, title, price ,amount}=item
  return <div className='w-full relative'>
    <div className='flex justify-between items-center mx-3 py-2 border-b'>
      <Link to={`/product/${id}`}>
          <img className='max-w-[50px] cursor-pointer' src={image} alt={title}></img>
      </Link>
      <div className='flex flex-col justify-between items-center gap-3'>
        <h3 className='text-xs text-gray-500'>{title}</h3>
        <div className='flex justify-between items-center '>
          <div onClick={() => {
            decreaseAmount(id)
          }} className='px-2 border cursor-pointer'>
            <FaMinus></FaMinus>
          </div>
          <h3 className='text-lg text-red-500 px-2'> {amount}</h3>
          <div onClick={() => {
            increaseAmount(id)
          }} className='px-2 border cursor-pointer'>
            <FaPlus></FaPlus>
          </div>
        </div>
      </div>
      <div>
        <p className='text-sm text-red-500'>{ (price * amount).toFixed(2) }$</p>
      </div>
    </div>
    <div onClick={()=>{removeItem(id)}} className='absolute top-0 right-0 p-2 w-6 h-6 text-gray-500 cursor-pointer'><IoIosClose /></div>
  </div>;
};

export default CartItem;
