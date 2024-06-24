import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'
import HomeBody from 'feature/Home/HomeBody/HomeBody'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAll, getCollection, setLoading } from 'slice/baseSlice'
import { getProductPage, setLatest } from 'slice/productPageSlice'

export default function Home() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setLoading(true))
    Promise.all([dispatch(getAll()), dispatch(setLatest(true)), dispatch(getCollection()), dispatch(getProductPage())])
      .then(() => {
        dispatch(setLoading(false))
      })
      .catch((error) => {})
      .finally(() => {
        dispatch(setLoading(false))
      })
  }, [])

  return <HomeBody />
}
