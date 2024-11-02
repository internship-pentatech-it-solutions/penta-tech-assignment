import React from 'react'
import { Link } from 'react-router-dom'

const BrandCard = ({brand}) => {
  return (
    <div className='shadow-md !rounded-md w-full h-96 md:h-60 flex flex-col md:flex-row bg-white'>
        <div 
        style={{backgroundImage: `url(${brand.imageUrl})`}}
        className={`w-full md:w-1/2 h-full rounded-md rounded-r-none bg-cover bg-center`}>

        </div>
        <div 
        className='w-full md:w-1/2 h-full flex flex-col justify-between font-sans px-5 py-6'>
        <div className=''>
        <h2 className='font-bold text-xl mb-3'>{brand.name}</h2>
        <p>{brand.description}</p>
        </div>
        <Link to = {brand.url}>
        <button className='block max-w-[90%] sm: max-w-[80%] lg:max-w-[70%] font-semibold border border-black rounded-xl py-1 px-2'>
            Explore Brand
        </button>
        </Link>
        
        </div>
        </div>
  )
}

export default BrandCard