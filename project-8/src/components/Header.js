import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import searchIcon from "../img/search.svg";
import regIcon from "../img/reg.png";
import cartIcon from "../img/cart.png";
import menuIcon from "../img/menu.png";
import "../pages/styles.css";

function Header() {
  return (
    <header className="header center">
      <div className="header__left">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <Link to="#">
          <img src={searchIcon} alt="search" />
        </Link>
      </div>
      <nav className="header__right">
        <label htmlFor="header__check">
          <img className="menu_img" src={menuIcon} alt="menu" />
        </label>
        <Link
          className="header__link-site header__link-site_icons"
          to="/registration"
        >
          <img src={regIcon} alt="reg" />
        </Link>
        <Link className="header__link-site header__link-site_icons" to="/cart">
          <img src={cartIcon} alt="cart" />
        </Link>
      </nav>
      <input className="header__checkbox" id="header__check" type="checkbox" />
      {/* Мобильное меню далее */}
    </header>
  );
}

export default Header;
