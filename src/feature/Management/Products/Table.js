import { setModalProduct, setIsUpdateProduct } from 'slice/modalSlice'
import { useDispatch, useSelector } from 'react-redux'
import { getProductById } from 'slice/productSlice'
import { CLOUDINARY } from 'app/global'
import NoData from 'components/NoData'
import { toast } from 'react-toastify'

export default function Table() {
  let thClass = 'border border-slate-600 capitalize px-2 whitespace-nowrap py-2'
  let tdClass = 'border border-slate-700 text-center px-2'

  const data = useSelector((state) => state.productPageSlice)
  const respond = data.respond
  const products = respond.products
  const totalElements = respond.totalElements
  const pageNumber = respond.pageNumber
  const size = respond.size

  const noData = data.noData

  const request = data.request
  const latest = request.latest

  const dispatch = useDispatch()

  const handleEdit = (id) => {
    dispatch(getProductById(id))
      .then(() => {
        dispatch(setModalProduct(true))
        dispatch(setIsUpdateProduct())
      })
      .catch((error) => {
        toast.error(`Can't find product: ${id}`)
      })
      .finally(() => {})
  }

  return (
    <>
      {noData && <NoData />}
      {!noData && products && (
        <table className="w-full table-auto border-collapse">
          <thead className="sticky left-0 top-0 bg-white shadow">
            <tr className="bg-primary/50">
              <th className={`${thClass}`}>#</th>
              <th className={`${thClass}`}>image</th>
              <th className={`${thClass}`}>name</th>
              <th className={`${thClass}`}>price</th>
              <th className={`${thClass}`}>quantiy</th>
              <th className={`${thClass}`}>sold</th>
              <th className={`${thClass}`}>category</th>
              <th className={`${thClass}`}>discount</th>
              <th className={`${thClass}`}>day start</th>
              <th className={`${thClass}`}>day end</th>
              <th className={`${thClass}`}>top length</th>
              <th className={`${thClass}`}>country</th>
              <th className={`${thClass}`}>season</th>
              <th className={`${thClass}`}>style</th>
              <th className={`${thClass}`}>ships from</th>
            </tr>
          </thead>
          <tbody>
            {products &&
              products.map((item, index) => (
                <tr className={`border-spacing-4 cursor-pointer hover:bg-black/30 ${index % 2 !== 0 && 'bg-primary/20'}`} key={index} onClick={() => handleEdit(item.id)}>
                  <td className={`${tdClass}`}>{latest === false || latest === null ? pageNumber * size + index + 1 : totalElements - pageNumber * size - index}</td>
                  <td className={`${tdClass}`}>
                    <div className="flex h-full w-full items-center justify-center py-2">
                      <div className="aspect-square w-20 ">
                        <img className="h-full w-full object-cover" src={CLOUDINARY.url + '/' + CLOUDINARY.SCALE_IMAGE_100_100 + '/' + item.images[0].fileFolder + '/' + item.images[0].fileName} alt="product" />
                      </div>
                    </div>
                  </td>
                  <td className={`${tdClass}`}>
                    <span className="line-clamp-2 !w-[200px]">{item.name}</span>
                  </td>
                  <td className={`${tdClass} whitespace-nowrap text-right`}>{window.formatCurrency(item.price)}</td>
                  <td className={`${tdClass} text-right`}>{item.quantity}</td>
                  <td className={`${tdClass} text-right`}>{item.sold}</td>
                  <td className={`${tdClass} uppercase`}>{item.category}</td>
                  <td className={`${tdClass} text-right`}>{item.discountResDTO ? item.discountResDTO.percent : 0}%</td>
                  <td className={`${tdClass} whitespace-nowrap`}>{item.discountResDTO ? window.formatDate(item.discountResDTO.dateStart) : ''}</td>
                  <td className={`${tdClass} whitespace-nowrap`}>{item.discountResDTO ? window.formatDate(item.discountResDTO.dateEnd) : ''}</td>
                  <td className={`${tdClass} uppercase`}>{item.productDetail.topLength}</td>
                  <td className={`${tdClass} uppercase`}>{item.productDetail.country}</td>
                  <td className={`${tdClass} uppercase`}>{item.productDetail.season}</td>
                  <td className={`${tdClass} uppercase`}>{item.productDetail.style}</td>
                  <td className={`${tdClass} uppercase`}>{item.productDetail.shipsFrom}</td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </>
  )
}
