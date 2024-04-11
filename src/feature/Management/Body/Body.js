import HeadAdd from './HeadAdd'
import Filter from './Filter'
import Table from './Table'
import Page from 'feature/Management/Body/Page'
import { useDispatch, useSelector } from 'react-redux'

export default function Body() {
  return (
    <>
      <div className="grow overflow-auto p-6">
        <div className="flex h-full flex-col gap-3">
          <div className="rounded bg-white px-6 py-4">
            <HeadAdd />
          </div>
          <div className="rounded bg-white px-6 py-3">
            <Filter />
          </div>
          <div className="relative flex grow flex-col overflow-auto border-[24px] border-white bg-white">
            <Table />
          </div>
          <div className="rounded bg-white px-6 py-4">
            <Page />
          </div>
        </div>
      </div>
    </>
  )
}
