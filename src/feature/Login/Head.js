import Logo from 'components/Header/Logo'
import { useLocation } from 'react-router-dom'

export default function Head() {
  const location = useLocation()

  let headingText = ''
  if (location.pathname === '/register') {
    headingText = 'Sign Up'
  } else if (location.pathname === '/login') {
    headingText = 'Login'
  }

  return (
    <>
      <div className="container h-[84px]">
        <div className="flex h-full items-center gap-4">
          <Logo orange={true} />
          <h1 className="mt-1 text-[24px] font-normal">{headingText}</h1>
        </div>
      </div>
    </>
  )
}
