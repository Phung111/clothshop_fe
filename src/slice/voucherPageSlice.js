import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import clothShopService from 'services/clothShopService'

const namespace = 'voucherPageSlice'

const initialState = {
  data: {},
  base: [],
  more: [],
  size: 3,
  page: 1,
  count: 2,
  last: false,
}

export const getVoucherPage = createAsyncThunk(`${namespace}/getVoucherPage`, async (obj, { rejectWithValue }) => {
  return await clothShopService
    .getVoucherPage(obj)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      return rejectWithValue(error)
    })
    .finally(() => {})
})

export const getMore = createAsyncThunk(`${namespace}/getMore`, async (obj, { getState, rejectWithValue }) => {
  const { size, page } = getState().voucherPageSlice
  let formData = new FormData()
  formData.set('size', size)
  formData.set('page', page)

  return await clothShopService
    .getVoucherPage(formData)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      return rejectWithValue(error)
    })
    .finally(() => {})
})

const voucherPageSlice = createSlice({
  name: namespace,
  initialState,
  reducers: {
    setMore: (state) => {
      state.more = [...state.more, ...state.base]
    },
    emptyMore: (state) => {
      state.more = []
    },
    setSize: (state, action) => {
      state.size = action.payload
    },
    setPage: (state, action) => {
      state.page = action.payload
    },
    upCount: (state) => {
      state.count++
    },
    resetCount: (state) => {
      state.count = 2
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getVoucherPage.pending, (state) => {})
      .addCase(getVoucherPage.fulfilled, (state, { payload }) => {
        state.data = payload
      })
      .addCase(getVoucherPage.rejected, (state, { payload }) => {
        if (payload) {
        }
      })
      .addCase(getMore.pending, (state) => {})
      .addCase(getMore.fulfilled, (state, { payload }) => {
        state.base = payload.content
        state.last = payload.last
      })
      .addCase(getMore.rejected, (state, { payload }) => {
        if (payload) {
        }
      })
  },
})

const { reducer, actions } = voucherPageSlice

/* prettier-ignore */
export const { 
  setMore,
  emptyMore,
  setSize,
  setPage,
  upCount,
  resetCount,
} = actions

export default reducer
