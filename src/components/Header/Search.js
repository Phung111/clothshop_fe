import { useNavigate, useLocation } from 'react-router-dom'
import { useState } from 'react'

export default function Search({ className }) {
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()
  const location = useLocation()

  const handleSearch = () => {
    const trimmedSearchTerm = searchTerm.trim()

    if (trimmedSearchTerm) {
      if (location.pathname.includes('/search')) {
        const newUrl = `/search/${trimmedSearchTerm}`
        navigate(newUrl, { replace: true })
      } else {
        navigate(`/search/${trimmedSearchTerm}`)
      }
    } else {
      navigate(`/search/`)
    }
  }

  return (
    <>
      <div className={`${className} relative flex w-full items-center`}>
        <input type="text" className="h-full w-full rounded pl-3 outline-none focus:ring-2 focus:ring-black" placeholder="Search Product" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <div className="absolute right-0 h-full p-[3px]">
          <button className="h-full bg-primary px-5 hover:bg-primary_dark" onClick={handleSearch}>
            <i className="fa-solid fa-magnifying-glass text-white"></i>
          </button>
        </div>
      </div>
    </>
  )
}
