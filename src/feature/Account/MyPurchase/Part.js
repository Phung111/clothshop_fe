import Item from 'feature/Account/MyPurchase/Item'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { setModalOrderDetail } from 'slice/modalSlice'
import { setOrder } from 'slice/orderPageSlice'

export default function Part({ item }) {
  const dispatch = useDispatch()

  const orderItems = item.orderItems

  useEffect(() => {}, [])
  const handleoOpenModalOrderDetail = () => {
    dispatch(setOrder(item))
    dispatch(setModalOrderDetail(true))
  }
  return (
    <>
      <div className="flex cursor-pointer flex-col gap-3 rounded-lg px-6 py-4" onClick={handleoOpenModalOrderDetail}>
        {orderItems && orderItems.map((item, index) => <Item item={item} key={index} />)}
        <div className="flex items-center justify-end gap-2">
          <i className="fa-solid fa-sack-dollar text-[16px] text-primary" />
          <p className="text-[14px]">Order Total</p>
          <p className="text-[24px] text-primary">{window.formatCurrency(item.total)}</p>
        </div>
      </div>
    </>
  )
}
