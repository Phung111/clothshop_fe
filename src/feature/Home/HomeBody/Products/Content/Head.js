import Button from 'components/Button'
import SelectCustom from 'components/SelectCustom'

export default function Head() {
  return (
    <>
      <div className="h-[60px] w-full bg-gray2 px-5 py-3">
        <div className="flex h-full justify-between gap-5">
          <div className="flex items-center gap-4">
            <div className="flex h-full items-center justify-center">
              <h4 className="capitalize">sort by</h4>
            </div>
            <div className="flex h-full w-[90px] items-center justify-center">
              <Button type={'solid'}>Discount</Button>
            </div>
            <div className="flex h-full w-[90px] items-center justify-center">
              <Button>best sale</Button>
            </div>
            <div className="flex h-full w-[200px] items-center justify-center">
              <SelectCustom className="h-9 bg-white px-3 hover:bg-primary" array={[1, 2, 3, 4, 5, 6]} />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <p className="">1/9</p>
            <div className="flex h-full gap-1">
              <button className="flex aspect-square h-full w-9 items-center justify-center border-[0.5px] border-black/10 disabled:bg-white disabled:opacity-40" disabled>
                <i className="fa-solid fa-chevron-left text-sm"></i>
              </button>
              <button className="flex aspect-square h-full w-9 items-center justify-center border-[0.5px] border-black/10">
                <i className="fa-solid fa-chevron-right text-sm"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
