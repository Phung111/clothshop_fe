import Address from 'feature/Checkout/CheckoutBody/Address'
import Ordered from 'feature/Checkout/CheckoutBody/Ordered/Ordered'
import Voucher from 'feature/Checkout/CheckoutBody/Voucher'
import Total from 'feature/Checkout/CheckoutBody/Total'

export default function CheckoutBody() {
  return (
    <>
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
    </>
  )
}
