import { useDispatch, useSelector } from 'react-redux'
import { setModalSelectVoucher } from 'slice/modalSlice'

export default function Voucher() {
  const dispatch = useDispatch()

  const orderSlice = useSelector((state) => state.orderSlice)
  const voucher = orderSlice.checkout.voucher

  const handleSelectVoucher = () => {
    dispatch(setModalSelectVoucher(true))
  }

  return (
    <>
      <div className="flex justify-between gap-2">
        <div className="flex items-center gap-2">
          <i className="fa-solid fa-ticket text-lg text-primary" />
          <h2 className="text-lg font-normal">ClothShop Voucher</h2>
        </div>
        <div className="flex gap-5">
          {voucher && Object.keys(voucher).length > 0 && (
            <div className="flex h-full shrink-0 items-center gap-2">
              <p className="text-base">{voucher.price !== 0 && window.formatCurrency(voucher.price)}</p>
              {voucher.price && voucher.percent ? ',' : ''}
              <p className="text-base">{voucher.percent !== 0 && voucher.percent + '%'}</p>
              <p className="flex items-center gap-1 text-black/50">
                <i className="fa-regular fa-clock text-xs" />
                <span className="capitalize">use from:</span>
                <span className="">{voucher.dateStart && window.formatDate(voucher.dateStart)}</span>
                <span className="">-</span>
                <span className="">{voucher.dateEnd && window.formatDate(voucher.dateEnd)}</span>
              </p>
            </div>
          )}
          <button className="text-sm capitalize text-blue" onClick={handleSelectVoucher}>
            select voucher
          </button>
        </div>
      </div>
    </>
  )
}
