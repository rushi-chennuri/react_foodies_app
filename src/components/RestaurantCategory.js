import React from 'react'
import ListItems from './ListItems';

export const RestaurantCategory = ({data, showItems, setShowIndex}) => {

  const handleClick = () => {
    setShowIndex();
  }


  return (
    <div>
      <div className='w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4'>
        
        <div className='flex justify-between cursor-pointer'
         onClick={handleClick}
        >
          <span className='font-bold text-lg'>
          {data?.title} ({data.items.length} items)
        </span>
        <span className='font-bold text-lg'> {showItems ? "▲" : "▼"} 

        </span>

        </div>
        
       

        {showItems && <ListItems items={data.items}/>}
      </div>
    </div>  


    
  );
}
export default RestaurantCategory;