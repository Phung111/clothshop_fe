import Banners from 'feature/Home/Banners'
import Discounts from 'feature/Home/Discounts'
import Bestsales from 'feature/Home/BestSales'
import Categories from 'feature/Home/Categories'
import Products from 'feature/Home/Products'

import ContentHead from 'feature/Home/ContentHead'

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getHome, getCollection } from 'slice/baseSlice'
import { getProductPage, setLatest, emptyECategories, setSize, setCurrentPage } from 'slice/productPageSlice'

export default function Home() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getHome())
    dispatch(emptyECategories())
    dispatch(setLatest(true))
    dispatch(getCollection())
    dispatch(setSize(60))
    dispatch(setCurrentPage(1))
    dispatch(getProductPage())
  }, [dispatch])

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
                    <ContentHead title={'categories'} />
                  </div>
                  <Categories />
                </div>
              </div>
              <div className="bg-white">
                <div className="flex flex-col">
                  <div className="px-3">
                    <ContentHead title={'onsale'} />
                  </div>
                  <div className="px-3">
                    <Discounts />
                  </div>
                </div>
              </div>
              <div className="bg-white">
                <div className="flex flex-col">
                  <div className="px-3">
                    <ContentHead title={'bestSale'} top={true} />
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
