import PartVouchers from 'feature/Account/MyVouchers/PartVouchers'
import Button from 'components/Button'
import { setModalSelectVoucher } from 'slice/modalSlice'
import { getAllVoucher, choseVoucher } from 'slice/otherSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { setVoucher, emptyVoucher } from 'slice/orderSlice'

export default function ModalSelectVoucher() {
  const dispatch = useDispatch()

  const otherSlice = useSelector((state) => state.otherSlice)
  const vouchers = otherSlice.vouchers

  const orderSlice = useSelector((state) => state.orderSlice)
  const voucher = orderSlice.checkout.voucher

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

  useEffect(() => {
    dispatch(getAllVoucher())
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
            <div className="flex max-h-[384px] flex-col gap-3 overflow-scroll">
              {/* prettier-ignore */}
              {vouchers && vouchers.map((item, index) => <PartVouchers item={item} key={index} />)}
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
