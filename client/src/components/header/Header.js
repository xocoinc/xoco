import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import "./Header.css";
import logo from "./xoco blue (2).png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="header">
      <a href="/home">
        <img src={logo} alt="" className="nav__logo" />
      </a>
      <div className="nav__search">
        <input type="text" className="search" placeholder="Search items" />
        <SearchIcon className="search__icon" />
      </div>
      <div className="nav__links">
        <Link to="/account" className="nav__options">
          <AccountCircleIcon className="optionlineOne" />
          <span className="optionlineTwo">Account</span>
        </Link>
        <div className="nav__options">
          <HelpOutlineIcon className="optionlineOne" />
          <span className="optionlineTwo">Help</span>
        </div>
        <div className="nav__options">
          <AddShoppingCartIcon className="optionlineOne" />
          <span className="optionlineTwo">Cart</span>
        </div>
        <div className="sell__button">
          <span className="sell__buttoncontent">
            <AttachMoneyIcon className="sell__icon" />
            <h5>Sell</h5>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Header;
