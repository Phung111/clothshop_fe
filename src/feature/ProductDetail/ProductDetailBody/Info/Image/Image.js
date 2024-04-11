import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function Image() {
  return (
    <>
      <div className="flex w-[450px] flex-col gap-3">
        <img src={require(`assets/images/avatar.jpg`)} className="aspect-square w-full object-contain" />
        <Swiper
          style={{
            '--swiper-pagination-color': '#fff',
            '--swiper-pagination-bullet-inactive-color': '#999999',
            '--swiper-pagination-bullet-inactive-opacity': '0.7',
            '--swiper-pagination-bullet-size': '10px',
            '--swiper-pagination-bullet-horizontal-gap': '5px',
          }}
          modules={[Navigation]}
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
          slidesPerView={5}
          spaceBetween={12}
          className="h-full w-full"
        >
          <SwiperSlide>
            <img src={require(`assets/images/banner1.jpg`)} className="aspect-square w-20 object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={require(`assets/images/banner1.jpg`)} className="aspect-square w-20 object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={require(`assets/images/banner1.jpg`)} className="aspect-square w-20 object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={require(`assets/images/banner1.jpg`)} className="aspect-square w-20 object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={require(`assets/images/banner1.jpg`)} className="aspect-square w-20 object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={require(`assets/images/banner1.jpg`)} className="aspect-square w-20 object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={require(`assets/images/banner1.jpg`)} className="aspect-square w-20 object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={require(`assets/images/banner1.jpg`)} className="aspect-square w-20 object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={require(`assets/images/banner1.jpg`)} className="aspect-square w-20 object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={require(`assets/images/banner1.jpg`)} className="aspect-square w-20 object-cover" />
          </SwiperSlide>
          <button className="swiper-button-prev" />
          <button className="swiper-button-next" />
        </Swiper>
      </div>
    </>
  )
}
