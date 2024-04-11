export default function PartItem({ children }) {
  return (
    <>
      <div className="flex h-8 gap-5">
        <p className="flex w-[100px] items-center text-[16px]">{children[0]}</p>
        {children[1]}
      </div>
    </>
  )
}
