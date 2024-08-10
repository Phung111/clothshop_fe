import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import clothShopService from 'services/clothShopService'

const namespace = 'orderPageSlice'

const initialState = {
  data: {},
  base: [],
  more: [],
  size: 2,
  page: 1,
  count: 2,
  last: false,
  order: {},
}

export const getOrder = createAsyncThunk(`${namespace}/getOrder`, async (obj, { rejectWithValue }) => {
  return await clothShopService
    .getOrder(obj)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      return rejectWithValue(error)
    })
    .finally(() => {})
})

export const getOrderByCustomer = createAsyncThunk(`${namespace}/getOrderByCustomer`, async (obj, { rejectWithValue }) => {
  return await clothShopService
    .getOrderByCustomer(obj)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      return rejectWithValue(error)
    })
    .finally(() => {})
})

export const getMore = createAsyncThunk(`${namespace}/getMore`, async (obj, { rejectWithValue, getState }) => {
  const { size, page } = getState().orderPageSlice
  let formData = new FormData()
  formData.set('size', size)
  formData.set('page', page)

  return await clothShopService
    .getMore(formData)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      return rejectWithValue(error)
    })
    .finally(() => {})
})

export const getOrderbyID = createAsyncThunk(`${namespace}/getOrderbyID`, async (id, { rejectWithValue }) => {
  return await clothShopService
    .getOrderbyID(id)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      return rejectWithValue(error)
    })
    .finally(() => {})
})

const orderPageSlice = createSlice({
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
    setOrder: (state, action) => {
      state.order = action.payload
    },
    emptyOrder: (state) => {
      state.order = {}
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getOrder.pending, (state) => {})
      .addCase(getOrder.fulfilled, (state, { payload }) => {
        state.data = payload
      })
      .addCase(getOrder.rejected, (state, { payload }) => {
        if (payload) {
        }
      })
      .addCase(getOrderbyID.pending, (state) => {})
      .addCase(getOrderbyID.fulfilled, (state, { payload }) => {
        state.order = payload.content
      })
      .addCase(getOrderbyID.rejected, (state, { payload }) => {
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

const { reducer, actions } = orderPageSlice

export const { setData, setOrder, emptyOrder } = actions

export default reducer
