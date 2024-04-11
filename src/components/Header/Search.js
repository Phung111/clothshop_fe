export default function Search({ className }) {
  return (
    <>
      <div className={`${className} relative flex w-full items-center`}>
        <input type="text" className="h-full w-full rounded pl-3 outline-none focus:ring-2 focus:ring-black" placeholder="Search Product" />
        <div className="absolute right-0 h-full p-[3px]">
          <button className="h-full bg-primary px-5 hover:bg-primary_dark">
            <i className="fa-solid fa-magnifying-glass text-white"></i>
          </button>
        </div>
      </div>
    </>
  )
}
