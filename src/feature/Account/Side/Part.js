import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function Part({ children, select }) {
  const dispatch = useDispatch()
  const location = useLocation()
  const data = useSelector((state) => state.slice)
  const [state, setState] = useState('')

  useEffect(() => {}, [])

  return (
    <>
      <div className="flex gap-3 bg-primary bg-red">
        <div className="flex aspect-square w-[20px] items-center justify-center">{children[0]}</div>
        <div className="text-sm capitalize hover:text-primary">{children[1]}</div>
      </div>
    </>
  )
}
