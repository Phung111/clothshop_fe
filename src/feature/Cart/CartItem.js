import Part from 'feature/Cart/Part'

import { CLOUDINARY } from 'app/global'
import { increaseCartItem, decreaseCartItem, changeQuantityCartItem, deleteCartItem, getCart } from 'slice/orderSlice'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'

import Swal from 'sweetalert2'

export default function CartItem({ item }) {
  const dispatch = useDispatch()

  const [quantity, setQuantity] = useState(item.quantity)

  const [priceAfter, setPriceAfter] = useState(item.priceTotal)

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
      dispatch(changeQuantityCartItem({ cartItemId: item.cartItemId, quantity: quantityInput }))
    }
  }

  const handleBlur = () => {
    if (quantity === 0 || quantity === null || quantity === '') {
      Swal.fire({
        title: 'Are you sure?',
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
          setQuantity(item.quantity)
        }
      })
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
        dispatch(deleteCartItem(item.cartItemId)).then((result) => {
          dispatch(getCart())
        })
      }
    })
  }

  const toProductDetail = () => {
    window.open(`/detail/${item.productId}`, '_blank')
  }

  useEffect(() => {
    setTotal(priceAfter * quantity)
  }, [quantity, priceAfter])

  return (
    <>
      <Part item={item}>
        <>
          <div className="flex cursor-pointer items-center gap-2" onClick={toProductDetail}>
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
            {item.discount && <p className="text-black/50 line-through">₫{window.formatNumberNođ(item.price)}</p>}
            <p className="text-sm">₫{window.formatNumberNođ(item.priceTotal)}</p>
          </div>
        </>
        <>
          <div className="flex h-9 border-[0.5px] border-black/20">
            <button className="flex aspect-square  items-center justify-center " onClick={decreaseQuantity}>
              <i className="fa-solid fa-minus text-xs"></i>
            </button>
            <div className="flex w-14 items-center justify-center border-x-[0.5px] border-black/20">
              <input type="number" value={quantity} onChange={handleChange} onBlur={handleBlur} className="h-full w-full text-center outline-none" />
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
