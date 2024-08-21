import Part from 'feature/Account/MyPurchase/Part'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { getMore, emptyMore, setSize, setPage, resetCount, setMore, upCount } from 'slice/orderPageSlice'

export default function MyPurchase() {
  const dispatch = useDispatch()

  const [loadingMore, setLoadingMore] = useState(false)

  const orderPageSlice = useSelector((state) => state.orderPageSlice)
  const orders = orderPageSlice.more
  const last = orderPageSlice.last
  const count = orderPageSlice.count

  const handleSeeMore = () => {
    if (!last && !loadingMore) {
      setLoadingMore(true)
      Promise.all([dispatch(upCount()), dispatch(setPage(count)), dispatch(getMore())]).then(() => {
        dispatch(setMore())
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
  }, [last, loadingMore])

  useEffect(() => {
    Promise.all([dispatch(emptyMore()), dispatch(setSize(2)), dispatch(setPage(1)), dispatch(resetCount()), dispatch(getMore())])
      .then(() => {
        dispatch(setMore())
      })
      .catch((error) => {})
      .finally(() => {})
  }, [])

  return (
    <>
      <div className="flex w-full flex-col gap-4">
        <div className="flex flex-col gap-4">
          {orders &&
            orders.map((item, index) => (
              <div key={index} className="bg-white p-[30px]">
                <Part item={item} />
              </div>
            ))}
          {!last && <div id="seemore" />}
        </div>
      </div>
    </>
  )
}
