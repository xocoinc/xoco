import { React }from "react"
import "./Product.css"
import { Link } from 'react-router-dom'
// import { publicRequest } from "../publicRequest";
// import { useDispatch } from 'react-redux'
// import { addProduct } from "../../redux/cartRedux";


// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Product = ({ item }) => {
  return (
    <>
      <div className="product">
        <img src={item.img} alt='' />
        <div className="info-container">
          <p>{item.title}</p>
          <Link to={`/product/${item._id}`}className="link">
            <button>Buy</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Product;