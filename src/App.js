import React from "react"
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Body from "./Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutUs from "./AboutUs";
import ErrorElement from "./ErrorElement";


const Test = () =>{
    return(
        <div className="newClass">
            <Header/>
            <Body/>
        </div>
    )
}

const appRouter = createBrowserRouter(
    [
        {path:"/",
        element: <Test/>,
        errorElement:<ErrorElement/>,},
        {path:"/AboutUs",
        element:< AboutUs/>}
    ]
)

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router = {appRouter}/>)