import Head from './Head'
import Filter from './Filter'
import Table from './Table'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getProductPage, setLatest } from 'slice/productPageSlice'
import { setLoading, getCollection } from 'slice/baseSlice'
import PaginationProduct from 'components/Pagination/PaginationProduct'
import Cover from 'components/Layout/LayoutManagement/Cover'

export default function Products() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setLatest(true))
    dispatch(getCollection())
    dispatch(getProductPage())
  }, [])

  return (
    <>
      <Cover>
        <Head />
      </Cover>
      <Cover>
        <Filter />
      </Cover>
      <div className="relative flex grow flex-col overflow-auto border-[24px] border-white bg-white">
        <Table />
      </div>
      <Cover>
        <PaginationProduct />
      </Cover>
    </>
  )
}
