import { useNavigate } from 'react-router-dom'

export default function Part({ children, array }) {
  const navigate = useNavigate()

  const handleNavigation = (item) => {
    navigate(`/category/${item}`)
  }

  return (
    <div className="flex flex-col gap-2">
      <h4 className="font-bold uppercase ">{children}</h4>
      {array &&
        array.slice(0).map((item, index) => (
          <div onClick={() => handleNavigation(item)} className="flex" key={index}>
            <div className="capitalize-first cursor-pointer border-none bg-transparent lowercase hover:text-primary">{item}</div>
          </div>
        ))}
    </div>
  )
}
