import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import clothShopService from 'services/clothShopService'
import { HTTP_STATUS } from 'app/global'

const namespace = 'baseSlice'

const initialState = {
  data: {
    banners: [],
    discounts: [],
    bestsales: [],
    categories: [],
    collections: {
      colors: [],
      sizes: [],
      categories: [],
      topLengths: [],
      countries: [],
      seasons: [],
      styles: [],
      shipfroms: [],
    },
  },
  loading: false,
  arlert: {
    show: false,
    icon: '',
    title: '',
  },
}

export const getAll = createAsyncThunk(`${namespace}/getAll`, async (obj, { rejectWithValue, dispatch }) => {
  dispatch(setLoading(true))
  return await clothShopService
    .getAll(obj)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      return rejectWithValue(error)
    })
    .finally(() => {
      dispatch(setLoading(false))
    })
})

export const getCollection = createAsyncThunk(`${namespace}/getCollection`, async (obj, { rejectWithValue }) => {
  return await clothShopService
    .getCollection()
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
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    setArlert: (state, action) => {
      state.arlert.show = action.payload
    },
    setArlertIcon: (state, action) => {
      state.arlert.icon = action.payload
    },
    setArlertTitle: (state, action) => {
      state.arlert.title = action.payload
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getAll.fulfilled, (state, { payload }) => {
        state.data.banners = payload.banners
        state.data.discounts = payload.discounts
        state.data.bestsales = payload.bestsales
      })
      .addCase(getCollection.fulfilled, (state, { payload }) => {
        state.data.collections.colors = payload.colors
        state.data.collections.sizes = payload.sizes
        state.data.collections.categories = payload.categories
        state.data.collections.topLengths = payload.topLengths
        state.data.collections.countries = payload.countries
        state.data.collections.seasons = payload.seasons
        state.data.collections.styles = payload.styles
        state.data.collections.shipfroms = payload.shipfroms
      })
  },
})

const { reducer, actions } = baseSlice

export const { setLoading, setArlert, setArlertIcon, setArlertTitle } = actions

export default reducer
