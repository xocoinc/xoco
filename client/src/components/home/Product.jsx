import React from "react"
import "./Product.css"
import { Link } from 'react-router-dom'

// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Product = ({ item }) => {
  return (
    <>
      <div className="product">
        <img src={item.img} alt='' />
        <div className="info-container">
          <p>{item.title}</p>
          <Link to='/productDescription' className="link">
            <button>Buy</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Product;