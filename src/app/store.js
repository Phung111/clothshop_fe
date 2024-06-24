import { configureStore } from '@reduxjs/toolkit'

import baseSlice from 'slice/baseSlice'
import accountSlice from 'slice/accountSlice'
import managementSlice from 'slice/managementSlice'
import modalSlice from 'slice/modalSlice'
import productPageSlice from 'slice/productPageSlice'
import productSlice from 'slice/productSlice'

const store = configureStore({
  reducer: {
    baseSlice: baseSlice,
    accountSlice: accountSlice,
    managementSlice: managementSlice,
    modalSlice: modalSlice,
    productPageSlice: productPageSlice,
    productSlice: productSlice,
  },
})

export default store
