import { Swiper, SwiperSlide } from 'swiper/react'
import { Grid, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/grid'

import { useState } from 'react'

import ContentHead from 'feature/Home/HomeBody/HomeBodyHead'

export default function Categories() {
  // thêm bộ lọc các catergori với icon và màu ở đây

  const [canPrevious, setCanPrevious] = useState(false)
  const [canNext, setCanNext] = useState(true)

  return (
    <>
      <div className="relative bg-gray pt-[1.5px]">
        <Swiper
          onSlideChange={(swiper) => {
            setCanPrevious(swiper.activeIndex !== 0)
            setCanNext(swiper.isEnd ? false : true)
          }}
          modules={[Grid, Navigation]}
          navigation={{
            prevEl: '.swiper-button-prev-2',
            nextEl: '.swiper-button-next-2',
          }}
          grid={{
            fill: 'row',
            rows: 2,
          }}
          slidesPerView={10}
          slidesPerGroup={2}
          spaceBetween={1.5}
        >
          {Array.from({ length: 50 }, (_, index) => (
            <SwiperSlide key={index}>
              <div className="flex h-[150px] cursor-pointer flex-col bg-white hover:shadow-2xl">
                <div className="flex h-[100px] shrink-0 items-center justify-center">
                  <div className="flex aspect-square w-12 items-center justify-center rounded-full bg-slate-300">
                    <i className="fa-solid fa-shirt text-[50px] text-primary"></i>
                  </div>
                </div>
                <div className="flex h-full items-start justify-center px-2 text-center">
                  <p className="capitalize">giặt giũ & chăm sóc nhà cửa</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute left-0 top-0 z-10 flex h-full w-0 items-center">
          <div className={`swiper-button-prev-2 origin-center -translate-x-1/2 transform !rounded-full !bg-white text-black shadow-md transition hover:scale-150 ${!canPrevious ? 'opacity-0' : 'opacity-100'}`}>
            <div className="flex aspect-square w-4 cursor-pointer items-center justify-center text-xs">
              <i className="fa-solid fa-chevron-left"></i>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 z-10 flex h-full w-0 items-center">
          <div className={`swiper-button-next-2 origin-center -translate-x-1/2 transform !rounded-full !bg-white text-black shadow-md transition hover:scale-150 ${!canNext ? 'opacity-0' : 'opacity-100'}`}>
            <div className="flex aspect-square w-4 cursor-pointer items-center justify-center text-xs">
              <i className="fa-solid fa-chevron-right"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
