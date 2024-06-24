export default function Head({ children, title }) {
  return (
    <>
      <div className="flex items-center gap-1">
        <div className="flex aspect-square w-6 items-center">{children}</div>
        <h2 className="font-bold uppercase">{title}</h2>
      </div>
    </>
  )
}
