import React, {useEffect, useState} from 'react'
import axiosInstance from '../axios/axiosInstance';
import ShopProducts from '../components/Shop/ShopProducts';


const Shop = () => {
  const [data, setData] = useState(null);
const [error, setError] = useState(null);
const[filterList, setFilterList] = useState([]); 
const[filteredList, setFilteredList] = useState([]); 

const fetchCategory = [
  {id: 1, name: 'Royal Foam' },
  {id: 2, name: 'Latex Foam' },
  {id: 3, name: 'Ashfoam' },
  {id: 4, name: 'Foreign Brands' }
];

const getCategoryLabelColor = category=>{
  switch(category){
    case 1: 
    return'bg-[#7e00a9]';
    case 2: 
    return'bg-red-500';
    case 3: 
    return'bg-[#f6d00c] text-black';
    default: 
    return'bg-black';
    
  }

}

const handleCategoryClick = id =>{
  const updatedFilterList = filterList.includes(id)
  ?
  (filterList.filter(filter=> filter!== id))
  :
  [...filterList, id];

  setFilterList(updatedFilterList);
};
console.log(filterList);
useEffect( () => {
      const fetchData =async()=>{
        try{
          const response = await axiosInstance.get("/products"); 
      
          setData(response.data.products)
        }
        catch(error){
         
          setError(error)
        }
      };
      fetchData();
    },[]
)

useEffect(()=>{
let itemsToDisplay = data;
if (filterList.length > 0 ){
  itemsToDisplay = data.filter((item)=>
  filterList.includes(item.category_id)
  );
 
  setFilteredList(itemsToDisplay);   
}

},[data, filterList]);

if (!data){
  return <div>
    Loading...
  </div>
}



  return (
   <>
  <main className='mt-[100px] md:m-12 sm:m-0 md:mt-4'>
    <h1 className='text-center text-2xl font-bold'> Choose a filter</h1>
    
    <div className='flex justify-center flex-col-2 md:flex-col-4'>
    {
      fetchCategory.map((category)=>(
        <button 
        key={category.id}
        onClick={()=>handleCategoryClick(category.id)}
        className={`font-bold font-xl border-2 border-yellow-300 mx-3 mt-2 py-1 px-4 rounded-xl
        ${filterList.includes(category.id)? 
          getCategoryLabelColor(category.id) + " text-white"
          :'bg-white'

        }
        `}>
        {category.name}
      </button>
      ))
    }
     
    </div>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 my-6'>
        {
            filteredList.map((product)=>(
            <ShopProducts key={product.id} product={product}/>
            ))
        }
      
    </div>
    </main> 
  </>
  )
}

export default Shop;