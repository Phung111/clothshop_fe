export default function Part({ children }) {
  return (
    <>
      <div className="flex items-center bg-white px-5 py-4">
        <div className="flex w-[50px] justify-center">
          <input type="checkbox" name="" id="" className="aspect-square w-4 cursor-pointer accent-primary" />
        </div>
        <div className="flex w-[500px] items-center ">{children[0]}</div>
        <div className="flex grow items-center justify-center">{children[1]}</div>
        <div className="flex w-[150px] items-center justify-center">{children[2]}</div>
        <div className="flex w-[120px] items-center justify-center">{children[3]}</div>
        <div className="flex w-[120px] items-center justify-center">{children[4]}</div>
      </div>
    </>
  )
}
