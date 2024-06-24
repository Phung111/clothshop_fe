import Part from 'feature/Checkout/CheckoutBody/Ordered/Part'

export default function Head() {
  return (
    <>
      <Part>
        <h2 className="text-lg font-normal">Products Ordered</h2>
        <div className="flex h-full w-full items-center justify-center">
          <p className="text-sm capitalize text-black/50">unit price</p>
        </div>
        <div className="flex h-full w-full items-center justify-center">
          <p className="text-sm capitalize text-black/50">amount</p>
        </div>
        <div className="flex h-full w-full items-center justify-end">
          <p className="text-sm capitalize text-black/50">item subtotal</p>
        </div>
      </Part>
    </>
  )
}
