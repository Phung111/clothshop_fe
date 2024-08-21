import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { ROLES } from 'app/global'

import RequireAuth from 'RequireAuth'

import Utils from 'utils/Utils'

import Modal from 'components/Modal'
import Loading from 'components/Loading/Loading'
import Unauthorized from 'components/Unauthorized'
import NotFound from 'components/NotFound'
import LayoutHeaderFooter from 'components/Layout/LayoutHeaderFooter'
import LayoutLogin from 'components/Layout/LayoutLogin'
import LayoutManagement from 'components/Layout/LayoutManagement'
import LayoutAccount from 'components/Layout/LayoutAccount'

import FormLogin from 'feature/Login/FormLogin'
import FormRegister from 'feature/Login/FormRegister'

import Home from 'feature/Home'
import ProductDetail from 'feature/ProductDetail'
import Cart from 'feature/Cart'
import Checkout from 'feature/Checkout'
import Category from 'feature/Category'
import Search from 'feature/Search'

import MyAccount from 'feature/Account/MyAccount'
import MyAddesses from 'feature/Account/MyAddesses'
import MyVouchers from 'feature/Account/MyVouchers'
import MyPurchase from 'feature/Account/MyPurchase'

import Dasboard from 'feature/Management/Dasboard'
import Products from 'feature/Management/Products'
import Banners from 'feature/Management/Banners'
import Vouchers from 'feature/Management/Vouchers'
import Orders from 'feature/Management/Orders'

export default function App() {
  const isLoading = useSelector((state) => state.baseSlice.loading)

  return (
    <>
      {isLoading && <Loading />}
      <Utils />
      <Modal />

      <BrowserRouter>
        <Routes>
          <Route element={<LayoutLogin />}>
            <Route path="/login" element={<FormLogin />} />
            <Route path="/register" element={<FormRegister />} />
          </Route>

          <Route element={<LayoutHeaderFooter />}>
            <Route element={<RequireAuth allowedRoles={[ROLES.ADMIN, ROLES.USER]} />}>
              <Route path="cart" element={<Cart />} />
              <Route path="checkout" element={<Checkout />} />
              <Route path="account" element={<LayoutAccount />}>
                <Route path="" element={<MyAccount />} />
                <Route path="addresses" element={<MyAddesses />} />
                <Route path="vouchers" element={<MyVouchers />} />
                <Route path="purchase" element={<MyPurchase />} />
              </Route>
            </Route>

            <Route path="" element={<Home />} />
            <Route path="clothshop_fe" element={<Home />} />
            <Route path="detail/:id" element={<ProductDetail />} />
            <Route path="category/:category" element={<Category />} />
            <Route path="search/:keySearch?" element={<Search />} />
          </Route>

          <Route element={<LayoutManagement />}>
            <Route element={<RequireAuth allowedRoles={[ROLES.ADMIN]} />}>
              <Route path="management">
                <Route index element={<Navigate to="dashboard" />} />
                <Route path="dashboard" element={<Dasboard />} />
                <Route path="products" element={<Products />} />
                <Route path="orders" element={<Orders />} />
                <Route path="banners" element={<Banners />} />
                <Route path="vouchers" element={<Vouchers />} />
              </Route>
            </Route>
          </Route>

          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route path="/notfound" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
