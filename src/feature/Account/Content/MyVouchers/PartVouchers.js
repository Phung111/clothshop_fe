import Button from 'components/Button'

export default function PartVouchers({ noRadio }) {
  return (
    <>
      <div className="flex">
        <div className="flex aspect-square w-[120px] flex-col items-center justify-center gap-3 bg-[url('assets/images/voucher.png')]">
          <i className="fa-solid fa-c text-5xl text-white" />
          <p className="text-sm uppercase text-white">voucher</p>
        </div>
        <div className="flex grow border-[0.5px] border-l-0 border-black/10 px-3">
          <div className="flex grow flex-col justify-center gap-1">
            <p className="text-base">₫100k off</p>
            <p className="text-base">30%</p>
            <p className="flex items-center gap-1 text-black/50">
              <i className="fa-regular fa-clock text-xs" />
              <span className="capitalize">use from:</span>
              <span className="">25.03.2024</span>
              <span className="">-</span>
              <span className="">25.04.2024</span>
            </p>
          </div>
          {!noRadio && (
            <div className="flex">
              <input type="radio" name="addressOption" id="" className="mt-1 aspect-square w-4 cursor-pointer accent-primary" />
            </div>
          )}
        </div>
      </div>
    </>
  )
}
