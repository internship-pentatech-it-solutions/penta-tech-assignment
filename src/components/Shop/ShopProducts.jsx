import React from 'react'
import axiosInstance from '../../axios/axiosInstance'

const ShopProducts = ({product}) => {
    const imgUrl=`${import.meta.env.VITE_APP_API_URL}/${product.pictures[0].image_path}`

  return (
    <div className='shadow-md w-full h-full bg-white rounded-lg overflow-hidden  '>
        <div className='h-48'>
            <img className='h-48 w-full' src ={imgUrl}/>
        </div>
        <div className='flex flex-col justify-between py-2 ml-2'>
        <h3 className='text-left font-bold'> {product.name} </h3>
        <h3 className='text-left font-bold mt-1'> GH₵ {product.prices[0].price} </h3>
        </div>
        <div className='mb-2'>
            <button className='border px-2 py-2 rounded-md bg-gray-600 text-sm text-white ml-2 '>
                View Products
            </button>
        </div>
        </div>
      
  )
}

export default ShopProducts