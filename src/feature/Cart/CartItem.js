import Part from 'feature/Cart/Part'
import { useState, useEffect } from 'react'
import { CLOUDINARY } from 'app/global'
import { increaseCartItem, decreaseCartItem, changeQuantityCartItem, deleteCartItem } from 'slice/orderSlice'
import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2'

export default function CartItem({ item }) {
  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(item.quantity)

  const [priceAfter, setPriceAfter] = useState((item.price * (100 - item.discount.percent)) / 100)

  const [total, setTotal] = useState(item.total)

  const decreaseQuantity = () => {
    if (quantity === 1) {
      Swal.fire({
        title: `Are you sure?`,
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(deleteCartItem(item.cartItemId))
        }
      })
    } else {
      setQuantity((prevValue) => prevValue - 1)
      dispatch(decreaseCartItem(item.cartItemId))
    }
  }

  const increaseQuantity = () => {
    setQuantity((prevValue) => prevValue + 1)
    dispatch(increaseCartItem(item.cartItemId))
  }

  const handleChange = (event) => {
    const quantityInput = event.target.value
    const quantityPrev = quantity
    if (quantityInput === 0) {
      Swal.fire({
        title: `Are you sure?`,
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(deleteCartItem(item.cartItemId))
        } else {
          setQuantity(quantityPrev)
        }
      })
    } else {
      setQuantity(quantityInput)
      dispatch(decreaseCartItem(item.cartItemId, quantityInput))
    }
  }

  const handleDeleteCartItem = () => {
    Swal.fire({
      title: `Are you sure?`,
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteCartItem(item.cartItemId))
      }
    })
  }

  useEffect(() => {
    setTotal(priceAfter * quantity)
  }, [quantity, priceAfter])

  return (
    <>
      <Part item={item}>
        <>
          <div className="flex items-center gap-2">
            <div className="aspect-square w-20 shrink-0 bg-gray">
              <img src={`${CLOUDINARY.url}/${CLOUDINARY.SCALE_IMAGE_100_100}/${item.image.fileFolder}/${item.image.fileName}`} alt="cart item" className="h-full w-full object-none" />
            </div>
            <p className="line-clamp-2 w-[220px] text-sm capitalize">{item.name}</p>
            <div className="flex flex-col gap-1 text-black/50">
              <p className="text-sm capitalize">variations:</p>
              <p className="line-clamp-1 text-sm capitalize">{item.variation}</p>
            </div>
          </div>
        </>
        <>
          <div className="flex justify-center gap-2">
            <p className="text-black/50 line-through">₫{window.formatNumberNođ(item.price)}</p>
            <p className="text-sm">₫{window.formatNumberNođ(priceAfter)}</p>
          </div>
        </>
        <>
          <div className="flex h-9 border-[0.5px] border-black/20">
            <button className="flex aspect-square  items-center justify-center " onClick={decreaseQuantity}>
              <i className="fa-solid fa-minus text-xs"></i>
            </button>
            <div className="flex w-14 items-center justify-center border-x-[0.5px] border-black/20">
              <input type="number" value={quantity} onChange={handleChange} className="h-full w-full text-center outline-none" />
            </div>
            <button className="flex aspect-square items-center justify-center" onClick={increaseQuantity}>
              <i className="fa-solid fa-plus text-xs"></i>
            </button>
          </div>
        </>
        <>
          <p className="text-sm text-primary">₫{window.formatNumberNođ(total)}</p>
        </>
        <>
          <button className="text-sm hover:text-primary" onClick={handleDeleteCartItem}>
            Delete
          </button>
        </>
      </Part>
    </>
  )
}
