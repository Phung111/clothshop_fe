import Part from 'feature/Cart/Part'
import { useState } from 'react'

export default function CartItem({ children }) {
  const [value, setValue] = useState(0)

  const decreaseValue = () => {
    setValue((prevValue) => Math.max(prevValue - 1, 0))
  }

  const increaseValue = () => {
    setValue((prevValue) => prevValue + 1)
  }

  const handleChange = (event) => {
    setValue(parseInt(event.target.value) || 0)
  }

  return (
    <>
      <Part>
        <>
          <div className="flex items-center gap-2">
            <img src={require(`assets/images/product1.jpg`)} alt="cart item" className="aspect-square w-20 bg-gray object-contain" />
            <p className="line-clamp-2 w-[220px] text-sm capitalize">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis eum blanditiis eos impedit tempora corporis obcaecati. Quaerat alias sequi dolor eligendi incidunt temporibus repellat quibusdam, pariatur esse numquam! Quo a ducimus accusantium tenetur.</p>
            <div className="flex flex-col gap-1 text-black/50">
              <p className="text-sm capitalize">variations:</p>
              <p className="line-clamp-1 text-sm capitalize">Shirt, S, White, Spring, HCM City</p>
            </div>
          </div>
        </>
        <>
          <div className="flex justify-center gap-2">
            <p className="text-black/50 line-through">₫2.199.000</p>
            <p className="text-sm">₫1.439.000</p>
          </div>
        </>
        <>
          <div className="flex h-9 border-[0.5px] border-black/20">
            <button className="flex aspect-square  items-center justify-center " onClick={decreaseValue}>
              <i className="fa-solid fa-minus text-xs"></i>
            </button>
            <div className="flex w-14 items-center justify-center border-x-[0.5px] border-black/20" onChange={handleChange}>
              {value}
            </div>
            <button className="flex aspect-square items-center justify-center" onClick={increaseValue}>
              <i className="fa-solid fa-plus text-xs"></i>
            </button>
          </div>
        </>
        <>
          <p className="text-sm text-primary">₫1.439.000</p>
        </>
        <>
          <button className="text-sm hover:text-primary">Delete</button>
        </>
      </Part>
    </>
  )
}
