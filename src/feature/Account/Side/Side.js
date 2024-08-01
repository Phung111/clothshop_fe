export default function Side() {
  const handleClickSide = (target) => {}

  const handleClickMyAccounts = (target) => {}

  return (
    <>
      <div className="flex flex-col gap-5 py-5">
        <div className="flex gap-3">
          <div className="aspect-square h-[50px] rounded-full border-[0.5px] border-black/20">
            <img src={require(`assets/images/avablank.png`)} alt="ava blank" />
          </div>
          <div className="flex grow flex-col gap-1">
            <h3 className="line-clamp-1 text-sm">men22998</h3>
            <button className="flex items-center gap-2 text-black/50 hover:text-black/70">
              <i className="fa-solid fa-pen text-sm" />
              <p className="capitalize">edit profile</p>
            </button>
          </div>
        </div>
        <div className="px-5">
          <div className="line"></div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex gap-3">
            <div className="flex aspect-square h-[20px] items-center justify-center">
              <i className="fa-regular fa-user"></i>
            </div>
            <div className={`relative flex flex-col items-start `}>
              <button className={`text-sm capitalize hover:text-primary `}>my account</button>
              <div className={`flex max-h-0 flex-col items-start gap-3 overflow-hidden pl-2 transition-all`}>
                <button className={`text-sm capitalize hover:text-primary `}>profile</button>
                <button className={`text-sm capitalize hover:text-primary `}>addresses</button>
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="flex aspect-square w-[20px] items-center justify-center">
              <i className="fa-solid fa-ticket"></i>
            </div>
            <button className={`text-sm capitalize hover:text-primary`}>my voucher</button>
          </div>
        </div>
      </div>
    </>
  )
}
