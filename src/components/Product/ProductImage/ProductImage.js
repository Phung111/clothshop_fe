import LabelOnSale from 'components/Product/ProductImage/LabelOnSale'
import LabelBestSale from 'components/Product/ProductImage/LabelBestSale'

export default function ProductImage({ children, src, type, discount }) {
  return (
    <>
      <div className="relative flex aspect-square">
        {children}
        <img src={src} alt="product" className="aspect-square h-full w-full object-contain" />
        {type !== 'onSale' && (
          <>
            <div className="absolute bottom-0 left-0 z-10 h-5">
              <img src={require(`assets/images/tem.png`)} alt="label" className="h-full w-full object-contain" />
            </div>
          </>
        )}
        {(type === 'onSale' || type === 'product') && discount && <LabelOnSale discount={discount} />}
        {type === 'bestSale' && <LabelBestSale />}
      </div>
    </>
  )
}
