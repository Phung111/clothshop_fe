import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import clothShopService from 'services/clothShopService'
import { HTTP_STATUS } from 'app/global'

const namespace = 'accountSlice'

const initialState = {
  data: {
    accounts: [{ myAccount: true }, { myVoucher: false }],
    myAccounts: [{ profile: true }, { addresses: false }],
    modals: {
      myAddress: false,
      editAddress: false,
      createAddress: false,
      voucher: false,
    },
  },
}

const accountSlice = createSlice({
  name: namespace,
  initialState,
  reducers: {
    setSide: (state, action) => {
      const account = action.payload
      state.accounts.forEach((item) => {
        const key = Object.keys(item)[0]
        item[key] = key === account
      })

      console.log('ádasdas :', state.accounts)

      state.myAccounts.forEach((item) => {
        const key = Object.keys(item)[0]
        item[key] = key === 'profile' ? true : false
      })
    },
    setMyAccounts: (state, action) => {
      const account = action.payload
      state.myAccounts.forEach((item) => {
        const key = Object.keys(item)[0]
        item[key] = key === account
      })
    },
    setMyAdress: (state, action) => {
      state.modals.myAddress = action.payload
    },
    setEditAddress: (state, action) => {
      state.modals.editAddress = action.payload
    },
    setCreateAddress: (state, action) => {
      state.modals.createAddress = action.payload
    },
    setVoucher: (state, action) => {
      state.modals.voucher = action.payload
    },
  },
})

const { reducer, actions } = accountSlice

export const { setSide, setMyAccounts, setMyAdress, setEditAddress, setCreateAddress, setVoucher } = actions

export default reducer
