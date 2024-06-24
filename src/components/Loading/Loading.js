import './loading.css'
import image from 'assets/images/logo.png'

export default function Loading() {
  const width = 150
  const height = 20
  const img = height + 10

  const classSpin = 'border-transparent border-t-primary'
  const styleSpin = {
    borderWidth: height,
    borderTopWidth: height,
  }

  return (
    <div className="fixed z-[1000] flex h-screen w-screen items-center justify-center bg-black/50">
      <div className="relative flex aspect-square items-center justify-center" style={{ width: width, padding: img }}>
        <div className="loading absolute h-full w-full">
          <div className={classSpin} style={styleSpin} />
          <div className={classSpin} style={styleSpin} />
          <div className={classSpin} style={styleSpin} />
        </div>
        <div className="z-20 h-full w-full overflow-hidden rounded-full">
          <img className="object-cover" src={image} alt="loading" />
        </div>
      </div>
    </div>
  )
}
