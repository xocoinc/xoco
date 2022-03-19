import { useState } from "react"
import "./Sell.css"
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage"
import app from "../../firebase"
import addProduct from ".././../redux/apiCalls"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"

export default function NewProduct() {
  const [inputs, setInputs] = useState({})
  const [file, setFile] = useState(null)
  const [cat, setCat] = useState([])
  const dispatch = useDispatch()

  const handleChange = e => {
    setInputs(prev => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }
  const handleCat = e => {
    setCat(e.target.value.split(","))
  }
  const history = useHistory()

  const routeChange = () => {
    let path = `/success`
    history.push(path)
  }

  const handleClick = e => {
    e.preventDefault()
    const fileName = new Date().getTime() + file.name
    const storage = getStorage(app)
    const storageRef = ref(storage, fileName)
    const uploadTask = uploadBytesResumable(storageRef, file)
    uploadTask.on(
      "state_changed",
      snapshot => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        console.log("Upload is " + progress + "% done")
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused")
            break
          case "running":
            console.log("Upload is running")
            break
          default:
        }
      },
      error => {},
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
          const product = { ...inputs, img: downloadURL, categories: cat }
          addProduct(product, dispatch)
        })
      },
    )
  }

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input
            type="file"
            id="file"
            onChange={e => setFile(e.target.files[0])}
          />
        </div>
        <div className="addProductItem">
          <label>Title</label>
          <input
            name="title"
            type="text"
            placeholder="Office chair"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input
            name="desc"
            type="text"
            placeholder="description..."
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Price</label>
          <input
            name="price"
            type="number"
            placeholder="100"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Categories</label>
          <select
            type="text"
            placeholder="beddings, chairs"
            onChange={handleCat}
          >
            <option>select Category</option>
            <option>beddings</option>
            <option>table</option>
            <option>chairs</option>
            <option>laptops</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>Stock</label>
          <select name="inStock" onChange={handleChange}>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <button
          onClick={(handleClick, routeChange)}
          className="addProductButton"
        >
          Create
        </button>
      </form>
    </div>
  )
}
