import ProductImage from 'components/Product/ProductImage/ProductImage'
import DesOnSale from 'components/Product//DesOnSale'
import DesProduct from 'components/Product//DesProduct'
import DesBestSale from 'components/Product//DesBestSale'

export default function Product({ type, href, product }) {
  return (
    <>
      <a href={href}>
        <div className="flex flex-col items-center justify-center transition hover:scale-[102%] hover:shadow-md">
          <ProductImage src={require(`assets/images/product1.jpg`)} type={type} discount={'50%'}>
            {type === 'onSale' && (
              <>
                <div className="absolute bottom-0 w-full">
                  <div className="flex w-full items-center justify-center gap-2 bg-black/20 p-0.5">
                    <p className="text-red">30/03</p>
                    <i className="fa-solid fa-play text-[8px] text-white"></i>
                    <p className="text-white">20/05</p>
                  </div>
                </div>
              </>
            )}
          </ProductImage>
          {type === 'onSale' && <DesOnSale />}
          {type === 'product' && <DesProduct />}
          {type === 'bestSale' && <DesBestSale percent={45} />}
        </div>
      </a>
    </>
  )
}
