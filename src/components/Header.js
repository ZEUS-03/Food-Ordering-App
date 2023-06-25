import logo from "../../images/logo.png";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/useContext";
import { useSelector } from "react-redux";

const loggedInUser = () => {
  return false;
}; 

export const Title = () => (
  <a href="/">
    <img data-testid="logo" className="h-28 py-2 px-2" src={logo} alt="Food  Logo" />
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();

  const {user} = useContext(UserContext);
  const cartItems  = useSelector(store => store.cart.items);

  return (
    <>
    <div className="flex items-center justify-between bg-pink-50 shadow-md mb-5 px-5">
      <Title />
      <div>
    <ul className="flex">
      <li className="px-2">
        <Link to="/" className="text-gray-700 hover:text-blue-500">Home</Link>
      </li>
      <li className="px-2">
        <Link to="/about" className="text-gray-700 hover:text-blue-500">About</Link>
      </li>
      <li className="px-2">
        <Link to="/contact" className="text-gray-700 hover:text-blue-500">Contact</Link>
      </li>
      <li className="px-2">
        <Link to="/instamart" className="text-gray-700 hover:text-blue-500">Instamart</Link>
      </li>
      <li className="px-2">
        <Link to="/cart"  data-testid="cart" className="text-gray-700 hover:text-blue-500">Cart {cartItems.length}</Link>
      </li>
    </ul>
  </div>
      
      <h1 data-testid="online-status" >{useOnline ? "🟩 Online" : "🟥 Offline"}</h1>
     <h1 className="text-blue-950">  {user.name}</h1>
      <div className="">
        {isLoggedIn ? (
          <button className="border-2 border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500 font-bold py-2 px-4 rounded" onClick={() => setIsLoggedIn(false)}>
            Logout
          </button>
        ) : (
          <button onClick={() => setIsLoggedIn(true)} className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 text-white font-bold py-2 px-2 rounded">Log In</button>
        )}
      </div>
    </div>
    </>
    
  );
};

export default Header;
