import Info from 'feature/ProductDetail/ProductDetailBody/Info/Info'
import Detail from 'feature/ProductDetail/ProductDetailBody/Detail/Detail'
import Body from 'feature/Home/HomeBody/Products/Content/Body'
import HomeBodyHead from 'feature/Home/HomeBody/HomeBodyHead'
import { useSelector } from 'react-redux'
import Seemore from 'feature/Category/Seemore'

export default function ProductDetailBody() {
  const product = useSelector((state) => state.productSlice)

  return (
    <>
      <section className="bg-gray">
        <div className="container">
          {!product && <div className="flex justify-center p-10">Not found Product</div>}
          {product && (
            <div className="flex flex-col gap-4 py-5">
              <div className="bg-white">
                <Info />
              </div>
              <div className="bg-white">
                <Detail />
              </div>
              <div className="p-4">
                <HomeBodyHead title={'products similar to'} href={'#'} />
                <Seemore />
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
