import Swal from 'sweetalert2'
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setArlert } from 'slice/baseSlice'

export default function SweetArlet() {
  const baseSlice = useSelector((state) => state.baseSlice)
  const icon = baseSlice.arlert.icon
  const title = baseSlice.arlert.title

  const dispatch = useDispatch()

  useEffect(() => {
    Swal.fire({
      title: title,
      icon: icon,
      timer: 2000,
    }).then((result) => {
      dispatch(setArlert(false))
    })
  }, [icon, title])

  return null
}
