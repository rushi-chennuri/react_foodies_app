import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "./hooks/useOnlineStatus";

const HeadingComponent = () =>{

   const[btnName, setBtnName] = useState("Login");

   const onlineStatus = useOnlineStatus();

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
                        <Link to="/cart">Cart</Link>
                        
                    </li>
                     <li>
                        <Link to="/grocery">Grocery</Link>                        
                    </li>
                    <button className="login-button" onClick={()=> {
                         btnName === "Login" ? setBtnName("Logout") : setBtnName("Login"); 
                    }}>{btnName}</button>
                </ul>
            </div>

        </div>
    )
}

export default HeadingComponent;