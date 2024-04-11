import PartVouchers from 'feature/Account/AccountBody/Content/MyVouchers/PartVouchers'
import Button from 'components/Button'
import { useDispatch } from 'react-redux'
import { setVoucher } from 'slice/accountSlice'

export default function ModalVoucher() {
  const dispatch = useDispatch()
  const cancelVoucher = () => {
    dispatch(setVoucher(false))
  }
  return (
    <>
      <div className="item fixed z-[100] flex h-full w-full items-center justify-center bg-black/50">
        <form action="#" className="w-[500px] rounded-sm bg-white p-8">
          <div className="flex h-full w-full flex-col gap-3">
            <h2 className="text-xl font-normal capitalize">my voucher</h2>
            <div className="line" />
            <div className="flex max-h-[384px] flex-col gap-3 overflow-scroll">
              <PartVouchers />
              <PartVouchers />
              <PartVouchers />
              <PartVouchers />
              <PartVouchers />
              <PartVouchers />
            </div>
            <div className="flex justify-end gap-3">
              <div className="h-9 w-[140px] overflow-hidden rounded-sm" onClick={() => cancelVoucher()}>
                <Button>cancel</Button>
              </div>
              <div className="h-9 w-[140px] overflow-hidden rounded-sm">
                <Button type={'solid'}>submit</Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
