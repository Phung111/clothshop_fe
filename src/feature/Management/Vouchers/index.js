import Cover from 'components/Layout/LayoutManagement/Cover'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { setModalCreateVoucher } from 'slice/modalSlice'
import PaginationVoucher from './PaginationVoucher'
import { getVoucherPage } from 'slice/voucherPageSlice'
import NoData from 'components/NoData'

export default function Vouchers() {
  const dispatch = useDispatch()

  const voucherPageSlice = useSelector((state) => state.voucherPageSlice)
  const data = voucherPageSlice.data
  const vouchers = data.content

  const size = data.size
  const pageNumber = data.number
  const totalElements = data.totalElements

  const showModal = () => {
    dispatch(setModalCreateVoucher(true))
  }
  const btnManager = 'flex h-full items-center justify-center gap-2 rounded-xl border border-black/20 p-2 capitalize'
  let thClass = 'border border-slate-600 capitalize px-2 whitespace-nowrap py-2'
  let tdClass = 'border border-slate-700 text-center px-2 whitespace-nowrap'

  useEffect(() => {
    dispatch(getVoucherPage())
  }, [])

  return (
    <>
      <Cover>
        <div className="flex h-10 items-center justify-between">
          <p className="text-xl font-medium capitalize text-black/50">Voucher</p>
          <div className="flex gap-3">
            <button onClick={showModal} className={`${btnManager} !bg-green-500/50 hover:!bg-green-500`}>
              <i className="fa-solid fa-plus" />
              add
            </button>
          </div>
        </div>
      </Cover>

      <div className="relative flex grow flex-col overflow-auto border-[24px] border-white bg-white">
        {!vouchers && <NoData />}
        {vouchers && (
          <table className="w-full table-auto border-collapse">
            <thead className="sticky left-0 top-0 bg-white shadow">
              <tr className="bg-primary/50">
                <th className={`${thClass}`}>#</th>
                <th className={`${thClass} !uppercase`}>id</th>
                <th className={`${thClass}`}>date start</th>
                <th className={`${thClass}`}>date end</th>
                <th className={`${thClass}`}>percent</th>
                <th className={`${thClass}`}>price</th>
              </tr>
            </thead>
            <tbody>
              {vouchers
                .slice()
                .reverse()
                .map((item, index) => (
                  <tr key={index}>
                    <td className={`${tdClass}`}>{totalElements - pageNumber * size - index}</td>
                    <td className={`${tdClass}`}>{item.id}</td>
                    <td className={`${tdClass}`}>{window.convertDateFormat(item.dateStart)}</td>
                    <td className={`${tdClass}`}>{window.convertDateFormat(item.dateEnd)}</td>
                    <td className={`${tdClass} text-end`}>{item.percent}%</td>
                    <td className={`${tdClass} text-end`}>{window.formatCurrency(item.price)}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        )}
      </div>

      <Cover>
        <PaginationVoucher />
      </Cover>
    </>
  )
}
