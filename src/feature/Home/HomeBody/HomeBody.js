import Banners from 'feature/Home/HomeBody/Banners'
import Discounts from 'feature/Home/HomeBody/Discounts'
import Bestsales from 'feature/Home/HomeBody/BestSales'
import Categories from 'feature/Home/HomeBody/Categories'
import Products from 'feature/Home/HomeBody/Products/Products'

import ContentHead from 'feature/Home/HomeBody/HomeBodyHead'

export default function HomeBody() {
  return (
    <>
      <section>
        <div className="bg-white">
          <div className="container">
            <div className="py-7">
              <Banners />
            </div>
          </div>
        </div>
        <div className="bg-gray">
          <div className="container">
            <div className="flex flex-col gap-7 py-7">
              <div className="bg-white">
                <div className="flex flex-col">
                  <div className="px-3">
                    <ContentHead title={'categories'} href={'#'} />
                  </div>
                  <Categories />
                </div>
              </div>
              <div className="bg-white">
                <div className="flex flex-col">
                  <div className="px-3">
                    <ContentHead title={'onsale'} href={'#'} seeAll={true} />
                  </div>
                  <div className="px-3">
                    <Discounts />
                  </div>
                </div>
              </div>
              <div className="bg-white">
                <div className="flex flex-col">
                  <div className="px-3">
                    <ContentHead title={'bestSale'} href={'#'} seeAll={true} top={true} />
                  </div>
                  <div className="px-3">
                    <Bestsales />
                  </div>
                </div>
              </div>
              <div className="bg-transparent">
                <Products />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
