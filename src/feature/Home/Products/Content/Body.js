import Product from 'components/Product/Product'
import Button from 'components/Button'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Page from 'feature/Management/Body/Page'

export default function Body({ seeMore }) {
  const productPageSlice = useSelector((state) => state.productPageSlice)
  const respond = productPageSlice.respond
  const products = respond.products

  return (
    <>
      <div className="flex flex-col gap-10">
        <div className="grid grid-cols-5 gap-3">{products && products.map((item, index) => <Product type={'product'} href={'#'} key={index} product={item} />)}</div>
        <Page />
      </div>
    </>
  )
}
