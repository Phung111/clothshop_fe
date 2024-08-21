import Button from 'components/Button'
import { selectAllCartItems, deselectAllCartItems, calCartItemsTotal, checkout } from 'slice/orderSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function CartItemTotal() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const orderSlice = useSelector((state) => state.orderSlice)
  const cart = orderSlice.cart
  const selectCartItems = orderSlice.selectCartItems
  const cartItemsTotal = orderSlice.cartItemsTotal

  const allSelected = cart.cartItems && cart.cartItems.length > 0 && cart.cartItems.length === selectCartItems.length
  const isChecked = allSelected

  const count = cart.count

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      dispatch(selectAllCartItems())
    } else {
      dispatch(deselectAllCartItems())
    }
  }

  const handleCheckout = () => {
    dispatch(checkout()).then(() => {
      navigate('/checkout')
    })
  }

  useEffect(() => {
    dispatch(calCartItemsTotal())
  }, [dispatch, selectCartItems])

  return (
    <>
      <div className="sticky bottom-0 z-40 flex justify-between bg-white px-5 py-4">
        <div className="flex">
          <div className="flex w-[50px] justify-center">
            <input type="checkbox" name="" id="" className="aspect-square w-4 cursor-pointer accent-primary" checked={isChecked} onChange={handleSelectAll} />
          </div>
          <div className="flex gap-5">
            <button className="men_men text-sm capitalize hover:text-primary">Select All ({count})</button>
            <button className="text-sm hover:text-primary">Delete Select</button>
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-5">
          <p className="text-sm">Total (0 item):</p>
          <p className="text-2xl text-primary">{window.formatCurrency(cartItemsTotal)}</p>
          <div className="h-[40px] w-[180px]" onClick={handleCheckout}>
            <Button type={'solid'}>check out</Button>
          </div>
        </div>
      </div>
    </>
  )
}
