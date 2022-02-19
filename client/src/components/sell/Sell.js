import "./Sell.css"

const Sell = () => {
  return (
    <div className="sell">
      <form className="sell_form">
        <div className="input__field">
          <h1>Product title</h1>
          <input type="text" />
        </div>
        <div className="input__field">
          <h1>Category</h1>
          <input type="text" />
        </div>
        <div className="input__field">
          <h1>Product description</h1>
          <textarea></textarea>
        </div>
        <div className="input__field">
          <h1>Product price</h1>
          <select>
            <option>Ksh</option>
            <option>dollar</option>
          </select>
          <input type="text" />
        </div>
        <div className="input__field">
          <h1>Upload image</h1>
          <input type="file" />
        </div>
        <div className="submit_button">
          <button type="submit">Post</button>
        </div>
      </form>
    </div>
  )
}

export default Sell
