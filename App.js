
import React, { Children, lazy, Suspense } from "react";
// Tailwind base/utilities are in ./index.css — import it first so utility classes are available
import "./index.css";
import "./css/styles.css";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./src/components/HeaderComponent";
import BodyComponent from "./src/components/BodyComponent";
import FooterComponent from "./src/components/FooterComponent";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { useRouteError } from "react-router-dom";
import { AboutComponent } from "./src/components/AboutComponent";
import ErrorComponent from "./src/components/ErrorComponent";
import { RestaurantMenu } from "./src/components/RestaurantMenu";
const GroceryComponent = lazy(() => import("./src/components/GroceryComponent"));


const App = () => {
    return (
        <div className="app">
            <HeaderComponent />
            <Outlet />
            <FooterComponent />
        </div>
    );
};


const appRouter = createBrowserRouter ([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <BodyComponent/>,
            },
            {
                path: "/about",
                element: <AboutComponent/>,
            },
            {
                 path: "/restaurant/:restId",
                 element: <RestaurantMenu/>,   
            },
            {
                path: "/grocery",
                element: 
                <Suspense fallback={<h1>Loading ...</h1>}>
                    <GroceryComponent/>
                </Suspense>
            }

        ],
        errorElement :<ErrorComponent/>,
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);

export default App;




