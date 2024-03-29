import React, { useContext } from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";


const Header = () => {
  const { user } = useContext(AuthContext);
console.log(user)

  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <Link to="/">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/login">Login</Link>
        <Link to="/logout">Sign Up</Link>
        <p>{user && <span>{user.email}</span>}</p>
      </div>
    </nav>
  );
};

export default Header;
