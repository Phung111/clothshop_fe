import Size from 'feature/ProductDetail/ProductDetailBody/Info/Name/Size/Size'
import Color from 'feature/ProductDetail/ProductDetailBody/Info/Name/Color/Color'
import Quantity from 'feature/ProductDetail/ProductDetailBody/Info/Name/Quantity/Quantity'
import Button from 'components/Button'

export default function Name() {
  const a1 = ['S', 'M', 'L', 'XL', 'XXL', 'XXXL']
  const a2 = ['RED', 'BLUE', 'YELLOW', 'ORANGE', 'GREEN', 'BLACK', 'WHITE']

  return (
    <>
      <div className="flex flex-col gap-4">
        <h1 className="text-xl ">Bàn Phím Cơ Gaming Không Dây Bluetooth XM87 LED RGB Pro Keycap Xịn, White Switch, Hotswap, 3 Mode</h1>
        <div className="flex items-center gap-1">
          <p className="text-base font-semibold">719</p>
          <p className="text-black/70">Sold</p>
        </div>
        <div className="bg-[url('assets/images/bg_sale_time.jpg')]">
          <div className="flex h-9 items-center justify-between px-5">
            <img src={require(`assets/images/flash_sale.png`)} className="h-[21px] w-[122px] object-contain" />
            <div className="flex items-center gap-2 text-white">
              <i className="fa-regular fa-clock" />
              <p className="uppercase">ends in</p>
              <p className="">20/12/2024</p>
            </div>
          </div>
        </div>
        <div className="flex h-[66px] items-center gap-2 bg-gray px-5">
          <p className="text-base text-black/50 line-through">₫1.000.000</p>
          <p className="text-[30px] text-primary">₫500.000</p>
          <p className="bg-primary px-1 py-0.5 text-xs font-bold uppercase text-white">50% off</p>
        </div>
        <div className="flex h-full flex-col justify-between gap-6 px-5">
          <Size array={a1} />
          <Color array={a2} />
          <Quantity />
          <div className="flex gap-4">
            <div className="h-12 w-[180px]">
              <Button type={'outline'}>
                <i className="fa-solid fa-cart-plus" />
                add to cart
              </Button>
            </div>
            <div className="h-12 w-[180px]">
              <Button type={'solid'}>buy now</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
