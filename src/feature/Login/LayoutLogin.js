import { Outlet } from 'react-router-dom'
import Head from './Head'
import Foot from './Foot'

export default function LayoutLogin() {
  return (
    <>
      <>
        <Head />
        <div className="relative h-[600px] w-full bg-[rgb(210,5,4)]">
          <div className="container h-full">
            <div className="relative flex h-full items-center justify-end">
              <img className="absolute z-10 h-full w-full object-contain" src={require(`assets/images/bg-login.jpg`)} alt="bg-login" />
              <div className="z-20 rounded bg-white px-[30px] py-[22px]">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
        <Foot />
      </>
    </>
  )
}
