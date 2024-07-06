import { useState } from 'react'
import Button from 'components/Button'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login } from 'slice/authSlice'
import { useEffect } from 'react'

export default function FormLogin() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { errorMessage, errorStatus, error } = useSelector((state) => state.authSlice)

  const [passwordVisible, setPasswordVisible] = useState(false)

  const [email, setEmail] = useState('')
  const [password, setPassWord] = useState('')

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible)
  }

  const handleToRegister = () => {
    navigate(`/register`)
  }

  const handleLogin = () => {
    let formData = new FormData()
    formData.set('username', email)
    formData.set('password', password)
    dispatch(login(formData))
  }

  useEffect(() => {
    console.log('error', error)
  }, [dispatch, error])

  return (
    <>
      <h2 className="mb-5 text-[20px] font-normal">Login</h2>
      <div className="w-full">
        <input onChange={(event) => setEmail(event.target.value)} value={email} type="text" placeholder="admin@gmail.com" className="h-10 w-full rounded-sm border-[0.5px] border-black/20 px-4 text-sm" />
        {error.username && <p className="text-red">{error.username}</p>}
      </div>
      <div className="relative flex h-10 w-full items-center">
        <div className="">
          <input onChange={(event) => setPassWord(event.target.value)} value={password} type={passwordVisible ? 'text' : 'password'} placeholder="123" className="h-full w-full rounded-sm border-[0.5px] border-black/20 px-4 text-sm" maxLength={20} />
        </div>

        <div className="absolute right-5 cursor-pointer" onClick={togglePasswordVisibility}>
          {passwordVisible ? <i className="fa-solid fa-eye" /> : <i className="fa-solid fa-eye-slash" />}
        </div>
      </div>
      <div className="h-10 w-full overflow-hidden rounded-sm" onClick={handleLogin}>
        <Button type={'solid'}>Sign in</Button>
      </div>
      <div className="flex justify-center">
        <p className="text-[14px] ">
          <span className="text-black/30">New to Shopee? </span>
          <span className="cursor-pointer text-primary hover:text-primary_dark" onClick={handleToRegister}>
            Sign Up
          </span>
        </p>
      </div>
    </>
  )
}
