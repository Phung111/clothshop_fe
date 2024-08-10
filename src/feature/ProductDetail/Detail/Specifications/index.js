import Model from 'feature/ProductDetail/Detail/Specifications/Model'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'

export default function Specifications() {
  const product = useSelector((state) => state.productSlice.product)
  const isLoading = useSelector((state) => state.baseSlice.loading)

  const [category, setCategory] = useState('')
  const [style, setStyle] = useState('')
  const [season, setSeason] = useState('')
  const [country, setCountry] = useState('')
  const [toplength, setTopLength] = useState('')
  const [shipfrom, setShipFrom] = useState('')

  useEffect(() => {
    if (product && !isLoading) {
      if (product.productDetail) {
        setCategory(product.category)
        setSeason(product.productDetail.season)
        setStyle(product.productDetail.style)
        setCountry(product.productDetail.country)
        setTopLength(product.productDetail.topLength)
        setShipFrom(product.productDetail.shipsFrom)
      }
    }
  }, [product, isLoading])

  return (
    <>
      {product && !isLoading && (
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
