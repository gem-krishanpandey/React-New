import React from "react"
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Body from "./Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import AboutUs from "./AboutUs";
import ErrorElement from "./ErrorElement";
import ContactUs from "./ContactUs";
import RestaurantMenu from "./RestaurantMenu";


const AppLayout = () =>{
    return(
        <div className="newClass">
            <Header/>
            <Outlet/>
        </div>
    )
}

const appRouter = createBrowserRouter(
    [
        {path:"/",
        element: <AppLayout/>,
        children:[
            {path:"/AboutUs",
        element:< AboutUs/>},
        {path:"/ContactUs",
        element:< ContactUs/>},
        {path:"/",
        element:< Body/>},
        {path:"/restaurants/:resId",
        element:<RestaurantMenu />}
        ],
        errorElement:<ErrorElement/>,
    },
    ]
)

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router = {appRouter}/>)