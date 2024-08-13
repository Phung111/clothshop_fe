import ModalEditAddress from 'components/Modal/ModalEditAddress'
import ModalSelectAddress from 'components/Modal/ModalSelectAddress'
import ModalSelectVoucher from 'components/Modal/ModalSelectVoucher'
import ModalProduct from './ModalProduct'
import ModalCreateVoucher from './ModalCreateVoucher'
import ModalCreateBanner from './ModalCreateBanner'
import ModalOrderDetail from './ModalOrderDetail'
import ModalImage from './ModalImage'
import ModalBanner from './ModalBanner'
import { useForm, Controller } from 'react-hook-form'

import { useSelector } from 'react-redux'

export default function Modal() {
  const modalSlice = useSelector((state) => state.modalSlice)
  const modalProduct = modalSlice.modalProduct
  const modalCreateBanner = modalSlice.modalCreateBanner
  const modalSelectVoucher = modalSlice.modalSelectVoucher
  const modalCreateVoucher = modalSlice.modalCreateVoucher
  const modalSelectAddress = modalSlice.modalSelectAddress
  const modalEditAddress = modalSlice.modalEditAddress
  const modalOrderDetail = modalSlice.modalOrderDetail
  const modalImage = modalSlice.modalImage
  const modalBanner = modalSlice.modalBanner

  return (
    <>
      {modalProduct && <ModalProduct />}

      {modalCreateBanner && <ModalCreateBanner />}

      {modalSelectVoucher && <ModalSelectVoucher />}
      {modalCreateVoucher && <ModalCreateVoucher />}

      {modalSelectAddress && <ModalSelectAddress />}
      {modalEditAddress && <ModalEditAddress />}

      {modalOrderDetail && <ModalOrderDetail />}

      {modalImage && <ModalImage />}

      {modalBanner && <ModalBanner />}
    </>
  )
}
