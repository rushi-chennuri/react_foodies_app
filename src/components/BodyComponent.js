import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { restaurantMocData } from "./mockData";


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

         console.log("Filter Result", filterresult);
         setFilteredRestList(filterresult);
    }

    const handleRating = () => {


            const ratedResturants =  restaurantList.filter((rest)=> {
                console.log(rest.info.avgRating);

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
    

    return (

        

        /* 
           */

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
                filteredRestList.map((rest) => (
                       <RestaurantCard key ={rest.info.id} restData={rest} ></RestaurantCard> 
                ))
               }
            </div>
        </div>        
    );  
}

export default BodyComponent;