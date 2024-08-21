import { jwtDecode } from 'jwt-decode'
import { useDispatch } from 'react-redux'
import { useLocation, Navigate, Outlet } from 'react-router-dom'
import { useEffect } from 'react'
import { setAuth } from 'slice/authSlice'
// import useAlert from 'utils/useAlert'

const RequireAuth = ({ allowedRoles }) => {
  const location = useLocation()
  const dispatch = useDispatch()
  const accessToken = localStorage.getItem('jwt')
  let isAuth = false
  let tokenDecode = null

  // const { alert403 } = useAlert()

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

  /* prettier-ignore */
  return isAuth && allowedRoles.find((role) => tokenDecode?.role === role)
      ? <Outlet />
      : <Navigate to="/unauthorized" state={{ from: location }} replace />

  // if (isAuth && allowedRoles.find((role) => tokenDecode?.role === role)) {
  //   return <Outlet />
  // } else {
  //   alert403()
  //   return null
  // }
}

export default RequireAuth
