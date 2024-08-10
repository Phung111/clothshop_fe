import Part from './Part'
import { useSelector } from 'react-redux'

export default function MyAccount() {
  const authSlice = useSelector((state) => state.authSlice)
  const customer = authSlice.customer

  return (
    <>
      <>
        <div className="grow bg-white p-[30px]">
          <div className="flex flex-col gap-5">
            <div className="flex h-10 items-center justify-between gap-1">
              <h2 className="text-lg font-medium capitalize">my profile</h2>
            </div>
            <div className="line" />
            {customer && (
              <div className="flex flex-col gap-3">
                <Part>
                  <>username</>
                  <>{customer.name}</>
                </Part>
                <Part>
                  <>email</>
                  <>{customer.email}</>
                </Part>
                <Part>
                  <>gender</>
                  <>{customer.gender}</>
                </Part>
                <Part>
                  <>date of birth</>
                  <>{window.convertDateFormat(customer.dob)}</>
                </Part>
              </div>
            )}
          </div>
        </div>
      </>
    </>
  )
}
