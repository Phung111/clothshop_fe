import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { useState } from 'react'

export default function Banners() {
  const [isHovered, setIsHovered] = useState(false)
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
            <SwiperSlide>
              <img src={require(`assets/images/banner1.jpg`)} alt="banner" className="h-full w-full object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={require(`assets/images/banner2.jpg`)} alt="banner" className="h-full w-full object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={require(`assets/images/banner3.jpg`)} alt="banner" className="h-full w-full object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={require(`assets/images/banner4.jpg`)} alt="banner" className="h-full w-full object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={require(`assets/images/banner5.jpg`)} alt="banner" className="h-full w-full object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={require(`assets/images/banner6.jpg`)} alt="banner" className="h-full w-full object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={require(`assets/images/banner7.jpg`)} alt="banner" className="h-full w-full object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={require(`assets/images/banner1.jpg`)} alt="banner" className="h-full w-full object-cover" />
            </SwiperSlide>
            <div className={`swiper-button-prev ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
            <div className={`swiper-button-next ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
          </Swiper>
        </div>
        <div className="flex flex-col gap-1.5">
          <div className="">
            <img src={require(`assets/images/banner2.jpg`)} alt="banner" className="h-full w-full object-cover" />
          </div>
          <div className="">
            <img src={require(`assets/images/banner3.jpg`)} alt="banner" className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </>
  )
}
