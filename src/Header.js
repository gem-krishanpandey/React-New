import { useState } from "react";
import { LOGO_URL } from "../utils/Url";

const Header = () => {

const btnName = "Login";
const[buttonName, setButtonName] = useState(btnName);

    return(
        <div className="header">
            <div className="image"><img src={LOGO_URL}></img>
            </div>
            <div className="headerList">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
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