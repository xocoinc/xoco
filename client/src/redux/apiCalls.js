import { loginFailure, loginStart, loginSuccess } from "./userRedux"
import axios from "axios"
import {
  addProductFailure,
  addProductStart,
  addProductSuccess,
} from "./productRedux"
export const login = async (dispatch, user) => {
  dispatch(loginStart())
  try {
    const res = await axios.post("auth/login", user)
    dispatch(loginSuccess(res.data))
  } catch (err) {
    dispatch(loginFailure())
  }
}
export default async function addProduct(product, dispatch) {
  dispatch(addProductStart())
  try {
    const res = await axios.post(`http://localhost:5000/api/products`, product)
    dispatch(addProductSuccess(res.data))
  } catch (err) {
    dispatch(addProductFailure())
  }
}
