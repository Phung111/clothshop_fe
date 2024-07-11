import Button from 'components/Button'
import { selectAllCartItems, deselectAllCartItems, calCartItemsTotal } from 'slice/orderSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

export default function CartItemTotal() {
  const dispatch = useDispatch()

  const orderSlice = useSelector((state) => state.orderSlice)
  const cart = orderSlice.cart
  const selectCartItems = orderSlice.selectCartItems
  const cartItemsTotal = orderSlice.cartItemsTotal

  const allSelected = cart.cartItems && cart.cartItems.length > 0 && cart.cartItems.length === selectCartItems.length
  const isChecked = allSelected

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      dispatch(selectAllCartItems())
    } else {
      dispatch(deselectAllCartItems())
    }
  }

  useEffect(() => {
    // thêm 1 hàm tính toán giá khi đánh tích xong, tăng giảm số lượng sp
    // cart.cartItems -> selectCartItems
    // sửa lại khi change xoá thì onClick ra ngoài thì hỏi cho về giá trị trc đó
    dispatch(calCartItemsTotal())
  }, [selectCartItems])

  return (
    <>
      <div className="sticky bottom-0 z-40 flex justify-between bg-white px-5 py-4">
        <div className="flex">
          <div className="flex w-[50px] justify-center">
            <input type="checkbox" name="" id="" className="aspect-square w-4 cursor-pointer accent-primary" checked={isChecked} onChange={handleSelectAll} />
          </div>
          <div className="flex gap-5">
            <button className="men_men text-sm capitalize hover:text-primary">Select All (10)</button>
            <button className="text-sm hover:text-primary">Delete Select</button>
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-5">
          <p className="text-sm">Total (0 item):</p>
          <p className="text-2xl text-primary">₫{window.formatNumberNođ(cartItemsTotal)}</p>
          <div className="h-[40px] w-[180px]">
            <Button type={'solid'}>check out</Button>
          </div>
        </div>
      </div>
    </>
  )
}
