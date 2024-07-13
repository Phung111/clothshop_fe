import Address from 'feature/Checkout/Address'
import Ordered from 'feature/Checkout/Ordered/Ordered'
import Voucher from 'feature/Checkout/Voucher'
import Total from 'feature/Checkout/Total'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

export default function Checkout() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const orderSlice = useSelector((state) => state.orderSlice)
  const checkout = orderSlice.checkout

  useEffect(() => {
    if (Object.keys(checkout).length === 0) {
      Swal.fire({
        title: 'You cant checkout yet',
        text: 'Need to go to cart first',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'To Cart',
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: 'Deleted!',
            text: 'Your file has been deleted.',
            icon: 'success',
          })
          navigate('/cart')
        } else {
          navigate(-1)
        }
      })
    }
  }, [checkout])

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
