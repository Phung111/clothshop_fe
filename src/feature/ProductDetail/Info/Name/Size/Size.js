import { useState } from 'react'
import Chose from 'feature/ProductDetail/ProductDetailBody/Info/Name/Chose'
import ButtonSize from 'feature/ProductDetail/ProductDetailBody/Info/Name/Size/ButtonSize'

export default function Size({ array }) {
  const [selectedSize, setSelectedSize] = useState(null)

  const handleSizeSelection = (size) => {
    if (selectedSize === size) {
      setSelectedSize(null)
      console.log('Deselect size:', size)
    } else {
      setSelectedSize(size)
      console.log('Select size:', size)
    }
  }

  return (
    <>
      <Chose title={'size'}>
        <div className="grid w-full grid-cols-5 gap-2">
          {array.map((item, index) => (
            <ButtonSize key={index} isSelected={selectedSize === item} onClick={() => handleSizeSelection(item)}>
              {item}
            </ButtonSize>
          ))}
        </div>
      </Chose>
    </>
  )
}
