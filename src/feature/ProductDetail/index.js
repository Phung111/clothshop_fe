import Info from 'feature/ProductDetail/Info/Info'
import Detail from 'feature/ProductDetail/Detail/Detail'
import HomeHead from 'feature/Home/HomeHead'
import Seemore from 'feature/Category/Seemore'

import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getProductById } from 'slice/productSlice'
import { setLoading } from 'slice/baseSlice'
import { getProductPage, setCurrentPage, setSeeMore, setProductSize, emptySeeMore, resetCount, setECategories, emptyECategories } from 'slice/productPageSlice'
import { setCartItemIDProduct } from 'slice/orderSlice'

export default function ProductDetail() {
  const dispatch = useDispatch()
  const { id } = useParams()

  const isLoading = useSelector((state) => state.baseSlice.loading)

  const product = useSelector((state) => state.productSlice.product)

  useEffect(() => {
    Promise.all([dispatch(getProductById(id)), dispatch(emptyECategories())])
      .then(([respond, _]) => {
        const product = respond.payload
        dispatch(setECategories([product.ecategory]))
        dispatch(setProductSize(20))
        dispatch(setCurrentPage(1))
        dispatch(resetCount())
        dispatch(emptySeeMore())
        dispatch(setCartItemIDProduct(id))
      })
      .then(() => {
        dispatch(getProductPage()).then(() => {
          dispatch(setSeeMore())
        })
      })
      .catch((error) => {})
      .finally(() => {
        window.scrollTo(0, 0)
      })
  }, [])

  return (
    <>
      {!isLoading && (
        <section className="bg-gray">
          <div className="container">
            {!product && <div className="flex justify-center p-10">Not found Product</div>}
            {product && (
              <div className="flex flex-col gap-4 py-5">
                <div className="bg-white">
                  <Info />
                </div>
                <div className="bg-white">
                  <Detail />
                </div>
                <div className="p-4">
                  <HomeHead title={'products similar to'} href={'#'} />
                  <Seemore />
                </div>
              </div>
            )}
          </div>
        </section>
      )}
    </>
  )
}
