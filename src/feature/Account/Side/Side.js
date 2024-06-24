import { useDispatch, useSelector } from 'react-redux'
import { setSide, setMyAccounts } from 'slice/accountSlice'

export default function Side() {
  const dispatch = useDispatch()

  const accounts = useSelector((state) => state.accountSlice.accounts)
  const myAccount = accounts.find((item) => item.myAccount)
  const myVoucher = accounts.find((item) => item.myVoucher)
  const myAccounts = useSelector((state) => state.accountSlice.myAccounts)
  const profile = myAccounts.find((item) => item.profile)
  const addresses = myAccounts.find((item) => item.addresses)

  const handleClickSide = (target) => {
    dispatch(setSide(target))
  }

  const handleClickMyAccounts = (target) => {
    dispatch(setMyAccounts(target))
  }

  return (
    <>
      <div className="flex flex-col gap-5 py-5">
        <div className="flex gap-3">
          <div className="aspect-square h-[50px] rounded-full border-[0.5px] border-black/20">
            <img src={require(`assets/images/avablank.png`)} alt="ava blank" />
          </div>
          <div className="flex grow flex-col gap-1">
            <h3 className="line-clamp-1 text-sm">men22998</h3>
            <button className="flex items-center gap-2 text-black/50 hover:text-black/70">
              <i className="fa-solid fa-pen text-sm" />
              <p className="capitalize">edit profile</p>
            </button>
          </div>
        </div>
        <div className="px-5">
          <div className="line"></div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex gap-3">
            <div className="flex aspect-square h-[20px] items-center justify-center">
              <i className="fa-regular fa-user"></i>
            </div>
            <div className={`relative flex flex-col items-start ${myAccount && 'gap-3'}`}>
              <button className={`text-sm capitalize hover:text-primary ${myAccount && 'text-primary'}`} onClick={() => handleClickSide('myAccount')}>
                my account
              </button>
              <div className={`${myAccount ? 'max-h-48' : 'max-h-0'} flex flex-col items-start gap-3 overflow-hidden pl-2 transition-all`}>
                <button className={`text-sm capitalize hover:text-primary ${myAccount && profile && 'text-primary'}`} onClick={() => handleClickMyAccounts('profile')}>
                  profile
                </button>
                <button className={`text-sm capitalize hover:text-primary ${myAccount && addresses && 'text-primary'}`} onClick={() => handleClickMyAccounts('addresses')}>
                  addresses
                </button>
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="flex aspect-square w-[20px] items-center justify-center">
              <i className="fa-solid fa-ticket"></i>
            </div>
            <button className={`text-sm capitalize hover:text-primary ${myVoucher && 'text-primary'}`} onClick={() => handleClickSide('myVoucher')}>
              my voucher
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
