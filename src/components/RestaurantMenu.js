import React, { use, useState } from 'react'
import { useParams } from 'react-router-dom';
import useRestaurantMenu from './hooks/useRestaurantMenu';
import { RestaurantCategory } from './RestaurantCategory';

export const RestaurantMenu = () => {

    const { restId } = useParams();


    const[showIndex, setShowIndex] = useState(0);
    

    const restInfoData = useRestaurantMenu(restId);

    const categories = restInfoData?.menu ?? [];
    return (
      <div className = "justify-center">
        <h1 className='text-2xl font-bold text-center my-6'>{restInfoData?.restaurant?.name}</h1>
        <p className='text-center text-gray-600'>{restInfoData?.restaurant?.cuisine}</p>
        <p className='text-center text-gray-600'>Rating: {restInfoData?.restaurant?.rating}</p>

        {/* Additional menu rendering can be added here */}

        {/* Render Restaurant Categories  controller component */}
        {categories.map((category, index) =>(
          <RestaurantCategory 
              key={String(category?.title)} 
              data={category} 
              showItems={index === showIndex ? true : false}
              setShowIndex={() => {
                setShowIndex(index)
              }}
          />
        ))}





      </div>
    )

}
export default RestaurantMenu;  