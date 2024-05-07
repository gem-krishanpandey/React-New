import { useState } from "react";
import { LOGO_URL } from "../utils/Url";
import { Link } from "react-router-dom";

const Header = () => {

const btnName = "Login";
const[buttonName, setButtonName] = useState(btnName);

    return(
        <div className="header">
            <div className="image"><img src={LOGO_URL}></img>
            </div>
            <div className="headerList">
            <ul>
                <li><Link to ="/">Home</Link></li>
                <li><Link to="/aboutus">About Us</Link></li>
                <li><Link to="/contactus">Contact Us</Link></li>
                <li>Cart</li>
                <button className="login" onClick={()=> {
                    buttonName === "Login" ? setButtonName("Logout"):
                    setButtonName("Login")
                }}>{buttonName}</button>
            </ul>
            </div>
        </div>
    )
}

export default Header;