import Info from 'feature/ProductDetail/ProductDetailBody/Info/Info'
import Detail from 'feature/ProductDetail/ProductDetailBody/Detail/Detail'
import Body from 'feature/Home/HomeBody/Products/Content/Body'
import HomeBodyHead from 'feature/Home/HomeBody/HomeBodyHead'

export default function ProductDetailBody() {
  return (
    <>
      <section className="bg-gray">
        <div className="container">
          <div className="flex flex-col gap-4 py-5">
            <div className="bg-white">
              <Info />
            </div>
            <div className="bg-white">
              <Detail />
            </div>

            <div className="p-4">
              <HomeBodyHead title={'products similar to'} href={'#'} />
              <Body seeMore={'#'} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
