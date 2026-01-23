import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { restaurantMocData } from "./mockData";

//default export dont need to use {} , if its normal export we need to use {}

const BodyComponent = () => {


    const [restaurantList, setRestaurantList] = useState(restaurantMocData);
    const [filteredRestList, setFilteredRestList] = useState([]);

    return (

        
        <div className="body">
            <div className="search-box"></div>
            

            <div className="filter-section">
               
                    <button className="filter-btn" onClick={
                        ()=>{
                            const redata = restaurantMocData.filter(
                                (rest)=> rest.rating > 4
                            )
                            setFilteredRestList(redata);
                        }    
                        
                    } >Top Rated 4*</button>
                
            </div>
              
            <div className="restaurant-container">
                {
                    filteredRestList.length > 0 ? filteredRestList.map((restaurant) => (
                    <RestaurantCard key = {restaurant.id} restData ={restaurant}/>
                    )) : restaurantList.map((restaurant) => (
                    <RestaurantCard key = {restaurant.id} restData ={restaurant}/>
                    ))
                }
            </div>
        </div>        
    );  
}

export default BodyComponent;