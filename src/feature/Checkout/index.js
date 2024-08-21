import Address from 'feature/Checkout/Address'
import Ordered from 'feature/Checkout/Ordered'
import Voucher from 'feature/Checkout/Voucher'
import Total from 'feature/Checkout/Total'
import { useSelector } from 'react-redux'

export default function Checkout() {
  const orderSlice = useSelector((state) => state.orderSlice)
  const checkout = orderSlice.checkout

  return (
    <>
      {checkout && (
        <div className="bg-gray">
          <div className="container">
            <div className="flex flex-col gap-5 py-4">
              <div className="bg-white px-8 py-7">
                <Address />
              </div>
              <div className="bg-white px-8 py-7">
                <Ordered />
              </div>
              <div className="bg-white px-8 py-7">
                <Voucher />
              </div>
              <div className="bg-white/70 px-8 py-7">
                <Total />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
