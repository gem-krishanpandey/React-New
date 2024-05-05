import Card from "./Card";
import resList from "../utils/Constants";
import { useEffect, useState } from "react";

const Body = () => {

const [newResList, setNewResList] = useState(resList);
const [newFilteredList, setNewFilteredList] = useState([]);


const[searchText , setSearchText] = useState("");


useEffect(() => {fetchData();}, [])


const fetchData = (async()=> {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6362211&lng=77.2922332&is-seo-homepage-enabled=true&page_type=DESKTOP_")
    
    const json = await data.json();

    setNewResList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setNewFilteredList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
})

    return(
        <div className="body-div">
            <div className="upper-div">
            <div className="search">
                <input type="text" value={searchText} onChange={(e) => {
                     setSearchText(e.target.value);}}></input>
                <button className="search-btn" onClick={() => {
                    const searchList = newResList.filter((res) => res.info.name.includes(searchText))
                setNewFilteredList(searchList)}}>Search</button>
            </div>
            <div>
                <button className="filter-btn" onClick={() => {
                   const filterList = newResList.filter((res) => res.info.avgRating > 4.2);
                   setNewFilteredList(filterList);
                }}>Top rated restraunt</button>
            </div>

            <div>
                <button className="clear-btn" onClick={() => {
                    setNewFilteredList(resList)
                }}>Clear</button>
            </div>
            </div>
            <div className="card-container">
                {newFilteredList.map((restraunt) => ( <Card key={restraunt.info.id} resData = {restraunt} />))}
            </div>
        </div>
    )
}

export default Body;