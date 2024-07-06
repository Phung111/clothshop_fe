import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import clothShopService from 'services/clothShopService'
import { HTTP_STATUS } from 'app/global'
import { setLoading } from './baseSlice'

const namespace = 'orderSlice'

const savedCart = JSON.parse(localStorage.getItem('cart'))

const initialState = {
  cart: savedCart || [],
  cartItem: {
    idProduct: 0,
    size: '',
    color: '',
    quantity: 0,
  },
}

export const getCart = createAsyncThunk(`${namespace}/getCart`, async (id, { rejectWithValue, dispatch }) => {
  dispatch(setLoading(true))
  return await clothShopService
    .getCart(id)
    .then((response) => {
      localStorage.setItem('cart', JSON.stringify(response.data))
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
  console.log('cartItem', cartItem)
  // const idProduct = cartItem.idProduct
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

export const deleteCartItem = createAsyncThunk(`${namespace}/deleteCartItem`, async (id) => {
  return await clothShopService.deleteCartItem(id).then((response) => {
    return response.data
  })
})

export const checkout = createAsyncThunk(`${namespace}/checkout`, async (cartItemIDs) => {
  return await clothShopService.checkout(cartItemIDs).then((response) => {
    return response.data
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
  },
  extraReducers(builder) {
    builder
      .addCase(getCart.fulfilled, (state, { payload }) => {
        state.status = HTTP_STATUS.FULFILLED
        state.cart = payload
      })
      .addCase(addCartItem.fulfilled, (state, { payload }) => {
        state.status = HTTP_STATUS.FULFILLED
        state.cart = payload
      })
      // .addCase(addCartItem.rejected, (state, { payload }) => {
      //   state.status = HTTP_STATUS.REJECTED

      //   if (payload.response) {
      //     state.errorMessage = payload.response.statusText
      //     state.errorStatus = payload.response.status
      //   }
      // })
      .addCase(increaseCartItem.fulfilled, (state, { payload }) => {
        state.status = HTTP_STATUS.FULFILLED
      })
      .addCase(decreaseCartItem.fulfilled, (state, { payload }) => {
        state.status = HTTP_STATUS.FULFILLED
      })
      .addCase(deleteCartItem.fulfilled, (state, { payload }) => {
        state.status = HTTP_STATUS.FULFILLED
      })
      .addCase(checkout.fulfilled, (state, { payload }) => {
        state.status = HTTP_STATUS.FULFILLED
      })
      .addCase(order.fulfilled, (state, { payload }) => {
        state.status = HTTP_STATUS.FULFILLED
      })
  },
})

const { reducer, actions } = baseSlice

export const { setCartItemQuantity, setCartItemColor, setCartItemSize, setCartItemIDProduct, setCart } = actions

export default reducer
