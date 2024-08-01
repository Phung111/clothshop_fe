export default function FilterPart({ children }) {
  return (
    <>
      <div className="flex items-center gap-2">
        <p className="">{children[0]}</p>
        <div className="flex flex-col gap-1">{children[1]}</div>
      </div>
    </>
  )
}
