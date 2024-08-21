import ContentHead from 'feature/Home/ContentHead'
import CartItem from 'feature/Cart/CartItem'
import CartItemHead from 'feature/Cart/CartItemHead'
import CartItemTotal from 'feature/Cart/CartItemTotal'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getCart } from 'slice/orderSlice'
import { getProductPage, setCurrentPage, setSeeMore, setProductSize, emptyECategories, emptySeeMore, resetCount, setECategories } from 'slice/productPageSlice'
import Seemore from 'feature/Category/Seemore'

export default function Cart() {
  const authSlice = useSelector((state) => state.authSlice)
  const customer = authSlice.customer
  const orderSlice = useSelector((state) => state.orderSlice)
  const cartItems = orderSlice.cart.cartItems

  const dispatch = useDispatch()

  useEffect(() => {
    let arCategory = []
    cartItems.forEach((item) => {
      if (!arCategory.includes(item.category)) {
        arCategory.push(item.category)
      }
    })

    /* prettier-ignore */
    Promise.all([
      dispatch(getCart(customer.cartId)),
      dispatch(emptyECategories()),
      dispatch(setECategories(arCategory)),
      dispatch(setProductSize(24)), 
      dispatch(setCurrentPage(1)),
      dispatch(emptySeeMore()), 
      dispatch(resetCount()),
      dispatch(getProductPage()),
    ])
      .then(() => {})
      .catch((error) => {})
      .finally(() => {
        dispatch(setSeeMore())
        window.scrollTo(0, 0)
      })
  }, [])

  return (
    <>
      <section className="bg-gray">
        <div className="container">
          <div className="flex flex-col gap-4 pt-5">
            <CartItemHead />
            {cartItems &&
              [...cartItems].reverse().map((item, index) => {
                return <CartItem item={item} key={index} />
              })}
            <CartItemTotal />

            <div className="bg-white px-4">
              <ContentHead title={'you may also like'} />
            </div>
          </div>
        </div>
      </section>
      <Seemore />
    </>
  )
}
