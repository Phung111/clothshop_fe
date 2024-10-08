import { createSlice } from '@reduxjs/toolkit'

const namespace = 'modalSlice'

const initialState = {
  modalProduct: false,
  isCreateProduct: false,
  isUpdateProduct: false,
  modalSelectVoucher: false,
  modalCreateVoucher: false,
  modalSelectAddress: false,
  modalEditAddress: false,
  isCreateAddress: false,
  isUpdateAddress: false,
  modalOrderDetail: false,
  modalImage: false,
  modalBanner: false,
}

const modalSlice = createSlice({
  name: namespace,
  initialState,
  reducers: {
    setModalProduct: (state, action) => {
      state.modalProduct = action.payload

      if (action.payload === false) {
        state.isCreateProduct = false
        state.isUpdateProduct = false
      }
    },
    setIsCreateProduct: (state) => {
      state.isCreateProduct = true
      state.isUpdateProduct = false
    },
    setIsUpdateProduct: (state) => {
      state.isCreateProduct = false
      state.isUpdateProduct = true
    },
    setModalSelectVoucher: (state, action) => {
      state.modalSelectVoucher = action.payload
    },
    setModalCreateVoucher: (state, action) => {
      state.modalCreateVoucher = action.payload
    },
    setModalSelectAddress: (state, action) => {
      state.modalSelectAddress = action.payload
    },
    setModalEditAddress: (state, action) => {
      state.modalEditAddress = action.payload
    },
    setIsCreateAddress: (state) => {
      state.isCreateAddress = true
      state.isUpdateAddress = false
    },
    setIsUpdateAddress: (state) => {
      state.isCreateAddress = false
      state.isUpdateAddress = true
    },
    setModalOrderDetail: (state, action) => {
      state.modalOrderDetail = action.payload
    },
    setModalImage: (state, action) => {
      state.modalImage = action.payload
    },
    setModalBanner: (state, action) => {
      state.modalBanner = action.payload
    },
  },
})

const { reducer, actions } = modalSlice

/* prettier-ignore */
export const { 
  setIsUpdateAddress, 
  setIsCreateAddress, 
  setModalEditAddress, 
  setModalSelectAddress, 
  setModalCreateVoucher, 
  setModalSelectVoucher, 
  setIsCreateProduct, 
  setIsUpdateProduct, 
  setModalProduct,
  setModalOrderDetail,
  setModalImage,
  setModalBanner,
} = actions

export default reducer
