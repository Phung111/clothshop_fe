import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login } from 'slice/authSlice'
import { HTTP_STATUS } from 'app/global'
import ErrorText from 'components/ErrorText'
import Button from 'components/Button'

export default function FormLogin() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const loginStatus = useSelector((state) => state.authSlice.status)
  const errorsBE = useSelector((state) => state.authSlice.errorsBE)

  const [passwordVisible, setPasswordVisible] = useState(false)

  const cnInput = 'h-10 w-full rounded-sm border-[0.5px] border-black/20 px-4 text-sm'
  const cnError = 'border-red border-2'
  const cnNormal = 'border-black/20'

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors: errorsFE },
  } = useForm()

  const onSubmit = (data) => {
    dispatch(login(data))
  }

  const handleToRegister = () => {
    navigate(`/register`)
  }

  useEffect(() => {
    if (loginStatus === HTTP_STATUS.FULFILLED) {
      navigate('/')
    }
  }, [loginStatus, navigate])

  return (
    <>
      <div className="w-[300px]">
        <h2 className="mb-5 text-[20px] font-normal">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="flex h-full w-full flex-col gap-2">
          <div>
            <input
              {...register('username', {
                required: 'Email is required',
                pattern: {
                  value: /^[\w]+@([\w-]+\.)+[\w-]{2,6}$/,
                  message: 'Email is invalid!',
                },
              })}
              type="text"
              placeholder="admin@gmail.com"
              className={`${cnInput} ${errorsFE.username ? cnError : cnNormal}`}
              onBlur={() => trigger('username')}
            />
            <ErrorText>{errorsFE.username && errorsFE.username.message}</ErrorText>
          </div>
          <div>
            <div className="relative flex h-10 w-full items-center">
              <input
                {...register('password', {
                  required: 'Please enter password!',
                  minLength: {
                    value: 3,
                    message: 'Password length should be between 3 and 20 characters!',
                  },
                  maxLength: {
                    value: 20,
                    message: 'Password length should be between 3 và 20 characters!',
                  },
                })}
                type={passwordVisible ? 'text' : 'password'}
                placeholder="123"
                maxLength={20}
                className={`${cnInput} ${errorsFE.password ? cnError : cnNormal}`}
                onBlur={() => trigger('password')}
              />
              <div className="absolute right-5 cursor-pointer" onClick={() => setPasswordVisible(!passwordVisible)}>
                {passwordVisible ? <i className="fa-solid fa-eye" /> : <i className="fa-solid fa-eye-slash" />}
              </div>
            </div>
            <ErrorText>{errorsFE.password && errorsFE.password.message}</ErrorText>
          </div>

          <div className="h-10 w-full overflow-hidden rounded-sm">
            <Button type={'solid'} submit={true}>
              Sign in
            </Button>
          </div>
        </form>
        <div className="mt-4 flex justify-center">
          <p className="text-[14px] ">
            <span className="text-black/30">New to Shopee? </span>
            <span className="cursor-pointer text-primary hover:text-primary_dark" onClick={handleToRegister}>
              Sign Up
            </span>
          </p>
        </div>
      </div>
    </>
  )
}
