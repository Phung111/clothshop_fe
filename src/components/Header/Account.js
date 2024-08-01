import { useSelector, useDispatch } from 'react-redux'
import { logout } from 'slice/authSlice'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { emptyCart } from 'slice/orderSlice'
import { jwtDecode } from 'jwt-decode'
import { ROLES } from 'app/global'

export default function Account() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const authSlice = useSelector((state) => state.authSlice)
  const customer = authSlice.customer
  const name = customer.name

  const [isCustomer, setIsCustomer] = useState(false)

  useEffect(() => {
    if (Object.keys(customer).length === 0) {
      setIsCustomer(false)
    } else {
      setIsCustomer(true)
    }
  }, [customer])

  useEffect(() => {
    if (Object.keys(customer).length === 0) {
      setIsCustomer(false)
    } else {
      const accessToken = localStorage.getItem('jwt')
      if (accessToken != null) {
        try {
          const decodedToken = jwtDecode(accessToken)
          const exp = new Date(decodedToken.exp * 1000).getTime()
          const timeNow = new Date().getTime()
          if (exp > timeNow) {
            setIsCustomer(true)
          } else {
            setIsCustomer(false)
          }
        } catch (error) {
          console.log(error)
        }
      } else {
        setIsCustomer(false)
      }
    }
  }, [customer])

  const classP = 'flex justify-center rounded-sm py-2 hover:bg-gray'

  const handleLogOut = () => {
    dispatch(logout())
    dispatch(emptyCart())
    navigate('/')
  }

  const handleToMyAccount = () => {}

  return (
    <>
      {isCustomer && (
        <div className="group relative cursor-pointer" onClick={handleToMyAccount}>
          <div className="flex h-full items-center gap-2 text-white ">
            <i className="fa-solid fa-circle-user" />
            <p className="hover:opacity-70">{name}</p>
          </div>
          <div className="absolute z-[2000] max-h-0 w-[150px] overflow-hidden rounded-sm bg-white shadow-2xl transition-all duration-500 ease-in-out group-hover:max-h-[1000px]">
            <a href="#">
              <p className={classP}>My Account</p>
            </a>
            <a href="#">
              <p className={classP}>My Purchase</p>
            </a>
            <a href="#" onClick={handleLogOut}>
              <p className={classP}>Log Out</p>
            </a>
          </div>
        </div>
      )}
      {!isCustomer && (
        <div className="flex items-center gap-2">
          <a href="/register" className="text-white hover:opacity-70">
            <p>Sign Up</p>
          </a>
          <div className="line-y !h-4 !bg-white/50" />
          <a href="/login" className="text-white hover:opacity-70">
            <p>Login</p>
          </a>
        </div>
      )}
    </>
  )
}
