import React, { Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Layout from 'components/Layout'

import Utils from 'utils/Utils'
import Home from 'feature/Home/Home'
import ProductDetail from 'feature/ProductDetail/ProductDetail'
import Cart from 'feature/Cart/Cart'
import Checkout from 'feature/Checkout/Checkout'
import Account from 'feature/Account/Account'
import Management from 'feature/Management/Management'
import Modal from 'components/Modal/Modal'
import Loading from 'components/Loading'
import { useDispatch, useSelector } from 'react-redux'

export default function App() {
  const dispatch = useDispatch()

  const isLoading = useSelector((state) => state.baseSlice.loading)

  return (
    <>
      <BrowserRouter>
        <Utils />
        <Modal />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="/clothshop_fe" element={<Home />} />
            <Route path="/detail" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/account" element={<Account />} />
            <Route path="/management" element={<Management />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
