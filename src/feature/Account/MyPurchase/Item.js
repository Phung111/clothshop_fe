import { CLOUDINARY } from 'app/global'

export default function Item({ item }) {
  return (
    <>
      {item && (
        <>
          <div className="flex w-full gap-2 ">
            <div className="aspect-square w-20 shrink-0">
              <img src={`${CLOUDINARY.url}/${CLOUDINARY.SCALE_IMAGE_100_100}/${item.product.images[0].fileFolder}/${item.product.images[0].fileName}`} alt="product" className="h-full w-full object-cover" />
            </div>
            <div className="flex w-full  flex-col gap-1">
              <p className="line-clamp-1 w-[500px] text-[16px] font-medium">{item.product.name}</p>
              <p className="text-[14px] capitalize text-black/50">{item.variation}</p>
              <p className="text-[14px]">x {item.quantity}</p>
            </div>
            <div className="flex w-[180px] shrink-0 items-center justify-end gap-1">
              <p className="text-black/50 line-through">{window.formatCurrency2(item.product.price)}</p>
              <p className="text-primary">{window.formatCurrency2(item.product.priceTotal)}</p>
            </div>
          </div>
          <div className="line" />
        </>
      )}
    </>
  )
}
