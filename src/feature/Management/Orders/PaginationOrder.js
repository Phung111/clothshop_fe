import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useForm, useWatch } from 'react-hook-form'
import { getOrder } from 'slice/orderPageSlice'

export default function PaginationOrder() {
  const { handleSubmit, setValue, control } = useForm({
    defaultValues: {
      size: '',
      page: '',
    },
  })

  const dispatch = useDispatch()
  const orderPageSlice = useSelector((state) => state.orderPageSlice)
  const data = orderPageSlice.data

  const size = useWatch({ control, name: 'size', defaultValue: data.size })
  const page = useWatch({ control, name: 'page', defaultValue: data.page })

  const totalPages = data.totalPages
  const numberOfElements = data.numberOfElements
  const totalElements = data.totalElements

  const first = data.first
  const last = data.last

  const [from, setFrom] = useState(0)
  const [to, setTo] = useState(0)

  const handlePageClick = (pagenumber) => {
    setValue('page', pagenumber)
    handleSubmit(onSubmit)()
  }

  const handleChangeProductSize = (event) => {
    const value = event.target.value
    setValue('size', value)
    setValue('page', 1)
    handleSubmit(onSubmit)()
  }

  const onSubmit = (formData) => {
    dispatch(getOrder(formData))
  }

  useEffect(() => {
    if (Object.keys(data).length !== 0) {
      setValue('size', data.size || '')
      setValue('page', data.number + 1 || '')
      setFrom(totalElements - (page - 1) * size)
      setTo(totalElements - (page - 1) * size - numberOfElements + 1)
    }
  }, [data, setValue, totalElements, page, size, numberOfElements])

  const renderPageNumbers = () => {
    if (!totalPages) return null
    const pageNumbers = []
    const maxVisiblePages = 10

    pageNumbers.push(
      <span key="first" className={`flex h-8 w-10 items-center justify-center text-black/50 ${first ? 'opacity-20' : 'cursor-pointer hover:text-primary'}`} onClick={() => !first && handlePageClick(page - 1)}>
        <i className="fa-solid fa-chevron-left" />
      </span>
    )

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(
          <span key={i} className={`flex h-8 w-10 items-center justify-center text-black/50 ${page === i ? 'bg-primary text-white' : 'cursor-pointer hover:text-primary'}`} onClick={() => handlePageClick(i)}>
            {i}
          </span>
        )
      }
    } else {
      pageNumbers.push(
        <span key="1" className={`flex h-8 w-10 items-center justify-center text-black/50 ${page === 1 ? 'bg-primary text-white' : 'cursor-pointer hover:text-primary'}`} onClick={() => handlePageClick(1)}>
          1
        </span>
      )

      if (page > 3) {
        pageNumbers.push(
          <span key="dots1" className="flex h-8 w-10 items-center justify-center text-black/50 hover:text-primary">
            ...
          </span>
        )
      }

      const startPage = Math.max(2, page - 2)
      const endPage = Math.min(page + 2, totalPages - 1)

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(
          <span key={i} className={`flex h-8 w-10 items-center justify-center text-black/50 ${page === i ? 'bg-primary text-white' : 'cursor-pointer hover:text-primary'}`} onClick={() => handlePageClick(i)}>
            {i}
          </span>
        )
      }

      if (page < totalPages - 2) {
        pageNumbers.push(
          <span key="dots2" className="flex h-8 w-10 items-center justify-center text-black/50 hover:text-primary">
            ...
          </span>
        )
      }

      pageNumbers.push(
        <span key={totalPages} className={`flex h-8 w-10 items-center justify-center text-black/50 ${page === totalPages ? 'bg-primary text-white' : 'cursor-pointer hover:text-primary'}`} onClick={() => handlePageClick(totalPages)}>
          {totalPages}
        </span>
      )
    }

    pageNumbers.push(
      <span key="last" className={`flex h-8 w-10 items-center justify-center text-black/50 ${last ? 'opacity-20' : 'cursor-pointer hover:text-primary'}`} onClick={() => !last && handlePageClick(page + 1)}>
        <i className="fa-solid fa-chevron-right" />
      </span>
    )

    return pageNumbers
  }

  return (
    <>
      <div className="relative flex w-full justify-center">
        <div className="payload z-1 absolute left-0 flex h-full w-full items-center justify-between gap-1">
          <div className="">
            {from} <span className="text-black/30">to</span> {to} <span className="text-black/30">of</span> {totalElements}
          </div>
          <div className="flex items-center gap-1">
            <p className="">Size</p>
            <input className="flex w-10 justify-center rounded-xl border border-black/50 px-2 py-1 text-center" type="text" value={size} onChange={handleChangeProductSize} />
          </div>
        </div>

        <div className="z-10 flex">{renderPageNumbers()}</div>
      </div>
    </>
  )
}
