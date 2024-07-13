import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Address() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const orderSlice = useSelector((state) => state.orderSlice)
  const checkout = orderSlice.checkout
  const address = checkout.address

  return (
    <>
      {address && (
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-location-dot text-lg text-primary"></i>
            <h2 className="text-lg font-normal text-primary">Delivery Address</h2>
          </div>
          <div className="flex gap-5">
            <p className="text-base font-bold capitalize">
              {address.nameCustomer} - {address.phone}
            </p>
            <p className="text-base capitalize">
              {address.address}, {address.epronvince}
            </p>
            <div className="flex h-5 w-10 items-center justify-center border border-primary text-[10px] text-primary">Default</div>
            <button className="text-blue">Change</button>
          </div>
        </div>
      )}
    </>
  )
}
