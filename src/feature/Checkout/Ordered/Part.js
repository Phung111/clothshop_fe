export default function Part({ children, onClick }) {
  return (
    <div className="flex cursor-pointer gap-5 hover:bg-primary/20" onClick={onClick}>
      <div className="w-[700px]">{children[0]}</div>
      <div className="w-[120px]">{children[1]}</div>
      <div className="w-[120px]">{children[2]}</div>
      <div className="w-[240px]">{children[3]}</div>
    </div>
  )
}
