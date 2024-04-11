import React from 'react'
import Side from 'feature/Management/Side/Side'
import Body from 'feature/Management/Body/Body'
import { useDispatch, useSelector } from 'react-redux'
import { getProductPage, setLoading, setLatest } from 'slice/productPageSlice'
import { useEffect, useState } from 'react'
import Loading from 'components/Loading'

export default function Management() {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.productPageSlice)
  const request = data.request
  const isLoading = data.loading

  useEffect(() => {
    dispatch(setLatest(true))
    dispatch(getProductPage(request)).then(() => {
      dispatch(setLatest(''))
      dispatch(setLoading(false))
    })
  }, [])

  return (
    <>
      {isLoading && <Loading />}
      <div className="bg-gray5">
        <div className="flex h-screen w-screen">
          <Side />
          <Body />
        </div>
      </div>
    </>
  )
}
