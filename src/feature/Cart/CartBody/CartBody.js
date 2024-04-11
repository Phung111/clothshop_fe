import Body from 'feature/Home/HomeBody/Products/Content/Body'
import HomeBodyHead from 'feature/Home/HomeBody/HomeBodyHead'
import CartItem from 'feature/Cart/CartBody/CartItem'
import CartItemHead from 'feature/Cart/CartBody/CartItemHead'
import CartItemTotal from 'feature/Cart/CartBody/CartItemTotal'

export default function CartBody() {
  return (
    <>
      <section className="bg-gray">
        <div className="container">
          <div className="flex flex-col gap-4 py-5">
            <CartItemHead />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItemTotal />
            <div className="bg-white p-4">
              <HomeBodyHead title={'you may also like'} href={'#'} />
              <Body seeMore={'#'} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
