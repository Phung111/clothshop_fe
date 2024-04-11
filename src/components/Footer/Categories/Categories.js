import Part from 'components/Footer/Categories/Part'

export default function Categories() {
  let a1 = ['shirt', 'pant', 'jacket', 'shoe', 'croc']

  return (
    <>
      <div className="flex flex-col gap-4 text-black/50">
        <h4 className="capitalize">Categories</h4>
        <div className="grid grid-cols-5 gap-4 text-xs">
          <Part array={a1}>category</Part>
          <Part array={a1}>category</Part>
          <Part array={a1}>category</Part>
          <Part array={a1}>category</Part>
          <Part array={a1}>category</Part>
          <Part array={a1}>category</Part>
        </div>
      </div>
    </>
  )
}
