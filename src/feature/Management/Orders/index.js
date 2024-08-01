import Cover from 'components/Layout/LayoutManagement/Cover'

export default function Orders() {
  return (
    <>
      <Cover>
        <div className="flex h-10 items-center justify-between">
          <p className="text-xl font-medium capitalize text-black/50">Order</p>
        </div>
      </Cover>
      <Cover>
        <div className="relative flex grow flex-col overflow-auto border-[24px] border-white bg-white"></div>
      </Cover>
    </>
  )
}
