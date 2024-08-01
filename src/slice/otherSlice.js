import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import clothShopService from 'services/clothShopService'
import { toast } from 'react-toastify'
import { setLoading } from 'slice/baseSlice'
import { calGrandTotal, setVoucherTotal, setShipTotal, setItemTotal, setVoucher, setAddress, calVoucherTotal, emptyVoucher } from 'slice/orderSlice'

const namespace = 'otherSlice'

const initialState = {
  vouchers: [],
  voucher: {},
  banners: [],
  selectBanners: [],
  addresses: [],
}

export const getAllVoucher = createAsyncThunk(`${namespace}/getAllVoucher`, async (obj, { rejectWithValue }) => {
  return await clothShopService
    .getAllVoucher(obj)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      return rejectWithValue(error)
    })
    .finally(() => {})
})

export const createVoucher = createAsyncThunk(`${namespace}/createVoucher`, async (obj, { rejectWithValue }) => {
  return await clothShopService
    .createVoucher(obj)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      return rejectWithValue(error)
    })
    .finally(() => {})
})

export const choseVoucher = createAsyncThunk(`${namespace}/choseVoucher`, async (obj, { rejectWithValue, dispatch }) => {
  return await clothShopService
    .choseVoucher(obj)
    .then((response) => {
      dispatch(setVoucher(response.data))

      return response.data
    })
    .catch((error) => {
      const msgError = error.response.data.message
      dispatch(emptyVoucher())
      toast.error(`${msgError || 'Chose Voucher Fail'}`)
      return rejectWithValue(error)
    })
    .finally(() => {
      dispatch(calVoucherTotal())
    })
})

export const getAllBanner = createAsyncThunk(`${namespace}/getAllBanner`, async (obj, { rejectWithValue }) => {
  return await clothShopService
    .getAllBanner(obj)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      return rejectWithValue(error)
    })
    .finally(() => {})
})

export const createBanner = createAsyncThunk(`${namespace}/createBanner`, async (obj, { rejectWithValue }) => {
  return await clothShopService
    .createBanner(obj)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      return rejectWithValue(error)
    })
    .finally(() => {})
})

export const deleteBanner = createAsyncThunk(`${namespace}/deleteBanner`, async (obj, { rejectWithValue }) => {
  return await clothShopService
    .deleteBanner(obj)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      return rejectWithValue(error)
    })
    .finally(() => {})
})

export const deletesBanner = createAsyncThunk(`${namespace}/deletesBanner`, async (obj, { rejectWithValue }) => {
  return await clothShopService
    .deletesBanner(obj)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      return rejectWithValue(error)
    })
    .finally(() => {})
})

export const getAllAddress = createAsyncThunk(`${namespace}/getAllAddress`, async (obj, { rejectWithValue }) => {
  return await clothShopService
    .getAllAddress(obj)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      return rejectWithValue(error)
    })
    .finally(() => {})
})

export const createAddress = createAsyncThunk(`${namespace}/createAddress`, async (obj, { rejectWithValue }) => {
  return await clothShopService
    .createAddress(obj)
    .then((response) => {
      toast.success('Add New Address Successfully !')
      return response.data
    })
    .catch((error) => {
      toast.error('Add New Address Fail')
      return rejectWithValue(error)
    })
    .finally(() => {})
})

export const defaultAddress = createAsyncThunk(`${namespace}/defaultAddress`, async (obj, { rejectWithValue }) => {
  return await clothShopService
    .defaultAddress(obj)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      toast.error('Set Dafault Address Fail')
      return rejectWithValue(error)
    })
    .finally(() => {})
})

export const updateAddress = createAsyncThunk(`${namespace}/updateAddress`, async (obj, { rejectWithValue, dispatch }) => {
  return await clothShopService
    .updateAddress(obj)
    .then((response) => {
      toast.success('Update Address Successfully !')
      return response.data
    })
    .catch((error) => {
      toast.error('Update Address Fail')
      return rejectWithValue(error)
    })
    .finally(() => {})
})

export const deleteAddress = createAsyncThunk(`${namespace}/deleteAddress`, async (obj, { rejectWithValue }) => {
  return await clothShopService
    .deleteAddress(obj)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      toast.error('Delete Address Fail')
      return rejectWithValue(error)
    })
    .finally(() => {})
})

export const changeAddress = createAsyncThunk(`${namespace}/changeAddress`, async (obj, { rejectWithValue, dispatch }) => {
  return await clothShopService
    .changeAddress(obj)
    .then((response) => {
      dispatch(setShipTotal(response.data.shipTotal))
      return response.data
    })
    .catch((error) => {
      toast.error('Change Address Fail')
      return rejectWithValue(error)
    })
    .finally(() => {})
})

const otherSlice = createSlice({
  name: namespace,
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getAllVoucher.fulfilled, (state, { payload }) => {
        state.vouchers = payload.vouchers
      })
      .addCase(createVoucher.fulfilled, (state, { payload }) => {
        state.vouchers = payload.vouchers
      })
      .addCase(createVoucher.rejected, (state, { payload }) => {
        if (payload) {
        }
      })
      .addCase(choseVoucher.fulfilled, (state, { payload }) => {
        state.voucher = payload
      })
      .addCase(choseVoucher.rejected, (state, { payload }) => {
        if (payload) {
        }
      })
      .addCase(getAllBanner.fulfilled, (state, { payload }) => {
        state.banners = payload
      })
      .addCase(createBanner.fulfilled, (state, { payload }) => {
        state.banners = payload
      })
      .addCase(createBanner.rejected, (state, { payload }) => {
        if (payload) {
        }
      })
      .addCase(deleteBanner.fulfilled, (state, { payload }) => {
        //
      })
      .addCase(getAllAddress.fulfilled, (state, { payload }) => {
        state.addresses = payload
      })
      .addCase(createAddress.fulfilled, (state, { payload }) => {
        state.addresses = payload
      })
      .addCase(defaultAddress.fulfilled, (state, { payload }) => {
        state.addresses = payload
      })
      .addCase(updateAddress.fulfilled, (state, { payload }) => {
        state.addresses = payload
      })
      .addCase(deleteAddress.fulfilled, (state, { payload }) => {
        state.addresses = payload
      })
      .addCase(changeAddress.fulfilled, (state, { payload }) => {})
  },
})

const { reducer, actions } = otherSlice

export const { setData } = actions

export default reducer
