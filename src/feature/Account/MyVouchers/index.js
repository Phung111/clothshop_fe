import PartVouchers from 'feature/Account/MyVouchers/PartVouchers'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getVoucherPageValid, setSize, setPage, setMore, emptyMore, upCount, resetCount } from 'slice/voucherPageSlice'
import Button from 'components/Button'

export default function MyVouchers() {
  const dispatch = useDispatch()

  const voucherPageSlice = useSelector((state) => state.voucherPageSlice)
  const vouchers = voucherPageSlice.more
  const count = voucherPageSlice.count
  const last = voucherPageSlice.last

  useEffect(() => {
    Promise.all([dispatch(emptyMore()), dispatch(resetCount()), dispatch(setSize(15)), dispatch(setPage(1)), dispatch(getVoucherPageValid())])
      .then(() => {
        dispatch(setMore())
      })
      .catch((error) => {})
      .finally(() => {})
  }, [])

  const handleSeeMore = () => {
    Promise.all([dispatch(upCount()), dispatch(setPage(count)), dispatch(getVoucherPageValid())])
      .then(() => {
        dispatch(setMore())
      })
      .catch((error) => {})
      .finally(() => {})
  }

  return (
    <>
      <div className="grow bg-white p-[30px]">
        <div className="flex flex-col gap-5">
          <div className="flex h-10 items-center justify-between gap-1">
            <h2 className="text-lg font-medium capitalize">my vouchers</h2>
          </div>
          <div className="line" />
          {/* prettier-ignore */}
          <div className="grid grid-cols-2 gap-5 max-h-[450px] overflow-scroll">
            {vouchers && vouchers.map((item, index) => <PartVouchers item={item} key={index} noRadio={true}/>)}
          </div>
          {!last && (
            <div className="flex justify-center ">
              <div className="h-[40px] w-[100px]" onClick={handleSeeMore}>
                <Button type="button">See More</Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
