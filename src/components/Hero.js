import React from 'react';
import WomenImage from '../img/woman_hero.png'
const Hero = () => {
  return <section className='bg-pink-200 h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24'>
    <div className='container flex mx-auto justify-around h-full '>
      <div className='flex flex-col justify-center'>
        <div className='flex items-center '>
          <div className='flex items-center font-semibold w-10 h-[3px] bg-red-500 mr-3'></div>New Trend
        </div>
        <h1 className='text-[70px] leading-[1.1] font-light mb-4'>AUTUMN SALE STYLISH <br></br>
        <span className='font-semibold'>WOMENS</span>        
        </h1>
      </div>
      <div className='hidden lg:block md:block'>
        <img src={WomenImage} alt=''></img>
      </div>
    </div>
  </section>;
};

export default Hero;
