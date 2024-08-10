import { useNavigate, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Part({ children, link }) {
  const navigate = useNavigate()
  const location = useLocation()
  const [isSelected, setIsSelected] = useState(false)

  useEffect(() => {
    if (link === '') {
      setIsSelected(location.pathname === '/account' || location.pathname === '/account/')
    } else {
      setIsSelected(location.pathname === `/account/${link}`)
    }
  }, [location, link])

  return (
    <div
      className={`flex cursor-pointer gap-3 rounded-lg p-2 hover:bg-primary/70 hover:text-white 
        ${isSelected && 'bg-primary/70 text-white'}
        `}
      onClick={() => navigate(link ? `/account/${link}` : '/account')}
    >
      <div className="flex aspect-square w-[20px] items-center justify-center">{children[0]}</div>
      <div className="text-sm capitalize">{children[1]}</div>
    </div>
  )
}
