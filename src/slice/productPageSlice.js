import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import clothShopService from 'services/clothShopService'
import { HTTP_STATUS } from 'app/global'

const namespace = 'productPageSlice'

const initialState = {
  loading: true,
  request: {
    productSize: 3,
    currentPage: 1,
    keySearch: '',

    latest: '',
    nameAsc: '',
    priceAsc: '',
    topsales: '',

    eCategories: [],
    eTopLengths: [],
    eCountries: [],
    eSeasons: [],
    eStyles: [],
    eShipsFroms: [],

    priceFrom: '',
    priceTo: '',
  },
  respond: {
    products: [],
    size: 10, // kích thước trang
    numberOfElements: 9, // số phần tử trên trang hiện tại
    totalElements: 200, //tổng phần tử
    offset: 21, // phần tử đầu tiên của trang là số 21
    pageNumber: 0, //trang số ~~ gần với trường "number"
    totalPages: 9, //tổng số trang
    last: false,
    first: true,
    empty: false,
  },
}

export const getProductPage = createAsyncThunk(`${namespace}/getProductPage`, async (obj, { rejectWithValue }) => {
  const latestValue = document.getElementById('latest').value
  return await clothShopService
    .getProductPage(obj)
    .then((response) => {
      // console.log('respond', response.data.content)
      return response.data
    })
    .catch((error) => {
      return rejectWithValue(error)
    })
})

const accountSlice = createSlice({
  name: namespace,
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    setProductSize: (state, action) => {
      state.request.productSize = action.payload
    },
    setCurrentPage: (state, action) => {
      state.request.currentPage = action.payload
    },
    setKeySearch: (state, action) => {
      state.request.keySearch = action.payload
    },
    setLatest: (state, action) => {
      state.request.latest = action.payload
      console.log('setLatest', state.request.latest)
    },
    setNameAsc: (state, action) => {
      state.request.nameAsc = action.payload
    },
    setPriceAsc: (state, action) => {
      state.request.priceAsc = action.payload
    },
    setTopsales: (state, action) => {
      state.request.topsales = action.payload
    },
    setECategories: (state, action) => {
      state.request.eCategories = action.payload
    },
    setETopLengths: (state, action) => {
      state.request.eTopLengths = action.payload
    },
    setECountries: (state, action) => {
      state.request.eCountries = action.payload
    },
    setESeasons: (state, action) => {
      state.request.eSeasons = action.payload
    },
    setEStyles: (state, action) => {
      state.request.eStyles = action.payload
    },
    setEShipsFroms: (state, action) => {
      state.request.eShipsFroms = action.payload
    },
    setPriceFrom: (state, action) => {
      state.request.priceFrom = action.payload
    },
    setPriceTo: (state, action) => {
      state.request.priceTo = action.payload
    },
    setSize: (state, action) => {
      state.respond.size = action.payload
    },
    setNumberOfElements: (state, action) => {
      state.respond.numberOfElements = action.payload
    },
    setTotalElements: (state, action) => {
      state.respond.totalElements = action.payload
    },
    setOffset: (state, action) => {
      state.respond.offset = action.payload
    },
    setPageNumber: (state, action) => {
      state.respond.pageNumber = action.payload
    },
    setTotalPages: (state, action) => {
      state.respond.totalPages = action.payload
    },
    setLast: (state, action) => {
      state.respond.last = action.payload
    },
    setFirst: (state, action) => {
      state.respond.first = action.payload
    },
    setEmpty: (state, action) => {
      state.respond.empty = action.payload
    },
    setProducts: (state, action) => {
      state.respond.products = action.payload
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getProductPage.pending, (state) => {
        state.status = HTTP_STATUS.PENDING
      })
      .addCase(getProductPage.fulfilled, (state, { payload }) => {
        state.status = HTTP_STATUS.FULFILLED

        let dataRes = payload
        state.respond.products = dataRes.content

        state.respond.size = dataRes.size
        state.respond.numberOfElements = dataRes.numberOfElements
        state.respond.totalElements = dataRes.totalElements
        state.respond.offset = dataRes.pageable.offset
        state.respond.pageNumber = dataRes.pageable.pageNumber
        state.respond.totalPages = dataRes.totalPages
        state.respond.last = dataRes.last
        state.respond.first = dataRes.first
        state.respond.empty = dataRes.empty
      })
      .addCase(getProductPage.rejected, (state, { payload }) => {
        state.status = HTTP_STATUS.REJECTED
        if (payload.response) {
          state.errorMessage = payload.response.statusText
          state.errorStatus = payload.response.status
        }
      })
  },
})

const { reducer, actions } = accountSlice

export const { setLoading, setProductSize, setCurrentPage, setKeySearch, setLatest, setNameAsc, setPriceAsc, setTopsales, setECategories, setETopLengths, setECountries, setESeasons, setEStyles, setEShipsFroms, setPriceFrom, setPriceTo, setSize, setNumberOfElements, setTotalElements, setOffset, setPageNumber, setTotalPages, setLast, setFirst, setEmpty, setProducts } = actions

export default reducer
