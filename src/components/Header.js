import { LOGO_URL } from "../utils/constants";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext"; 

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus()
  useEffect(() => {
    console.log("use effect render");
  }, [btnNameReact]);
  const {loggedInUser} = useContext(UserContext);
  return (
    <div className="flex justify-between bg-blue-400">
      <div className="logo">
        <img className="w-40" src={LOGO_URL}></img>
      </div>
      <div className="nav-item">
        <ul className="flex m-5 p-5">
          <li className="p-5">
            <h2>Online Status: {onlineStatus ? "✅" : "🔴"}</h2>
          </li>
          <li className="p-5">
            <Link to="./">Home</Link>
          </li>
          <li className="p-5">
            <Link to="./about">About Us</Link>
          </li>
          <li className="p-5">
            <Link to="./contact">Contact Us</Link>
          </li>
           <li className="p-5">
            <Link to="./grocery">Grocery</Link>
          </li>
          <li className="p-5">Cart</li>
          <button
            onClick={() => {
              setbtnNameReact(btnNameReact === "Login" ? "Logout" : "Login");
            }}
            className="login-btn"
          >
            {btnNameReact}
          </button>
           <li className="p-5">
              {loggedInUser}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
