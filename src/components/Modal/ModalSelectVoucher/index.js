import PartVouchers from 'feature/Account/MyVouchers/PartVouchers'
import Button from 'components/Button'
import { setModalSelectVoucher } from 'slice/modalSlice'
import { choseVoucher } from 'slice/otherSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState, useRef } from 'react'
import { setVoucher, emptyVoucher } from 'slice/orderSlice'
import { getMore, setPage, setSize, resetCount, emptyMore, setMore, upCount } from 'slice/voucherPageSlice'

export default function ModalSelectVoucher() {
  const dispatch = useDispatch()

  const [loadingMore, setLoadingMore] = useState(false)

  const orderSlice = useSelector((state) => state.orderSlice)
  const voucher = orderSlice.checkout.voucher

  const voucherPageSlice = useSelector((state) => state.voucherPageSlice)
  const vouchers = voucherPageSlice.more
  const last = voucherPageSlice.last
  const count = voucherPageSlice.count

  const scrollContainerRef = useRef(null)

  const cancelSelectVoucher = () => {
    const checkoutLS = JSON.parse(localStorage.getItem('checkout'))
    const voucherPrevious = checkoutLS.voucher
    dispatch(setVoucher(voucherPrevious))
    dispatch(setModalSelectVoucher(false))
  }

  const submitSelectVoucher = () => {
    const checkoutLS = JSON.parse(localStorage.getItem('checkout'))
    checkoutLS.voucher = voucher
    localStorage.setItem('checkout', JSON.stringify(checkoutLS))
    dispatch(choseVoucher(voucher.id))
    dispatch(setModalSelectVoucher(false))
  }

  const unSelectVoucher = () => {
    dispatch(emptyVoucher())
    dispatch(setModalSelectVoucher(false))
  }

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
    Promise.all([dispatch(emptyMore()), dispatch(setSize(3)), dispatch(setPage(1)), dispatch(resetCount()), dispatch(getMore())])
      .then(() => {
        dispatch(setMore())
      })
      .catch((error) => {})
      .finally(() => {})
  }, [])

  return (
    <>
      <div className="item fixed z-[100] flex h-full w-full items-center justify-center bg-black/50">
        <form action="#" className="w-[500px] rounded-sm bg-white p-8">
          <div className="flex h-full w-full flex-col gap-3">
            <div className="flex justify-between">
              <h2 className="text-xl font-normal capitalize">my voucher</h2>
              <div className="h-9 w-[140px] overflow-hidden rounded-sm" onClick={unSelectVoucher}>
                <Button>Unselect</Button>
              </div>
            </div>

            <div className="line" />
            <div ref={scrollContainerRef} className="flex max-h-[384px] flex-col gap-3 overflow-scroll">
              {/* prettier-ignore */}
              {vouchers && vouchers.map((item, index) => <PartVouchers item={item} key={index} />)}
              {!last && <div id="seemore" />}
            </div>
            <div className="flex justify-end gap-3">
              <div className="h-9 w-[140px] overflow-hidden rounded-sm" onClick={cancelSelectVoucher}>
                <Button>cancel</Button>
              </div>
              <div className="h-9 w-[140px] overflow-hidden rounded-sm" onClick={submitSelectVoucher}>
                <Button type={'solid'}>submit</Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
