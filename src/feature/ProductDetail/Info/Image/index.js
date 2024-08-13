import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { CLOUDINARY } from 'app/global'
import { setImages } from 'slice/otherSlice'
import { setModalImage } from 'slice/modalSlice'

export default function Image() {
  const dispatch = useDispatch()

  const product = useSelector((state) => state.productSlice.product)
  const images = product.images

  const [mainImage, setMainImage] = useState(``)
  const [imgIndex, setImgIndex] = useState(0)

  useEffect(() => {
    if (images && images.length > 0) {
      setMainImage(`${CLOUDINARY.url}/${CLOUDINARY.SCALE_IMAGE_450_450}/${images[0].fileFolder}/${images[0].fileName}`)
      setImgIndex(images[0].id)
    }
  }, [images])

  const handleImageClick = (image) => {
    setMainImage(`${CLOUDINARY.url}/${CLOUDINARY.SCALE_IMAGE_450_450}/${image.fileFolder}/${image.fileName}`)
    setImgIndex(image.id)
  }

  const handleImgClick = () => {
    dispatch(setModalImage(true))
    dispatch(setImages(images))
  }

  return (
    <>
      <div className="flex !w-[450px] shrink-0 flex-col gap-3">
        <img src={mainImage} className="aspect-square w-full object-contain" alt="Main Product" />
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
          className="h-[80px] w-full"
        >
          {images &&
            images.map((image, index) =>
              /* prettier-ignore */
              <SwiperSlide 
                key={index} 
                className={`cursor-pointer outline-2 -outline-offset-2 outline-primary ${image.id === imgIndex && 'outline'} hover:outline`} 
                onMouseEnter={() => handleImageClick(image)}
                onClick={handleImgClick}
              >
                <img 
                  src={`${CLOUDINARY.url}/${CLOUDINARY.SCALE_IMAGE_100_100}/${image.fileFolder}/${image.fileName}`} 
                  className="aspect-square w-20 object-cover" 
                  alt={`Product ${index}`} 
                />
              </SwiperSlide>
            )}
          <button className="swiper-button-prev" />
          <button className="swiper-button-next" />
        </Swiper>
      </div>
    </>
  )
}
