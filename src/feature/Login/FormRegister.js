import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import ErrorText from 'components/ErrorText'
import Button from 'components/Button'
import { signup } from 'slice/authSlice'
import { DatePicker, Select } from 'antd'
import moment from 'moment'
import { getPronvice, getGender } from 'slice/baseSlice'
import { HTTP_STATUS } from 'app/global'

export default function FormRegister() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const loginStatus = useSelector((state) => state.authSlice.status)
  const errorsBE = useSelector((state) => state.authSlice.errorsBE)
  const data = useSelector((state) => state.baseSlice.data)
  const pronvices = data.pronvices
  const genders = data.genders

  useEffect(() => {
    dispatch(getPronvice())
    dispatch(getGender())
  }, [])

  const {
    register,
    handleSubmit,
    setValue,
    control,
    trigger,
    formState: { errors: errorsFE },
  } = useForm()

  const onSubmit = (data) => {
    dispatch(signup(data))
  }

  const handleToLogin = () => {
    navigate(`/login`)
  }

  useEffect(() => {
    if (loginStatus === HTTP_STATUS.FULFILLED) {
      navigate('/login')
    }
  }, [loginStatus, navigate])

  const cnInput = 'h-10 w-[250px] rounded-sm border-[0.5px] rounded-[8px] border-black/20 px-4 text-sm'
  const cnSelect = 'h-10 w-[250px] text-sm rounded-[8px]'
  const cnError = 'border border-red'
  const cnNormal = 'border-black/20'

  const validatePastDate = (date) => {
    if (!date) return false
    return moment(date).isBefore(moment())
  }

  const validateAge = (date) => {
    if (!date) return false
    return moment().diff(moment(date), 'years') >= 10
  }

  return (
    <>
      <div className="">
        <h2 className="mb-5 text-[20px] font-normal">Sign Up</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="flex ">
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-x-6 gap-y-2">
              <div>
                <input
                  {...register('username', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[\w]+@([\w-]+\.)+[\w-]{2,6}$/,
                      message: 'Email is invalid! - ex: abc@gmail.com',
                    },
                  })}
                  type="text"
                  placeholder="Email"
                  className={`${cnInput} ${errorsFE.username || (errorsBE && errorsBE.username) ? cnError : cnNormal}`}
                  onBlur={() => trigger('username')}
                />
                <ErrorText>{(errorsFE.username && errorsFE.username.message) || (errorsBE && errorsBE.usename)}</ErrorText>
              </div>
              <div>
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
                  type={'text'}
                  placeholder="Password"
                  maxLength={20}
                  className={`${cnInput} ${errorsFE.password ? cnError : cnNormal}`}
                  onBlur={() => trigger('password')}
                />
                <ErrorText>{errorsFE.password && errorsFE.password.message}</ErrorText>
              </div>
              <div>
                <input
                  {...register('name', {
                    required: 'Name is required',
                  })}
                  type={'text'}
                  placeholder="Name"
                  className={`${cnInput} ${errorsFE.name || (errorsBE && errorsBE.name) ? cnError : cnNormal}`}
                  onBlur={() => trigger('name')}
                />
                <ErrorText>{(errorsFE.name && errorsFE.name.message) || (errorsBE && errorsBE.name)} </ErrorText>
              </div>
              <div>
                <input
                  {...register('phone', {
                    required: 'Phone is required',
                    pattern: {
                      value: /^0[1-9][0-9]{8}$/,
                      message: 'Phone is invalid! - ex: 0123456789',
                    },
                    minLength: {
                      value: 10,
                      message: 'Phone length should be 10 characters!',
                    },
                    maxLength: {
                      value: 10,
                      message: 'Phone length should be 10 characters!',
                    },
                  })}
                  type={'text'}
                  placeholder="Phone"
                  className={`${cnInput} ${errorsFE.phone || (errorsBE && errorsBE.phone) ? cnError : cnNormal}`}
                  onBlur={() => trigger('phone')}
                />
                <ErrorText>{(errorsFE.phone && errorsFE.phone.message) || (errorsBE && errorsBE.phone)}</ErrorText>
              </div>
              <div>
                <input
                  {...register('address', {
                    required: 'Address is required',
                  })}
                  type={'text'}
                  placeholder="Address"
                  className={`${cnInput} ${errorsFE.address || (errorsBE && errorsBE.address) ? cnError : cnNormal}`}
                  onBlur={() => trigger('address')}
                />
                <ErrorText>{(errorsFE.address && errorsFE.address.message) || (errorsBE && errorsBE.address)}</ErrorText>
              </div>
              <div>
                <DatePicker
                  {...register('dob', {
                    required: 'Date of birth is required',
                    validate: {
                      validDate: (value) => moment(value, 'YYYY-MM-DD', true).isValid() || 'Invalid date format',
                      pastDate: (value) => validatePastDate(value) || 'Date of birth must be in the past',
                      minimumAge: (value) => validateAge(value) || 'You must be at least 10 years old',
                    },
                  })}
                  placeholder="Date of birth"
                  className={`${cnInput} ${errorsFE.dob || (errorsBE && errorsBE.dob) ? cnError : cnNormal}`}
                  onChange={(date, dateString) => {
                    setValue('dob', dateString, { shouldValidate: true })
                    trigger('dob')
                  }}
                />
                <ErrorText>{(errorsFE.dob && errorsFE.dob.message) || (errorsBE && errorsBE.dob)} </ErrorText>
              </div>
              <div>
                <Select
                  {...register('pronvice', {
                    required: 'Pronvice is required',
                  })}
                  placeholder="Pronvice"
                  className={`${cnSelect} ${errorsFE.pronvice || (errorsBE && errorsBE.pronvice) ? cnError : cnNormal}`}
                  options={pronvices.map((item) => ({ label: item, value: item }))}
                  onChange={(value) => {
                    setValue('pronvice', value, { shouldValidate: true })
                    trigger('pronvice')
                  }}
                />
                <ErrorText>{(errorsFE.pronvice && errorsFE.pronvice.message) || (errorsBE && errorsBE.pronvice)}</ErrorText>
              </div>
              <div>
                <Select
                  {...register('gender', {
                    required: 'Gender is required',
                  })}
                  placeholder="Gender"
                  className={`${cnSelect} ${errorsFE.gender || (errorsBE && errorsBE.gender) ? cnError : cnNormal}`}
                  options={genders.map((item) => ({ label: item, value: item }))}
                  onChange={(value) => {
                    setValue('gender', value, { shouldValidate: true })
                    trigger('gender')
                  }}
                />
                <ErrorText>{(errorsFE.gender && errorsFE.gender.message) || (errorsBE && errorsBE.gender)}</ErrorText>
              </div>
            </div>
            <div className="h-10 w-full overflow-hidden rounded-sm">
              <Button type={'solid'}>Sign Up</Button>
            </div>
          </div>
        </form>

        <div className="mt-4 flex justify-center">
          <p className="text-[14px] ">
            <span className="text-black/30">Have an account? </span>
            <span className="cursor-pointer text-primary hover:text-primary_dark" onClick={handleToLogin}>
              Login
            </span>
          </p>
        </div>
      </div>
    </>
  )
}
