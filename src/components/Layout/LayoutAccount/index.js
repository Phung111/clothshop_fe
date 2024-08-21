import { Outlet } from 'react-router-dom'
import Side from 'components/Layout/LayoutAccount/Side'

export default function LayoutAccount() {
  return (
    <>
      <div className="bg-gray">
        <div className="container py-5">
          <div className="flex min-h-[600px] gap-5">
            <div className="w-[180px] shrink-0">
              <Side />
            </div>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  )
}
