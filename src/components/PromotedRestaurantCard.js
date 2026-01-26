//Higer order component to show the promoted restaurant card

import RestaurantCard from "./RestaurantCard";
import React from "react";

// Simple wrapper component that decorates the regular RestaurantCard with a "Promoted" badge.
const PromotedRestaurantCard = (props) => {
    return (
        <div className="promoted-restaurant-card">

            <label className="absolute p-2 m-2 bg-black text-white text-xs rounded-lg" >
                Promoted
            </label>
            <RestaurantCard {...props} />
        </div>
    );
};

export default PromotedRestaurantCard;