export default function PartSub({ id, title }) {
  return (
    <>
      <label className="flex cursor-pointer gap-2 hover:text-primary" htmlFor={id}>
        <div className="flex w-[10px] items-center">
          <input type="checkbox" id={id} className="accent-primary" />
        </div>
        <p className="text-sm capitalize">{title}</p>
      </label>
    </>
  )
}
