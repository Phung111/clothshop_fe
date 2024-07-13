import Part from 'feature/Checkout/Ordered/Part'
import { CLOUDINARY } from 'app/global'
export default function Item({ item }) {
  return (
    <>
      <Part>
        <div className="flex items-center gap-5">
          <img src={`${CLOUDINARY.url}/${CLOUDINARY.SCALE_IMAGE_100_100}/${item.image.fileFolder}/${item.image.fileName}`} alt="checkout item" className="aspect-square w-20 object-none" />

          <div className="line-clamp-1 w-[400px]">
            <p className="text-sm capitalize">{item.name}</p>
          </div>
          <div className="line-clamp-1 w-[160px]">
            <p className="text-sm capitalize text-black/50">{item.variation}</p>
          </div>
        </div>
        <div className="flex h-full w-full items-center justify-center">
          <p className="text-sm capitalize ">₫{window.formatNumberNođ(item.total / item.quantity)}</p>
        </div>
        <div className="flex h-full w-full items-center justify-center">
          <p className="text-sm capitalize">{item.quantity}</p>
        </div>
        <div className="flex h-full w-full items-center justify-end">
          <p className="text-sm capitalize">₫{window.formatNumberNođ(item.total)}</p>
        </div>
      </Part>
    </>
  )
}
