import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { setModalImage } from 'slice/modalSlice'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/grid'
import { CLOUDINARY } from 'app/global'

export default function ModalImage() {
  const dispatch = useDispatch()
  const otherSlice = useSelector((state) => state.otherSlice)
  const images = otherSlice.images

  const cancel = () => {
    dispatch(setModalImage(false))
  }

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        cancel()
      }
    }
    document.addEventListener('keydown', handleEsc)
    return () => {
      document.removeEventListener('keydown', handleEsc)
    }
  }, [])

  return (
    <>
      <div className="fixed z-[600] flex h-full w-full items-center justify-center bg-black/50">
        <div className="absolute left-0 top-0 z-[61] flex h-full w-full " onClick={cancel} />
        <div className="z-[620] flex items-center gap-6">
          <div className="flex h-full items-center">
            <div className="swiper-button-prev-custom flex h-20 w-10 cursor-pointer items-center justify-center bg-black/50 text-[30px] text-white hover:bg-black/30 hover:text-white/50">
              <i className="fa-solid fa-chevron-left" />
            </div>
          </div>
          <div className="aspect-square h-[675px] bg-white">
            <Swiper
              className="h-full w-full"
              modules={[Navigation, Pagination]}
              loop={true}
              navigation={{
                prevEl: '.swiper-button-prev-custom',
                nextEl: '.swiper-button-next-custom',
              }}
              slidesPerView={1}
              pagination={{
                el: '.swiper-custom-pagination',
                clickable: true,
                renderBullet: function (index, className) {
                  const image = images[index] || {}
                  const { fileFolder, fileName } = image
                  return `
                    <div class="${className} pagination">
                      <img src="${CLOUDINARY.url}/${CLOUDINARY.SCALE_IMAGE_100_100}/${fileFolder}/${fileName}" alt="Thumbnail" />
                    </div>
                  `
                },
              }}
            >
              {images &&
                images.map((item, index) => (
                  <SwiperSlide key={index}>
                    <img className="h-full w-full object-cover" src={item.fileUrl} alt="product" />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
          <div className="flex h-full items-center">
            <div className="swiper-button-next-custom flex h-20 w-10 cursor-pointer items-center justify-center bg-black/50 text-[30px] text-white hover:bg-black/30 hover:text-white/50">
              <i className="fa-solid fa-chevron-right" />
            </div>
          </div>
          <div className="flex h-[675px] w-[340px] bg-white p-5">
            <div className="swiper-custom-pagination grid auto-rows-min grid-cols-3 gap-5 overflow-auto"></div>
          </div>
        </div>
      </div>
    </>
  )
}
