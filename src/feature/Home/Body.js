import Banners from 'feature/Home/HomeBody/Banners'
import Discounts from 'feature/Home/Discounts'
import Bestsales from 'feature/Home/BestSales'
import Categories from 'feature/Home/Categories'
import Products from 'feature/Home/HomeBody/Products/Products'

import ContentHead from 'feature/Home/ContentHead'

export default function Body() {
  return (
    <>
      <>
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
                  <ContentHead title={'categories'} href={'#'} />
                  <Categories />
                </div>
              </div>
              <div className="bg-white">
                <div className="flex flex-col">
                  <ContentHead title={'onsale'} href={'#'} seeAll={true} />
                  <Discounts />
                </div>
              </div>
              <div className="bg-white">
                <div className="flex flex-col">
                  <ContentHead title={'bestSale'} href={'#'} seeAll={true} top={true} />
                  <Bestsales />
                </div>
              </div>
              <div className="bg-transparent">
                <Products />
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  )
}
