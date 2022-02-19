import { popularProduct } from "../../data"
import Product from "./Product"
import  "./Products.css"

const Products = () => {
  return (
    <div className="products">
      {popularProduct.map(item => (
        <Product item={item} key={item.id} />
      ))}
    </div>
  )
}

export default Products
