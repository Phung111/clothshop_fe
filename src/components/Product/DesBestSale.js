export default function DesBestSale({ percent }) {
  return (
    <>
      <div className="w-full py-2">
        <div className="relative h-5 w-full overflow-hidden rounded-full bg-beige">
          <div className="h-full w-full rounded-full bg-red" style={{ width: `${percent}%` }}></div>
          <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center">
            <p className="uppercase text-white">Sales 3k+</p>
          </div>
        </div>
      </div>
    </>
  )
}
