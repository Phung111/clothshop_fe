import Button from 'components/Button'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { setIsUpdateAddress, setModalEditAddress } from 'slice/modalSlice'
import { deleteAddress, defaultAddress } from 'slice/otherSlice'
import Swal from 'sweetalert2'
import { set } from 'react-hook-form'
import { setAddress } from 'slice/orderSlice'

export default function PartMyAccount({ item }) {
  const dispatch = useDispatch()

  const orderSlice = useSelector((state) => state.orderSlice)
  const address = orderSlice.checkout.address

  const handleEditAddress = () => {
    dispatch(setIsUpdateAddress())
    dispatch(setModalEditAddress(true))
  }

  const handleSelectAddress = () => {
    dispatch(setAddress(item))
  }

  const handleDeleteAddress = () => {
    Swal.fire({
      title: `Are you sure?`,
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteAddress(item.id))
      }
    })
  }

  const handleSetDefaultAddress = () => {
    dispatch(defaultAddress(item.id))
  }

  return (
    <>
      <label htmlFor={`address_${item.id}`} className="flex cursor-pointer items-start gap-2">
        <input onChange={handleSelectAddress} checked={address.id === item.id} type="radio" name="addressOption" id={`address_${item.id}`} className="mt-1 aspect-square w-4 cursor-pointer accent-primary" />
        <div className="flex w-full justify-between">
          <div className="flex w-[350px] flex-col gap-2">
            <div className="flex items-center gap-2">
              <p className="text-base font-medium capitalize">{item.nameCustomer}</p>
              <div className="line-y" />
              <p className="text-sm text-black/50">{item.phone}</p>
            </div>
            <div className="flex gap-1">
              <span className="text-sm capitalize text-black/50">{item.address},</span>
              <span className="text-sm capitalize text-black/50">{item.province}</span>
            </div>
            {item.isDefault && <div className="flex h-6 w-14 items-center justify-center border border-primary text-sm capitalize text-primary">default</div>}
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex justify-end gap-4">
              <button type="button" className="capitalize text-blue hover:text-blue_dark" onClick={handleEditAddress}>
                edit
              </button>
              <button type="button" className="capitalize text-red hover:text-red_dark" onClick={handleDeleteAddress}>
                <i className="fa-solid fa-trash-can"></i>
              </button>
            </div>
            <div className="h-7 w-[120px] text-sm" onClick={handleSetDefaultAddress}>
              <Button>set as default</Button>
            </div>
          </div>
        </div>
      </label>
      <div className="line" />
    </>
  )
}
