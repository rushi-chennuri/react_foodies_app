import React from 'react'
import { useParams } from 'react-router-dom';
import useRestaurantMenu from './hooks/useRestaurantMenu';

export const RestaurantMenu = () => {

    const { restId } = useParams();

    

    const restInfoData = useRestaurantMenu(restId);


    return (
      <div className = "justify-center">
          <h1>{restInfoData?.restaurant?.name ?? 'Name of the Restaurant'}</h1>
          <h2>Menu</h2>
           <ul>
              {restInfoData?.menu?.map((item) => (
                  <li key={item.id}>{item.name}</li>
              )) ?? (
                  <>
                    <li>Biryani</li>
                    <li>Burgers</li>
                    <li>Diet Coke</li>
                  </>
              )}

           </ul>

      </div>
    )

}
export default RestaurantMenu;  