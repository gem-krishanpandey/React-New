import { RES_URL } from "../utils/Url";

const Card = (props) => {
    const {resData} = props;
    const {cloudinaryImageId, name, avgRating, costForTwo, cuisines} = resData?.info
    return(
        <div className="card">
            <div className="card-img">
                <img src={RES_URL+ cloudinaryImageId}></img>
            </div>
            <div className="card-list">
                <ul>
                    <h3>{name}</h3>
                    <h4>{costForTwo}</h4>
                    <h4>{avgRating}</h4>
                    <h4>{cuisines.join(", ")}</h4>
                </ul>
            </div>
        </div>
    )
}

export default Card;