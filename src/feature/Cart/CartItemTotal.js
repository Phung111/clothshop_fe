import Part from 'feature/Cart/CartBody/Part'
import Button from 'components/Button'

export default function CartItemTotal() {
  return (
    <>
      <div className="sticky bottom-0 z-40 flex justify-between bg-white px-5 py-4">
        <div className="flex">
          <div className="flex w-[50px] justify-center">
            <input type="checkbox" name="" id="" className="aspect-square w-4 cursor-pointer accent-primary" />
          </div>
          <div className="flex gap-5">
            <button className="men_men text-sm capitalize hover:text-primary">select all</button>
            <button className="text-sm hover:text-primary">Delete</button>
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-5">
          <p className="w-[200px]  text-sm">Total (0 item):</p>
          <p className="text-2xl text-primary">₫2.199.000</p>
          <div className="h-[40px] w-full">
            <Button type={'solid'}>check out</Button>
          </div>
        </div>
      </div>
    </>
  )
}
