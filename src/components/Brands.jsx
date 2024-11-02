import React from 'react'
import BrandCard from './BrandCard'
import brandData from '../Data/brandData'


const Brands = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
        {brandData.map((brand)=>(
            <BrandCard key={brand.id} brand={brand}/>

        ))}
        
        
        </div>
  )
}

export default Brands