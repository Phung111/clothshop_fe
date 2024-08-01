import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import clothShopService from 'services/clothShopService'

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
    pronvices: [],
    genders: [],
  },
  loading: false,
  arlert: {
    show: false,
    icon: '',
    title: '',
  },
}

export const getHome = createAsyncThunk(`${namespace}/getHome`, async (obj, { rejectWithValue }) => {
  return await clothShopService
    .getHome(obj)
    .then((response) => response.data)
    .catch((error) => rejectWithValue(error))
})

export const getCollection = createAsyncThunk(`${namespace}/getCollection`, async (obj, { rejectWithValue }) => {
  return await clothShopService
    .getCollection()
    .then((response) => response.data)
    .catch((error) => rejectWithValue(error))
})

export const getPronvice = createAsyncThunk(`${namespace}/getPronvice`, async (obj, { rejectWithValue }) => {
  return await clothShopService
    .getPronvice()
    .then((response) => response.data)
    .catch((error) => rejectWithValue(error))
})

export const getGender = createAsyncThunk(`${namespace}/getGender`, async (obj, { rejectWithValue }) => {
  return await clothShopService
    .getGender()
    .then((response) => response.data)
    .catch((error) => rejectWithValue(error))
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
      .addCase(getHome.fulfilled, (state, { payload }) => {
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
      .addCase(getPronvice.fulfilled, (state, { payload }) => {
        state.data.pronvices = payload.pronvices
      })
      .addCase(getGender.fulfilled, (state, { payload }) => {
        state.data.genders = payload.genders
      })
  },
})

const { reducer, actions } = baseSlice

export const { setLoading, setArlert, setArlertIcon, setArlertTitle } = actions

export default reducer
