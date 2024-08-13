import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { emptyECategories, setKeySearch, setLatest, setSize, setCurrentPage, getProductPage } from 'slice/productPageSlice'
import Products from 'feature/Home/Products'
import { getHome, getCollection } from 'slice/baseSlice'

export default function Search() {
  const { keySearch } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    const search = keySearch ? keySearch.trim() : ''
    dispatch(setKeySearch(search))
    dispatch(getCollection())
    dispatch(emptyECategories())
    dispatch(setLatest(true))
    dispatch(setSize(60))
    dispatch(setCurrentPage(1))
    dispatch(getProductPage())
  }, [dispatch, keySearch])

  return (
    <div className="bg-gray">
      <div className="container">
        <div className="py-7">
          <Products />
        </div>
      </div>
    </div>
  )
}
