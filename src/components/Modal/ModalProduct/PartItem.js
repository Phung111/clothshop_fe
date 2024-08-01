export default function PartItem({ children }) {
  return (
    <>
      <div className="flex shrink-0 gap-5">
        <p className="flex h-10 w-[100px] items-center text-[16px] capitalize">{children[0]}</p>
        {children[1]}
      </div>
    </>
  )
}
