import Button from 'components/Button'
import { useNavigate } from 'react-router-dom'
export default function NotFound() {
  const navigate = useNavigate()

  const goBack = () => navigate(-1)

  return (
    <>
      <div className="container">
        <div className="flex h-screen justify-center gap-10 gap-10">
          <div className="flex flex-col justify-center">
            <div className="text-[100px] font-black leading-none text-primary">401</div>
            <div className="text-[80px] font-black">Not Found</div>
            <div className="text-[60px] font-extrabold">Error</div>
            <div className="mt-8 flex gap-2">
              <div className="h-[50px] w-[250px]" onClick={goBack}>
                <Button type={'outline'}>Go Back</Button>
              </div>
            </div>
          </div>
          <div className="flex shrink-0 items-center justify-center">
            <div className="aspect-square w-[700px]">
              <img className="h-full w-full object-contain" src={require(`assets/images/logo.png`)} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
