import Button from 'components/Button'
import PartAdresses from 'feature/Account/MyAddesses/PartAdresses'
import { setModalSelectAddress, setIsCreateAddress, setModalEditAddress } from 'slice/modalSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { getAllAddress, changeAddress } from 'slice/otherSlice'
import { setAddress } from 'slice/orderSlice'

export default function ModalSelectAddress() {
  const dispatch = useDispatch()

  const otherSlice = useSelector((state) => state.otherSlice)
  const addresses = otherSlice.addresses

  const orderSlice = useSelector((state) => state.orderSlice)
  const address = orderSlice.checkout.address

  useEffect(() => {
    dispatch(getAllAddress())
  }, [])

  const cancelSelectAddress = () => {
    const checkoutLS = JSON.parse(localStorage.getItem('checkout'))
    const addressPrevious = checkoutLS.address
    dispatch(setAddress(addressPrevious))
    dispatch(setModalSelectAddress(false))
  }

  const createAddress = () => {
    dispatch(setIsCreateAddress())
    dispatch(setModalEditAddress(true))
  }

  const submitSelectAddress = () => {
    const checkoutLS = JSON.parse(localStorage.getItem('checkout'))
    checkoutLS.address = address
    localStorage.setItem('checkout', JSON.stringify(checkoutLS))
    dispatch(changeAddress(address.id))
    dispatch(setModalSelectAddress(false))
  }

  return (
    <>
      <div className="item fixed z-[100] flex h-full w-full items-center justify-center bg-black/50">
        <form action="#" className="w-[650px] rounded-sm bg-white p-8">
          <div className="flex h-full w-full flex-col gap-3">
            <h2 className="text-xl font-normal capitalize">my address</h2>
            <div className="line" />
            <div className="flex flex-col gap-3">{addresses && addresses.map((item, index) => <PartAdresses item={item} key={index} />)}</div>
            <div className="flex h-10 w-[180px]" onClick={createAddress}>
              <Button>
                <i className="fa-solid fa-plus" /> add new address
              </Button>
            </div>
            <div className="flex justify-end gap-3">
              <div className="h-9 w-[140px] overflow-hidden rounded-sm" onClick={cancelSelectAddress}>
                <Button>cancel</Button>
              </div>
              <div className="h-9 w-[140px] overflow-hidden rounded-sm" onClick={submitSelectAddress}>
                <Button type={'solid'}>submit</Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
