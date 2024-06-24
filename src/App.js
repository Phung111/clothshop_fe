import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Utils from 'utils/Utils'
import Home from 'feature/Home'

import ProductDetail from 'feature/ProductDetail'
import Cart from 'feature/Cart/Cart'
import Checkout from 'feature/Checkout/Checkout'
import Account from 'feature/Account/Account'
import Management from 'feature/Management/Management'
import Modal from 'components/Modal/Modal'
import Loading from 'components/Loading/Loading'
import SweetArlet from 'components/SweetArlet/SweetArlet'
import Category from 'feature/Category/Category'

import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'
import { useSelector } from 'react-redux'

export default function App() {
  const isLoading = useSelector((state) => state.baseSlice.loading)
  const isArlert = useSelector((state) => state.baseSlice.arlert.show)

  return (
    <>
      {isLoading && <Loading />}
      {isArlert && <SweetArlet />}
      <Utils />
      <Modal />
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/clothshop_fe" element={<Home />} />
          <Route path="/detail/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/account" element={<Account />} />
          <Route path="/management" element={<Management />} />
          <Route path="/category/:category" element={<Category />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}
