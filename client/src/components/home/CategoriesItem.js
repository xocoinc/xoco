import "./CategoriesItem.css"
import { Link } from "react-router-dom"

const CategoriesItem = ({ item }) => {
  console.log(item)
  return (
    <Link to={`/products/${item.cat}`}>
      <div className="categories__item">
        <img src={item.img} alt="img" />
        <div className="info">
          <h1>{item.title}</h1>
          <button>Shop Now</button>
        </div>
      </div>
    </Link>
  )
}

export default CategoriesItem
