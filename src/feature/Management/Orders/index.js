import Cover from 'components/Layout/LayoutManagement/Cover'
import PaginationOrder from './PaginationOrder'
import { getOrder } from 'slice/orderPageSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import Part from 'feature/Account/MyPurchase/Part'
import NoData from 'components/NoData'
export default function Orders() {
  const dispatch = useDispatch()
  const orderPageSlice = useSelector((state) => state.orderPageSlice)
  const data = orderPageSlice.data
  const orders = data.content

  const size = data.size
  const pageNumber = data.number
  const totalElements = data.totalElements

  useEffect(() => {
    dispatch(getOrder())
  }, [dispatch])

  return (
    <>
      <Cover>
        <div className="flex h-10 items-center justify-between">
          <p className="text-xl font-medium capitalize text-black/50">Order</p>
        </div>
      </Cover>
      <div className="relative flex grow flex-col gap-4 overflow-auto">
        {orders &&
          orders.map((item, index) => (
            <div className={`relative rounded-lg  ${index % 2 === 0 ? 'bg-primary/20' : 'bg-white'}`} key={index}>
              <Part item={item} />
              <div className="absolute bottom-4 left-6"># {totalElements - pageNumber * size - index}</div>
            </div>
          ))}
        {!orders && <NoData />}
      </div>
      <Cover>
        <PaginationOrder />
      </Cover>
    </>
  )
}
