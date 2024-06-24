export default function Address() {
  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-2">
          <i className="fa-solid fa-location-dot text-lg text-primary"></i>
          <h2 className="text-lg font-normal text-primary">Delivery Address</h2>
        </div>
        <div className="flex gap-5">
          <p className="text-base font-bold capitalize">Phạm Huỳnh Thiên Phụng (+84) 766606996</p>
          <p className="text-base capitalize">12 Huyền Trân Công Chúa, thành phố huế, thừa thiên thuế</p>
          <div className="flex h-5 w-10 items-center justify-center border border-primary text-[10px] text-primary">Default</div>
          <button className="text-blue">Change</button>
        </div>
      </div>
    </>
  )
}
