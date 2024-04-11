import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import clothShopService from 'services/clothShopService'
import { HTTP_STATUS } from 'app/global'

const namespace = 'managementSlice'

const initialState = {
  managements: [{ dashboard: false }, { product: true }, { order: false }],
}

const baseSlice = createSlice({
  name: namespace,
  initialState,
  reducers: {},
  extraReducers(builder) {},
})

const { reducer, actions } = baseSlice

export const {} = actions

export default reducer
