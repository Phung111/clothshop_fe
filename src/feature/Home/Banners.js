import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { useSelector } from 'react-redux'
import { useState } from 'react'

export default function Banners() {
  const [isHovered, setIsHovered] = useState(false)

  const baseSlice = useSelector((state) => state.baseSlice)
  const banners = baseSlice.data.banners || []

  const fixedBanners = banners.slice(0, 2)
  const swiperBanners = banners.slice(2)

  return (
    <>
      <div className="grid h-[250px] grid-cols-3 gap-1.5">
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
            className="h-[250px]"
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
        <div className="flex h-[250px] flex-col gap-1.5">
          {fixedBanners.map((item, index) => (
            <div key={index} className="h-[122px]">
              <img src={item.fileUrl} alt="banner" className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
