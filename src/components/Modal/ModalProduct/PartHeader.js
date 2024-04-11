export default function PartHeader({ children }) {
  return (
    <>
      <div className="flex items-center gap-5">
        <p className="whitespace-nowrap text-[20px] text-black/50">{children}</p>
        <div className="line" />
      </div>
    </>
  )
}
