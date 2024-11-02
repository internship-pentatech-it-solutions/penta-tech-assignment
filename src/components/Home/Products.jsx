import React, { useEffect, useState } from 'react'
import axiosInstance from '../../axios/axiosInstance'

const Product = ({product}) => {
  const imgUrl=`${import.meta.env.VITE_APP_API_URL}/${product.pictures[0].image_path}`
  return (
    <div className='shadow w-full py-10 h-90 overflow-hidden rounded-lg '>
        <div className='h-[82%] w-full'>
            <img className='h-full' src ={imgUrl}/>
        </div>
        <div className=' px-2 flex justify-between font-semibold text-lg'>
        <h3 className='text-left overflow-hidden text-ellipsis'> {product.name} </h3>
        <h3 className='text-right text-blue-500'> GH₵ {product.prices[0].price} </h3>
        </div>
        </div>
      
  )
}

const Products = () => {
const [data, setData] = useState(null);
const [error, setError] = useState(null); 

useEffect( () => {
      const fetchData =async()=>{
        try{
          const response = await axiosInstance.get("/products/limit/8"); 
      
          setData(response.data.products)
        }
        catch(error){
         
          setError(error)
        }
      };
      fetchData();
    },[]
)
if (!data){
  return <div>
    Loading...
  </div>
}
if (error){
  return <div>
    Error:{error}
  </div>
}

    return (
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3'>
        {
          data.map((product)=>(
            <Product key={product.id}   product ={product}/>
          ))
        }
          
          
          </div>
    )
  }


export default Products