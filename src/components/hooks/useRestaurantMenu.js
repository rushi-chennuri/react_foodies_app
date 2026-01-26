import React, { useEffect, useState } from 'react'
import { MOCK_MENU_DATA } from '../../util/mockMenuData';

export const useRestaurantMenu = (restId) => {
  
     const [restinfo, setRestinfo] = useState(null);

      useEffect(()=>{
          if (restId) fetchMenu();
      },[restId]);

 

    const fetchMenu = async () =>{

        console.log("RestId in hook:", restId);
        if (!restId) return;
        const restMenuData = MOCK_MENU_DATA[restId];
        setRestinfo(restMenuData ?? null);
    }

    return restinfo;
}

export default useRestaurantMenu;