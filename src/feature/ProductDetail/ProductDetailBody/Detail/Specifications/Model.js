export default function Model({ spec, info }) {
  return (
    <>
      <div className="flex gap-1">
        <p className="capitalize-first w-[140px] text-sm text-black/50">{spec}</p>
        <p className="capitalize-first w-[140px] text-sm">{info}</p>
      </div>
    </>
  )
}
