import Button from 'components/Button'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Total() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const orderSlice = useSelector((state) => state.orderSlice)
  const checkout = orderSlice.checkout
  const total = checkout.total

  return (
    <>
      {total && (
        <div className="flex flex-col gap-5">
          <div className="flex flex-col items-end gap-5">
            <div className="flex items-center gap-5">
              <p className="w-[150px] text-sm text-black/50">Merchandise Subtotal:</p>
              <p className="w-[150px] text-right text-sm">₫{window.formatNumberNođ(total.itemsTotal)}</p>
            </div>
            <div className="flex items-center gap-5">
              <p className="w-[150px] text-sm text-black/50">Shipping Total:</p>
              <p className="w-[150px] text-right text-sm">₫{window.formatNumberNođ(total.shipTotal)}</p>
            </div>
            <div className="flex items-center gap-5">
              <p className="w-[150px] text-sm text-black/50">Voucher Total:</p>
              <p className="w-[150px] text-right text-sm">-₫{window.formatNumberNođ(total.voucherTotal)}</p>
            </div>
            <div className="flex items-center gap-5">
              <p className="w-[150px] text-sm text-black/50">Total Payment:</p>
              <p className="w-[150px] text-right text-[28px] text-primary">₫{window.formatNumberNođ(total.grandTotal)}</p>
            </div>
          </div>
          <div className="line" />
          <div className="flex items-center justify-between">
            <p className="text-right text-sm">By clicking "Place Order", you are agreeing to Shopee's General Transaction Terms</p>
            <div className="h-[40px] w-[210px]">
              <Button type={'solid'}>place order</Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
