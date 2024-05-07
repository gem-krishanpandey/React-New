import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {

const [restaurantDetails, setRestaurantDetails] = useState(null);

const {resId} = useParams()

useEffect(()=>{returnMenu()},[]);

const returnMenu = async() => {
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.4929964&lng=77.093466&restaurantId="+resId+"&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER");

    const resultData = await data.json();

    setRestaurantDetails(resultData)
}


if(restaurantDetails === null) return <Shimmer/>

const {name, cuisines, costforTwo } = restaurantDetails?.data?.cards[2]?.card?.card?.info

const {itemCards} = restaurantDetails?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card

console.log(itemCards)

    return(
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(", ")}</h3>
            <h3>Menu</h3>
            <ul>
                {itemCards.map((item) => <li key={item.card.info.id}>{item.card.info.name}</li>)}
                <li>Burger</li>
            </ul>
        </div>
    )
}



export default RestaurantMenu;