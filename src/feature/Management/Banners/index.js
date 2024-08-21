import Cover from 'components/Layout/LayoutManagement/Cover'
import { setModalBanner } from 'slice/modalSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import NoData from 'components/NoData'
import PaginationBanner from './PaginationBanner'
import { getBannerPage } from 'slice/bannerPageSlice'

export default function Banners() {
  const dispatch = useDispatch()

  const bannerPageSlice = useSelector((state) => state.bannerPageSlice)
  const data = bannerPageSlice.data
  const banners = data.content

  const size = data.size
  const pageNumber = data.number
  const totalElements = data.totalElements

  const showModal = () => {
    dispatch(setModalBanner(true))
  }

  useEffect(() => {
    dispatch(getBannerPage())
  }, [dispatch])

  const btnManager = 'flex h-full items-center justify-center gap-2 rounded-xl border border-black/20 p-2 capitalize'
  let thClass = 'border border-slate-600 capitalize px-2 whitespace-nowrap py-2'
  let tdClass = 'border border-slate-700 text-center px-2 whitespace-nowrap'
  return (
    <>
      <Cover>
        <div className="flex h-10 items-center justify-between">
          <p className="text-xl font-medium capitalize text-black/50">Banner</p>
          <div className="flex gap-3">
            <button onClick={showModal} className={`${btnManager} !bg-green-500/50 hover:!bg-green-500`}>
              <i className="fa-solid fa-plus" />
              add
            </button>
          </div>
        </div>
      </Cover>

      <div className="relative flex grow flex-col overflow-auto border-[24px] border-white bg-white">
        {!banners && <NoData />}
        {banners && (
          <table className="w-full table-auto border-collapse">
            <thead className="sticky left-0 top-0 bg-white shadow">
              <tr className="bg-primary/50">
                <th className={`${thClass}`}>#</th>
                <th className={`${thClass} shrink-0`}>image</th>
              </tr>
            </thead>
            <tbody>
              {banners.map((item, index) => (
                <tr key={index}>
                  <td className={`${tdClass}`}>{totalElements - pageNumber * size - index}</td>
                  <td className={`${tdClass}`}>
                    <div className="flex justify-center">
                      <div className="h-[170px] w-[560px]">
                        <img className="h-full w-full object-cover" src={item.fileUrl} alt="banner" />
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <Cover>
        <PaginationBanner />
      </Cover>
    </>
  )
}
