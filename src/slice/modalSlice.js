import { createSlice } from '@reduxjs/toolkit'

const namespace = 'modalSlice'

const initialState = {
  myAddress: false,
  editAddress: false,
  createAddress: false,
  voucher: false,
  modalProduct: false,
  isCreateProduct: false,
  isUpdateProduct: false,
}

const accountSlice = createSlice({
  name: namespace,
  initialState,
  reducers: {
    setMyAdress: (state, action) => {
      state.myAddress = action.payload
    },
    setEditAddress: (state, action) => {
      state.editAddress = action.payload
    },
    setCreateAddress: (state, action) => {
      state.createAddress = action.payload
    },
    setVoucher: (state, action) => {
      state.voucher = action.payload
    },
    setIsCreateProduct: (state) => {
      state.isCreateProduct = true
      state.isUpdateProduct = false
    },
    setIsUpdateProduct: (state) => {
      state.isCreateProduct = false
      state.isUpdateProduct = true
    },
    setModalProduct: (state, action) => {
      state.modalProduct = action.payload

      if (action.payload === false) {
        state.isCreateProduct = false
        state.isUpdateProduct = false
      }
    },
  },
})

const { reducer, actions } = accountSlice

export const { setMyAdress, setEditAddress, setCreateAddress, setVouche, setModalProduct, setIsCreateProduct, setIsUpdateProduct } = actions

export default reducer
