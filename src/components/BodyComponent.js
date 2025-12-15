import RestaurantCard from "./RestaurantCard";
import { restaurantMocData } from "./mockData";

//default export dont need to use {} , if its normal export we need to use {}

const BodyComponent = () => {

    return (

        
        <div className="body">
            <div className="search-box"></div>
            

            <div className="filter-section">
                <div className="filter-buttons">
                    <button className="filter-btn" onClick={
                        ()=>{
                            restaurantMocData.filter(rest=>{
                                rest.rating >4;
                            })
                            console.log("Clicked on Filter");
                        }    
                        
                    } >Top Rated 4*</button>
                </div>
            </div>  
            <div className="restaurant-container">
                {
                    restaurantMocData.map((restaurant) => (
                    <RestaurantCard key = {restaurant.id} restData ={restaurant}/>
                    ))
                }
            </div>
        </div>        
    );  
}

export default BodyComponent;