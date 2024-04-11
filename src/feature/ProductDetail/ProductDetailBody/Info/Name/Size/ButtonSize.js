export default function ButtonSize({ children, isSelected, onClick }) {
  return (
    <>
      <button className={`flex h-10 items-center justify-center border border-black/20 hover:border-primary hover:text-primary ${isSelected ? 'border-primary text-primary' : ''}`} onClick={onClick}>
        {children}
      </button>
    </>
  )
}
