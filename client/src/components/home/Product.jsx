import React from "react"
import "./Product.css"

// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Product = ({ item }) => {
  return (
    <div className="product">
      <img src={item.img} alt='' />
      <div className="info">
        <button>Buy</button>
      </div>
    </div>
  );
};

export default Product;