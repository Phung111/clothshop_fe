import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

import { useState } from 'react'

import Product from 'components/Product//Product'

export default function Discounts() {
  const [canPrevious, setCanPrevious] = useState(false)
  const [canNext, setCanNext] = useState(true)

  return (
    <>
      <div className="relative">
        <Swiper
          onSlideChange={(swiper) => {
            setCanPrevious(swiper.activeIndex !== 0)
            setCanNext(swiper.isEnd ? false : true)
          }}
          modules={[Navigation]}
          navigation={{
            prevEl: '.swiper-button-prev-3',
            nextEl: '.swiper-button-next-3',
          }}
          slidesPerView={6}
          spaceBetween={20}
        >
          {Array.from({ length: 10 }, (_, index) => (
            <SwiperSlide key={index}>
              <Product type={'onSale'} href={'#'} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute left-0 top-0 z-10 flex h-full w-0 items-center">
          <div className={`swiper-button-prev-3 origin-center -translate-x-1/2 transform !rounded-full !bg-white text-black shadow-md transition hover:scale-150 ${!canPrevious ? 'opacity-0' : 'opacity-100'}`}>
            <div className="flex aspect-square w-8 cursor-pointer items-center justify-center text-xs">
              <i className="fa-solid fa-chevron-left"></i>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 z-10 flex h-full w-0 items-center">
          <div className={`swiper-button-next-3 origin-center -translate-x-1/2 transform !rounded-full !bg-white text-black shadow-md transition hover:scale-150 ${!canNext ? 'opacity-0' : 'opacity-100'}`}>
            <div className="flex aspect-square w-8 cursor-pointer items-center justify-center text-xs">
              <i className="fa-solid fa-chevron-right"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
