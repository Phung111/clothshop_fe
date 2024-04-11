import Button from 'components/Button'
import { setModalProduct, setIsUpdateProduct } from 'slice/modalSlice'
import { useDispatch, useSelector } from 'react-redux'

export default function Table() {
  let tableClass = 'w-full table-auto border-collapse'
  let thClass = 'border border-slate-600 capitalize px-2'
  let tdClass = 'border border-slate-700 text-center px-2'

  const dispatch = useDispatch()

  const showModalUpdateProduct = () => {
    dispatch(setModalProduct(true))
    dispatch(setIsUpdateProduct(true))
  }

  const data = useSelector((state) => state.productPageSlice)
  const respond = data.respond
  const products = respond.products
  const totalElements = respond.totalElements
  const currentPageNumber = respond.pageNumber + 1
  const totalPages = respond.totalPages
  const numberOfElements = respond.numberOfElements

  const request = data.request
  const latest = request.latest

  return (
    <>
      <table className="w-full table-auto border-collapse">
        <thead className="sticky left-0 top-0 bg-white shadow">
          <tr>
            <th className={`${thClass}`}></th>
            <th className={`${thClass}`}>#</th>
            <th className={`${thClass}`}>name</th>
            <th className={`${thClass}`}>price</th>
            <th className={`${thClass}`}>quantiy</th>
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
          <tr className="border-spacing-4">
            <td className={`${tdClass}`}>
              <div className="relative">
                <div className="aspect-square w-6 ">
                  <Button type={'solid'} className="rounded border border-black/50 !text-black">
                    <i className="fa-solid fa-ellipsis" />
                  </Button>
                </div>
                <div className="absolute left-full top-1/2 !z-50 ml-1 aspect-square h-8 -translate-y-1/2 ">
                  <div className="flex h-full items-center gap-1">
                    <button onClick={showModalUpdateProduct} className={`relative z-20 aspect-square h-full rounded-lg border border-black/20 !bg-yellow-500 hover:!bg-yellow-600`}>
                      <i className="fa-regular fa-pen-to-square" />
                    </button>
                    <button className={`aspect-square h-full rounded-lg border border-black/20 !bg-rose-500 hover:!bg-rose-600`}>
                      <i className="fa-solid fa-trash" />
                    </button>
                  </div>
                </div>
              </div>
            </td>
            <td className={`${tdClass}`}>{1111}</td>
            <td className={`${tdClass}`}>
              <span className="line-clamp-2 !w-[200px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quia facilis nisi debitis saepe tempora iste sit! Iusto aspernatur sit labore, debitis sequi impedit ipsa! Suscipit at molestiae architecto delectus rerum sunt quae omnis libero eos a. Eaque, saepe doloribus, illum possimus tempore perspiciatis doloremque quae nam deserunt, autem ducimus?</span>
            </td>
            <td className={`${tdClass} text-right`}>1.000.000 đ</td>
            <td className={`${tdClass} text-right`}>17794</td>
            <td className={`${tdClass} uppercase`}>shirt</td>
            <td className={`${tdClass} text-right`}>30%</td>
            <td className={`${tdClass}`}>20/05/2024</td>
            <td className={`${tdClass}`}>20/05/2024</td>
            <td className={`${tdClass} uppercase`}>LONG</td>
            <td className={`${tdClass} uppercase`}>CHINA</td>
            <td className={`${tdClass} uppercase`}>SUMMER</td>
            <td className={`${tdClass} uppercase`}>KOREA</td>
            <td className={`${tdClass} uppercase`}>HANOI</td>
          </tr>
          {products.map((item, index) => (
            <tr className="border-spacing-4" key={index}>
              <td className={`${tdClass}`}>
                <div className="relative">
                  <div className="aspect-square w-6 ">
                    <Button type={'solid'} className="rounded border border-black/50 !text-black">
                      <i className="fa-solid fa-ellipsis" />
                    </Button>
                  </div>
                </div>
              </td>
              <td className={`${tdClass}`}>{latest ? totalElements - (currentPageNumber - 1) * numberOfElements - index : (currentPageNumber - 1) * numberOfElements + index + 1}</td>
              <td className={`${tdClass}`}>
                <span className="line-clamp-2 !w-[200px]">{item.name}</span>
              </td>
              <td className={`${tdClass} text-right`}>{window.formatCurrency(item.price)}</td>
              <td className={`${tdClass} text-right`}>{item.quantity}</td>
              <td className={`${tdClass} uppercase`}>{item.ecategory}</td>
              <td className={`${tdClass} text-right`}>{item.discountResDTO ? item.discountResDTO.percent : 0}%</td>
              <td className={`${tdClass}`}>{item.discountResDTO ? item.discountResDTO.dateStart : ''}</td>
              <td className={`${tdClass}`}>{item.discountResDTO ? item.discountResDTO.dateEnd : ''}</td>
              <td className={`${tdClass} uppercase`}>{item.productDetail.etopLength}</td>
              <td className={`${tdClass} uppercase`}>{item.productDetail.ecountry}</td>
              <td className={`${tdClass} uppercase`}>{item.productDetail.eseason}</td>
              <td className={`${tdClass} uppercase`}>{item.productDetail.estyle}</td>
              <td className={`${tdClass} uppercase`}>{item.productDetail.eshipsFrom}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
