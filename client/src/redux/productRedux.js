import { createSlice } from "@reduxjs/toolkit"

export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //UPDATE
    updateProductStart: state => {
      state.isFetching = true
      state.error = false
    },
    updateProductSuccess: (state, action) => {
      state.isFetching = false
      state.products[
        state.products.findIndex(item => item._id === action.payload.id)
      ] = action.payload.product
    },
    updateProductFailure: state => {
      state.isFetching = false
      state.error = true
    },
    //UPDATE
    addProductStart: state => {
      state.isFetching = true
      state.error = false
    },
    addProductSuccess: (state, action) => {
      state.isFetching = false
      state.products.push(action.payload)
    },
    addProductFailure: state => {
      state.isFetching = false
      state.error = true
    },
  },
})

export const {
  addProductStart,
  addProductSuccess,
  addProductFailure,
} = productSlice.actions

export default productSlice.reducer
