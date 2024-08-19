export default function DesOnSale({ product }) {
  return (
    <>
      <div className="w-full py-2">
        <div className="flex flex-col ">
          <div className="flex items-center justify-center gap-1">
            <p className="text-xs text-black/50 line-through">{window.formatCurrency(product.price)}</p>
            <p className="text-[20px] text-primary">{window.formatCurrency(product.priceTotal)}</p>
          </div>
        </div>
      </div>
    </>
  )
}
