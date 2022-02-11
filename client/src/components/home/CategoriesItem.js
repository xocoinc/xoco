import "./CategoriesItem.css"

const CategoriesItem = ({ item }) => {
  return (
    <div className="categories__item">
      <img src={item.img} alt="img" />
      <div className="info">
        <h1>{item.title}</h1>
        <button>Shop Now</button>
      </div>
    </div>
  )
}

export default CategoriesItem
