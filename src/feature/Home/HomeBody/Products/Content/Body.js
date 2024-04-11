import React, { useState } from 'react'
import Product from 'components/Product/Product'
import Button from 'components/Button'

export default function Body({ seeMore }) {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 10

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber)
    console.log(pageNumber)
  }

  const renderPageNumbers = () => {
    const pageNumbers = []
    const maxVisiblePages = 7

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(
          <span key={i} className={`flex h-8 w-10 items-center justify-center text-black/50 ${currentPage === i ? 'bg-primary text-white' : 'cursor-pointer hover:text-primary'}`} onClick={() => handlePageClick(i)}>
            {i}
          </span>
        )
      }
    } else {
      pageNumbers.push(
        <span key="first" className={`flex h-8 w-10 items-center justify-center text-black/50 ${currentPage === 1 ? 'cursor-not-allowed opacity-50' : ''}`} onClick={() => handlePageClick(Math.max(1, currentPage - 1))}>
          <i className="fa-solid fa-chevron-left" />
        </span>
      )

      pageNumbers.push(
        <span key="1" className={`flex h-8 w-10 items-center justify-center text-black/50 ${currentPage === 1 ? 'bg-primary text-white' : 'cursor-pointer hover:text-primary'}`} onClick={() => handlePageClick(1)}>
          1
        </span>
      )

      if (currentPage > 3) {
        pageNumbers.push(
          <span key="dots1" className="flex h-8 w-10 items-center justify-center text-black/50 hover:text-primary">
            ...
          </span>
        )
      }

      const startPage = Math.max(2, currentPage - 2)
      const endPage = Math.min(currentPage + 2, totalPages - 1)

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(
          <span key={i} className={`flex h-8 w-10 items-center justify-center text-black/50 ${currentPage === i ? 'bg-primary text-white' : 'cursor-pointer hover:text-primary'}`} onClick={() => handlePageClick(i)}>
            {i}
          </span>
        )
      }

      if (currentPage < totalPages - 2) {
        pageNumbers.push(
          <span key="dots2" className="flex h-8 w-10 items-center justify-center text-black/50 hover:text-primary">
            ...
          </span>
        )
      }

      pageNumbers.push(
        <span key={totalPages} className={`flex h-8 w-10 items-center justify-center text-black/50 hover:text-primary ${currentPage === totalPages ? 'bg-primary text-white' : 'cursor-pointer hover:text-primary'}`} onClick={() => handlePageClick(totalPages)}>
          {totalPages}
        </span>
      )

      pageNumbers.push(
        <span key="last" className={`flex h-8 w-10 items-center justify-center text-black/50 hover:text-primary`} onClick={() => handlePageClick(Math.min(totalPages, currentPage + 1))}>
          <i className="fa-solid fa-chevron-right" />
        </span>
      )
    }

    return pageNumbers
  }

  return (
    <>
      <div className="flex flex-col gap-10">
        <div className="grid grid-cols-5 gap-3">
          {Array.from({ length: 20 }, (_, index) => (
            <Product type={'product'} href={'#'} key={index} />
          ))}
        </div>
        {!seeMore && <div className="flex items-center justify-center gap-3">{renderPageNumbers()}</div>}
        {seeMore && (
          <div className="flex justify-center">
            <a href={seeMore} className="h-10 w-[400px] border border-black/10">
              <Button>see more</Button>
            </a>
          </div>
        )}
      </div>
    </>
  )
}
