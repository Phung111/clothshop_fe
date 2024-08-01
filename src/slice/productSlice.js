import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import clothShopService from 'services/clothShopService'
import { HTTP_STATUS } from 'app/global'
import { setLoading } from './baseSlice'

const namespace = 'productSlice'

const savedProduct = JSON.parse(localStorage.getItem('product'))

const initialState = {
  product: savedProduct || {},
  isCreateProduct: false,
  isUpdateProduct: false,
}

export const getProductById = createAsyncThunk(`${namespace}/getProductById`, async (id, { dispatch }) => {
  return await clothShopService.getProductById(id).then((response) => {
    return response.data
  })
})

export const createProduct = createAsyncThunk(`${namespace}/createProduct`, async (obj) => {
  return await clothShopService.createProduct(obj).then((response) => {
    return response.data
  })
})

export const updateProduct = createAsyncThunk(`${namespace}/updateProduct`, async (obj, { getState }) => {
  console.log('obj', obj)
  const { product } = getState().productSlice
  const productID = product.id
  return await clothShopService.updateProduct(productID, obj).then((response) => {
    return response.data
  })
})

export const deleteProduct = createAsyncThunk(`${namespace}/deleteProduct`, async (obj) => {
  return await clothShopService.deleteProduct(obj).then((response) => {
    return response.data
  })
})

const productSlice = createSlice({
  name: namespace,
  initialState,
  reducers: {
    setIsCreateProduct: (state, action) => {
      state.isCreateProduct = true
      state.isUpdateProduct = false
    },
    setIsUpdateProduct: (state, action) => {
      state.isCreateProduct = false
      state.isUpdateProduct = true
    },
    setProduct: (state, action) => {
      state.product = action.payload
    },
    emptyProduct: (state, action) => {
      state.product = {}
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getProductById.fulfilled, (state, { payload }) => {
        state.status = HTTP_STATUS.FULFILLED
        localStorage.setItem('product', JSON.stringify(payload))
        state.product = payload
      })
      .addCase(createProduct.fulfilled, (state, { payload }) => {
        state.status = HTTP_STATUS.FULFILLED
      })
  },
})

const { reducer, actions } = productSlice

/* prettier-ignore */
export const { 
  setIsCreateProduct, 
  setIsUpdateProduct, 
  setProduct, 
  emptyProduct 
} = actions

export default reducer
