import {useContext} from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext)
  const {Items}=useContext(CartContext)
  return <header className='bg-pink-200 flex justify-between items-center w-full h-[50px] z-20 p-4 fixed shadow-md'>
    <Link to={"/"}>
    <div className='flex  justify-between items-center'>  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={35}
    height={35}
    viewBox="0 0 300.004 300.004"
    
  >
    <path d="M278.891 244.965V105.231c0-4.143-3.357-7.5-7.5-7.5h-42.398V65.597c0-4.143-3.357-7.5-7.5-7.5H189.17V47.555c0-21.6-17.57-39.173-39.168-39.173s-39.168 17.573-39.168 39.173v10.542H78.512a7.499 7.499 0 0 0-7.5 7.5v32.134H28.613a7.5 7.5 0 0 0-7.5 7.5v139.734C9.438 245.174 0 254.721 0 266.446v3.676c0 11.855 9.645 21.5 21.5 21.5h257.004c11.855 0 21.5-9.645 21.5-21.5v-3.676c0-11.725-9.438-21.272-21.113-21.481zM78.512 216.954h142.98c4.143 0 7.5-3.357 7.5-7.5v-71.111h11.411v105.075H59.602V138.342h11.41v71.111a7.5 7.5 0 0 0 7.5 7.501zm185.379-104.223v130.687h-8.487V130.842c0-4.143-3.357-7.5-7.5-7.5h-18.911v-10.611h34.898zM125.834 47.555c0-13.329 10.842-24.173 24.168-24.173s24.168 10.844 24.168 24.173v10.542h-48.336V47.555zM86.012 73.097h24.822V85.94c0 4.143 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5V73.097h48.336V85.94c0 4.143 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5V73.097h24.822v128.856H86.012V73.097zm-49.899 39.634h34.899v10.611h-18.91a7.499 7.499 0 0 0-7.5 7.5v112.575h-8.488V112.731zm248.891 157.391c0 3.584-2.916 6.5-6.5 6.5H21.5a6.508 6.508 0 0 1-6.5-6.5v-3.676c0-3.584 2.916-6.5 6.5-6.5h257.004c3.584 0 6.5 2.916 6.5 6.5v3.676z" />
    <path d="m171.885 153.601-48.656-19.512 19.459 48.778 4.744-14.753 19.615 19.657 9.727-9.753-19.61-19.66z" />
      </svg>
      <h1 className=''><span className='text-red-500'>e</span>SHOPE</h1>
      </div>
    </Link>
    
    <div onClick={() => { setIsOpen(!isOpen) }} className='cursor-pointer relative'>
      <span className='w-[15px] h-[15px] rounded-full bg-red-500 text-white  absolute top-0 left-0 flex items-center justify-center text-xs '>{Items }</span>
      <AiOutlineShoppingCart className='text-2xl w-[30px] h-[30px]'></AiOutlineShoppingCart></div>
  </header>;
};

export default Header;
