import { jwtDecode } from 'jwt-decode'
import { useDispatch } from 'react-redux'
import { useLocation, Navigate, Outlet } from 'react-router-dom'
import { useEffect } from 'react'
import { setAuth } from 'slice/authSlice'

const RequireAuth = ({ allowedRoles }) => {
  const location = useLocation()
  const dispatch = useDispatch()
  const accessToken = localStorage.getItem('jwt')
  let isAuth = false
  let tokenDecode = null

  if (accessToken) {
    try {
      tokenDecode = jwtDecode(accessToken)
      const exp = new Date(tokenDecode.exp * 1000).getTime()
      const timeNow = new Date().getTime()
      if (exp > timeNow) {
        isAuth = true
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (isAuth) {
      const action = setAuth(tokenDecode)
      dispatch(action)
    }
  }, [isAuth, tokenDecode, dispatch])

  return isAuth ? allowedRoles.find((role) => tokenDecode?.role === role) ? <Outlet /> : <Navigate to="/unauthorized" state={{ from: location }} replace /> : <Navigate to="/login" state={{ from: location }} replace />
}

export default RequireAuth
