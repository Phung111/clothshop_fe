import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import clothShopService from 'services/clothShopService'
import { HTTP_STATUS } from 'app/global'
import { setLoading } from './baseSlice'
import Swal from 'sweetalert2'

const namespace = 'orderSlice'

const countCartItemLS = JSON.parse(localStorage.getItem('countCartItem'))

const initialState = {
  cart: {
    cartId: null,
    cartItems: [],
    count: null,
  },
  countCartItem: countCartItemLS || null,
  selectCartItems: [],
  cartItemsTotal: 0,
  cartItem: {
    idProduct: 0,
    size: '',
    color: '',
    quantity: 0,
  },
  selectCartItemsID: [],
  checkout: {},
}

export const getCart = createAsyncThunk(`${namespace}/getCart`, async (id, { rejectWithValue, dispatch }) => {
  dispatch(setLoading(true))
  return await clothShopService
    .getCart()
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

export const addCartItem = createAsyncThunk(`${namespace}/addCartItem`, async (obj, { getState }) => {
  const { cartItem } = getState().orderSlice
  let formData = new FormData()
  formData.append('idProduct', cartItem.idProduct)
  formData.append('size', cartItem.size)
  formData.append('color', cartItem.color)
  formData.append('quantity', cartItem.quantity)

  return await clothShopService.addCartItem(formData).then((response) => {
    return response.data
  })
})

export const increaseCartItem = createAsyncThunk(`${namespace}/increaseCartItem`, async (id) => {
  return await clothShopService.increaseCartItem(id).then((response) => {
    return response.data
  })
})

export const decreaseCartItem = createAsyncThunk(`${namespace}/decreaseCartItem`, async (id) => {
  return await clothShopService.decreaseCartItem(id).then((response) => {
    return response.data
  })
})

export const changeQuantityCartItem = createAsyncThunk(`${namespace}/changeQuantityCartItem`, async ({ cartItemId, quantity }) => {
  return await clothShopService.changeQuantityCartItem(cartItemId, quantity).then((response) => {
    return response.data
  })
})

export const deleteCartItem = createAsyncThunk(`${namespace}/deleteCartItem`, async (id) => {
  return await clothShopService.deleteCartItem(id).then((response) => {
    return response.data
  })
})

export const checkout = createAsyncThunk(`${namespace}/checkout`, async (_, { getState, rejectWithValue, dispatch }) => {
  dispatch(setLoading(true))
  const { selectCartItems } = getState().orderSlice

  const selectCartItemIDs = selectCartItems.map((item) => item.cartItemId)

  return await clothShopService
    .checkout(selectCartItemIDs)
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

export const order = createAsyncThunk(`${namespace}/order`, async (obj) => {
  return await clothShopService.order(obj).then((response) => {
    return response.data
  })
})

const baseSlice = createSlice({
  name: namespace,
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.cart = action.payload
    },
    setCountCartItem: (state, action) => {
      state.countCartItem = action.payload
      localStorage.setItem('countCartItem', JSON.stringify(action.payload))
    },
    setCartItemIDProduct: (state, action) => {
      state.cartItem.idProduct = action.payload
    },
    setCartItemSize: (state, action) => {
      state.cartItem.size = action.payload
    },
    setCartItemColor: (state, action) => {
      state.cartItem.color = action.payload
    },
    setCartItemQuantity: (state, action) => {
      state.cartItem.quantity = action.payload
    },
    emptyCart: (state) => {
      state.cart = {}
      state.countCartItem = null
      localStorage.removeItem('countCartItem')
    },
    selectCartItem: (state, action) => {
      state.selectCartItems.push(action.payload)
    },
    deselectCartItem: (state, action) => {
      state.selectCartItems = state.selectCartItems.filter((item) => item.cartItemId !== action.payload.cartItemId)
    },
    selectAllCartItems: (state) => {
      state.selectCartItems = state.cart.cartItems.slice()
    },
    deselectAllCartItems: (state) => {
      state.selectCartItems = []
    },
    calCartItemsTotal: (state) => {
      state.cartItemsTotal = state.selectCartItems.reduce((total, item) => total + item.total, 0)
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getCart.fulfilled, (state, { payload }) => {
        state.status = HTTP_STATUS.FULFILLED
        state.cart = payload
        localStorage.setItem('cart', JSON.stringify(payload))
      })
      .addCase(addCartItem.fulfilled, (state, { payload }) => {
        state.status = HTTP_STATUS.FULFILLED
        state.cart = payload
        state.countCartItem = payload.count
        localStorage.setItem('countCartItem', JSON.stringify(payload.count))
      })
      .addCase(increaseCartItem.fulfilled, (state, { payload }) => {
        state.status = HTTP_STATUS.FULFILLED

        const updatedCartItems = state.cart.cartItems.map((item) => (item.cartItemId === payload.cartItemId ? payload : item))
        state.cart.cartItems = updatedCartItems

        state.selectCartItems = state.selectCartItems.map((item) => {
          if (item.cartItemId === payload.cartItemId) {
            return payload
          }
          return item
        })
      })
      .addCase(decreaseCartItem.fulfilled, (state, { payload }) => {
        state.status = HTTP_STATUS.FULFILLED

        const updatedCartItems = state.cart.cartItems.map((item) => (item.cartItemId === payload.cartItemId ? payload : item))
        state.cart.cartItems = updatedCartItems

        state.selectCartItems = state.selectCartItems.map((item) => {
          if (item.cartItemId === payload.cartItemId) {
            return payload
          }
          return item
        })
      })
      .addCase(changeQuantityCartItem.fulfilled, (state, { payload }) => {
        state.status = HTTP_STATUS.FULFILLED

        const updatedCartItems = state.cart.cartItems.map((item) => (item.cartItemId === payload.cartItemId ? payload : item))
        state.cart.cartItems = updatedCartItems

        state.selectCartItems = state.selectCartItems.map((item) => {
          if (item.cartItemId === payload.cartItemId) {
            return payload
          }
          return item
        })
      })
      .addCase(deleteCartItem.fulfilled, (state, { payload }) => {
        state.status = HTTP_STATUS.FULFILLED
        state.cart.cartItems = state.cart.cartItems.filter((item) => item.cartItemId !== payload.cartItemId)
      })
      .addCase(checkout.fulfilled, (state, { payload }) => {
        state.status = HTTP_STATUS.FULFILLED
        state.checkout = payload
      })
      .addCase(checkout.rejected, (state, { payload }) => {
        state.status = HTTP_STATUS.REJECTED

        const msg = payload.response.data
        const status = payload.response.status
        if (msg && status === 400) {
          Swal.fire({
            icon: 'error',
            text: payload.response.data,
          })
        }
      })

      .addCase(order.fulfilled, (state, { payload }) => {
        state.status = HTTP_STATUS.FULFILLED
      })
  },
})

const { reducer, actions } = baseSlice

export const { calCartItemsTotal, selectCartItem, deselectCartItem, selectAllCartItems, deselectAllCartItems, setCountCartItem, emptyCart, setCartItemQuantity, setCartItemColor, setCartItemSize, setCartItemIDProduct, setCart } = actions

export default reducer
