import Size from 'feature/ProductDetail/Info/Name/Size'
import Color from 'feature/ProductDetail/Info/Name/Color'
import Quantity from 'feature/ProductDetail/Info/Name/Quantity'
import Button from 'components/Button'
import { useSelector, useDispatch } from 'react-redux'
import { addCartItem } from 'slice/orderSlice'

export default function Name() {
  const dispatch = useDispatch()

  const product = useSelector((state) => state.productSlice.product)
  const baseSlice = useSelector((state) => state.baseSlice)
  const collections = baseSlice.data.collections
  const colors = collections.colors
  const sizes = collections.sizes

  const discount = product.discountResDTO

  const handleAddToCart = () => {
    dispatch(addCartItem())
  }

  return (
    <>
      <div className="flex w-full flex-col gap-4">
        <h1 className="text-xl ">{product.name}</h1>
        <div className="flex items-center gap-1">
          <p className="text-base font-semibold">{product.sold}</p>
          <p className="text-black/70">Sold</p>
        </div>
        {discount && (
          <div className="bg-[url('assets/images/bg_sale_time.jpg')]">
            <div className="flex h-9 items-center justify-between px-5">
              <img src={require(`assets/images/flash_sale.png`)} className="h-[21px] w-[122px] object-contain" alt="product" />
              <div className="flex items-center gap-2 text-white">
                <i className="fa-regular fa-clock" />
                <p className="uppercase">ends in</p>
                <p className="">{window.formatDate(discount.dateEnd)}</p>
              </div>
            </div>
          </div>
        )}

        <div className="flex h-[66px] items-center gap-2 bg-gray px-5">
          {discount && <p className="text-base text-black/50 line-through">{window.formatCurrency(product.price)}</p>}
          <p className="text-[30px] text-primary">{window.formatCurrency(product.priceTotal)}</p>
          {discount && <p className="bg-primary px-1 py-0.5 text-xs font-bold uppercase text-white">{discount.percent}% off</p>}
        </div>
        <div className="flex h-full flex-col justify-between gap-6 px-5">
          <Size array={sizes} />
          <Color array={colors} />
          <Quantity />
          <div className="flex gap-4">
            <div className="h-12 w-[180px]" onClick={handleAddToCart}>
              <Button type={'outline'}>
                <i className="fa-solid fa-cart-plus" />
                add to cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
