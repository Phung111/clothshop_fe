import ProductImage from 'components/Product/ProductImage/ProductImage'
import DesOnSale from 'components/Product/DesOnSale'
import DesProduct from 'components/Product/DesProduct'
import DesBestSale from 'components/Product/DesBestSale'
import { CLOUDINARY } from 'app/global'
import { useNavigate } from 'react-router-dom'
import LabelOnSale from 'components/Product/ProductImage/LabelOnSale'
import LabelBestSale from 'components/Product/ProductImage/LabelBestSale'

export default function Product({ type, product }) {
  const navigate = useNavigate()

  const handleToProductDetail = (id) => {
    navigate(`/detail/${id}`)
  }

  return (
    <>
      {product && (
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault()
            handleToProductDetail(product.id)
          }}
        >
          <div className="relative flex w-[186.4px] flex-col items-center justify-center bg-white transition hover:scale-[102%] hover:shadow-md">
            <ProductImage src={`${CLOUDINARY.url}/${CLOUDINARY.SCALE_IMAGE_200_200}/${product.images[0].fileFolder}/${product.images[0].fileName}`} type={type} product={product}>
              {type === 'onSale' && (
                <>
                  <div className="absolute bottom-0 w-full">
                    <div className="flex w-full items-center justify-center gap-2 bg-black/20 p-0.5">
                      <p className="text-red">{window.formatDate(product.discountResDTO.dateStart)}</p>
                      <i className="fa-solid fa-play text-[8px] text-white"></i>
                      <p className="text-white">{window.formatDate(product.discountResDTO.dateEnd)}</p>
                    </div>
                  </div>
                </>
              )}
            </ProductImage>

            {(type === 'onSale' || type === 'product') && product.discountResDTO && <LabelOnSale product={product} />}
            {type === 'bestSale' && <LabelBestSale />}

            {type === 'onSale' && <DesOnSale product={product} />}
            {type === 'product' && <DesProduct product={product} />}
            {type === 'bestSale' && <DesBestSale percent={45} product={product} />}
          </div>
        </a>
      )}
    </>
  )
}
