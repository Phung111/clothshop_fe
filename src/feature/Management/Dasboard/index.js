import Cover from 'components/Layout/LayoutManagement/Cover'

export default function Dasboard() {
  const showModal = () => {}
  const btnManager = 'flex h-full items-center justify-center gap-2 rounded-xl border border-black/20 p-2 capitalize'

  return (
    <>
      <Cover>
        <div className="flex h-10 items-center justify-between">
          <p className="text-xl font-medium capitalize text-black/50">Dasboard</p>
        </div>
      </Cover>
    </>
  )
}
