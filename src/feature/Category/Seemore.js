import { useEffect, useState } from 'react'
import Product from 'components/Product/Product'
import { useDispatch, useSelector } from 'react-redux'
import { getProductPage, setSeeMore, upCount, setCurrentPage } from 'slice/productPageSlice'
import NoData from 'components/NoData'

export default function Seemore() {
  const dispatch = useDispatch()
  const [loadingMore, setLoadingMore] = useState(false)

  const isLoading = useSelector((state) => state.baseSlice.loading)
  const productPageSlice = useSelector((state) => state.productPageSlice)

  const productsSM = productPageSlice.seemore
  const count = productPageSlice.count
  const respond = productPageSlice.respond
  const last = respond.last

  const handleSeeMore = () => {
    if (!last && !isLoading && !loadingMore) {
      setLoadingMore(true)
      Promise.all([dispatch(upCount()), dispatch(setCurrentPage(count)), dispatch(getProductPage())]).then(() => {
        dispatch(setSeeMore())
        setLoadingMore(false)
      })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const seemoreElement = document.getElementById('seemore')
      if (seemoreElement) {
        const rect = seemoreElement.getBoundingClientRect()
        const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight

        if (isVisible) {
          handleSeeMore()
        }
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isLoading, last, loadingMore])

  console.log('productsSM', productsSM)

  return (
    <>
      <section className="bg-gray">
        <div className="container">
          <div className="flex flex-col items-center gap-10 py-5">
            {!isLoading && productsSM.length > 0 && (
              <div className="grid grid-cols-6 gap-3">
                {/* prettier-ignore */}
                {productsSM && productsSM.map((item, index) => <Product type={'product'} href={'#'} key={index} product={item} />)}
                {!last && !isLoading && <div id="seemore" />}
              </div>
            )}
            {!productsSM.length > 0 && <NoData />}
          </div>
        </div>
      </section>
    </>
  )
}
