import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import clothShopService from 'services/clothShopService'
import { HTTP_STATUS } from 'app/global'
import { setLoading } from './baseSlice'
import Swal from 'sweetalert2'
import { toast } from 'react-toastify'

const namespace = 'orderSlice'

const countCartItemLS = JSON.parse(localStorage.getItem('countCartItem'))

const checkoutLS = JSON.parse(localStorage.getItem('checkout'))

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
  checkout: checkoutLS || {
    address: {},
    cartItems: [],
    voucher: {},
    total: {
      itemsTotal: 0,
      shipTotal: 0,
      voucherTotal: 0,
      grandTotal: 0,
    },
  },
}

export const getCart = createAsyncThunk(`${namespace}/getCart`, async (id, { rejectWithValue, dispatch }) => {
  return await clothShopService
    .getCart()
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      return rejectWithValue(error)
    })
    .finally(() => {})
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

export const checkout = createAsyncThunk(`${namespace}/checkout`, async (_, { getState, rejectWithValue }) => {
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
    .finally(() => {})
})

export const order = createAsyncThunk(`${namespace}/order`, async (_, { getState, rejectWithValue }) => {
  const { checkout } = getState().orderSlice

  let addressID = checkout.address.id
  let cartItems = checkout.cartItems
  let voucherID = checkout.voucher == null ? null : checkout.voucher.id

  let formData = new FormData()
  formData.set('addressID', addressID)

  if (voucherID) {
    formData.set('voucherID', voucherID)
  }

  cartItems.forEach((item, index) => {
    formData.append(`cartItemIDs[${index}]`, item.cartItemId)
  })

  return await clothShopService
    .order(formData)
    .then((response) => {
      toast.success('Place Order Successfully !')
      return response.data
    })
    .catch((error) => {
      toast.error('Place Order Fail ! Please try again later')
      return rejectWithValue(error)
    })
    .finally(() => {})
})

const orderSlice = createSlice({
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
    setVoucher: (state, action) => {
      state.checkout.voucher = action.payload
    },
    emptyVoucher: (state, action) => {
      state.checkout.voucher = {}
      localStorage.setItem('checkout', JSON.stringify(state.checkout))
    },
    setAddress: (state, action) => {
      state.checkout.address = action.payload
    },
    setItemTotal: (state, action) => {
      state.checkout.total.itemsTotal = action.payload
      localStorage.setItem('checkout', JSON.stringify(state.checkout))
    },
    setShipTotal: (state, action) => {
      state.checkout.total.shipTotal = action.payload
      localStorage.setItem('checkout', JSON.stringify(state.checkout))
    },
    setVoucherTotal: (state, action) => {
      state.checkout.total.voucherTotal = action.payload
      localStorage.setItem('checkout', JSON.stringify(state.checkout))
    },
    calGrandTotal: (state) => {
      let itemTotalTemp = state.checkout.total.itemsTotal
      let shipTotalTemp = state.checkout.total.shipTotal
      let voucherTotalTemp = state.checkout.total.voucherTotal
      let grandTotalTemp = itemTotalTemp
      if (shipTotalTemp) {
        grandTotalTemp += shipTotalTemp
      }

      if (voucherTotalTemp) {
        grandTotalTemp += voucherTotalTemp
      }
      state.checkout.total.grandTotal = grandTotalTemp
      localStorage.setItem('checkout', JSON.stringify(state.checkout))
    },
    calVoucherTotal: (state) => {
      let voucherTotalTemp = 0

      let itemTotalTemp = state.checkout.total.itemsTotal
      let percent = state.checkout.voucher.percent
      let price = state.checkout.voucher.price

      if (percent) {
        voucherTotalTemp = (itemTotalTemp * percent) / 100
      }

      if (price) {
        voucherTotalTemp += price
      }

      state.checkout.total.voucherTotal = voucherTotalTemp

      localStorage.setItem('checkout', JSON.stringify(state.checkout))
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
        localStorage.setItem('checkout', JSON.stringify(payload))
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

const { reducer, actions } = orderSlice

export const { calVoucherTotal, calGrandTotal, setVoucherTotal, setShipTotal, setItemTotal, setAddress, emptyVoucher, setVoucher, calCartItemsTotal, selectCartItem, deselectCartItem, selectAllCartItems, deselectAllCartItems, setCountCartItem, emptyCart, setCartItemQuantity, setCartItemColor, setCartItemSize, setCartItemIDProduct, setCart } = actions

export default reducer
