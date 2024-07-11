import { selectAllCartItems, deselectAllCartItems } from 'slice/orderSlice'
import { useDispatch } from 'react-redux'

export default function CartItemHead() {
  const dispatch = useDispatch()

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      dispatch(selectAllCartItems())
    } else {
      dispatch(deselectAllCartItems())
    }
  }

  return (
    <>
      <div className="flex items-center bg-white px-5 py-4">
        <div className="flex w-[50px] justify-center">
          <input type="checkbox" className="aspect-square w-4 cursor-pointer accent-primary" onChange={handleSelectAll} />
        </div>
        <div className="flex w-[500px] items-center ">
          <p className="text-sm capitalize">product</p>
        </div>
        <div className="flex grow items-center justify-center">
          <p className="text-sm capitalize">price</p>
        </div>
        <div className="flex w-[150px] items-center justify-center">
          <p className="text-sm capitalize">quantity</p>
        </div>
        <div className="flex w-[120px] items-center justify-center">
          <p className="text-sm capitalize">total price</p>
        </div>
        <div className="flex w-[120px] items-center justify-center">
          <p className="text-sm capitalize">actions</p>
        </div>
      </div>
    </>
  )
}
