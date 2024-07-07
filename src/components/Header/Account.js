import { useSelector, useDispatch } from 'react-redux'
import { logout } from 'slice/authSlice'
import { useNavigate } from 'react-router-dom'

export default function Account() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const authSlice = useSelector((state) => state.authSlice)
  const data = authSlice.data
  const name = data.name

  const isEmpty = !data || Object.keys(data).length === 0

  const classP = 'flex justify-center rounded-sm py-2 hover:bg-gray'

  const handleLogOut = () => {
    dispatch(logout())
  }

  const handleToMyAccount = () => {}

  return (
    <>
      {!isEmpty && (
        <div className="group relative cursor-pointer" onClick={handleToMyAccount}>
          <div className="flex h-full items-center gap-2 text-white ">
            <i className="fa-solid fa-circle-user" />
            <p className="hover:opacity-70">{name}</p>
          </div>
          <div className="animate__animated group-hover:animate__fadeInDown absolute z-[2000] w-[150px] rounded-sm bg-white opacity-0 shadow-2xl group-hover:opacity-100">
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
      {isEmpty && (
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
