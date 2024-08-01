import { useEffect, useState } from 'react'
import Logo from 'components/Header/Logo'
import Part from './Part'
import PartHead from './PartHead'
import { useLocation } from 'react-router-dom'

export default function Side() {
  const location = useLocation()
  const [selected, setSelected] = useState('')

  useEffect(() => {
    setSelected(location.pathname)
  }, [location.pathname])

  return (
    <>
      <div className="sticky top-0 flex h-screen w-[260px] shrink-0 flex-col bg-white shadow-md">
        <div className="px-6 py-4">
          <Logo orange={true} />
        </div>
        <div className="flex flex-col gap-1">
          <Part href={'/management/dashboard'} select={selected === '/management/dashboard'}>
            <i className="fa-solid fa-house" />
            <>dashboard</>
          </Part>

          <PartHead>product</PartHead>
          <Part href={'/management/products'} select={selected === '/management/products'}>
            <i className="fa-solid fa-shirt"></i>
            <>product</>
          </Part>

          <PartHead>order</PartHead>
          <Part href={'/management/orders'} select={selected === '/management/orders'}>
            <i className="fa-regular fa-clipboard"></i>
            <>order</>
          </Part>

          <PartHead>banner</PartHead>
          <Part href={'/management/banners'} select={selected === '/management/banners'}>
            <i className="fa-regular fa-clipboard"></i>
            <>banner</>
          </Part>

          <PartHead>voucher</PartHead>
          <Part href={'/management/vouchers'} select={selected === '/management/vouchers'}>
            <i className="fa-regular fa-clipboard"></i>
            <>voucher</>
          </Part>
        </div>
      </div>
    </>
  )
}
