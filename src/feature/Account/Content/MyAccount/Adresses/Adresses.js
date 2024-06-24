import Button from 'components/Button'
import PartAdresses from 'feature/Account/AccountBody/Content/MyAccount/Adresses/PartAdresses'
import { useDispatch } from 'react-redux'
import { setMyAdress, setCreateAddress } from 'slice/accountSlice'

export default function Adresses() {
  const dispatch = useDispatch()
  const handleClickCreateAddress = () => {
    dispatch(setCreateAddress(true))
  }
  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="flex h-10 items-center justify-between gap-1">
          <h2 className="text-lg font-medium capitalize">my addresses</h2>
          <div className="h-full w-[180px]" onClick={() => handleClickCreateAddress()}>
            <Button type={'solid'}>
              <i className="fa-solid fa-plus" />
              add new address
            </Button>
          </div>
        </div>
        <div className="line" />
        <div className="flex flex-col gap-5">
          <PartAdresses isDefault={true} />
          <div className="line" />
          <PartAdresses />
          <div className="line" />
          <PartAdresses />
        </div>
      </div>
    </>
  )
}
