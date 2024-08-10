import Part from 'components/Layout/LayoutAccount/Part'
import { useSelector } from 'react-redux'

export default function Side() {
  const authSlice = useSelector((state) => state.authSlice)
  const customer = authSlice.customer

  return (
    <>
      <div className="flex flex-col gap-5 py-5">
        <div className="flex gap-3">
          <div className="aspect-square h-[50px] rounded-full border-[0.5px] border-black/20">
            <img src={require(`assets/images/avablank.png`)} alt="ava blank" />
          </div>
          <div className="flex grow flex-col gap-1">
            <h3 className="line-clamp-1 text-sm">{customer.name}</h3>
            <button className="flex items-center gap-2 text-black/50 hover:text-black/70">
              <i className="fa-solid fa-pen text-sm" />
              <p className="capitalize">edit profile</p>
            </button>
          </div>
        </div>
        <div className="px-5">
          <div className="line"></div>
        </div>
        <div className="flex flex-col gap-2">
          <Part link="">
            <i className="fa-regular fa-user" />
            <>my account</>
          </Part>
          <Part link="addresses">
            <i className="fa-solid fa-location-dot" />
            <>my addresses</>
          </Part>
          <Part link="vouchers">
            <i className="fa-solid fa-ticket" />
            <>my voucher</>
          </Part>
          <Part link="purchase">
            <i className="fa-solid fa-cart-shopping" />
            <>my purchase</>
          </Part>
        </div>
      </div>
    </>
  )
}
