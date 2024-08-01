export default function PartHead({ children }) {
  return (
    <>
      <div className="flex h-8 items-center gap-3">
        <div className="w-5">
          <div className="line" />
        </div>
        <p className="text-xs uppercase text-black/20">{children}</p>
      </div>
    </>
  )
}
