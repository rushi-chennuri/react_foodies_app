import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "./hooks/useOnlineStatus";
import UserContext from "../util/UserContext";
import { useSelector } from "react-redux";

const HeadingComponent = () =>{

   const[btnName, setBtnName] = useState("Login");

   const onlineStatus = useOnlineStatus();



   const {loggedUser} = useContext(UserContext);

   const cartItems = useSelector((store) => store.cart.items)


    return (

        <div className="flex justify-between bg-pink-100 shadow-lg p-9">
            <div className="rest-logo">

                <h2>🍕 Foodie</h2>  
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        Online Status:  {onlineStatus ? "🟢" : "🔴"}
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link> 
                        </li>
                    <li>
                        <Link to="/cart">Cart ({cartItems.length})</Link>
                        
                    </li>
                     <li>
                        <Link to="/grocery">Grocery</Link>                        
                    </li>
                    <button className="login-button" onClick={()=> {
                         btnName === "Login" ? setBtnName("Logout") : setBtnName("Login"); 
                    }}>{btnName}</button>
                    <span>{loggedUser}</span>

                </ul>
            </div>

        </div>
    )
}

export default HeadingComponent;