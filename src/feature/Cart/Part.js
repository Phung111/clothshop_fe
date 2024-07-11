import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectCartItem, deselectCartItem, selectAllCartItems, deselectAllCartItems } from 'slice/orderSlice'

export default function Part({ children, item, head }) {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.orderSlice.cart)
  const selectCartItems = useSelector((state) => state.orderSlice.selectCartItems)

  const allSelected = cart.cartItems && cart.cartItems.length > 0 && cart.cartItems.length === selectCartItems.length
  const isChecked = item ? selectCartItems.some((selectedItem) => selectedItem.cartItemId === item.cartItemId) : allSelected

  const handleCheckboxChange = (e) => {
    if (e.target.checked) {
      dispatch(selectCartItem(item))
    } else {
      dispatch(deselectCartItem(item))
    }
  }

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      dispatch(selectAllCartItems())
    } else {
      dispatch(deselectAllCartItems())
    }
  }

  const handleChange = head ? handleSelectAll : handleCheckboxChange

  return (
    <>
      <div className="flex items-center bg-white px-5 py-4">
        <div className="flex w-[50px] justify-center">
          <input type="checkbox" name="" id="" className="aspect-square w-4 cursor-pointer accent-primary" checked={isChecked} onChange={handleChange} />
        </div>
        <div className="flex w-[500px] items-center ">{children[0]}</div>
        <div className="flex grow items-center justify-center">{children[1]}</div>
        <div className="flex w-[150px] items-center justify-center">{children[2]}</div>
        <div className="flex w-[120px] items-center justify-center">{children[3]}</div>
        <div className="flex w-[120px] items-center justify-center">{children[4]}</div>
      </div>
    </>
  )
}
