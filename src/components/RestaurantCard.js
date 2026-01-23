const RestaurantCard = (props) => {

    const restDatainfo = props.restData.info;

    const {name, cloudinaryImageId, avgRating, locality} = restDatainfo;

const CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

    //prevent runtime errors using optional chaining


    return (
        <div className="rest-card">
            <div className="card-image">
                <img src={CDN_URL + cloudinaryImageId}
                style={{ width: '100%', height: '120px',  objectFit: 'cover', borderRadius: '8px' }}
               />   
            </div>
            <h3>{name}</h3>
            <p>{avgRating}</p>
            <p>{locality}</p>
        </div>
    )
}
export default RestaurantCard;