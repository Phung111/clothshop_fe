export default function Part({ children, onClick }) {
  return (
    <div className="flex gap-5" onClick={onClick}>
      <div className="w-[700px]">{children[0]}</div>
      <div className="w-[120px]">{children[1]}</div>
      <div className="w-[120px]">{children[2]}</div>
      <div className="w-[240px]">{children[3]}</div>
    </div>
  )
}
