import Cover from 'components/Layout/LayoutManagement/Cover'

export default function Banners() {
  const showModal = () => {}
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
        {/* <div className="flex h-10 w-full items-center justify-center">NO DATA</div> */}
        <table className="w-full table-auto border-collapse">
          <thead className="sticky left-0 top-0 bg-white shadow">
            <tr className="bg-primary/50">
              <th className={`${thClass}`}>#</th>
              <th className={`${thClass}`}>image</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={`${tdClass}`}>1</td>
              <td className={`${tdClass}`}>
                <img className="h-full w-full object-cover" src="" alt="image" />
              </td>
            </tr>
            <tr></tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
