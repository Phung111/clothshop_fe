import Body from 'feature/Home/Products/Content/Body'
import HomeHead from 'feature/Home/HomeHead'
import CartItem from 'feature/Cart/CartItem'
import CartItemHead from 'feature/Cart/CartItemHead'
import CartItemTotal from 'feature/Cart/CartItemTotal'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getCart } from 'slice/orderSlice'
import { setLoading } from 'slice/baseSlice'

export default function Cart() {
  const authSlice = useSelector((state) => state.authSlice)
  const customer = authSlice.customer
  const orderSlice = useSelector((state) => state.orderSlice)
  const cartItems = orderSlice.cart.cartItems

  const dispatch = useDispatch()
  useEffect(() => {
    Promise.all([dispatch(getCart(customer.cartId))])
      .then(() => {})
      .catch((error) => {})
      .finally(() => {
        window.scrollTo(0, 0)
      })
  }, [])

  return (
    <>
      <section className="bg-gray">
        <div className="container">
          <div className="flex flex-col gap-4 py-5">
            <CartItemHead />
            {cartItems &&
              [...cartItems].reverse().map((item, index) => {
                return <CartItem item={item} key={index} />
              })}
            <CartItemTotal />
            <div className="bg-white p-4">
              <HomeHead title={'you may also like'} href={'#'} />
              <Body seeMore={'#'} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
