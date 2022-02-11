import { categories } from "../../data"
import CategoriesItem from "./CategoriesItem"
import "./Categories.css"

const Categories = () => {
  return (
    <div className="categories">
      {categories.map(item => (
        <CategoriesItem item={item} key={item.id} />
      ))}
    </div>
  )
}

export default Categories
