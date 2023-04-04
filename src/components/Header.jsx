import React, { useState, useContext } from "react";
import "../styles/Header.scss";
import Menu from "../components/Menu";
import menu from "../assets/icons/icon_menu.svg";
import logo from "../assets/logos/logo_yard_sale.svg";
import shoppingCart from "../assets/icons/icon_shopping_cart.svg";
import AppContext from "../context/AppContext";
import MyOrder from "../containers/MyOrder";
import { Link } from "react-router-dom";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);
  const { state } = useContext(AppContext);

  //console.log(toggleOrders)


  const handleToggle = () => {
    setToggleMenu(!toggleMenu);
  };

  const handleToggleOrders = () => {
    setToggleOrders(!toggleOrders);
  };

  return (
    <nav>
      <img src={menu} alt="menu" className="menu" />

      <div className="navbar-left">
        <img src={logo} alt="logo" className="nav-logo" />
        <Link to="/login" className='login'>Login</Link>
        <Link to="/signup" className='login'>Sign Up</Link>
      </div>

      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={handleToggle}>
            User Name
          </li>
          <li className="navbar-shopping-cart" onClick={handleToggleOrders}>
            <img src={shoppingCart} alt="shopping cart" />
            {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
          </li>
        </ul>
      </div>
      {toggleMenu && <Menu />}
      {toggleOrders && <MyOrder />}
    </nav>
  );
};

export default Header;
