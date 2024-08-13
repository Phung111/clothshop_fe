import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

import { getAllBanner } from 'slice/otherSlice'

export default function Banners() {
  const dispatch = useDispatch()
  const [isHovered, setIsHovered] = useState(false)

  const baseSlice = useSelector((state) => state.baseSlice)
  const banners = baseSlice.data.banners || []

  const fixedBanners = banners.slice(0, 2)
  const swiperBanners = banners.slice(2)

  return (
    <>
      <div className="grid grid-cols-3 gap-1.5">
        <div className="col-span-2" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          <Swiper
            style={{
              '--swiper-pagination-color': '#fff',
              '--swiper-pagination-bullet-inactive-color': '#999999',
              '--swiper-pagination-bullet-inactive-opacity': '0.7',
              '--swiper-pagination-bullet-size': '10px',
              '--swiper-pagination-bullet-horizontal-gap': '5px',
            }}
            modules={[Autoplay, Navigation, Pagination]}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            pagination={{
              clickable: true,
              renderBullet: function (index, className) {
                return `<span class="${className}"></span>`
              },
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            className="h-full"
          >
            {swiperBanners.map((item, index) => (
              <SwiperSlide key={index}>
                <img src={item.fileUrl} alt="banner" className="h-full w-full object-cover" />
              </SwiperSlide>
            ))}
            <div className={`swiper-button-prev ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
            <div className={`swiper-button-next ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
          </Swiper>
        </div>
        <div className="flex flex-col gap-1.5">
          {fixedBanners.map((item, index) => (
            <div key={index} className="">
              <img src={item.fileUrl} alt="banner" className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
