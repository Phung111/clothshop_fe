export default function Chose({ title, children }) {
  return (
    <>
      <div className="flex gap-2">
        <div className="flex h-10 w-[110px] shrink-0 items-center text-sm capitalize text-black/70">{title}</div>
        {children}
      </div>
    </>
  )
}
