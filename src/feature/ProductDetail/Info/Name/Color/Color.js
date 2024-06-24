import { useState } from 'react'
import Chose from 'feature/ProductDetail/ProductDetailBody/Info/Name/Chose'
import ButtonColor from 'feature/ProductDetail/ProductDetailBody/Info/Name/Color/ButtonColor'

export default function Color({ array }) {
  const [selectedColor, setSelectedColor] = useState(null)

  const handleColorSelection = (color) => {
    if (selectedColor === color) {
      setSelectedColor(null)
      console.log('Deselect color:', color)
    } else {
      setSelectedColor(color)
      console.log('Select color:', color)
    }
  }

  return (
    <>
      <Chose title={'color'}>
        <div className="flex gap-5">
          {array.map((item, index) => (
            <ButtonColor key={index} isSelected={selectedColor === item} onClick={() => handleColorSelection(item)}>
              {item}
            </ButtonColor>
          ))}
          <div className="bg-white"></div>
        </div>
      </Chose>
    </>
  )
}
