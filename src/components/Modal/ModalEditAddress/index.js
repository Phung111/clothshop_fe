import Button from 'components/Button'
import { setModalEditAddress } from 'slice/modalSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { createAddress, updateAddress } from 'slice/otherSlice'
import { useForm } from 'react-hook-form'
import ErrorText from 'components/ErrorText'
import { Select } from 'antd'
import { getPronvice } from 'slice/baseSlice'

export default function ModalEditAddress() {
  const dispatch = useDispatch()

  const modalSlice = useSelector((state) => state.modalSlice)
  const isCreateAddress = modalSlice.isCreateAddress

  const baseSlice = useSelector((state) => state.baseSlice.data)
  const pronvices = baseSlice.pronvices

  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    formState: { errors: errorsFE },
  } = useForm()

  const cnInput = 'h-10 w-full rounded-sm border-[0.5px] border-black/20 px-4 text-sm'
  const cnError = 'border-red border-2'
  const cnNormal = 'border-black/20'
  const cnSelect = 'h-10 w-full text-sm rounded-[8px]'

  const handleCancelEditAddres = () => {
    dispatch(setModalEditAddress(false))
  }

  const onSubmitEditAddress = (data) => {
    if (isCreateAddress) {
      dispatch(createAddress(data)).then(() => {
        dispatch(setModalEditAddress(false))
      })
    } else {
      dispatch(updateAddress(data)).then(() => {
        dispatch(setModalEditAddress(false))
      })
    }
  }

  useEffect(() => {
    dispatch(getPronvice())
  }, [])

  return (
    <>
      <div className="item fixed z-[100] flex h-full w-full items-center justify-center bg-black/50">
        <form onSubmit={handleSubmit(onSubmitEditAddress)} className="w-[500px] rounded-sm bg-white p-8">
          <div className="flex h-full w-full flex-col gap-3">
            <h2 className="text-xl font-normal capitalize">{isCreateAddress ? 'create address' : 'update address'}</h2>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <input
                  {...register('nameCustomer', {
                    required: 'Name Customer is required',
                  })}
                  onBlur={() => trigger('nameCustomer')}
                  className={`${cnInput}  ${errorsFE.nameCustomer ? cnError : cnNormal}`}
                  type="text"
                  placeholder="Full Name"
                />
                <ErrorText>{errorsFE.nameCustomer && errorsFE.nameCustomer.message}</ErrorText>
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
                  onBlur={() => trigger('phone')}
                  className={`${cnInput} ${errorsFE.fullname ? cnError : cnNormal}`}
                  type="number"
                  placeholder="Phone Number"
                />
                <ErrorText>{errorsFE.phone && errorsFE.phone.message}</ErrorText>
              </div>
              <div>
                <Select
                  {...register('pronvice', {
                    required: 'Pronvice is required',
                  })}
                  placeholder="Pronvice"
                  className={`${cnSelect} ${errorsFE.pronvice ? cnError : cnNormal}`}
                  options={pronvices.map((item) => ({ label: item, value: item }))}
                  onChange={(value) => {
                    setValue('pronvice', value, { shouldValidate: true })
                    trigger('pronvice')
                  }}
                />
                <ErrorText>{errorsFE.pronvice && errorsFE.pronvice.message}</ErrorText>
              </div>
              <div>
                <input
                  {...register('address', {
                    required: 'Phone is required',
                    pattern: {
                      value: /\d+\s+[^\d\s].*/,
                      message: 'Address is invalid! - ex: 123 Đống Đa',
                    },
                  })}
                  onBlur={() => trigger('address')}
                  className={`${cnInput} ${errorsFE.fullname ? cnError : cnNormal}`}
                  type="text"
                  placeholder="Address"
                />
                <ErrorText>{errorsFE.address && errorsFE.address.message}</ErrorText>
              </div>
            </div>
            {!isCreateAddress && (
              <label htmlFor="setAdrDefault" className="flex cursor-pointer gap-2 hover:text-primary">
                <input type="checkbox" name="" id="setAdrDefault" className="aspect-square w-4 cursor-pointer accent-primary" />
                <p className="text-sm">Set as Default Address</p>
              </label>
            )}

            <div className="flex justify-end gap-3">
              <div className="h-9 w-[140px] overflow-hidden rounded-sm" onClick={handleCancelEditAddres}>
                <Button>cancel</Button>
              </div>
              <div className="h-9 w-[140px] overflow-hidden rounded-sm">
                <Button type={'solid'} submit={true}>
                  {isCreateAddress ? 'create' : 'update'}
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
