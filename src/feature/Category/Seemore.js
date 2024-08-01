import Product from 'components/Product/Product'
import Button from 'components/Button'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { getProductPage, setSeeMore, upCount, setCurrentPage } from 'slice/productPageSlice'

export default function Seemore() {
  const dispatch = useDispatch()

  const isLoading = useSelector((state) => state.baseSlice.loading)
  const productPageSlice = useSelector((state) => state.productPageSlice)

  const productsSM = productPageSlice.seemore
  const count = productPageSlice.count
  const respond = productPageSlice.respond
  const last = respond.last
  const products = respond.seemore

  const handleSeeMore = () => {
    Promise.all([dispatch(upCount()), dispatch(setCurrentPage(count)), dispatch(getProductPage())]).then(() => {
      dispatch(setSeeMore())
    })
  }

  return (
    <>
      <section className="bg-gray">
        <div className="container">
          {!isLoading && productsSM && (
            <div className="flex flex-col items-center gap-10 py-5">
              <div className="grid grid-cols-5 gap-3">{productsSM && productsSM.map((item, index) => <Product type={'product'} href={'#'} key={index} product={item} />)}</div>
              {!last && (
                <div className="h-[40px] w-[100px]" onClick={handleSeeMore}>
                  <Button type="button">See More</Button>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
