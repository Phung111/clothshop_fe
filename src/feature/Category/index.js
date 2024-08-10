import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getProductPage, setCurrentPage, setSeeMore, setProductSize, emptyECategories, emptySeeMore, resetCount, setECategories } from 'slice/productPageSlice'
import { useParams } from 'react-router-dom'

import Seemore from './Seemore'

export default function Category() {
  const dispatch = useDispatch()

  const { category } = useParams()
  const arCategory = [category]

  useEffect(() => {
    /* prettier-ignore */
    Promise.all([
      dispatch(emptyECategories()),
      dispatch(setECategories(arCategory)), 
      dispatch(setProductSize(12)), 
      dispatch(setCurrentPage(1)), 
      dispatch(emptySeeMore()), 
      dispatch(resetCount()),
      dispatch(getProductPage()),   
    ])
      .then(() => {
        
      })
      .catch(() => {})
      .finally(() => {
        dispatch(setSeeMore())
        window.scrollTo(0, 0)
      })
  }, [dispatch])

  return (
    <>
      <h1 className="my-5 text-center text-[28px] text-[#55555A]">{category}</h1>
      <Seemore />
    </>
  )
}
