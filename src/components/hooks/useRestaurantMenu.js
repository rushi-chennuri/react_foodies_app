import React, { useEffect, useState } from 'react'
import { MOCK_MENU_DATA } from '../../util/mockMenuData';

export const useRestaurantMenu = (restId) => {
  
     const [restinfo, setRestinfo] = useState({});

      useEffect(()=>{
          if (restId) fetchMenu();
      },[restId]);

 

    const fetchMenu = async () =>{
        if (!restId) return;
        const dummy = 616945;
        const restMenuData = MOCK_MENU_DATA[dummy];
        setRestinfo(restMenuData ?? null);
    }
    return restinfo;
}

export default useRestaurantMenu;