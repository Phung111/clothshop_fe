import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom'
import Utils from 'utils/Utils'
import Home from 'feature/Home'
import ProductDetail from 'feature/ProductDetail'
import Cart from 'feature/Cart'
import Checkout from 'feature/Checkout'
import Account from 'feature/Account'
import Management from 'feature/Management'
import Modal from 'components/Modal/Modal'
import Loading from 'components/Loading/Loading'
import SweetArlet from 'components/SweetArlet/SweetArlet'
import Category from 'feature/Category'
import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'
import { useSelector } from 'react-redux'
import LayoutLogin from 'feature/Login/LayoutLogin'
import FormLogin from 'feature/Login/FormLogin'
import FormRegister from 'feature/Login/FormRegister'
import RequireAuth from 'RequireAuth'
import { ROLES } from 'app/global'

const LayoutWithHeaderFooter = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
)

export default function App() {
  const isLoading = useSelector((state) => state.baseSlice.loading)
  const isArlert = useSelector((state) => state.baseSlice.arlert.show)

  return (
    <>
      {isLoading && <Loading />}
      {isArlert && <SweetArlet />}
      <Utils />
      <Modal />

      <BrowserRouter>
        <Routes>
          <Route element={<LayoutLogin />}>
            <Route path="/login" element={<FormLogin />} />
            <Route path="/register" element={<FormRegister />} />
          </Route>
          <Route element={<LayoutWithHeaderFooter />}>
            <Route path="/" element={<Home />} />
            <Route path="/clothshop_fe" element={<Home />} />
            <Route path="/detail/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/account" element={<Account />} />
            <Route path="/category/:category" element={<Category />} />
          </Route>
          <Route element={<RequireAuth allowedRoles={[ROLES.ADMIN]} />}>
            <Route path="/management" element={<Management />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
