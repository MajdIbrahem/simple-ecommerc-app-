import React from 'react';
import { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext'
import Product from '../components/Product'
import Hero from '../components/Hero';
const Home = () => {
  const products  = useContext(ProductContext)

  return <div>
    <Hero></Hero>
    <section className='py-16'>
    <div className='container mx-auto'>
      <div className='flex items-center flex-wrap justify-between gap-7 '>
        {products.map((product) => {
          return (<Product key={products.id} id={products.id} product={product} ></Product>)
        })}
      </div>
    </div>
  </section>
  </div>
  ;
};

export default Home;
