import { configureStore } from '@reduxjs/toolkit'

import baseSlice from 'slice/baseSlice'
import modalSlice from 'slice/modalSlice'
import productPageSlice from 'slice/productPageSlice'
import productSlice from 'slice/productSlice'
import orderSlice from 'slice/orderSlice'
import authSlice from 'slice/authSlice'
import otherSlice from 'slice/otherSlice'

import loadingMiddleware from './loadingMiddleware'

const store = configureStore({
  reducer: {
    baseSlice: baseSlice,
    modalSlice: modalSlice,
    productPageSlice: productPageSlice,
    productSlice: productSlice,
    orderSlice: orderSlice,
    authSlice: authSlice,
    otherSlice: otherSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loadingMiddleware),
})

export default store
