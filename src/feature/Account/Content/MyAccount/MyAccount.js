import Profile from 'feature/Account/Content/MyAccount/Profile/Profile'
import Adresses from 'feature/Account/Content/MyAccount/Adresses/Adresses'

import { useSelector } from 'react-redux'

export default function MyAccount() {
  const accounts = useSelector((state) => state.accountSlide.accounts)
  const myAccount = accounts.find((item) => item.myAccount)

  const myAccounts = useSelector((state) => state.accountSlide.myAccounts)
  const profile = myAccounts.find((item) => item.profile)
  const addresses = myAccounts.find((item) => item.addresses)
  return (
    <>
      <div className="flex flex-col gap-5">
        {profile && <Profile />}
        {addresses && <Adresses />}
      </div>
    </>
  )
}
