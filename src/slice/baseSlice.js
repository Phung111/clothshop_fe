import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import clothShopService from 'services/clothShopService'
import { HTTP_STATUS } from 'app/global'

const namespace = 'baseSlice'

const initialState = {
  data: {
    products: [],
  },
  loading: true,
}

export const getProductAll = createAsyncThunk(`${namespace}/getProductAll`, async (obj, { rejectWithValue }) => {
  return await clothShopService
    .getProductAll()
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      return rejectWithValue(error)
    })
})

export const createProduct = createAsyncThunk(`${namespace}/createProduct`, async (obj, { rejectWithValue }) => {
  return await clothShopService
    .createProduct(obj)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      return rejectWithValue(error)
    })
})

const baseSlice = createSlice({
  name: namespace,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getProductAll.pending, (state) => {
        state.status = HTTP_STATUS.PENDING
      })
      .addCase(getProductAll.fulfilled, (state, { payload }) => {
        state.status = HTTP_STATUS.FULFILLED
        console.log(payload)
        state.data.productDetail = payload.products
      })
      .addCase(getProductAll.rejected, (state, { payload }) => {
        state.status = HTTP_STATUS.REJECTED
        if (payload.response) {
          state.errorMessage = payload.response.statusText
          state.errorStatus = payload.response.status
        }
      })
      .addCase(createProduct.pending, (state) => {
        state.status = HTTP_STATUS.PENDING
      })
      .addCase(createProduct.fulfilled, (state, { payload }) => {
        state.status = HTTP_STATUS.FULFILLED
      })
      .addCase(createProduct.rejected, (state, { payload }) => {
        state.status = HTTP_STATUS.REJECTED
        if (payload.response) {
          state.errorMessage = payload.response.statusText
          state.errorStatus = payload.response.status
        }
      })
  },
})

const { reducer, actions } = baseSlice

export const {} = actions

export default reducer
