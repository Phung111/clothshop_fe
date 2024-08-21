import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import clothShopService from 'services/clothShopService'

const namespace = 'bannerPageSlice'

const initialState = {
  data: {},
}

export const getBannerPage = createAsyncThunk(`${namespace}/getBannerPage`, async (obj, { rejectWithValue }) => {
  return await clothShopService
    .getBannerPage(obj)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      return rejectWithValue(error)
    })
    .finally(() => {})
})

const bannerPageSlice = createSlice({
  name: namespace,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getBannerPage.pending, (state) => {})
      .addCase(getBannerPage.fulfilled, (state, { payload }) => {
        state.data = payload
      })
      .addCase(getBannerPage.rejected, (state, { payload }) => {
        if (payload) {
        }
      })
  },
})

const { reducer } = bannerPageSlice

export default reducer
