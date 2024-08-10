import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'

export default function Cart() {
  const orderSlice = useSelector((state) => state.orderSlice)
  const cart = orderSlice.cart

  const [count, setCount] = useState(cart.count)

  useEffect(() => {
    const cartLS = JSON.parse(localStorage.getItem('cart'))
    if (cartLS && cartLS.count != null) {
      const countLS = cartLS.count
      setCount(countLS)
    } else {
      setCount(null)
    }
  }, [cart])

  return (
    <>
      <a href="/cart" className="relative">
        <i className="fa-solid fa-cart-shopping text-[24px] text-white"></i>
        {count != null && <span className="absolute -right-1/2 -top-1/3 flex h-4 w-6 items-center justify-center rounded-full border border-primary bg-white text-[14px] text-primary">{count}</span>}
      </a>
    </>
  )
}
