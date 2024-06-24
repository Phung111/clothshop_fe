import React from 'react'
import Side from 'feature/Management/Side/Side'
import Body from 'feature/Management/Body/Body'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { getProductPage, setLatest } from 'slice/productPageSlice'
import { setLoading, getCollection } from 'slice/baseSlice'

export default function Management() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setLoading(true))
    Promise.all([dispatch(setLatest(true)), dispatch(getCollection()), dispatch(getProductPage())])
      .then(() => {
        dispatch(setLoading(false))
      })
      .catch((error) => {})
      .finally(() => {
        dispatch(setLoading(false))
      })
  }, [])

  return (
    <>
      <div className="bg-gray5">
        <div className="flex h-screen w-screen">
          <Side />
          <Body />
        </div>
      </div>
    </>
  )
}
