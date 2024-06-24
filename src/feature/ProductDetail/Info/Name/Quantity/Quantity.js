import { useState } from 'react'
import Chose from 'feature/ProductDetail/ProductDetailBody/Info/Name/Chose'

export default function Quantity({}) {
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
      <Chose title={'quantity'}>
        <div className="flex items-center gap-2">
          <div className="flex h-9 border-[0.5px] border-black/20">
            <button className="flex aspect-square  items-center justify-center " onClick={decreaseValue}>
              <i className="fa-solid fa-minus text-xs"></i>
            </button>
            <div className="flex w-20 items-center justify-center border-x-[0.5px] border-black/20" onChange={handleChange}>
              {value}
            </div>
            <button className="flex aspect-square items-center justify-center" onClick={increaseValue}>
              <i className="fa-solid fa-plus text-xs"></i>
            </button>
          </div>
          <p className="text-black/50">7680 pieces avaiable</p>
        </div>
      </Chose>
    </>
  )
}
