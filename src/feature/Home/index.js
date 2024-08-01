import Banners from 'feature/Home/Banners'
import Discounts from 'feature/Home/Discounts'
import Bestsales from 'feature/Home/BestSales'
import Categories from 'feature/Home/Categories'
import Products from 'feature/Home/Products'

import ContentHead from 'feature/Home/HomeHead'

import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getHome, getCollection, setLoading } from 'slice/baseSlice'
import { getProductPage, setLatest, emptyECategories } from 'slice/productPageSlice'

export default function Home() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getHome())
    dispatch(emptyECategories())
    dispatch(setLatest(true))
    dispatch(getCollection())
    dispatch(getProductPage())
  }, [])

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
