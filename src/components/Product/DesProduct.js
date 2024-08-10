export default function DesProduct({ product }) {
  return (
    <>
      <div className="box-border w-full shrink-0 bg-white p-2">
        <div className="flex flex-col">
          <div className="flex flex-col gap-2">
            <p className="line-clamp-2 h-10 capitalize">{product.name}</p>
            <div className="flex items-start gap-1">
              {product.discountResDTO && <p className="text-black/50 line-through">₫{window.formatNumberNođ(product.price)}</p>}
              <p className="text-base text-primary">₫{window.formatNumberNođ(product.priceTotal)}</p>
            </div>
            <p className="text-xs">{product.sold} sold</p>
            <p className="text-xs capitalize text-black/50">{product.productDetail.eshipsFrom}</p>
          </div>
        </div>
      </div>
    </>
  )
}
