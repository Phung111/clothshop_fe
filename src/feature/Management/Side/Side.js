import Logo from 'components/Header/Logo'
import Part from 'feature/Management/Side/Part'
import PartHead from 'feature/Management/Side/PartHead'

export default function Side() {
  return (
    <>
      <div className="sticky top-0 flex h-screen w-[260px] shrink-0 flex-col bg-white shadow-md">
        <div className="px-6 py-4">
          <Logo orange={true} />
        </div>
        <div className="flex flex-col gap-1">
          <Part>
            <i className="fa-solid fa-house" />
            <>dasboard</>
          </Part>
          <PartHead>product</PartHead>
          <Part select={true}>
            <i className="fa-solid fa-shirt"></i>
            <>product</>
          </Part>
          <PartHead>order</PartHead>
          <Part>
            <i className="fa-regular fa-clipboard"></i>
            <>order</>
          </Part>
        </div>
      </div>
    </>
  )
}
