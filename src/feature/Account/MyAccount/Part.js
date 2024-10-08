export default function Part({ children }) {
  return (
    <>
      <div className="flex h-10 gap-5">
        <div className="flex w-[150px] items-center justify-end">
          <p className="text-sm capitalize text-black/50">{children[0]}</p>
        </div>
        <div className="flex w-[400px] items-center">
          <p className="text-sm">{children[1]}</p>
        </div>
      </div>
    </>
  )
}
