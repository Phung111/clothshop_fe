import Chose from 'feature/ProductDetail/Info/Name/Chose'
import ButtonSize from 'feature/ProductDetail/Info/Name/Size/ButtonSize'
import { setCartItemSize } from 'slice/orderSlice'
import { useDispatch, useSelector } from 'react-redux'

export default function Size({ array }) {
  const dispatch = useDispatch()

  const orderSlice = useSelector((state) => state.orderSlice)
  const cartItem = orderSlice.cartItem
  const size = cartItem.size

  const handleSizeSelection = (sizeLc) => {
    if (size === sizeLc) {
      dispatch(setCartItemSize(''))
    } else {
      dispatch(setCartItemSize(sizeLc))
    }
  }

  return (
    <>
      <Chose title={'size'}>
        <div className="grid w-full grid-cols-5 gap-2">
          {array.map((item, index) => (
            <ButtonSize key={index} isSelected={size === item} onClick={() => handleSizeSelection(item)}>
              {item}
            </ButtonSize>
          ))}
        </div>
      </Chose>
    </>
  )
}
