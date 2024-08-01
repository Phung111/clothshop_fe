import Cover from 'components/Layout/LayoutManagement/Cover'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { getAllVoucher } from 'slice/otherSlice'
import { setModalCreateVoucher } from 'slice/modalSlice'

export default function Vouchers() {
  const dispatch = useDispatch()
  const otherSlice = useSelector((state) => state.otherSlice)
  const vouchers = otherSlice.vouchers

  const showModal = () => {
    dispatch(setModalCreateVoucher(true))
  }
  const btnManager = 'flex h-full items-center justify-center gap-2 rounded-xl border border-black/20 p-2 capitalize'
  let thClass = 'border border-slate-600 capitalize px-2 whitespace-nowrap py-2'
  let tdClass = 'border border-slate-700 text-center px-2 whitespace-nowrap'

  useEffect(() => {
    dispatch(getAllVoucher())
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
        {/* <div className="flex h-10 w-full items-center justify-center">NO DATA</div> */}
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
            {vouchers &&
              vouchers
                .slice()
                .reverse()
                .map((item, index) => (
                  <tr key={index}>
                    <td className={`${tdClass}`}>{vouchers.length - index}</td>
                    <td className={`${tdClass}`}>{item.id}</td>
                    <td className={`${tdClass}`}>{item.dateStart}</td>
                    <td className={`${tdClass}`}>{item.dateEnd}</td>
                    <td className={`${tdClass}`}>{item.percent}%</td>
                    <td className={`${tdClass}`}>{window.formatCurrency(item.price)}</td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
