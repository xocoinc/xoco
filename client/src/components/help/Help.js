import SearchIcon from "@mui/icons-material/Search";
import "./Help.css";

const Help = () => {
  return (
    <div className="help_page">
      <div class="querysection">
        <h1> Help Center </h1>
        <h3>Hi, how can we help?</h3>
        <div className="help_search">
          <input type="text" className="search" placeholder="Search" />
          <SearchIcon className="search_icon" />
        </div>
      </div>
      <div className="help_section">
        <div class="section1">
          <img src="./assets/images/TrackOrder.jpg" alt="" />
          <h3>Track Your Order </h3>
          <p></p>
        </div>
        <div class="section2">
          <img src="./assets/images/OrderReturns.jfif" alt="" />
          <h3>Orders and Returns</h3>
        </div>
        <div class="section3">
          <img src="./assets/images/OrderCollection.png" alt="" />
          <h3>Order Collection</h3>
        </div>
      </div>
    </div>
  );
};

export default Help;
