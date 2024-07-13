import Head from 'feature/Checkout/Ordered/Head'
import Item from 'feature/Checkout/Ordered/Item'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import React from 'react'

export default function Ordered() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const orderSlice = useSelector((state) => state.orderSlice)
  const checkout = orderSlice.checkout
  const cartItems = checkout.cartItems
  console.log('length', cartItems.length)

  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-col gap-10">
          <Head />
          <div className="flex flex-col gap-5">
            {cartItems &&
              cartItems.map((item, index) => (
                <React.Fragment key={item.id}>
                  <Item item={item} />
                  {index !== cartItems.length - 1 && <div className="line" />}
                </React.Fragment>
              ))}
          </div>
        </div>
      </div>
    </>
  )
}
