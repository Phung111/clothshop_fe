import ModalEditAddress from 'components/Modal/ModalEditAddress'
import ModalCreateAddress from 'components/Modal/ModalCreateAddress'
import ModalMyAddress from 'components/Modal/ModalMyAddress'
import ModalVoucher from 'components/Modal/ModalVoucher'
import ModalProduct from './ModalProduct/ModalProduct'

import { useSelector } from 'react-redux'

export default function Modal() {
  const modals = useSelector((state) => state.accountSlice.data.modals)
  const modalEditAddress = modals.editAddress
  const modalCreateAddress = modals.createAddress
  const modalMyAddress = modals.myAddress
  const modalVoucher = modals.voucher

  const modals2 = useSelector((state) => state.modalSlice)
  const modalProduct = modals2.modalProduct

  return (
    <>
      {modalMyAddress && <ModalMyAddress />}
      {modalEditAddress && <ModalEditAddress />}
      {modalCreateAddress && <ModalCreateAddress />}
      {modalVoucher && <ModalVoucher />}
      {modalProduct && <ModalProduct />}
    </>
  )
}
