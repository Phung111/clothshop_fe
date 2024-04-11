import { useDispatch, useSelector } from 'react-redux'
import { setModalProduct, setIsCreateProduct } from 'slice/modalSlice'

export default function HeadAdd() {
  const btnManager = 'flex h-full items-center justify-center gap-2 rounded-xl border border-black/20 p-2 capitalize'

  const dispatch = useDispatch()

  const showModalCreateProduct = () => {
    dispatch(setModalProduct(true))
    dispatch(setIsCreateProduct(true))
  }
  return (
    <>
      <div className="flex h-10 items-center justify-between">
        <p className="text-xl font-medium capitalize text-black/50">Products</p>
        <div className="flex gap-3">
          {/* <button className={`${btnManager} !bg-blue/50 hover:!bg-blue`}>
            <i className="fa-solid fa-share-nodes" />
            share
          </button> */}
          <button onClick={showModalCreateProduct} className={`${btnManager} !bg-green-500/50 hover:!bg-green-500`}>
            <i className="fa-solid fa-plus" />
            add
          </button>
        </div>
      </div>
    </>
  )
}
