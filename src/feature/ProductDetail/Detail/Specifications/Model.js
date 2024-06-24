export default function Model({ spec, info }) {
  return (
    <>
      <div className="flex gap-1">
        <p className="capitalize-first w-[140px] text-sm capitalize text-black/50">{spec}</p>
        <p className="capitalize-first w-[140px] text-sm lowercase">{info}</p>
      </div>
    </>
  )
}
