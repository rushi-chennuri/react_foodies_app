import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { restaurantMocData } from "./mockData";
import { ShimmerComponent } from "./ShimmerComponent";
import { Link } from "react-router-dom";
import PromotedRestaurantCard from "./PromotedRestaurantCard";


const BodyComponent = () => {


    const [restaurantList, setRestaurantList] = useState([]);
    const [filteredRestList, setFilteredRestList] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(()=>{

      fetcData();

    }, [])

    const handleSearchRestaurant = () => {
         const filterresult = restaurantList.filter((rest) => {
           
            return rest.info.name.toLowerCase().includes(searchText.toLowerCase());
         });

         setFilteredRestList(filterresult);
    }

    const handleRating = () => {
            const ratedResturants =  restaurantList.filter((rest)=> {
                return rest.info.avgRating > 4;
            }     
           );
           setFilteredRestList(ratedResturants);

    }

    const fetcData = async () => {
        try{
             const data = await fetch(
            "https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.304897&lng=78.611849&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();

        const restaurants = json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
        
        setRestaurantList(restaurants);
        setFilteredRestList(restaurants);
        }catch(error){
            console.log("Error while fetching the data", error);         
        }
    };
    

    return  restaurantList.length == 0 ? <ShimmerComponent /> : (

           <div className="body" style={{ padding: '20px'  }} >   
                <div className="filter-container">
                    <input type="text" className="search-text" placeholder="Restaurant Name" 
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}>
                    </input>        
                    <button className="search-btn" onClick={handleSearchRestaurant}>Search Restaurant</button>
                    <button className="filter-btn" onClick= {handleRating}>Top Rated 4*</button>
                </div>
                  
            <div className="restaurant-container">
               {
                filteredRestList.map((rest) => 
                    
                    (
                    <Link to={"/restaurant/" + rest.info.id} 
                    key={rest.info.id}>

                        {rest.info.type === "F" ?(
                                <PromotedRestaurantCard restData={rest}></PromotedRestaurantCard>
                        ) : (
                                <RestaurantCard key ={rest.info.id} restData={rest} ></RestaurantCard>
                        )}
                     
                    </Link>

                       
                ))}
            </div>
        </div>        
    );  
}

export default BodyComponent;