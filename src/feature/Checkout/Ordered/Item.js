import Part from 'feature/Checkout/Ordered/Part'

export default function Item() {
  return (
    <>
      <Part>
        <div className="flex items-center gap-5">
          <img src="" alt="check out item" className="aspect-square w-10 bg-gray object-cover" />
          <div className="line-clamp-1 w-[400px]">
            <p className="text-sm capitalize">Áo Khoác Da Lộn Nam Lót Lông Cừu Cổ Cao Đẹp Cao Cấp ABANDON W1</p>
          </div>
          <div className="line-clamp-1 w-[160px]">
            <p className="text-sm capitalize text-black/50">Variation: Vàng bò,XL</p>
          </div>
        </div>
        <div className="flex h-full w-full items-center justify-center">
          <p className="text-sm capitalize ">₫239.000</p>
        </div>
        <div className="flex h-full w-full items-center justify-center">
          <p className="text-sm capitalize">1</p>
        </div>
        <div className="flex h-full w-full items-center justify-end">
          <p className="text-sm capitalize">₫239.000</p>
        </div>
      </Part>
    </>
  )
}
