import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

export default function ModalCreateBanner() {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.slice)
  const [state, setState] = useState('')

  useEffect(() => {}, [])
  return <></>
}
