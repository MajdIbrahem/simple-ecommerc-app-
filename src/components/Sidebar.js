import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { SidebarContext } from '../contexts/SidebarContext';
import CartItem from './/CartItem'
import { BsFillForwardFill } from 'react-icons/bs'
import { CartContext } from '../contexts/CartContext'
import { FaRegTrashAlt } from "react-icons/fa";
const Sidebar = () => {
  const { isOpen, HandelClose } = useContext(SidebarContext)
  const {cart,clearCart,Items,totalPrice}=useContext(CartContext)
  return <div className={`${isOpen ? 'right-0' : '-right-full'}  w-3/4 md:w-2/4 lg:w-2/4 h-full bg-white top-0 fixed transition-all duration-300 z-20 px-4 lg:px-[35px] shadow-xl shadow-black/50`}>
    <div className='flex justify-between items-center py-4 border-b'>
      <div className='text-sm font-semibold'>SHOPING BAG ({Items})</div>
      <div onClick={HandelClose} className='w-8 h-8 cursor-pointer flex justify-center items-center'>
        <BsFillForwardFill className='text-3xl'></BsFillForwardFill>
      </div>
    </div>
    <div>{cart.map((item) => {
      return <CartItem item={item} key={ item.id} />
    })}</div>
    <div className='w-full flex justify-between items-center  mt-4'>
      <div className='text-red-500'><span className='px-2 text-gray-500 text-bold'>TOTAL:</span>{totalPrice}$</div>
      <div onClick={()=>{clearCart()}} className='bg-red-500 p-2 text-white cursor-pointer'>
        <FaRegTrashAlt></FaRegTrashAlt>
      </div>
    </div>
  </div>;
};

export default Sidebar;
