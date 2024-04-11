export default function LabelOnSale({ discount }) {
  return (
    <>
      <div className="bg-red-500 absolute left-0 top-2">
        <div className="rounded-r-sm bg-red px-1">
          <p className="text-center text-[12px] capitalize text-white">discount</p>
        </div>
        <div className="tem relative left-0 top-[100%] z-10 h-2 w-2"></div>
      </div>
      <div className="absolute right-0 top-0 h-4 w-10 bg-yellow-300">
        <p className="pl-1 text-center text-[12px] text-primary">-{discount}</p>
        <div className="absolute -left-[5px] -top-[3px]">
          <i className="fa-solid fa-bolt-lightning text-[16px] text-primary"></i>
        </div>
      </div>
    </>
  )
}
