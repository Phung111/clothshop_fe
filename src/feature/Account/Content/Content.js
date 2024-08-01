import MyAccount from 'feature/Account/Content/MyAccount'
import MyVouchers from 'feature/Account/Content/MyVouchers'

import { useSelector } from 'react-redux'

export default function Content() {
  const accounts = useSelector((state) => state.accountSlide.accounts)
  const myAccount = accounts.find((item) => item.myAccount)
  const myVoucher = accounts.find((item) => item.myVoucher)

  return (
    <>
      <div className="p-8">
        {myAccount && <MyAccount />}
        {myVoucher && <MyVouchers />}
      </div>
    </>
  )
}
