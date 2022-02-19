import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="header">
      <Link to="/">
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/logo.png`}
          alt=""
          className="nav__logo"
        />
      </Link>
      <div className="nav__search">
        <input type="text" className="search" placeholder="Search items" />
        <SearchIcon className="search__icon" />
      </div>
      <div className="nav__links">
        <Link to="/account" className="nav__options">
          <AccountCircleIcon className="optionlineOne" />
          <span className="optionlineTwo">Account</span>
        </Link>
        <Link to="/Help" className="nav__options">
          <HelpOutlineIcon className="optionlineOne" />
          <span className="optionlineTwo">Help</span>
        </Link>
        <Link to="/cart" className="nav__options">
          <AddShoppingCartIcon className="optionlineOne" />
          <span className="optionlineTwo">Cart</span>
        </Link>
        <Link to="/sell" className="sell__button">
          <span className="sell__buttoncontent">
            <AttachMoneyIcon className="sell__icon" />
            <h5>Sell</h5>
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
