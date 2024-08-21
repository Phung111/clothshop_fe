import { setVoucher } from 'slice/orderSlice'
import { useDispatch, useSelector } from 'react-redux'

export default function PartVouchers({ noRadio, item }) {
  const dispatch = useDispatch()

  const orderSlice = useSelector((state) => state.orderSlice)
  const voucher = orderSlice.checkout.voucher

  const handleRadioChange = () => {
    dispatch(setVoucher(item))
  }

  return (
    <>
      <label htmlFor={item.id} className="flex cursor-pointer">
        <div className="flex aspect-square w-[120px] flex-col items-center justify-center gap-3 bg-[url('assets/images/voucher.png')]">
          <i className="fa-solid fa-c text-5xl text-white" />
          <p className="text-sm uppercase text-white">voucher</p>
        </div>
        <div className="flex grow border-[0.5px] border-l-0 border-black/10 px-3">
          <div className="flex grow flex-col justify-center gap-1">
            <p className="text-base">{item.price !== 0 && window.formatCurrency(item.price)}</p>
            <p className="text-base">{item.percent !== 0 && item.percent + '%'}</p>
            <p className="flex items-center gap-1 text-black/50">
              <i className="fa-regular fa-clock text-xs" />
              <span className="capitalize">use from:</span>
              <span className="">{item.dateStart && window.formatDate(item.dateStart)}</span>
              <span className="">-</span>
              <span className="">{item.dateEnd && window.formatDate(item.dateEnd)}</span>
            </p>
          </div>
          {!noRadio && (
            <div className="flex">
              {/* prettier-ignore */}
              <input 
                checked={voucher ? voucher.id === item.id : false} 
                type="radio" id={item.id} 
                name="voucherOption" 
                className="mt-1 aspect-square w-4 cursor-pointer accent-primary" 
                onChange={handleRadioChange} 
              />
            </div>
          )}
        </div>
      </label>
    </>
  )
}
