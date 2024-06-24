import Body from 'feature/Home/Products/Content/Body'
import HomeHead from 'feature/Home/HomeHead'
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
              <HomeHead title={'you may also like'} href={'#'} />
              <Body seeMore={'#'} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
