import Model from 'feature/ProductDetail/ProductDetailBody/Detail/Specifications/Model'
import { useSelector } from 'react-redux'
import React, { useState, useEffect } from 'react'

export default function Specifications() {
  const product = useSelector((state) => state.productSlice.product)

  const [category, setCategory] = useState('')
  const [style, setStyle] = useState('')
  const [season, setSeason] = useState('')
  const [country, setCountry] = useState('')
  const [toplength, setTopLength] = useState('')
  const [shipfrom, setShipFrom] = useState('')

  useEffect(() => {
    if (product) {
      setCategory(product.ecategory)
      setSeason(product.productDetail.eseason)
      setStyle(product.productDetail.estyle)
      setCountry(product.productDetail.ecountry)
      setTopLength(product.productDetail.etopLength)
      setShipFrom(product.productDetail.eshipsFrom)
    }
  }, [product])

  return (
    <>
      {product && (
        <div className="flex flex-col gap-3 p-4">
          <Model spec={'category'} info={category} />
          <Model spec={'style'} info={style} />
          <Model spec={'season'} info={season} />
          <Model spec={'country'} info={country} />
          <Model spec={'top length'} info={toplength} />
          <Model spec={'ships from'} info={shipfrom} />
        </div>
      )}
    </>
  )
}
