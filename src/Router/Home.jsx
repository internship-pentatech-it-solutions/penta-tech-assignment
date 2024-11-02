import React, {useState} from 'react'
import Brands from '../components/Brands';
import FeaturedProducts from '../components/FeaturedProducts';

const Home = () => {
  return (
    <>
    <main className='bg-[#f0eeee] px-16 py-10'>
    <Brands/>
    <FeaturedProducts/>

    </main>
    
    </>
  )
}

export default Home