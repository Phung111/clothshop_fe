export default function ContentHead({ title, top }) {
  return (
    <>
      <div className="flex h-[60px] items-center justify-between">
        <h2 className={`uppercase text-black/50 ${top ? 'text-primary' : ''}`}>{title}</h2>
      </div>
    </>
  )
}
