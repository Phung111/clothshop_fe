import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { HTTP_STATUS } from 'app/global'
import clothShopService from 'services/clothShopService'
import { toast } from 'react-toastify'
import { setLoading } from 'slice/baseSlice'

const namespace = 'authSlice'

const customer = JSON.parse(localStorage.getItem('customer'))

const initialState = {
  data: customer || {},
  status: HTTP_STATUS.IDLE,
  errorMessage: null,
  errorStatus: null,
  errorsBE: null,
}

export const login = createAsyncThunk(`${namespace}/login`, async (obj, { rejectWithValue, dispatch }) => {
  dispatch(setLoading(true))

  return await clothShopService
    .login(obj)
    .then((response) => {
      toast.success('Login Successfully !')
      return response.data
    })
    .catch((error) => {
      toast.error('Incorrect username or password')
      return rejectWithValue(error)
    })
    .finally(() => {
      dispatch(setLoading(false))
    })
})

export const signup = createAsyncThunk(`${namespace}/signup`, async (obj, { rejectWithValue, dispatch }) => {
  dispatch(setLoading(true))
  return await clothShopService
    .signup(obj)
    .then(() => {
      toast.success('Sign Up Successfully !')
    })
    .catch((error) => {
      toast.error('Sign Up Fail !')
      return rejectWithValue(error)
    })
    .finally(() => {
      dispatch(setLoading(false))
    })
})

const authSlice = createSlice({
  name: namespace,
  initialState,
  reducers: {
    setAuth: (state, { payload }) => {
      state.data = payload
    },
    clearAuth: (state) => {
      localStorage.removeItem('accessToken')
      state.data = {}
    },
    logout: (state, { payload }) => {
      localStorage.removeItem('jwt')
      localStorage.removeItem('customer')
      state.data = {}
    },
  },
  extraReducers(builder) {
    builder
      .addCase(login.pending, (state) => {
        state.status = HTTP_STATUS.PENDING
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.status = HTTP_STATUS.FULFILLED
        state.data = payload
        const customer = payload
        localStorage.setItem('customer', JSON.stringify(customer))
        const jwt = payload.jwt
        localStorage.setItem('jwt', jwt)
      })
      .addCase(login.rejected, (state, { payload }) => {
        state.status = HTTP_STATUS.REJECTED
        if (payload.response) {
          state.errorMessage = payload.response.statusText
          state.errorStatus = payload.response.status
          state.errorsBE = payload.response.data
        }
      })
      .addCase(signup.pending, (state) => {
        state.status = HTTP_STATUS.PENDING
      })
      .addCase(signup.fulfilled, (state, { payload }) => {
        state.status = HTTP_STATUS.FULFILLED
      })
      .addCase(signup.rejected, (state, { payload }) => {
        state.status = HTTP_STATUS.REJECTED
        if (payload.response) {
          state.errorMessage = payload.response.statusText
          state.errorStatus = payload.response.status
          state.errorsBE = payload.response.data
        }
      })
  },
})

const { reducer, actions } = authSlice
export const { setAuth, logout } = actions

export default reducer
