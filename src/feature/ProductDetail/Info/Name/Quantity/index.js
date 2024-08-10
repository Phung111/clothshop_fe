import { useDispatch, useSelector } from 'react-redux'
import Chose from 'feature/ProductDetail/Info/Name/Chose'
import { setCartItemQuantity } from 'slice/orderSlice'

export default function Quantity() {
  const dispatch = useDispatch()
  const quantity = useSelector((state) => state.orderSlice.cartItem.quantity)
  const decreaseQuantity = () => {
    if (quantity > 1) {
      dispatch(setCartItemQuantity(quantity - 1))
    }
  }

  const increaseQuantity = () => {
    dispatch(setCartItemQuantity(quantity + 1))
  }

  const handleChange = (event) => {
    dispatch(setCartItemQuantity(parseInt(event.target.value) || 0))
  }

  return (
    <>
      <Chose title={'quantity'}>
        <div className="flex items-center gap-2">
          <div className="flex h-9 border-[0.5px] border-black/20">
            <button className="flex aspect-square  items-center justify-center " onClick={decreaseQuantity}>
              <i className="fa-solid fa-minus text-xs"></i>
            </button>
            <div className="flex w-20 items-center justify-center border-x-[0.5px] border-black/20">
              <input type="number" value={quantity} onChange={handleChange} className="w-full text-center" />
            </div>
            <button className="flex aspect-square items-center justify-center" onClick={increaseQuantity}>
              <i className="fa-solid fa-plus text-xs"></i>
            </button>
          </div>
          <p className="text-black/50">7680 pieces available</p>
        </div>
      </Chose>
    </>
  )
}
