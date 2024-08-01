import { Outlet } from 'react-router-dom'
import Side from 'components/Layout/LayoutManagement/Side'

export default function LayoutManagement() {
  return (
    <>
      <div className="bg-gray5">
        <div className="flex h-screen w-screen">
          <Side />
          <div className="grow overflow-auto p-6">
            <div className="flex h-full flex-col gap-3">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
