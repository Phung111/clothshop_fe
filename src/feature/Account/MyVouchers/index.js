import PartVouchers from 'feature/Account/MyVouchers/PartVouchers'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState, useRef } from 'react'
import { getMore, setSize, setPage, setMore, emptyMore, upCount, resetCount } from 'slice/voucherPageSlice'

export default function MyVouchers() {
  const dispatch = useDispatch()

  const voucherPageSlice = useSelector((state) => state.voucherPageSlice)
  const vouchers = voucherPageSlice.more
  const count = voucherPageSlice.count
  const last = voucherPageSlice.last

  const [loadingMore, setLoadingMore] = useState(false)
  const scrollContainerRef = useRef(null)

  useEffect(() => {
    Promise.all([dispatch(emptyMore()), dispatch(resetCount()), dispatch(setSize(8)), dispatch(setPage(1)), dispatch(getMore())])
      .then(() => {
        dispatch(setMore())
      })
      .catch((error) => {})
      .finally(() => {})
  }, [])

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
        const scrollContainerRect = scrollContainerRef.current.getBoundingClientRect()

        const isVisible = rect.top >= scrollContainerRect.top && rect.bottom <= scrollContainerRect.bottom

        if (isVisible) {
          handleSeeMore()
        }
      }
    }

    const scrollContainer = scrollContainerRef.current
    scrollContainer.addEventListener('scroll', handleScroll)

    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll)
    }
  }, [last, loadingMore])

  return (
    <>
      <div className="grow bg-white p-[30px]">
        <div className="flex flex-col gap-5">
          <div className="flex h-10 items-center justify-between gap-1">
            <h2 className="text-lg font-medium capitalize">my vouchers</h2>
          </div>
          <div className="line" />
          {/* prettier-ignore */}
          <div ref={scrollContainerRef} className="grid grid-cols-2 gap-5 max-h-[450px] overflow-scroll">
            {vouchers && vouchers.map((item, index) => <PartVouchers item={item} key={index} noRadio={true}/>)}
          {!last && <div id="seemore" />}
          </div>
        </div>
      </div>
    </>
  )
}
