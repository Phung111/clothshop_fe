import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'
import ProductDetailBody from 'feature/ProductDetail/ProductDetailBody/ProductDetailBody'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getProductById } from 'slice/productSlice'
import { setLoading } from 'slice/baseSlice'
import { getProductPage, setCurrentPage, setSeeMore, setProductSize, emptySeeMore, resetCount, setECategories } from 'slice/productPageSlice'

export default function ProductDetail() {
  const dispatch = useDispatch()
  const { id } = useParams()

  const isLoading = useSelector((state) => state.baseSlice.loading)

  const product = useSelector((state) => state.productSlice.product)

  useEffect(() => {
    dispatch(setLoading(true))
    Promise.all([dispatch(getProductById(id))])
      .then(() => {
        dispatch(setECategories(product.ecategory))
        dispatch(setProductSize(20))
        dispatch(setCurrentPage(1))
        dispatch(emptySeeMore())
        dispatch(resetCount())
      })
      .then(() => {
        dispatch(getProductPage()).then(() => {
          dispatch(setSeeMore())
        })
      })
      .catch((error) => {})
      .finally(() => {
        window.scrollTo(0, 0)
        dispatch(setLoading(false))
      })
  }, [id])

  return (
    <>
      {!isLoading && (
        <>
          <Header />
          <ProductDetailBody />
          <Footer />
        </>
      )}
    </>
  )
}
