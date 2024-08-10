import Address from 'feature/Checkout/Address'
import Ordered from 'feature/Checkout/Ordered'
import Voucher from 'feature/Checkout/Voucher'
import Total from 'feature/Checkout/Total'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

export default function Checkout() {
  const orderSlice = useSelector((state) => state.orderSlice)
  const checkout = orderSlice.checkout

  const navigate = useNavigate()

  useEffect(() => {
    if (Object.keys(checkout.cartItems).length === 0) {
      Swal.fire({
        title: 'Nothing to checkout',
        text: 'Need to go to cart first',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'To Cart',
        cancelButtonText: 'Go Back',
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/cart')
        }
        if (result.isDismissed) {
          navigate(-1)
        }
      })
    }
  }, [checkout.cartItems, navigate])

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
