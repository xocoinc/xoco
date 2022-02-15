import "./ProductDescription.css"
import { Link } from "react-router-dom"

const ProductDescription = ({ item }) => {
  return (
    <div className="product_description">
      <div className="image-container">
        <img src={`${process.env.PUBLIC_URL}/assets/images/lp3.png`} alt="" />
        <h2>recomended items</h2>
        <div className="recomended_items">
          <img src={`${process.env.PUBLIC_URL}/assets/images/lp1.png`} alt="" />
          <img src={`${process.env.PUBLIC_URL}/assets/images/lp1.png`} alt="" />
          <img src={`${process.env.PUBLIC_URL}/assets/images/lp1.png`} alt="" />
        </div>
      </div>
      <div className="product_info">
        {/* heading - product title */}
        <h1>Hp Pavillion</h1>
        {/* product description text */}
        <p>
          The HP Pavilion line of laptops is known for its speed and
          portability, as well as its reasonable prices. ... As a lightweight
          device with a luminous display and a long battery life, this series of
          HP laptops can handle whatever you throw at it while being delightful
          to use
        </p>
        {/* Add to cart button */}
        <Link to="/cart" className="link">
          <button>Add to cart</button>
        </Link>
        {/* recomented items */}
      </div>
    </div>
  )
}

export default ProductDescription
