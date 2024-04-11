import Button from 'components/Button'
import SelectCustom from 'components/SelectCustom'
import { useDispatch } from 'react-redux'
import { setCreateAddress } from 'slice/accountSlice'

export default function ModalCreateAddress() {
  const dispatch = useDispatch()
  const handleClickEditAddress = () => {
    dispatch(setCreateAddress(false))
  }
  return (
    <>
      <div className="item fixed z-[100] flex h-full w-full items-center justify-center bg-black/50">
        <form action="#" className="w-[500px] rounded-sm bg-white p-8">
          <div className="flex h-full w-full flex-col gap-3">
            <h2 className="text-xl font-normal capitalize">create address</h2>
            <div className="grid grid-cols-2 gap-3">
              <input className="h-10 w-full border border-black/20 p-3" type="text" placeholder="Full Name" />
              <input className="h-10 w-full border border-black/20 p-3" type="text" placeholder="Phone Number" />
              <SelectCustom className="h-9 border border-black/20 bg-white px-3 hover:bg-gray" array={[1, 2, 3, 4, 5, 6]} />
              <input className="h-10 w-full border border-black/20 p-3" type="text" placeholder="Address" />
            </div>
            <label htmlFor="setAdrDefault" className="flex cursor-pointer gap-2 hover:text-primary">
              <input type="checkbox" name="" id="setAdrDefault" className="aspect-square w-4 cursor-pointer accent-primary" />
              <p className="text-sm">Set as Default Address</p>
            </label>
            <div className="flex justify-end gap-3">
              <div className="h-9 w-[140px] overflow-hidden rounded-sm" onClick={() => handleClickEditAddress()}>
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
