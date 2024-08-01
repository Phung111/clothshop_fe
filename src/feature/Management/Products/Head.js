import { useDispatch } from 'react-redux'
import { setModalProduct, setIsCreateProduct } from 'slice/modalSlice'
import { emptyProduct } from 'slice/productSlice'

export default function Head() {
  const btnManager = 'flex h-full items-center justify-center gap-2 rounded-xl border border-black/20 p-2 capitalize'

  const dispatch = useDispatch()

  const showModalCreateProduct = () => {
    Promise.all([dispatch(setModalProduct(true)), dispatch(emptyProduct())])
      .then(() => {
        dispatch(setIsCreateProduct(true))
      })
      .catch((error) => {})
      .finally(() => {})
  }

  return (
    <>
      <div className="flex h-10 items-center justify-between">
        <p className="text-xl font-medium capitalize text-black/50">Products</p>
        <div className="flex gap-3">
          <button onClick={showModalCreateProduct} className={`${btnManager} !bg-green-500/50 hover:!bg-green-500`}>
            <i className="fa-solid fa-plus" />
            add
          </button>
        </div>
      </div>
    </>
  )
}
