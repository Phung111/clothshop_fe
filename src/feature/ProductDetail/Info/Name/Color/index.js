import Chose from 'feature/ProductDetail/Info/Name/Chose'
import ButtonColor from 'feature/ProductDetail/Info/Name/Color/ButtonColor'
import { setCartItemColor } from 'slice/orderSlice'
import { useDispatch, useSelector } from 'react-redux'

export default function Color({ array }) {
  const dispatch = useDispatch()

  const orderSlice = useSelector((state) => state.orderSlice)
  const cartItem = orderSlice.cartItem
  const color = cartItem.color

  const handleColorSelection = (colorLC) => {
    if (color === colorLC) {
      dispatch(setCartItemColor(''))
    } else {
      dispatch(setCartItemColor(colorLC))
    }
  }

  return (
    <>
      <Chose title={'color'}>
        <div className="flex gap-5">
          {array.map((item, index) => (
            <ButtonColor key={index} isSelected={color === item} onClick={() => handleColorSelection(item)}>
              {item}
            </ButtonColor>
          ))}
          <div className="bg-white"></div>
        </div>
      </Chose>
    </>
  )
}
