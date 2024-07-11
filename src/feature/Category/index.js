import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { getProductPage, setCurrentPage, setSeeMore, setProductSize, emptyECategories, emptySeeMore, resetCount, setECategories } from 'slice/productPageSlice'
import { setLoading } from 'slice/baseSlice'
import { useParams } from 'react-router-dom'

import Seemore from './Seemore'

export default function Category() {
  const dispatch = useDispatch()

  const { category } = useParams()

  useEffect(() => {
    dispatch(setLoading(true))
    Promise.all([dispatch(emptyECategories()), dispatch(setECategories(category)), dispatch(setProductSize(20)), dispatch(setCurrentPage(1)), dispatch(emptySeeMore()), dispatch(resetCount()), dispatch(getProductPage())])
    dispatch(getProductPage())
      .then(() => {})
      .catch(() => {})
      .finally(() => {
        dispatch(setSeeMore())
        window.scrollTo(0, 0)
        dispatch(setLoading(false))
      })
  }, [])

  return (
    <>
      <h1 className="my-5 text-center text-[28px] text-[#55555A]">{category}</h1>
      <Seemore />
    </>
  )
}
