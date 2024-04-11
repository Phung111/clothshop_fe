import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductPage, setCurrentPage, setProductSize } from 'slice/productPageSlice'

export default function Page() {
  const dispatch = useDispatch()

  const data = useSelector((state) => state.productPageSlice)
  const request = data.request
  const respond = data.respond

  const productSize = request.productSize
  const totalElements = respond.totalElements
  const pageNumber = respond.pageNumber
  const currentPageNumber = pageNumber + 1
  const totalPages = respond.totalPages
  const numberOfElements = respond.numberOfElements
  const latest = respond.latest

  const first = respond.first
  const last = respond.last

  const [currentPageLc, setCurrentPageLc] = useState(currentPageNumber)

  const handlePageClick = (pagenumber) => {
    setCurrentPageLc(pagenumber)
    dispatch(setCurrentPage(pagenumber))
    dispatch(getProductPage(request))
  }

  const handleChangeProductSize = (value) => {
    setCurrentPageLc(1)
    dispatch(setCurrentPage(1))
    dispatch(setProductSize(value))
    dispatch(getProductPage(request))
  }

  const renderPageNumbers = () => {
    const pageNumbers = []
    const maxVisiblePages = 1

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(
          <span key={i} className={`flex h-8 w-10 items-center justify-center text-black/50 ${currentPageLc === i ? 'bg-primary text-white' : 'cursor-pointer hover:text-primary'}`} onClick={() => handlePageClick(i)}>
            {i}
          </span>
        )
      }
    } else {
      pageNumbers.push(
        <span key="first" className={`flex h-8 w-10 items-center justify-center text-black/50 ${first ? 'opacity-20' : 'cursor-pointer hover:text-primary'}`} onClick={() => !first && handlePageClick(Math.max(1, currentPageLc - 1))}>
          <i className="fa-solid fa-chevron-left" />
        </span>
      )

      pageNumbers.push(
        <span key="1" className={`flex h-8 w-10 items-center justify-center text-black/50 ${currentPageLc === 1 ? 'bg-primary text-white' : 'cursor-pointer hover:text-primary'}`} onClick={() => handlePageClick(1)}>
          1
        </span>
      )

      if (currentPageLc > 3) {
        pageNumbers.push(
          <span key="dots1" className="flex h-8 w-10 items-center justify-center text-black/50 hover:text-primary">
            ...
          </span>
        )
      }

      const startPage = Math.max(2, currentPageLc - 2)
      const endPage = Math.min(currentPageLc + 2, totalPages - 1)

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(
          <span key={i} className={`flex h-8 w-10 items-center justify-center text-black/50 ${currentPageLc === i ? 'bg-primary text-white' : 'cursor-pointer hover:text-primary'}`} onClick={() => handlePageClick(i)}>
            {i}
          </span>
        )
      }

      if (currentPageLc < totalPages - 2) {
        pageNumbers.push(
          <span key="dots2" className="flex h-8 w-10 items-center justify-center text-black/50 hover:text-primary">
            ...
          </span>
        )
      }

      pageNumbers.push(
        <span key={totalPages} className={`flex h-8 w-10 items-center justify-center text-black/50 ${currentPageLc === totalPages ? 'bg-primary text-white' : 'cursor-pointer hover:text-primary'}`} onClick={() => handlePageClick(totalPages)}>
          {totalPages}
        </span>
      )

      pageNumbers.push(
        <span key="last" className={`flex h-8 w-10 items-center justify-center text-black/50 ${last ? 'opacity-20' : 'cursor-pointer hover:text-primary'}`} onClick={() => !last && handlePageClick(Math.max(1, currentPageLc + 1))}>
          <i className="fa-solid fa-chevron-right" />
        </span>
      )
    }

    return pageNumbers
  }

  return (
    <>
      <div className="relative flex w-full justify-center">
        <div className="payload z-1 absolute left-0 flex h-full w-full items-center justify-between gap-1">
          <div className="">
            {!latest ? totalElements - pageNumber * productSize : pageNumber * productSize + 1} <span className="text-black/30">to</span> {!latest ? totalElements - pageNumber * productSize - numberOfElements + 1 : pageNumber * productSize + numberOfElements} <span className="text-black/30">of</span> {totalElements}
          </div>
          <div className="flex items-center gap-1">
            <p className="">Size</p>
            <input className="flex w-10 justify-center rounded-xl border border-black/50 px-2 py-1 text-center" type="text" value={productSize} onChange={(event) => handleChangeProductSize(event.target.value)} />
          </div>
        </div>

        <div className="z-10 flex">{renderPageNumbers()}</div>
      </div>
    </>
  )
}
