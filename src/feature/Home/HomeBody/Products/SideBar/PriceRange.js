import Button from 'components/Button'

export default function PriceRange() {
  return (
    <>
      <div className="flex flex-col gap-3">
        <p className="capitalize">price range</p>
        <div className="flex flex-col gap-3">
          <div className="flex justify-between">
            <input type="number" placeholder="₫ MIN" className="h-8 w-20 rounded-sm border-[0.5px] border-black/20 px-2 text-sm" />
            <div className=" flex w-full items-center">
              <div className="line mx-2" />
            </div>
            <input type="number" placeholder="₫ MAX" className="h-8 w-20 rounded-sm border-[0.5px] border-black/20 px-2 text-sm" />
          </div>
          <div className="h-8">
            <Button type={'solid'}>
              <p className="uppercase">apply</p>
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
