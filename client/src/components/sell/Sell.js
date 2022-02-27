import axios from "axios"
import { useState } from "react"
import "./Sell.css"

const Sell = () => {
  const [post, setPost] = useState(null)
  const createPost = async () => {
    try {
      const post = await axios
        .post(`http://localhost:3002/api/products`)
        .then(res => {
          setPost(res.data)
        })
      console.log(post)
    } catch (err) {
      if (!post) {
        console.log(err)
      }
    }
  }

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
          <button type="submit" onClick={createPost()}>
            Post
          </button>
        </div>
      </form>
    </div>
  )
}

export default Sell
