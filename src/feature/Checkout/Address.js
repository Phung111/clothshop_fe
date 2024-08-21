import { useDispatch, useSelector } from 'react-redux'
import { setModalSelectAddress, setIsUpdateAddress } from 'slice/modalSlice'

export default function Address() {
  const dispatch = useDispatch()

  const orderSlice = useSelector((state) => state.orderSlice)
  const checkout = orderSlice.checkout
  const address = checkout.address

  const handleChangeAddress = () => {
    dispatch(setIsUpdateAddress())
    dispatch(setModalSelectAddress(true))
  }

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
              {address.address}, {address.province}
            </p>
            {address.isDefault && (
              <div className="flex h-6 items-center">
                <div className="flex h-5 w-10 items-center justify-center border border-primary text-[10px] text-primary">Default</div>
              </div>
            )}
            <div onClick={handleChangeAddress}>
              <button className="text-blue">Change</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
