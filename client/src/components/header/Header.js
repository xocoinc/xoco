import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <nav className="nav_bar">
        <div className="header_logo">
          <img
            src="https://avatars.githubusercontent.com/u/98540847?s=200&v=4"
            alt="logo"
          ></img>
        </div>
        <div className="search_bar">
          <form>
            <div className="input_field">
              <input type="text" id="search" />
              <SearchIcon />
            </div>
          </form>
        </div>
        <div className="nav_links">
          <span>
            <AccountCircleIcon />
            <small>Account</small>
          </span>
          <span>
            <HelpOutlineIcon />
            <small>Help</small>
          </span>
          <span>
            <AddShoppingCartIcon className="icon" />
            <small>Cart</small>
          </span>
        </div>
      </nav>
    </div>
  );
};
export default Header;
