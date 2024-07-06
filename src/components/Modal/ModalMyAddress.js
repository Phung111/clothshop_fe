import Button from 'components/Button'
import { useDispatch } from 'react-redux'
import { setMyAdress, setCreateAddress } from 'slice/accountSlice'
import PartAdresses from 'feature/Account/Content/MyAccount/Adresses/PartAdresses'

export default function ModalMyAddress() {
  const dispatch = useDispatch()
  const handleClickCancelMyAddress = () => {
    dispatch(setMyAdress(false))
  }
  const handleClickCreateAddress = () => {
    dispatch(setCreateAddress(true))
  }
  return (
    <>
      <div className="item fixed z-[100] flex h-full w-full items-center justify-center bg-black/50">
        <form action="#" className="w-[650px] rounded-sm bg-white p-8">
          <div className="flex h-full w-full flex-col gap-3">
            <h2 className="text-xl font-normal capitalize">my address</h2>
            <div className="line" />
            <div className="flex flex-col gap-3">
              <label htmlFor="" className="flex cursor-pointer items-start gap-2">
                <input type="radio" name="addressOption" id="" className="mt-1 aspect-square w-4 cursor-pointer accent-primary" />
                <PartAdresses isDefault={true} />
              </label>
              <div className="line" />
              <label htmlFor="" className="flex cursor-pointer items-start gap-2">
                <input type="radio" name="addressOption" id="" className="mt-1 aspect-square w-4 cursor-pointer accent-primary" />
                <PartAdresses />
              </label>
            </div>
            <div className="flex h-10 w-[180px]" onClick={() => handleClickCreateAddress()}>
              <Button>
                <i className="fa-solid fa-plus" /> add new address
              </Button>
            </div>
            <div className="flex justify-end gap-3">
              <div className="h-9 w-[140px] overflow-hidden rounded-sm" onClick={() => handleClickCancelMyAddress()}>
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
