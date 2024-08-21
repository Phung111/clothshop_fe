import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { setModalOrderDetail } from 'slice/modalSlice'
import { emptyOrder } from 'slice/orderPageSlice'
import Part from 'feature/Checkout/Ordered/Part'
import { CLOUDINARY } from 'app/global'
import React from 'react'

export default function ModalOrderDetail() {
  const dispatch = useDispatch()

  const orderPageSlice = useSelector((state) => state.orderPageSlice)
  const order = orderPageSlice.order
  const orderItems = order.orderItems

  function cancel() {
    dispatch(emptyOrder())
    dispatch(setModalOrderDetail(false))
  }

  const handleToProductDetail = (id) => {
    window.open(`/detail/${id}`, '_blank')
  }

  useEffect(() => {}, [])
  return (
    <>
      <div className="fixed z-[60] h-full w-full bg-black/50 ">
        <div className="relative flex h-full items-center justify-center p-[5%]">
          <div className="relative flex rounded-xl bg-white p-8">
            <button onClick={cancel} className="absolute right-0 top-0 z-[70] flex aspect-square w-[40px] -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full bg-primary hover:bg-primary_dark">
              <i className="fa-solid fa-xmark text-[28px] text-white" />
            </button>
            {order && (
              <div className="flex h-full w-full flex-col gap-4 rounded-xl">
                {/* <div className="flex max-h-[405px] flex-col gap-3 overflow-auto">{orderItems && orderItems.map((item, index) => <Item item={item} key={index} />)}</div> */}
                <div className="flex max-h-[405px] flex-col gap-3 overflow-auto">
                  {orderItems &&
                    orderItems.map((item, index) => (
                      <React.Fragment key={item.id}>
                        <Part onClick={() => handleToProductDetail(item.product.id)}>
                          <div className="flex items-center gap-5">
                            <div className="aspect-square w-20 shrink-0">
                              <img src={`${CLOUDINARY.url}/${CLOUDINARY.SCALE_IMAGE_100_100}/${item.product.images[0].fileFolder}/${item.product.images[0].fileName}`} alt="product" className="h-full w-full object-cover" />
                            </div>
                            <div className="line-clamp-1 w-[400px]">
                              <p className="text-sm capitalize">{item.product.name}</p>
                            </div>
                            <div className="line-clamp-1 w-[160px]">
                              <p className="text-sm capitalize text-black/50">{item.variation}</p>
                            </div>
                          </div>
                          <div className="flex h-full w-full items-center justify-center gap-2">
                            {item.product.discountResDTO && <p className="text-sm capitalize text-primary/50 line-through">{window.formatCurrency(item.product.price)}</p>}
                            <p className="text-sm capitalize">{window.formatCurrency(item.product.priceTotal)}</p>
                          </div>
                          <div className="flex h-full w-full items-center justify-center">
                            <p className="text-sm capitalize">{item.quantity}</p>
                          </div>
                          <div className="flex h-full w-full items-center justify-end">
                            <p className="text-sm capitalize">{window.formatCurrency(item.total)}</p>
                          </div>
                        </Part>
                        <div className="line" />
                      </React.Fragment>
                    ))}
                </div>
                <div className="flex justify-between">
                  <div className="flex w-[320px] shrink-0 flex-col gap-1">
                    <p className="text-[14px] capitalize">{order.address.nameCustomer}</p>
                    <p className="text-[12px] text-black/50">{order.address.phone}</p>
                    <p className="text-[12px] capitalize text-black/50">
                      {order.address.address}, {order.address.province}
                    </p>
                  </div>

                  {order.voucher && (
                    <div className="flex w-[400px] shrink-0 flex-col gap-1">
                      <p className="text-[14px] capitalize">Voucher</p>
                      <div className="flex items-center gap-5">
                        <p className="w-[50px] text-[14px] capitalize text-black/50">id</p>
                        <p className="text-[14px] capitalize">{order.voucher.id}</p>
                      </div>
                      <div className="flex items-center gap-5">
                        <p className="w-[50px] text-[14px] capitalize text-black/50">date</p>
                        <p className="text-[14px] capitalize">
                          {window.formatDate(order.voucher.dateStart)} - {window.formatDate(order.voucher.dateEnd)}
                        </p>
                      </div>
                      <div className="flex items-center gap-5">
                        <p className="w-[50px] text-[14px] capitalize text-black/50">percent</p>
                        <p className="text-[14px] capitalize">{order.voucher.percent}%</p>
                      </div>
                      <div className="flex items-center gap-5">
                        <p className="w-[50px] text-[14px] capitalize text-black/50">price</p>
                        <p className="text-[14px] capitalize">{window.formatCurrency(order.voucher.price)}</p>
                      </div>
                    </div>
                  )}

                  <div className="flex w-full flex-col items-end gap-3">
                    <div className="flex items-center gap-5">
                      <p className="flex w-[150px] items-center justify-end text-sm text-black/50">Merchandise Subtotal:</p>
                      <p className="flex w-[200px] items-center justify-end text-sm">{window.formatCurrency(order.orderItemsTotal)}</p>
                    </div>
                    <div className="flex items-center gap-5">
                      <p className="flex w-[150px] items-center justify-end text-sm text-black/50">Shipping Total:</p>
                      <p className="flex w-[200px] items-center justify-end text-sm">{window.formatCurrency(order.shipTotal)}</p>
                    </div>
                    <div className="flex items-center gap-5">
                      <p className="flex w-[150px] items-center justify-end text-sm text-black/50">Voucher Total:</p>
                      <p className="flex w-[200px] items-center justify-end text-sm">-{window.formatCurrency(order.voucherTotal)}</p>
                    </div>
                    <div className="flex items-center gap-5">
                      <p className="flex w-[150px] items-center justify-end text-sm text-black/50">Total Payment:</p>
                      <p className="flex w-[200px] items-center justify-end text-[28px] leading-[28px] text-primary">{window.formatCurrency(order.total)}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
