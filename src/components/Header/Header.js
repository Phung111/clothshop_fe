import React, { useEffect, useState } from 'react'
import Managerment from 'components/Header/Managerment'
import Account from 'components/Header/Account'
import Logo from 'components/Header/Logo'
import Search from 'components/Header/Search'
import Cart from 'components/Header/Cart'
import { jwtDecode } from 'jwt-decode'
import { ROLES } from 'app/global'
import { useSelector } from 'react-redux'

export default function Header() {
  const [isHaveManagerment, setIsHaveManagerment] = useState(false)
  const authSlice = useSelector((state) => state.authSlice)
  const customer = authSlice.customer

  useEffect(() => {
    const accessToken = localStorage.getItem('jwt')
    if (accessToken != null) {
      try {
        const decodedToken = jwtDecode(accessToken)
        const exp = new Date(decodedToken.exp * 1000).getTime()
        const timeNow = new Date().getTime()

        if (exp > timeNow) {
          if (decodedToken.role === ROLES.ADMIN) {
            setIsHaveManagerment(true)
          } else {
            setIsHaveManagerment(false)
          }
        }
      } catch (error) {
        console.log(error)
      }
    } else {
      setIsHaveManagerment(false)
    }
  }, [customer])

  return (
    <>
      <header className="sticky top-0 z-50">
        <div className="linear-gradient(-180deg,#f53d2d,#f63) bg-gradient-to-r from-[#f53d2d] to-[#f63]">
          <div className="container h-[120px]">
            <div className="flex flex-col gap-5">
              <div className="flex h-9 justify-between">
                {isHaveManagerment ? <Managerment /> : <div></div>}
                <Account />
              </div>
              <div className="flex w-full">
                <div className="flex w-full gap-10">
                  <Logo />
                  <Search />
                </div>
                <div className="flex items-end justify-center px-14">
                  <Cart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
