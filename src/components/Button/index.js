export default function Button({ children, type, className, submit }) {
  let baseClass = 'flex gap-2 h-full w-full items-center justify-center capitalize '
  let addClass = ''

  switch (type) {
    case 'solid':
      addClass = 'bg-primary text-white hover:bg-primary_dark'
      break
    case 'outline':
      addClass = 'bg-beige2 text-primary hover:bg-beige2_dark border border-primary'
      break
    default:
      addClass = 'bg-white text-black hover:bg-gray border-[0.5px] border-black/20'
      break
  }

  return (
    <>
      <button type={submit ? 'submit' : 'button'} className={`${baseClass} ${addClass} ${className}`}>
        {children}
      </button>
    </>
  )
}
