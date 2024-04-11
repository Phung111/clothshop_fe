import Button from 'components/Button'
import { useDispatch } from 'react-redux'
import { setEditAddress } from 'slice/accountSlice'

export default function PartMyAccount({ isDefault }) {
  const dispatch = useDispatch()
  const handleClickEditAddress = () => {
    dispatch(setEditAddress(true))
  }

  return (
    <>
      <div className="flex w-full justify-between">
        <div className="flex w-[350px] flex-col gap-3">
          <div className="flex items-center gap-2">
            <p className="text-base font-medium capitalize">pham huynh thien phung</p>
            <div className="line-y" />
            <p className="text-sm text-black/50">(+84) 766606996</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm capitalize text-black/50">123 Đống Đa</p>
            <p className="text-sm capitalize text-black/50">Phường Phú Nhuận, Thành Phố Huế, Thừa Thiên Huế</p>
            {isDefault && <div className="flex h-6 w-14 items-center justify-center border border-primary text-sm capitalize text-primary">default</div>}
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex justify-end">
            <button className="capitalize text-blue" onClick={() => handleClickEditAddress()}>
              edit
            </button>
          </div>
          <div className="h-7 w-[120px] text-sm">
            <Button>set as default</Button>
          </div>
        </div>
      </div>
    </>
  )
}
